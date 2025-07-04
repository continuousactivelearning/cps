import React, { useState } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

interface AuthFormsProps {
  onAuthSuccess: (token: string, userData: any) => void;
  onClose: () => void;
}

const AuthForms: React.FC<AuthFormsProps> = ({ onAuthSuccess, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Login
        const response = await axios.post(API_ENDPOINTS.LOGIN, {
          email: formData.email,
          password: formData.password
        });
        
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify({ ...user, avatar: user.avatar }));
        onAuthSuccess(token, { ...user, avatar: user.avatar });
      } else {
        // Register
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }

        await axios.post(API_ENDPOINTS.REGISTER, {
          username: formData.username,
          email: formData.email,
          password: formData.password
        });
        setError('Registration successful! Please log in.');
        setIsLogin(true);
        setFormData({ username: '', email: '', password: '', confirmPassword: '' });
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setError('');
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  // Add password strength check function and state
  const passwordChecks = [
    { label: 'At least 8 characters', test: (pw: string) => pw.length >= 8 },
    { label: 'One uppercase letter', test: (pw: string) => /[A-Z]/.test(pw) },
    { label: 'One lowercase letter', test: (pw: string) => /[a-z]/.test(pw) },
    { label: 'One number', test: (pw: string) => /[0-9]/.test(pw) },
    { label: 'One special character', test: (pw: string) => /[!@#$%^&*()_+\-={}[\]|;:'\",.<>/?]/.test(pw) },
  ];
  const passwordStatus = passwordChecks.map(c => c.test(formData.password));

  return (
    <div className="mobile-modal" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div className="mobile-modal-content mobile-form" style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <button
          onClick={onClose}
          className="mobile-btn"
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#666',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'background-color 0.2s',
            touchAction: 'manipulation',
            minWidth: '44px',
            minHeight: '44px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ×
        </button>

        <h2 style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#1f2937',
          fontSize: '28px',
          fontWeight: '700'
        }}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            color: '#dc2626',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#374151',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required={!isLogin}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                placeholder="Enter your username"
              />
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#374151',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6366f1'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#374151',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#6366f1'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              placeholder="Enter your password"
            />
            {/* Password strength feedback (registration only) */}
            {!isLogin && formData.password && (
              <ul style={{
                margin: '10px 0 0 0',
                padding: 0,
                listStyle: 'none',
                fontSize: 13,
                color: '#374151',
                background: '#f9fafb',
                borderRadius: 8,
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(99,102,241,0.04)',
                maxWidth: 340,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>
                {passwordChecks.map((check, idx) => (
                  <li key={check.label} style={{
                    color: passwordStatus[idx] ? '#10b981' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontWeight: passwordStatus[idx] ? 600 : 400,
                    padding: '2px 0',
                  }}>
                    <span style={{ fontSize: 16 }}>
                      {passwordStatus[idx] ? '✔️' : '❌'}
                    </span>
                    {check.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {!isLogin && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#374151',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: loading ? '#9ca3af' : '#6366f1',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
              marginBottom: '20px'
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = '#4f46e5';
            }}
            onMouseLeave={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = '#6366f1';
            }}
          >
            {loading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid transparent',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Login/Register...
              </span>
            ) : (
              'Login/Register'
            )}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          paddingTop: '20px',
          borderTop: '1px solid #e5e7eb'
        }}>
          <p style={{ color: '#6b7280', marginBottom: '10px' }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={toggleMode}
            style={{
              background: 'none',
              border: 'none',
              color: '#6366f1',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'underline'
            }}
          >
            {isLogin ? 'Create an account' : 'Sign in instead'}
          </button>
        </div>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Mobile Responsive Styles for Auth Forms */
          @media (max-width: 479px) {
            .mobile-modal {
              padding: 1rem !important;
              align-items: flex-start !important;
              padding-top: 2rem !important;
            }

            .mobile-modal-content {
              padding: 1.5rem !important;
              border-radius: 1rem !important;
              width: 100% !important;
              max-width: 100% !important;
              margin: 0 !important;
              max-height: 85vh !important;
            }

            .mobile-form h2 {
              font-size: 1.5rem !important;
              margin-bottom: 1.5rem !important;
            }

            .mobile-form input {
              padding: 1rem !important;
              font-size: 16px !important; /* Prevents zoom on iOS */
              border-radius: 0.75rem !important;
              margin-bottom: 1rem !important;
            }

            .mobile-form label {
              font-size: 1rem !important;
              margin-bottom: 0.5rem !important;
            }

            .mobile-form button[type="submit"] {
              padding: 1rem !important;
              font-size: 1.1rem !important;
              border-radius: 0.75rem !important;
              width: 100% !important;
              margin-top: 0.5rem !important;
            }

            .mobile-form .error-message {
              padding: 1rem !important;
              font-size: 0.9rem !important;
              border-radius: 0.75rem !important;
              margin-bottom: 1rem !important;
            }

            .mobile-form .password-strength {
              margin-top: 0.75rem !important;
            }

            .mobile-form .password-strength ul {
              padding-left: 1rem !important;
            }

            .mobile-form .password-strength li {
              font-size: 0.8rem !important;
              margin-bottom: 0.25rem !important;
            }

            .mobile-form .toggle-section {
              margin-top: 1.5rem !important;
              text-align: center !important;
            }

            .mobile-form .toggle-section p {
              font-size: 0.9rem !important;
              margin-bottom: 0.5rem !important;
            }

            .mobile-form .toggle-section button {
              font-size: 1rem !important;
              padding: 0.5rem 1rem !important;
              border-radius: 0.5rem !important;
              background: #f3f4f6 !important;
              border: 1px solid #d1d5db !important;
              color: #6366f1 !important;
              text-decoration: none !important;
            }
          }

          @media (min-width: 480px) and (max-width: 767px) {
            .mobile-modal {
              padding: 1.5rem !important;
            }

            .mobile-modal-content {
              padding: 2rem !important;
              max-width: 400px !important;
            }

            .mobile-form input {
              font-size: 16px !important; /* Prevents zoom on iOS */
            }
          }

          /* Touch optimizations for all mobile devices */
          @media (max-width: 768px) {
            .mobile-form input,
            .mobile-form button {
              touch-action: manipulation;
              -webkit-tap-highlight-color: transparent;
            }

            .mobile-form input:focus {
              outline: none;
              border-color: #6366f1 !important;
              box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1) !important;
            }

            .mobile-form button:active {
              transform: scale(0.98);
            }

            .mobile-form button[type="submit"]:disabled {
              opacity: 0.6;
              cursor: not-allowed;
              transform: none !important;
            }

            /* Improve scrolling on mobile */
            .mobile-modal-content {
              -webkit-overflow-scrolling: touch;
              overflow-scrolling: touch;
            }

            /* Better spacing for mobile */
            .mobile-form > div {
              margin-bottom: 1rem;
            }

            .mobile-form > div:last-child {
              margin-bottom: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AuthForms; 
