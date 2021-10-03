const API_KEY = '<<YOUR_API_KEY>>';

class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientId = `Client-ID ${API_KEY}`;
        this.axiosInstance = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientId
            },
            params: {
                query: 'animal'
            }
        });
    }

    async getRandomPhoto() {
        try {
            const imageResponse = await this.axiosInstance.get('/photos/random');
            return imageResponse.data.urls.regular;
        } catch (err) {
            console.error(err);
        }
    }
}

export default async function getImage() {
    return await new UnsplashApi().getRandomPhoto();
}
