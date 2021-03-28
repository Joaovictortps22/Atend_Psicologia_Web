import Axios from 'axios';

const API = Axios.create({
    baseURL: 'https://localhost:5001/api'
});

export default API;