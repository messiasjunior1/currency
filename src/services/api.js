import axios from 'axios';

const api = axios.create({
    baseURL:'currency-converter5.p.rapidapi.com'
})

export default api;