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
        const token = localStorage.getItem('token');
        
        if (!token) {
          setAuthStatus('unauthenticated');
          return;
        }

        // In a real app, you would verify the token with your backend:
        // const response = await fetch('/api/auth/verify', {
        //   headers: { 'Authorization': `Bearer ${token}` }
        // });
        // const isValid = response.ok;
        
        // For demo purposes, we'll assume any token is valid
        setAuthStatus('authenticated');
      } catch (error) {
        console.error('Auth check failed:', error);
        setAuthStatus('unauthenticated');
      }
    };

    checkAuth();
  }, []);

  if (authStatus === 'checking') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">Checking authentication...</div>
      </div>
    );
  }

  if (authStatus === 'unauthenticated') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
