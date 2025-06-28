// services/api.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; 

export const apiService = {
  

  submitConcern: async (payload: {
  topicId: string;
  topicName: string;
  pdf: File;
  message: string;
  status: string;
}) => {

  const token = localStorage.getItem('token');

  const formData = new FormData();
  formData.append('topicId', payload.topicId);
  formData.append('topicName', payload.topicName);
  formData.append('message', payload.message);
  formData.append('status', payload.status);
  formData.append('pdf', payload.pdf); // Must be named 'pdf' to match multer

  const res = await axios.post(`${BASE_URL}/student/submit-concern`, formData, {
    headers: { 'Authorization': `Bearer ${token}`,'Content-Type': 'multipart/form-data' },
  });

  return res.data;
},
}
