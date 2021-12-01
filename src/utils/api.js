import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL || 'https://house9.herokuapp.com/api/v1/'
});

export default api;