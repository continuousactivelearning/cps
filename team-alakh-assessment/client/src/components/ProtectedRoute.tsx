import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isInstructor?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, isInstructor }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem(isInstructor ? 'instructorToken' : 'token');
      if (!token) {
        setError('No token found.');
        setIsValid(false);
        setIsLoading(false);
        return;
      }
      try {
        const endpoint = isInstructor ? 'https://assessment-o61q.onrender.com/api/instructor/verify' : 'https://assessment-o61q.onrender.com/api/auth/verify';
        const url = endpoint.startsWith('http') ? endpoint : endpoint;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          setIsValid(true);
        } else if (response.status === 403) {
          setError('Invalid or expired token.');
          setIsValid(false);
        } else {
          setError('Unknown error verifying token.');
          setIsValid(false);
        }
      } catch (err) {
        setError('Network or server error.');
        setIsValid(false);
      } finally {
        setIsLoading(false);
      }
    };
    verifyToken();
  }, [isInstructor]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isValid) {
    localStorage.removeItem(isInstructor ? 'instructorToken' : 'token');
    alert(error || 'Unauthorized access');
    return <Navigate to={isInstructor ? '/instructor-login' : '/login'} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
//Corrected by @omkar