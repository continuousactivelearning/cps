// src/utils/authUtils.ts
import type { UserProfile } from '../types/auth';

/**
 * Checks if the current user has completed onboarding
 * Returns true if user has hasCompletedOnboarding flag set to true
 */
export const hasCompletedOnboarding = (): boolean => {
  try {
    // Check user profile data from localStorage
    const userProfileStr = localStorage.getItem('userProfile');
    if (!userProfileStr) {
      return false;
    }

    const userProfile: UserProfile = JSON.parse(userProfileStr);
    
    // Check the hasCompletedOnboarding flag from backend
    if (userProfile.hasCompletedOnboarding !== undefined) {
      return userProfile.hasCompletedOnboarding === true;
    }

    // Fallback: Check localStorage flag (for backwards compatibility)
    const onboardingFlag = localStorage.getItem('onboardingCompleted');
    if (onboardingFlag === 'true') {
      return true;
    }

    // Fallback: Check if user has both userInfo and knownConcepts data
    const hasUserInfo = userProfile.userInfo && 
      userProfile.userInfo.programmingExperience && 
      userProfile.userInfo.dsaExperience && 
      userProfile.userInfo.preferredPace;

    const hasKnownConcepts = userProfile.knownConcepts && 
      userProfile.knownConcepts.topics && 
      userProfile.knownConcepts.topics.length > 0;

    const result = !!(hasUserInfo && hasKnownConcepts);
    return result;
  } catch {
    return false;
  }
};

/**
 * Checks if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};

/**
 * Gets the current user profile from localStorage
 */
export const getCurrentUserProfile = (): UserProfile | null => {
  try {
    const userProfileStr = localStorage.getItem('userProfile');
    return userProfileStr ? JSON.parse(userProfileStr) : null;
  } catch {
    return null;
  }
};

/**
 * Clears authentication data from localStorage
 */
export const clearAuthData = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('userProfile');
  localStorage.removeItem('onboardingCompleted');
};
