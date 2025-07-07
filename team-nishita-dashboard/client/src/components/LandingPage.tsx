/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { signup, login } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import type { Credentials } from '../api/api';
import {
  LogIn,
  UserPlus,
  LineChart,
  Share2,
  Bot,
  Sparkles,
  ClipboardCheck,
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [modalType, setModalType] = useState<'login' | 'signup' | null>(null);
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
    role: 'user'
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login: authLogin, isAuthenticated, user } = useAuth();
  const { darkMode } = useTheme();

  const closeModal = () => {
    setModalType(null);
    setCredentials({
      username: '',
      password: '',
      role: 'user'
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = modalType === 'login'
        ? await login(credentials)
        : await signup(credentials);

      const { access_token, user: userData } = response.data;
      localStorage.setItem('token', access_token);
      authLogin(userData);
      closeModal();

      if (userData.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      const redirectPath = user.role === 'admin' ? '/admin' : '/dashboard';
      navigate(redirectPath);
    }
  }, [isAuthenticated, user, navigate]);

  const features = [
    {
      icon: <LineChart size={32} />,
      title: "Progress Tracking",
      desc: "Track your learning goals and monitor real-time progress with intuitive charts."
    },
    {
      icon: <Share2 size={32} />,
      title: "Knowledge Graph",
      desc: "Visualize concepts you've learned and identify knowledge gaps clearly."
    },
    {
      icon: <Bot size={32} />,
      title: "AI Chat Assistant",
      desc: "Ask questions anytime and get smart explanations powered by AI."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Recommendations",
      desc: "Receive personalized learning path suggestions based on your progress."
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Assessments",
      desc: "Take quick quizzes to reinforce concepts and track understanding."
    }
  ];

  return (
    <div className={`landing-page ${darkMode ? 'dark' : 'light'}`}>
      <Navbar
        onLoginClick={() => setModalType('login')}
        onSignUpClick={() => setModalType('signup')}
      />

      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Visualize Your Learning Journey
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BluePrint helps you understand where you are, what to study next, and how close you are to your goals.
          </motion.p>
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {modalType && (
        <div className="modal-overlay" onClick={closeModal}>
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="modal-close" onClick={closeModal}>×</button>

            <h2 className="modal-title">
              {modalType === 'login' ? 'Login' : 'Sign Up'}
            </h2>

            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="auth-form">
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
                disabled={loading}
                className="form-input"
              />

              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                disabled={loading}
                className="form-input"
              />

              <select
                value={credentials.role}
                onChange={(e) => setCredentials({ ...credentials, role: e.target.value as 'user' | 'admin' })}
                disabled={loading}
                className="form-select"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <button type="submit" disabled={loading} className="form-submit">
                {loading ? 'Loading...' : (
                  <>
                    {modalType === 'login' ? <LogIn size={16} /> : <UserPlus size={16} />}
                    {modalType === 'login' ? 'Login' : 'Sign Up'}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
