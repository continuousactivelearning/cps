import axios from "axios";

const APP_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';


const api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export interface Credentials {
  username: string;
  password: string;
  role: 'user' | 'admin';
}

export const login = (credentials: Credentials) => api.post('/login', credentials);
export const signup = (credentials: Credentials) => api.post('/register', credentials);

export default api;
