import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { userId, loading } = useContext(AuthContext);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Checking authentication...</p>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!userId) {
    return <Navigate to="/login" replace />;
  }

  // Render the protected component if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
