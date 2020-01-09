import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bg-burger-app.firebaseio.com/'
});

export default instance;