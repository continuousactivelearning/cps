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
          setAuthStatus('unauthenticated');
          return;
        }

        // Parse and validate user data
        let userData;
        try {
          userData = JSON.parse(userProfile);
        } catch {
          localStorage.removeItem('userProfile'); // Clean up invalid data
          setAuthStatus('unauthenticated');
          return;
        }

        // Check if user has required fields (email is essential)
        if (!userData.email) {
          localStorage.removeItem('userProfile'); // Clean up incomplete data
          setAuthStatus('unauthenticated');
          return;
        }

        // Optional: Verify user still exists in backend
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'}/auth/verify?email=${encodeURIComponent(userData.email)}`);
          if (!response.ok) {
            localStorage.removeItem('userProfile'); // Clean up data for non-existent user
            setAuthStatus('unauthenticated');
            return;
          }
        } catch {
          // Don't fail authentication if backend is temporarily unavailable
        }

        setAuthStatus('authenticated');
      } catch {
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
