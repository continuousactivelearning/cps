import axios from "axios";
const APP_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: APP_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
})

export interface SignUpCredentials {
  username: string,
  password: string,
  role: string | undefined,
};


export interface LoginCredentials {
  username: string,
  password: string
};
export const login = (credentials: LoginCredentials) => api.post('/login', credentials);
export const signup = (credentials: SignUpCredentials) => api.post('/register', credentials);
export default api;
