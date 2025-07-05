// src/utils/auth.ts
export const logout = (navigate?: (path: string, options?: { replace?: boolean }) => void) => {
  try {
    // Clear all localStorage data
    localStorage.clear();
    
    // You could also selectively clear only user-related data:
    // localStorage.removeItem('userProfile');
    // localStorage.removeItem('token');
    // localStorage.removeItem('onboardingComplete');
    // localStorage.removeItem('chatHistory');
    
    // Clear any session storage as well
    sessionStorage.clear();
    
    // Navigate to login page if navigate function is provided
    if (navigate) {
      navigate("/login", { replace: true });
    } else {
      // Fallback: redirect using window.location
      window.location.href = "/login";
    }
  } catch {
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
  } catch {
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
  } catch {
    return null;
  }
};

export const clearUserData = () => {
  try {
    localStorage.removeItem('userProfile');
    localStorage.removeItem('token');
    localStorage.removeItem('onboardingComplete');
  } catch {
    // Error clearing user data, continue silently
  }
};
