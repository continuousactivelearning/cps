import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import Dashboard from './Dashboard';
import ErrorBoundary from './ErrorBoundary';

const DashboardWrapper: React.FC = () => {
  const { userId, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if we're not loading and there's no userId
    if (!loading && !userId) {
      navigate('/login');
    }
  }, [userId, loading, navigate]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading...</p>
      </div>
    );
  }

  // Show redirecting message if no userId (after loading is complete)
  if (!userId) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Redirecting...</span>
        </div>
        <p className="mt-3">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Dashboard userId={userId} />
    </ErrorBoundary>
  );
};

export default DashboardWrapper;
