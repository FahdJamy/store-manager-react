import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://store-manager-challenge-3.herokuapp.com/api/v2/'
});

export default instance;
