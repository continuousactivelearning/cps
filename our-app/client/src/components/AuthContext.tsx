import React, { createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
  lang: string;
  quizzes: any[];
  customQuizzes: any[];
  courses: any[];
  createdAt: string;
  updatedAt: string;
}

interface AuthContextType {
  userId: string | null;
  userData: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  userId: null,
  userData: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  // Load userId from localStorage and fetch userData
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      fetchUserData(storedUserId);
    }
  }, []);

  const fetchUserData = async (uid: string) => {
    try {
      const res = await axios.get<UserData>(`/api/users/${uid}`);
      setUserData(res.data);
    } catch (err: any) {
      console.error('Error fetching user data:', err.response?.data?.message || err.message);
    }
  };

  const checkInitialSetupAndRedirect = (data: any) => {
    const basicQuizDone = data.quizzes && data.quizzes.length > 0;
    const assessmentDone = data.lang; // User has selected a language
    const customQuizDone = data.customQuizzes && data.customQuizzes.length > 0;
    const pathChosen = data.courses && data.courses.length > 0;
    if (!data.lang || !basicQuizDone || !assessmentDone || !customQuizDone || !pathChosen) {
      navigate('/initial-setup');
    } else {
      navigate('/dashboard');
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post('/api/login', {
        email,
        password,
      });
      const userData = res.data;
      const userId = userData._id;
      setUserId(userId);
      setUserData(userData);
      localStorage.setItem('userId', userId);
      checkInitialSetupAndRedirect(userData);
    } catch (err: any) {
      // Throw error so Login.tsx can handle it
      throw new Error(err.response?.data?.message || err.message || 'Login failed');
    }
  };

  const signup = async (userName: string, email: string, password: string) => {
    try {
      await axios.post('/api/signup', {
        name: userName, // Backend expects 'name', not 'userName'
        email,
        password
      });
    } catch (err: any) {
      // Throw error so Login.tsx can handle it
      throw new Error(err.response?.data?.message || err.message || 'Signup failed');
    }
  };

  const logout = () => {
    setUserId(null);
    setUserData(null);
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ userId, userData, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
