// src/services/userService.ts
const API_BASE_URL = 'http://localhost:5000';

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
    try {
      const url = `${API_BASE_URL}/auth/profile?email=${encodeURIComponent(email)}`;
      console.log('🌐 Making API request to:', url);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('📡 API Response status:', response.status);
      console.log('📡 API Response ok:', response.ok);

      if (!response.ok) {
        if (response.status === 404) {
          console.warn('⚠️ User not found in database');
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse<UserProfile> = await response.json();
      console.log('📊 Raw API response data:', data);
      console.log('👤 User data from API:', data.user);
      return data.user || null;
    } catch (error) {
      console.error('❌ Error fetching user profile:', error);
      throw error;
    }
  }

  async updateUserOnboarding(
    email: string, 
    userInfo: UserProfile['userInfo'], 
    knownConcepts: UserProfile['knownConcepts']
  ): Promise<UserProfile | null> {
    try {
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
    } catch (error) {
      console.error('Error updating user onboarding:', error);
      throw error;
    }
  }

  async updateUserAvatar(email: string, avatar: string): Promise<UserProfile | null> {
    try {
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
    } catch (error) {
      console.error('Error updating user avatar:', error);
      throw error;
    }
  }
}

export const userService = new UserService();
