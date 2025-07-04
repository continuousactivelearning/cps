import React, { type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles: string[]; // ['student'], ['instructor'], etc.
}

interface DecodedToken {
  userId: string;
  role: string;
  exp: number;
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  
  
  if (!token) {
    return <Navigate to="/" replace />;
  }

  try {
    //const decoded = jwtDecode<DecodedToken>(token);

    if (!role || !allowedRoles.includes(role)) {
      return <Navigate to="/" replace />; // or to an "Unauthorized" page
    }

    return children;
  } catch (err) {
    return <Navigate to="/" replace />;
  }

  
};

export default ProtectedRoute;