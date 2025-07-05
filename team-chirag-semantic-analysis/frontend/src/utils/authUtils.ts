// src/utils/authUtils.ts
import type { UserProfile } from '../types/auth';

/**
 * Checks if the current user has completed onboarding
 * Returns true if user has both userInfo and knownConcepts data
 */
export const hasCompletedOnboarding = (): boolean => {
  try {
    // Check localStorage flag first (for backwards compatibility)
    const onboardingFlag = localStorage.getItem('onboardingCompleted');
    if (onboardingFlag === 'true') {
      return true;
    }

    // Check user profile data
    const userProfileStr = localStorage.getItem('userProfile');
    if (!userProfileStr) {
      return false;
    }

    const userProfile: UserProfile = JSON.parse(userProfileStr);
    
    // User has completed onboarding if they have both userInfo and knownConcepts with topics
    const hasUserInfo = userProfile.userInfo && 
      userProfile.userInfo.programmingExperience && 
      userProfile.userInfo.dsaExperience && 
      userProfile.userInfo.preferredPace;

    const hasKnownConcepts = userProfile.knownConcepts && 
      userProfile.knownConcepts.topics && 
      userProfile.knownConcepts.topics.length > 0;

    return !!(hasUserInfo && hasKnownConcepts);
  } catch (error) {
    console.error('Error checking onboarding status:', error);
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
  } catch (error) {
    console.error('Error getting user profile:', error);
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
