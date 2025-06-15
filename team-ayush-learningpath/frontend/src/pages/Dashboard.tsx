// src/pages/Dashboard.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Welcome, {user.name}!</h1>
          <p>Your learning journey starts here</p>
        </div>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Courses Enrolled</h3>
            <div className="stat-number">0</div>
          </div>
          <div className="stat-card">
            <h3>Learning Hours</h3>
            <div className="stat-number">0</div>
          </div>
        </div>
        
        <div className="dashboard-content">
          <div className="profile-section">
            <h2>Profile Information</h2>
            <div className="profile-card">
              <div className="profile-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="profile-details">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <span className="member-since">Member since {new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
          
          <div className="recommendations-section">
            <h2>Recommended Courses</h2>
            <div className="course-grid">
              <div className="course-card">
                <h3>Introduction to Machine Learning</h3>
                <p>Learn the basics of ML algorithms and applications</p>
                <button className="enroll-btn">Enroll Now</button>
              </div>
              <div className="course-card">
                <h3>React.js Fundamentals</h3>
                <p>Build modern web applications with React</p>
                <button className="enroll-btn">Enroll Now</button>
              </div>
              <div className="course-card">
                <h3>Data Science with Python</h3>
                <p>Analyze data and create visualizations</p>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;