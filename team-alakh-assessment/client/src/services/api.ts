import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://assessment-o61q.onrender.com' : 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// New API helpers
export const getProfile = (token: string) => api.get('/api/user/profile', { headers: { Authorization: `Bearer ${token}` } });
export const updateProfile = (token: string, data: { name?: string; picture?: string }) => api.put('/api/user/profile', data, { headers: { Authorization: `Bearer ${token}` } });
export const getQuizHistory = (token: string) => api.get('/api/user/quiz-history', { headers: { Authorization: `Bearer ${token}` } });
export const getAchievements = (token: string) => api.get('/api/user/achievements', { headers: { Authorization: `Bearer ${token}` } });
export const getStats = (token: string) => api.get('/api/user/stats', { headers: { Authorization: `Bearer ${token}` } });
export const getRecommendations = (token: string) => api.get('/api/user/recommendations', { headers: { Authorization: `Bearer ${token}` } });
export const getTopics = () => api.get('/api/topics');
export const addToSearchHistory = (token: string, topic: string) => api.post('/api/user/search-history', { topic }, { headers: { Authorization: `Bearer ${token}` } });
export const getSearchHistory = (token: string) => api.get('/api/user/search-history', { headers: { Authorization: `Bearer ${token}` } });
export const getPrerequisites = (token: string, topic: string) => api.get(`/api/prerequisite/${topic}`, { headers: { Authorization: `Bearer ${token}` } });
export const getAssessmentHistory = (token: string) => api.get('/api/user/assessment-history', { headers: { Authorization: `Bearer ${token}` } });
export const getAssessmentEvaluation = (token: string, topic: string) =>
  api.get(`/api/question/assessment/evaluate/${encodeURIComponent(topic)}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
export const getActivityCalendar = (token: string) =>
  api.get('/api/user/activity-calendar', { headers: { Authorization: `Bearer ${token}` } });

export default api;