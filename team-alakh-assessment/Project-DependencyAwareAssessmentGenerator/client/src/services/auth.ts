// src/services/auth.ts
import api from './api';

export const fetchUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const res = await api.get('/api/user/passed', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.email || null;
  } catch (err) {
    console.error('Failed to fetch user', err);
    return null;
  }
};
