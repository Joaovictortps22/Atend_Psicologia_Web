import Axios from 'axios';

const API = Axios.create({
    baseURL: 'http://localhost:5001/api'
});

export default API;