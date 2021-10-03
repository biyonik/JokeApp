class JokeApi {
    constructor() {
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosInstance = axios.create({
            baseURL: this.baseURL
        });
    }

    async getRandomJoke() {
        try {
            const jokeResponse = await this.axiosInstance.get('/jokes/random');
            return jokeResponse.data.value;
        } catch (err) {
            console.error(err);
        }
    }
}

export default async function getJoke() {
    return await new JokeApi().getRandomJoke();
}
