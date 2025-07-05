// src/services/userService.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export interface UserProfile {
  _id?: string;
  googleId?: string;
  name?: string;
  email?: string;
  avatar?: string;
  userInfo?: {
    programmingExperience?: string;
    knownLanguages?: string[];
    dsaExperience?: string;
    preferredPace?: string;
  };
  knownConcepts?: {
    topics?: Array<{
      id: string;
      name: string;
      type: string;
      subtopics?: Array<{
        id: string;
        name: string;
        type: string;
      }>;
    }>;
    totalTopics?: number;
    totalSubtopics?: number;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  message?: string;
  user?: T;
  error?: string;
}

class UserService {
  async getUserProfile(email: string): Promise<UserProfile | null> {
    const url = `${API_BASE_URL}/auth/profile?email=${encodeURIComponent(email)}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<UserProfile> = await response.json();
    return data.user || null;
  }

  async updateUserOnboarding(
    email: string, 
    userInfo: UserProfile['userInfo'], 
    knownConcepts: UserProfile['knownConcepts']
  ): Promise<UserProfile | null> {
    const response = await fetch(`${API_BASE_URL}/auth/onboarding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        userInfo,
        knownConcepts,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<UserProfile> = await response.json();
    return data.user || null;
  }

  async updateUserAvatar(email: string, avatar: string): Promise<UserProfile | null> {
    const response = await fetch(`${API_BASE_URL}/auth/avatar`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        avatar,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<UserProfile> = await response.json();
    return data.user || null;
  }
}

export const userService = new UserService();
