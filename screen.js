import getJoke from './joke.api.js';
import getImage from './unsplash.api.js';

class Screen {
    constructor() {
        this.random_joke_button = document.querySelector('#random_joke_button');
        this.random_joke_button.addEventListener('click', this.getRandomJoke.bind(this));
    }

    async getRandomJoke() {
        const randomImage = await getImage();
        const randomJoke = await getJoke();
        this.printToScreen(randomImage, randomJoke);
    }

    printToScreen(image, joke) {
        document.querySelector('.result').innerHTML =
            `
            <div class="card">
                <div class="card-image">
                    <figure class="image is-16by9">
                        <img src="${image}" id="random_photo" alt="Placeholder image">
                    </figure>
                </div>

                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4 has-text-danger" id="joke_text">${joke}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
    }
}

export default function bootstrap() {
    const screen = new Screen();
}
