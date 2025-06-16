import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

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
  try {
    const response = await api.post<AnalyzeResponse>('/api/analyze', { query });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Submit user feedback
export const submitFeedback = async (feedbackData: FeedbackData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await api.post('/api/feedback', feedbackData);
    return response.data;
  } catch (error) {
    console.error('Feedback submission error:', error);
    throw error;
  }
};

// Get query history for a specific user
export const getQueryHistory = async (userId: string): Promise<QueryHistoryItem[]> => {
  try {
    const response = await api.get<QueryHistoryItem[]>(`/api/history/${userId}`);
    return response.data;
  } catch (error) {
    console.error('History fetch error:', error);
    throw error;
  }
};
