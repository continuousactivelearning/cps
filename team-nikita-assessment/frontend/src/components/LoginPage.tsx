/*AUTHOR-MANDA RANI(created on 14/06/25)*/
/*Modified by Nakshatra Bhandary (16/6/26) and (17/6/25) to connect to the backend*/
/*Modified by Nakshatra Bhandary 23/6/25 to add forgot password*/
/*Updated by Nikita S Raj Kapini on 24/06/2025*/
/*Modified by Nakshatra on 26/6/25 to prevent navigation to login page after loggin in*/

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ForgotPasswordModal from './ForgotPasswordModal';
import './LoginPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotModal, setShowForgotModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard'); // redirect if already logged in
    }
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed.');
        return;
      }

      localStorage.setItem('token', data.token);
      setError('');

      toast.success('🎉 Login successful!!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: 'colored',
      });

      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login to Edu Access</h2>

        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
        />

        {error && <div className="login-error">{error}</div>}

        <button type="submit" className="login-button">Login</button>

        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          <span onClick={() => setShowForgotModal(true)} style={{ cursor: 'pointer', color: '#6366F1' }}>
            Forgot Password?
          </span>
        </p>

        <p style={{ fontSize: '0.9rem' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#6366F1' }}>Register here</Link>
        </p>
      </form>

      {showForgotModal && <ForgotPasswordModal onClose={() => setShowForgotModal(false)} />}

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
