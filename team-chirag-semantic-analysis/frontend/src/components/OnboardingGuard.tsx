// src/components/OnboardingGuard.tsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface OnboardingGuardProps {
  children: React.ReactNode;
}

export const OnboardingGuard: React.FC<OnboardingGuardProps> = ({ children }) => {
  const [status, setStatus] = useState<'loading' | 'completed' | 'incomplete'>('loading');

  useEffect(() => {
    // Simulate API check for onboarding status
    const checkOnboardingStatus = async () => {
      try {
        // In a real app, you'd fetch from your backend:
        // const res = await fetch('/api/user/onboarding-status');
        // const data = await res.json();
        
        // For demo: check localStorage flag
        const isCompleted = localStorage.getItem('onboardingCompleted') === 'true';
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
