/*Created by Nakshatra Bhandary on 19/6/25*/
/*Updated by Nikita S Raj Kapini on 25/6/25*/

import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

interface TokenPayload {
  exp: number;
  userId: string;
  email: string;
}

export const useAuth = (onSessionExpired?: () => void, currentPath?: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = () => {
      localStorage.removeItem('token');
      if (onSessionExpired) {
        onSessionExpired();
      } else {
        navigate('/');
      }
    };

    const setAutoLogout = (token: string) => {
      const decoded = jwtDecode<TokenPayload>(token);
      const expiryTime = decoded.exp * 1000;
      const timeout = expiryTime - Date.now();

      if (timeout > 0) {
        setTimeout(() => logout(), timeout);
      } else {
        logout();
      }
    };

    const token = localStorage.getItem('token');
    if (token) {
      try {
        setAutoLogout(token);
      } catch (e) {
        logout();
      }
    } else {
      // ✅ Only auto-navigate on protected routes
      const publicRoutes = ['/', '/login', '/register'];
      if (!publicRoutes.includes(currentPath || '')) {
        navigate('/');
      }
    }
  }, [navigate, currentPath]);
};
