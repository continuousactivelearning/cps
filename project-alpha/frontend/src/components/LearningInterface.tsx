import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useWebSocket } from '../contexts/WebSocketContext';
import { API_ENDPOINTS, API_BASE_URL } from '../config/api';
import { v4 as uuidv4 } from 'uuid';
import Graph from './Graph';
import Quiz from './Quiz';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'student' | 'admin';
}

interface LearningInterfaceProps {
  user: User;
  onBack: () => void;
}

interface PrerequisiteData {
  topic: string;
  prerequisites: string[];
}

interface MCQ {
  id: string;
  topic: string;
  question: string;
  options: string[];
  answer: string;
}

const LearningInterface: React.FC<LearningInterfaceProps> = ({ onBack }) => {
  const [topic, setTopic] = useState('');
  const [data, setData] = useState<PrerequisiteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [conceptSummary, setConceptSummary] = useState('');
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const [mcqs, setMcqs] = useState<MCQ[] | null>(null);
  const [quizLoading, setQuizLoading] = useState(false);
  const [currentQuizSessionId, setCurrentQuizSessionId] = useState<string | null>(null);
  const [canAttempt] = useState(true);
  const [attemptsToday] = useState(0);
  const [quizPassed, setQuizPassed] = useState(false);
  const { connectionStatus } = useWebSocket();

  // Check for stored topic from "My Courses" and auto-start quiz
  useEffect(() => {
    const storedTopic = localStorage.getItem('selectedTopicForQuiz');
    if (storedTopic) {
      setTopic(storedTopic);
      // Clear the stored topic to prevent auto-starting on future visits
      localStorage.removeItem('selectedTopicForQuiz');
      // Auto-start the quiz flow
      handleSubmitWithTopic(storedTopic);
    }
  }, []);

  const refreshUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.get(API_ENDPOINTS.PROFILE, {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Update localStorage with fresh user data
      const updatedUser = response.data;
      localStorage.setItem('user', JSON.stringify(updatedUser));

      // Don't reload immediately - let the user see the learning path first
      // The updated data will be available when they navigate back to dashboard
      console.log('User data refreshed successfully');
    } catch (error) {
      console.error('Error refreshing user data:', error);
    }
  };

  const handleSubmitWithTopic = async (topicName: string) => {
    if (!topicName.trim()) return;

    setLoading(true);
    setData(null);
    setIsAcknowledged(false);
    setMcqs(null);
    setQuizPassed(false);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        API_ENDPOINTS.PREREQUISITES,
        { topic: topicName.trim() },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setData(response.data);
    } catch (error) {
      console.error('Error fetching prerequisites:', error);
      alert('Failed to fetch prerequisites. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!topic.trim()) return;
    await handleSubmitWithTopic(topic);
  };

  const handleConceptClick = async (concept: string) => {
    setSelectedConcept(concept);
    setConceptSummary('Loading...');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        API_ENDPOINTS.TOPIC_SUMMARY,
        {
          topic: concept,
          mainTopic: data?.topic || ''
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setConceptSummary(response.data.summary);
    } catch (error) {
      console.error('Error fetching concept summary:', error);
      setConceptSummary('Failed to load concept summary. Please try again.');
    }
  };

  const fetchMCQs = async () => {
    if (!data) return;
    
    setQuizLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        API_ENDPOINTS.PREREQUISITES_MCQ,
        {
          prerequisites: data.prerequisites,
          courseName: data.topic // Send the course/topic name for better MCQ generation context
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setMcqs(response.data); // Backend returns MCQs directly as an array
      setCurrentQuizSessionId(uuidv4()); // Generate a new session ID
    } catch (error) {
      console.error('Error fetching MCQs:', error);
      alert('Failed to generate quiz. Please try again.');
    } finally {
      setQuizLoading(false);
    }
  };

  const handleQuizRestart = () => {
    setMcqs(null);
    setCurrentQuizSessionId(null);
    setQuizPassed(false);
  };

  const handleQuizSubmit = async (score: number, total: number) => {
    const passed = (score / total) * 100 >= 65; // 65% passing threshold to match other components
    setQuizPassed(passed);

    try {
      // Store the quiz score in the backend
      await axios.post(API_ENDPOINTS.QUIZ_ATTEMPTS, {
        quizId: currentQuizSessionId,
        score: (score / total) * 100,
        passed,
        topic: data?.topic,
      });

      console.log('Quiz score stored successfully:', {
        topic: data?.topic,
        score: (score / total) * 100,
        passed
      });

      // Refresh user data to show updated scores
      refreshUserData();
    } catch (err) {
      console.error('Error recording quiz attempt:', err);
      alert('Quiz completed, but failed to save score. Please contact support if this persists.');
      // Still refresh user data in case the score was saved despite the error
      refreshUserData();
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(90deg, #6366f1 0%, #2dd4bf 100%)' }}>
      <div
        className="learning-container"
        style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <div
          className="learning-header"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>LearnPath</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Connection Status Indicator */}
            <div
              className="connection-status"
              style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              background: connectionStatus === 'connected' ? 'rgba(16, 185, 129, 0.2)' :
                         connectionStatus === 'connecting' ? 'rgba(245, 158, 11, 0.2)' :
                         'rgba(239, 68, 68, 0.2)',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: connectionStatus === 'connected' ? '#10b981' :
                         connectionStatus === 'connecting' ? '#f59e0b' :
                         '#ef4444',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: connectionStatus === 'connected' ? '#10b981' :
                           connectionStatus === 'connecting' ? '#f59e0b' :
                           '#ef4444',
                animation: connectionStatus === 'connecting' ? 'pulse 1s infinite' : 'none',
              }} />
              <span style={{
                color: 'white',
                fontSize: '14px',
                fontWeight: '500',
              }}>
                {connectionStatus === 'connected' ? 'Connected' :
                 connectionStatus === 'connecting' ? 'Connecting...' :
                 'Disconnected'}
              </span>
              {/* Connection retry functionality not available */}
            </div>
            
            <button
              onClick={onBack}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Back to Dashboard
            </button>
          </div>
        </div>

        <div
          className="learning-content"
          style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <div style={{ marginBottom: '30px' }}>
            <input
              type="text"
              value={topic}
              onChange={(e) => {
                console.log('Topic changed to:', e.target.value);
                setTopic(e.target.value);
              }}
              placeholder="Enter a topic you want to learn..."
              className="topic-input"
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '18px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                marginBottom: '20px',
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            
            {connectionStatus === 'disconnected' && (
              <div style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '20px',
                color: '#991b1b',
                fontSize: '14px',
              }}>
                <strong>⚠️ Connection Issue:</strong> Cannot connect to the server. Please make sure:
                <ul style={{ margin: '8px 0 0 20px', padding: 0 }}>
                  <li>The backend server is running on {API_BASE_URL}</li>
                  <li>You are logged in with a valid account</li>
                  <li>There are no firewall or network issues</li>
                </ul>
              </div>
            )}
            
            <button
              onClick={handleSubmit}
              disabled={loading || connectionStatus === 'disconnected'}
              className="submit-button"
              style={{
                background: connectionStatus === 'disconnected' ? '#9ca3af' : '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '15px 30px',
                fontSize: '18px',
                cursor: (loading || connectionStatus === 'disconnected') ? 'not-allowed' : 'pointer',
                opacity: (loading || connectionStatus === 'disconnected') ? 0.6 : 1,
              }}
            >
              {loading ? 'Loading...' : connectionStatus === 'disconnected' ? 'Server Disconnected' : 'Generate Prerequisites'}
            </button>
          </div>

          {data && (
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                Prerequisites for: {data.topic}
              </h2>
              
              <div
                className="prerequisites-layout"
                style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                {/* Left side - Prerequisite Summary */}
                <div
                  className="prerequisites-list"
                  style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#374151' }}>
                    Prerequisites Summary
                  </h3>
                  <div style={{
                    background: '#f9fafb',
                    padding: '20px',
                    borderRadius: '8px',
                    lineHeight: '1.6',
                    border: '1px solid #e5e7eb',
                    minHeight: '400px'
                  }}>
                    <p style={{ marginBottom: '15px', color: '#4b5563' }}>
                      To successfully learn <strong>{data.topic}</strong>, you should have a solid understanding of the following concepts:
                    </p>
                    <ol style={{ paddingLeft: '20px', color: '#374151' }}>
                      {data.prerequisites.map((prereq, index) => (
                        <li
                          key={index}
                          className="concept-item"
                          style={{ marginBottom: '10px' }}>
                          <strong>{prereq}</strong>
                          <button
                            onClick={() => handleConceptClick(prereq)}
                            className="clickable"
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#6366f1',
                              cursor: 'pointer',
                              fontSize: '14px',
                              marginLeft: '10px',
                              textDecoration: 'underline'
                            }}
                          >
                            Learn more
                          </button>
                        </li>
                      ))}
                    </ol>
                    {selectedConcept && (
                      <div
                        className="concept-summary"
                        style={{ marginTop: '20px', padding: '15px', background: '#e0f2fe', borderRadius: '6px', border: '1px solid #0288d1' }}>
                        <h4 style={{ marginBottom: '10px', color: '#0277bd' }}>{selectedConcept}</h4>
                        <p style={{ color: '#01579b', lineHeight: '1.5' }}>{conceptSummary}</p>
                        <button
                          onClick={() => setSelectedConcept(null)}
                          style={{
                            background: '#0288d1',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '5px 10px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            marginTop: '10px'
                          }}
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side - Graph */}
                <div
                  className="prerequisites-graph"
                  style={{ flex: '1', minWidth: '400px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#374151' }}>
                    Learning Path Visualization
                  </h3>
                  <Graph topic={data.topic} prerequisites={data.prerequisites} />
                </div>
              </div>

              {!isAcknowledged && (
                <div
                  className="action-buttons"
                  style={{ textAlign: 'center', marginTop: '20px' }}>
                  <button
                    onClick={() => setIsAcknowledged(true)}
                    style={{
                      background: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '15px 30px',
                      fontSize: '18px',
                      cursor: 'pointer',
                    }}
                  >
                    I Understand These Prerequisites
                  </button>
                </div>
              )}

              {isAcknowledged && !mcqs && (
                <div
                  className="action-buttons"
                  style={{ textAlign: 'center', marginTop: '20px' }}>
                  <button
                    onClick={() => fetchMCQs()}
                    disabled={quizLoading}
                    style={{
                      background: '#6366f1',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '15px 30px',
                      fontSize: '18px',
                      cursor: quizLoading ? 'not-allowed' : 'pointer',
                      opacity: quizLoading ? 0.6 : 1,
                    }}
                  >
                    {quizLoading ? 'Generating Quiz...' : 'Take Quiz'}
                  </button>
                </div>
              )}

              {mcqs && (
                <Quiz
                  mcqs={mcqs}
                  quizId={currentQuizSessionId || ''}
                  onRestartQuiz={handleQuizRestart}
                  onSubmitQuiz={handleQuizSubmit}
                  canAttempt={canAttempt}
                  attemptsToday={attemptsToday}
                  quizPassed={quizPassed}
                  topic={data.topic}
                  onLearningPathGenerated={refreshUserData}
                  onBackToHome={onBack}
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Responsiveness Styles */}
      <style>{`
        /* Mobile Responsiveness for Learning Interface */

        /* Small Mobile (0-479px) */
        @media (max-width: 479px) {
          .learning-container {
            padding: 16px !important;
            margin: 0 !important;
          }

          .learning-header {
            padding: 16px !important;
            flex-direction: column !important;
            gap: 16px !important;
            align-items: flex-start !important;
          }

          .learning-header h1 {
            font-size: 20px !important;
            margin-bottom: 8px !important;
          }

          .learning-header button {
            width: 100% !important;
            padding: 12px !important;
            font-size: 16px !important;
            min-height: 44px !important;
          }

          .learning-content {
            padding: 16px !important;
            gap: 16px !important;
          }

          .topic-input {
            width: 100% !important;
            padding: 12px !important;
            font-size: 16px !important;
            margin-bottom: 16px !important;
          }

          .submit-button {
            width: 100% !important;
            padding: 12px !important;
            font-size: 16px !important;
            min-height: 44px !important;
          }

          .prerequisites-layout {
            flex-direction: column !important;
            gap: 16px !important;
          }

          .prerequisites-list {
            width: 100% !important;
            margin-bottom: 16px !important;
          }

          .prerequisites-graph {
            width: 100% !important;
            height: 250px !important;
          }

          .concept-item {
            padding: 8px 12px !important;
            font-size: 14px !important;
          }

          .concept-summary {
            padding: 12px !important;
            font-size: 14px !important;
          }

          .action-buttons {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
          }

          .action-buttons button {
            width: 100% !important;
            padding: 12px !important;
            font-size: 16px !important;
            min-height: 44px !important;
          }

          .connection-status {
            padding: 8px 12px !important;
            font-size: 14px !important;
            text-align: center !important;
          }
        }

        /* Large Mobile (480-767px) */
        @media (min-width: 480px) and (max-width: 767px) {
          .learning-container {
            padding: 24px !important;
          }

          .learning-header {
            padding: 20px !important;
            flex-wrap: wrap !important;
          }

          .learning-header h1 {
            font-size: 24px !important;
          }

          .learning-content {
            padding: 24px !important;
            gap: 20px !important;
          }

          .prerequisites-layout {
            flex-direction: column !important;
            gap: 20px !important;
          }

          .prerequisites-graph {
            height: 300px !important;
          }

          .topic-input {
            padding: 14px !important;
            font-size: 16px !important;
          }

          .submit-button {
            padding: 14px 28px !important;
            font-size: 16px !important;
          }
        }

        /* Tablet (768-1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .learning-container {
            padding: 32px !important;
          }

          .learning-header {
            padding: 24px !important;
          }

          .learning-content {
            padding: 32px !important;
            gap: 24px !important;
          }

          .prerequisites-layout {
            gap: 24px !important;
          }

          .prerequisites-list {
            width: 45% !important;
          }

          .prerequisites-graph {
            width: 55% !important;
            height: 350px !important;
          }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
          .prerequisites-layout {
            flex-direction: row !important;
          }

          .prerequisites-list {
            width: 40% !important;
          }

          .prerequisites-graph {
            width: 60% !important;
            height: 400px !important;
          }
        }

        /* Touch optimizations for mobile */
        @media (max-width: 768px) {
          button, .clickable {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
            min-width: 44px;
            min-height: 44px;
          }

          button:active, .clickable:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }

          input, textarea, select {
            font-size: 16px; /* Prevents zoom on iOS */
            -webkit-appearance: none;
            border-radius: 8px;
          }

          .scrollable-content {
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
          }
        }
      `}</style>
    </div>
  );
};

export default LearningInterface;
