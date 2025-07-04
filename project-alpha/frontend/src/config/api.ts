// API Configuration for different environments
const isDevelopment = import.meta.env.DEV;

// Base URL configuration
export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:5000' 
  : 'https://ssmp-backend.onrender.com';

// WebSocket URL configuration
export const WS_BASE_URL = isDevelopment 
  ? 'http://localhost:5000' 
  : 'https://ssmp-backend.onrender.com';

// API endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  PROFILE: `${API_BASE_URL}/api/auth/profile`,
  USERS: `${API_BASE_URL}/api/auth/users`,
  CHECK_ADMIN: `${API_BASE_URL}/api/auth/check-admin`,
  VERIFY_TOKEN: `${API_BASE_URL}/api/auth/verify-token`,
  UPDATE_USER: (userId: string) => `${API_BASE_URL}/api/auth/users/${userId}`,
  DELETE_USER: (userId: string) => `${API_BASE_URL}/api/auth/users/${userId}`,
  
  // Chat endpoints
  CHAT: `${API_BASE_URL}/api/chat`,
  CHAT_MESSAGES: (chatId: string) => `${API_BASE_URL}/api/chat/${chatId}/messages`,
  CHAT_CLOSE: (chatId: string) => `${API_BASE_URL}/api/chat/${chatId}/close`,
  
  // Learning path endpoints
  LEARNING_PATH: `${API_BASE_URL}/api/learning-path`,
  
  // Prerequisites endpoints
  PREREQUISITES: `${API_BASE_URL}/api/prerequisites`,
  PREREQUISITES_MCQ: `${API_BASE_URL}/api/prerequisites/mcq`,
  
  // Quiz endpoints
  QUIZ_ATTEMPTS: `${API_BASE_URL}/api/quiz-attempts`,
  
  // Notifications endpoints
  NOTIFICATIONS: `${API_BASE_URL}/api/notifications`,
  NOTIFICATIONS_UNREAD_COUNT: `${API_BASE_URL}/api/notifications/unread-count`,
  NOTIFICATION_READ: (notificationId: string) => `${API_BASE_URL}/api/notifications/${notificationId}/read`,
  NOTIFICATIONS_READ_ALL: `${API_BASE_URL}/api/notifications/read-all`,
  
  // Topic summary endpoint
  TOPIC_SUMMARY: `${API_BASE_URL}/api/topic-summary`,
};

// Helper function to get full API URL
export const getApiUrl = (endpoint: string) => `${API_BASE_URL}${endpoint}`;

// Environment info for debugging
export const ENV_INFO = {
  isDevelopment,
  apiBaseUrl: API_BASE_URL,
  wsBaseUrl: WS_BASE_URL,
}; 