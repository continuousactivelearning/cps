import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interfaces for types
export interface AnalyzeResponse {
  video?: {
    title: string;
    url: string;
  };
  concepts: {
    name: string;
    confidence: number;
  }[];
}

export interface FeedbackData {
  userId: string;
  query: string;
  feedback: string;
}

export interface QueryHistoryItem {
  query: string;
  timestamp: string;
  result?: AnalyzeResponse;
}

// Analyze student query
export const analyzeQuery = async (query: string): Promise<AnalyzeResponse> => {
  const response = await api.post<AnalyzeResponse>('/api/analyze', { query });
  return response.data;
};

// Submit user feedback
export const submitFeedback = async (feedbackData: FeedbackData): Promise<{ success: boolean; message: string }> => {
  const response = await api.post('/api/feedback', feedbackData);
  return response.data;
};

// Get query history for a specific user
export const getQueryHistory = async (userId: string): Promise<QueryHistoryItem[]> => {
  const response = await api.get<QueryHistoryItem[]>(`/api/history/${userId}`);
  return response.data;
};
