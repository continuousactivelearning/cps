// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cps-rnku.onrender.com/api',
});

// Add a request interceptor to include the token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;