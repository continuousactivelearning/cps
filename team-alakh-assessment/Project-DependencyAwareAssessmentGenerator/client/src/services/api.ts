import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Change to deployed URL in production
});

export default api;
