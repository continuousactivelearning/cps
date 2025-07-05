// src/utils/auth.ts
export const logout = (navigate?: (path: string, options?: { replace?: boolean }) => void) => {
  console.log('🔐 Performing logout...');
  
  try {
    // Clear all localStorage data
    localStorage.clear();
    
    // You could also selectively clear only user-related data:
    // localStorage.removeItem('userProfile');
    // localStorage.removeItem('token');
    // localStorage.removeItem('onboardingComplete');
    // localStorage.removeItem('chatHistory');
    
    console.log('✅ User data cleared from localStorage');
    
    // Clear any session storage as well
    sessionStorage.clear();
    
    // Navigate to login page if navigate function is provided
    if (navigate) {
      navigate("/login", { replace: true });
    } else {
      // Fallback: redirect using window.location
      window.location.href = "/login";
    }
    
    console.log('✅ Logout completed successfully');
  } catch (error) {
    console.error('❌ Error during logout:', error);
    // Even if there's an error, try to navigate to login
    if (navigate) {
      navigate("/login", { replace: true });
    } else {
      window.location.href = "/login";
    }
  }
};

export const isAuthenticated = (): boolean => {
  try {
    const userProfile = localStorage.getItem('userProfile');
    if (!userProfile) {
      return false;
    }
    
    const userData = JSON.parse(userProfile);
    return !!(userData && userData.email);
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

export const getUserFromStorage = () => {
  try {
    const userProfile = localStorage.getItem('userProfile');
    if (!userProfile) {
      return null;
    }
    
    return JSON.parse(userProfile);
  } catch (error) {
    console.error('Error getting user from storage:', error);
    return null;
  }
};

export const clearUserData = () => {
  try {
    localStorage.removeItem('userProfile');
    localStorage.removeItem('token');
    localStorage.removeItem('onboardingComplete');
    console.log('✅ User data cleared from storage');
  } catch (error) {
    console.error('❌ Error clearing user data:', error);
  }
};
