// src/pages/Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Recommendation System For Learners</h1>
          <p className="hero-subtitle">
            Discover personalized learning paths tailored just for you
          </p>
        </div>
        <div className="hero-image">
          <div className="banner-placeholder">
            <div className="banner-item">
              <h3>Machine Learning</h3>
              <p>Learn cutting-edge ML algorithms</p>
            </div>
            <div className="banner-item">
              <h3>Web Development</h3>
              <p>Build modern web applications</p>
            </div>
            <div className="banner-item">
              <h3>Data Science</h3>
              <p>Analyze and visualize data</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2>Why Choose Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Personalized Learning</h3>
            <p>AI-powered recommendations based on your interests and goals</p>
          </div>
          <div className="feature-card">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals and experienced educators</p>
          </div>
          <div className="feature-card">
            <h3>Flexible Schedule</h3>
            <p>Study at your own pace with 24/7 access to course materials</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;