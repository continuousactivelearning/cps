// src/components/OnboardingGuard.tsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { hasCompletedOnboarding } from '../utils/authUtils';

interface OnboardingGuardProps {
  children: React.ReactNode;
}

export const OnboardingGuard: React.FC<OnboardingGuardProps> = ({ children }) => {
  const [status, setStatus] = useState<'loading' | 'completed' | 'incomplete'>('loading');

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        // Use the robust utility function to check onboarding status
        const isCompleted = hasCompletedOnboarding();
        setStatus(isCompleted ? 'completed' : 'incomplete');
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setStatus('incomplete');
      }
    };

    checkOnboardingStatus();
  }, []);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Checking onboarding status...</p>
      </div>
    );
  }

  if (status === 'incomplete') {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
};

export default OnboardingGuard;
