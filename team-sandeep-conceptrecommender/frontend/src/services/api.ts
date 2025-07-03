import axios from 'axios';

const API_URL = 'https://dsa-lpr.onrender.com/api';
const GNN_API_URL = 'http://localhost:8501';

// User API
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export async function register({ name, email, password, securityQuestion, securityAnswer }: { name: string; email: string; password: string; securityQuestion?: string; securityAnswer?: string }) {
  console.log('Register API payload:', { name, email, password, securityQuestion, securityAnswer });
  const res = await fetch('https://dsa-lpr.onrender.com/api/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, securityQuestion, securityAnswer })
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
}

// Topic API
export const getTopics = async () => {
  try {
    const response = await axios.get(`${API_URL}/topics`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching topics:', error);
    throw error;
  }
};

export const updateTopicProgress = async (topicName: string, progress: number) => {
  try {
    const response = await axios.put(
      `${API_URL}/topics/${encodeURIComponent(topicName)}/progress`,
      { progress },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating topic progress:', error);
    throw error;
  }
};

export const saveKnownTopics = async (topicNames: string[]) => {
  try {
    const response = await axios.post(
      `${API_URL}/user-topics/select`,
      { topicNames },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error saving known topics:', error);
    throw error;
  }
};

export const startLearningTopic = async (topicName: string) => {
  try {
    const response = await axios.post(
      `${API_URL}/user-topics/start`,
      { topicName },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error starting topic:', error);
    throw error;
  }
};

// Exam API
export const submitExamResult = async (examData: {
  topicName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeTaken: number;
}) => {
  try {
    const response = await axios.post(
      `${API_URL}/exam-results/update`,
      examData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error submitting exam result:', error);
    throw error;
  }
};

export const getExamResults = async (topicName: string) => {
  try {
    const response = await axios.get(`${API_URL}/exam-results/${encodeURIComponent(topicName)}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching exam results:', error);
    throw error;
  }
};

// Recommendation API
export const getRecommendations = async (userEmail: string, knownTopics: string[]) => {
  try {
    const response = await axios.post(`${API_URL}/recommendations`, {
      userEmail,
      knownTopics
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};

export const refreshRecommendations = async (userEmail: string, knownTopics: string[]) => {
  try {
    const response = await axios.post(`${API_URL}/recommendations/refresh`, {
      userEmail,
      knownTopics
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error refreshing recommendations:', error);
    throw error;
  }
};

// GNN API
export const getGNNRecommendations = async (knownTopics: string[]) => {
  try {
    const response = await axios.post(`${GNN_API_URL}/recommend`, {
      known_topics: knownTopics
    });
    return response.data;
  } catch (error) {
    console.error('Error getting GNN recommendations:', error);
    throw error;
  }
};

// Quiz API
export const getTopicQuiz = async (topicName: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/quizzes/topic/${encodeURIComponent(topicName)}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching topic quiz:', error);
    throw error;
  }
};

export const submitQuiz = async (topicName: string, answers: string[]) => {
  try {
    const response = await axios.post(
      `${API_URL}/quizzes/topic/${encodeURIComponent(topicName)}/submit`,
      { answers },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error submitting quiz:', error);
    throw error;
  }
};

export const getRandomQuizQuestions = async (topic: string, count: number = 10) => {
  try {
    const response = await axios.get(`${API_URL}/quizzes/random`, {
      params: { topic, count },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data.questions;
  } catch (error) {
    console.error('Error fetching random quiz questions:', error);
    throw error;
  }
};

export const getUserExamResults = async () => {
  try {
    const response = await axios.get(`${API_URL}/exam-results/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user exam results:', error);
    throw error;
  }
};
