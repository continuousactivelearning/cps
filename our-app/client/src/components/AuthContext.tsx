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
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  userId: null,
  userData: null,
  loading: true,
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
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Load userId from localStorage and fetch userData
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      fetchUserData(storedUserId);
    } else {
      setLoading(false); // No stored user, finished loading
    }
  }, []);

  const fetchUserData = async (uid: string) => {
    try {
      const res = await axios.get<UserData>(`/api/users/${uid}`);
      setUserData(res.data);
    } catch (err: any) {
      console.error('Error fetching user data:', err.response?.data?.message || err.message);
      // If user data fetch fails, clear the stored userId and logout
      localStorage.removeItem('userId');
      setUserId(null);
    } finally {
      setLoading(false); // Finished loading regardless of success/failure
    }
  };

  const checkInitialSetupAndRedirect = (data: any) => {
    const lang = data.lang;
    const assessmentDone = data.lang; // User has selected a language
    const customQuizDone = data.customQuizzes && data.customQuizzes.length > 0;
    const pathChosen = data.courses && data.courses.length > 0;
    
    // Check if user has attempted all 3 basic quiz levels (beginner, intermediate, advanced)
    let basicQuizDone = false;
    if (data.quizzes && data.quizzes.length > 0 && lang) {
      const basicQuizzes = data.quizzes.filter((q: any) => {
        // Check if this is a basic quiz attempt
        return q.quizId && 
               typeof q.quizId === 'object' && 
               q.quizId.lang === lang && 
               q.quizId.topic && 
               q.quizId.topic.courseName === 'basic';
      });
      
      // Check if user has attempted all 3 levels (beginner, intermediate, advanced)
      const levels = ['beginner', 'intermediate', 'advanced'];
      const attemptedLevels = levels.filter(level => {
        const levelAttempts = basicQuizzes.filter((q: any) => q.quizId.quizLevel === level);
        return levelAttempts.length > 0; // Just check if there's at least one attempt
      });
      
      basicQuizDone = attemptedLevels.length === 3; // All 3 levels attempted
    }
    
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
    setLoading(false);
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ userId, userData, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
