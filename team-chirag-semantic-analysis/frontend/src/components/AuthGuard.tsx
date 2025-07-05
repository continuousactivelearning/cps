import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<'checking' | 'authenticated' | 'unauthenticated'>('checking');
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check for user data in localStorage (our authentication method)
        const userProfile = localStorage.getItem('userProfile');
        
        if (!userProfile) {
          console.log('🔒 No user profile found in localStorage - redirecting to login');
          setAuthStatus('unauthenticated');
          return;
        }

        // Parse and validate user data
        let userData;
        try {
          userData = JSON.parse(userProfile);
        } catch {
          console.error('🔒 Invalid user data in localStorage - redirecting to login');
          localStorage.removeItem('userProfile'); // Clean up invalid data
          setAuthStatus('unauthenticated');
          return;
        }

        // Check if user has required fields (email is essential)
        if (!userData.email) {
          console.log('🔒 Incomplete user data (missing email) - redirecting to login');
          localStorage.removeItem('userProfile'); // Clean up incomplete data
          setAuthStatus('unauthenticated');
          return;
        }

        // Optional: Verify user still exists in backend
        try {
          const response = await fetch(`http://localhost:5000/auth/verify?email=${encodeURIComponent(userData.email)}`);
          if (!response.ok) {
            console.log('🔒 User verification failed - user may no longer exist');
            localStorage.removeItem('userProfile'); // Clean up data for non-existent user
            setAuthStatus('unauthenticated');
            return;
          }
        } catch {
          console.warn('⚠️ Could not verify user with backend, but allowing access based on localStorage');
          // Don't fail authentication if backend is temporarily unavailable
        }

        console.log('✅ User authenticated:', userData.email);
        setAuthStatus('authenticated');
      } catch (error) {
        console.error('❌ Auth check failed:', error);
        setAuthStatus('unauthenticated');
      }
    };

    checkAuth();
  }, []);

  if (authStatus === 'checking') {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-lg text-gray-700">Checking authentication...</div>
        </div>
      </div>
    );
  }

  if (authStatus === 'unauthenticated') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
