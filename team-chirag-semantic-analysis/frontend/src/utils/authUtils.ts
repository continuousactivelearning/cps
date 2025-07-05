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
      console.log('❌ No user profile found in localStorage');
      return false;
    }

    const userProfile: UserProfile = JSON.parse(userProfileStr);
    console.log('🔍 Checking onboarding status for user:', {
      email: userProfile.email,
      hasCompletedOnboarding: userProfile.hasCompletedOnboarding,
      isFirstTime: userProfile.isFirstTime
    });
    
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
    console.log('🔍 Fallback onboarding check result:', result);
    return result;
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
