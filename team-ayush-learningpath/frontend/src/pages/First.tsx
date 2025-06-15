import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './First.css';

const First: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [topic, setTopic] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState('openai');

  const OPENAI_API_KEY = 'your-openai-key';
  const GEMINI_API_KEY = 'your-gemini-key';

  const navigationItems = [
    { path: '/new-courses', label: 'New Course', icon: '📚' },
    { path: '/my-courses', label: 'My Courses', icon: '🎓' },
    { path: '/staff-picks', label: 'Staff Picks', icon: '⭐' },
    { path: '/community', label: 'Community', icon: '👥' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      let generatedText = '';

      if (provider === 'openai') {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: `Give a structured learning path to master ${topic}. List it step-by-step.`,
              },
            ],
            temperature: 0.7,
          }),
        });

        const data = await res.json();
        generatedText = data?.choices?.[0]?.message?.content || 'No response from OpenAI.';
      } else if (provider === 'gemini') {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  parts: [{ text: `Give a structured learning path to master ${topic}. List it step-by-step.` }],
                },
              ],
            }),
          }
        );

        const data = await res.json();
        generatedText =
          data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini.';
      } else {
        generatedText = `Custom algorithm output coming soon for topic: ${topic}`;
      }

      setResponse(generatedText);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Something went wrong. Please check your API keys and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <span className="logo-icon">🎯</span>
          <span className="logo-text">EduBot</span>
        </div>
        
        <nav className="nav-links">
          {navigationItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`nav-button ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">👤</div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-status">Premium User</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          <div className="header-section">
            <h1 className="title">AI Learning Path Generator</h1>
            <p className="subtitle">Create personalized learning paths with AI assistance</p>
          </div>

          <div className="input-section">
            <div className="input-container">
              <input
                type="text"
                placeholder="What would you like to learn? (e.g., React, Python, Machine Learning...)"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="topic-input"
              />
              <button 
                onClick={handleGenerate} 
                disabled={loading || !topic.trim()}
                className="generate-button"
              >
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Generating...
                  </>
                ) : (
                  <>
                    <span className="button-icon">🚀</span>
                    Generate Learning Path
                  </>
                )}
              </button>
            </div>

            <div className="dropdown-section">
              <label className="dropdown-label">Select AI Provider:</label>
              <select 
                value={provider} 
                onChange={(e) => setProvider(e.target.value)}
                className="provider-select"
              >
                <option value="openai">🧠 OpenAI GPT</option>
                <option value="gemini">🔮 Google Gemini</option>
                <option value="custom">⚙️ Custom Algorithm</option>
              </select>
            </div>
          </div>

          <div className="results">
            {loading ? (
              <div className="loading-container">
                <div className="loading-animation">
                  <div className="thinking-bubble">
                    <span>🤔</span>
                    <div className="bubble-text">AI is thinking...</div>
                  </div>
                </div>
              </div>
            ) : response ? (
              <div className="path-list">
                <div className="results-header">
                  <h2>Your Personalized Learning Path</h2>
                  <div className="results-actions">
                    <button className="action-button save-button">💾 Save</button>
                    <button className="action-button share-button">📤 Share</button>
                  </div>
                </div>
                <div className="response-content">
                  <pre>{response}</pre>
                </div>
              </div>
            ) : (
              <div className="placeholder">
                <div className="placeholder-icon">🎓</div>
                <p className="welcome-text">Welcome to AI Learning Path Generator</p>
                <p className="placeholder-description">
                  Enter a topic you'd like to learn and select your preferred AI provider to get started.
                  Our AI will create a structured, step-by-step learning path tailored just for you.
                </p>
                <div className="feature-highlights">
                  <div className="feature">
                    <span className="feature-icon">⚡</span>
                    <span>Fast Generation</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🎯</span>
                    <span>Personalized</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">📊</span>
                    <span>Structured</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;