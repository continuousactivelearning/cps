// src/services/authService.ts
import axios from 'axios';
import api from './api';
const fresh = axios.create({
  baseURL: 'https://cps-rnku.onrender.com/api',
});


export const login = async (data: { email: string; password: string }) => {
  const response = await api.post('/auth/login', data);
  console.log("Login response:", response.data);
  return response.data;
};

export const signup = async (data: { name: string; email: string; role: string, password: string; confirmPassword: string }) => {
  const response = await api.post('/auth/signup', data);
  return response.data;
};

export const forgotPassword = async ( data: {email: string})=>{
  const response= await fresh.post('/auth/request-reset',data);
  return response.data;
}

export const resetPassword = async ( data: {token: string,newPassword:string})=>{
  const response= await fresh.post('/auth/reset-password',data);
  return response.data;
} 

