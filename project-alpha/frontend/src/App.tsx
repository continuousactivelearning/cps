import { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './components/Graph';
import Quiz from './components/Quiz';
import LandingPage from './components/LandingPage';
import AuthForms from './components/AuthForms';
import UserProfile from './components/UserProfile';
import { v4 as uuidv4 } from 'uuid';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import { WebSocketProvider, useWebSocket } from './contexts/WebSocketContext';
import { API_ENDPOINTS, API_BASE_URL } from './config/api';

// Type definitions
type PrereqData = {
  topic: string;
  prerequisites: string[];
};

type MCQ = {
  id: string;
  topic: string;
  question: string;
  options: string[];
  answer: string;
};

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'student';
  topics?: string[];
  prerequisites?: { topic: string; prerequisites: string[] }[];
  quizScores?: { topic: string; score: number; date: string }[];
  learningPaths?: { topic: string; weeks: number; level: string; durationPerDay: string; path: any[]; generatedAt: string }[];
  avatar?: string;
}

function AppContent() {
  const [topic, setTopic] = useState('');
  const [data, setData] = useState<PrereqData | null>(null);
  const [mcqs, setMcqs] = useState<MCQ[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [conceptSummary, setConceptSummary] = useState('');
  const [currentQuizSessionId, setCurrentQuizSessionId] = useState<string>(uuidv4());
  const [attemptsToday, setAttemptsToday] = useState(0);
  const [canAttempt, setCanAttempt] = useState(true);
  const [quizPassed, setQuizPassed] = useState(false);

  // Authentication state
  const [user, setUser] = useState<User | null>(null);
  const [showAuthForms, setShowAuthForms] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showLearningInterface, setShowLearningInterface] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');

  const { connect: connectWebSocket, disconnect: disconnectWebSocket } = useWebSocket();

  // Function to refresh user data
  const refreshUserData = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.PROFILE, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const updatedUser = response.data;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error: any) {
      console.error('Error refreshing user data:', error);
      
      // Handle authentication errors
      if (error.response && error.response.status === 401) {
        console.log('Token expired, logging out user');
        handleLogout();
      }
      // Don't show alert for refresh errors as they're not critical
    }
  };

  // Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        // Set default authorization header for all requests
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // Connect to WebSocket
        connectWebSocket(token);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, [connectWebSocket]);

  // Check remaining attempts on mount or topic change
  useEffect(() => {
    const checkAttempts = async () => {
      console.log('checkAttempts called with topic:', topic, 'data:', !!data);
      if (!topic || !data) return; // Only check if we have both topic and prerequisite data
      try {
        const res = await axios.get(API_ENDPOINTS.QUIZ_ATTEMPTS, {
          params: { topic },
        });
        setAttemptsToday(res.data.attemptsToday);
        setCanAttempt(res.data.canAttempt);
      } catch (err) {
        console.error('Error checking quiz attempts:', err);
        // Don't show alert here as this is just a background check
      }
    };
    checkAttempts();
  }, [topic, data]); // Add data as dependency

  // Test connection when learning interface is opened
  useEffect(() => {
    if (showLearningInterface) {
      testConnection();
    }
  }, [showLearningInterface]);

  const handleAuthSuccess = (token: string, userData: User) => {
    setUser(userData);
    setShowAuthForms(false);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // Connect to WebSocket after successful authentication
    connectWebSocket(token);
  };

  const handleLogout = () => {
    setUser(null);
    setShowUserProfile(false);
    setShowLearningInterface(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    // Disconnect WebSocket
    disconnectWebSocket();
    // Reset all app state
    setTopic('');
    setData(null);
    setMcqs(null);
    setLoading(false);
    setIsAcknowledged(false);
    setQuizLoading(false);
    setSelectedConcept(null);
    setConceptSummary('');
    setCurrentQuizSessionId(uuidv4());
    setAttemptsToday(0);
    setCanAttempt(true);
    setQuizPassed(false);
  };

  const handleStartLearning = () => {
    setShowLearningInterface(true);
    
    // Check if there's a selected topic for quiz from the dashboard
    const selectedTopicForQuiz = localStorage.getItem('selectedTopicForQuiz');
    if (selectedTopicForQuiz) {
      setTopic(selectedTopicForQuiz);
      localStorage.removeItem('selectedTopicForQuiz'); // Clear it after use
    }
  };

  // Handle selected topic when learning interface is shown
  useEffect(() => {
    if (showLearningInterface) {
      const selectedTopicForQuiz = localStorage.getItem('selectedTopicForQuiz');
      if (selectedTopicForQuiz) {
        setTopic(selectedTopicForQuiz);
        localStorage.removeItem('selectedTopicForQuiz');
      }
    }
  }, [showLearningInterface]);

  // Auto-load prerequisites when topic is set from dashboard
  useEffect(() => {
    const autoLoadPrerequisites = async () => {
      if (topic && showLearningInterface && !data && !loading) {
        // Check if this topic already has prerequisites in user data
        const userPrereq = user?.prerequisites?.find(p => p.topic === topic);
        if (userPrereq) {
          setData(userPrereq);
          setIsAcknowledged(true); // Auto-acknowledge since user already has prerequisites
        }
      }
    };
    
    autoLoadPrerequisites();
  }, [topic, showLearningInterface, user, data, loading]);

  // Test connection to backend
  const testConnection = async (): Promise<boolean> => {
    try {
      setConnectionStatus('checking');
      await axios.get(API_ENDPOINTS.CHECK_ADMIN);
      setConnectionStatus('connected');
      return true;
    } catch (error) {
      console.error('Connection test failed:', error);
      setConnectionStatus('disconnected');
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic.');
      return;
    }

    // Test connection first
    const isConnected = await testConnection();
    if (!isConnected) {
      alert(`Cannot connect to server. Please make sure the backend is running on ${API_BASE_URL}`);
      return;
    }

    setLoading(true);
    setMcqs(null);
    setData(null);
    setSelectedConcept(null);
    setConceptSummary('');
    setCurrentQuizSessionId(uuidv4());
    setQuizPassed(false);
    setAttemptsToday(0);
    setCanAttempt(true);
    try {
      const res = await axios.post(API_ENDPOINTS.PREREQUISITES, { topic });
      setData(res.data);
      // Refresh user data to get updated topics and prerequisites
      await refreshUserData();
    } catch (err: any) {
      console.error('Error fetching prerequisites:', err);
      
      // Provide more specific error messages
      if (err.response) {
        // Server responded with error status
        if (err.response.status === 401) {
          alert('Authentication error. Please log in again.');
          handleLogout();
        } else if (err.response.status === 400) {
          alert(`Invalid request: ${err.response.data.error || 'Please check your input.'}`);
        } else if (err.response.status === 500) {
          alert('Server error. Please try again later.');
        } else {
          alert(`Error: ${err.response.data.error || 'Failed to fetch prerequisites.'}`);
        }
      } else if (err.request) {
        // Network error - server not responding
        alert('Cannot connect to server. Please check if the backend is running.');
      } else {
        // Other error
        alert('Failed to fetch prerequisites. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchMCQs = async (resetCache: boolean = false) => {
    if (!data || (!isAcknowledged && !resetCache)) {
      if (!data) console.warn("No prerequisite data to fetch MCQs for.");
      if (!isAcknowledged && !resetCache) console.warn("Prerequisites not acknowledged yet.");
      return;
    }

    // Check attempts before fetching
    try {
      const res = await axios.get(API_ENDPOINTS.QUIZ_ATTEMPTS, {
        params: { topic: data.topic },
      });
      setAttemptsToday(res.data.attemptsToday);
      setCanAttempt(res.data.canAttempt);
      if (!res.data.canAttempt) {
        alert(`Max attempts reached for ${data.topic} today. Please try again tomorrow.`);
        return;
      }
    } catch (err) {
      console.error('Error checking quiz attempts:', err);
      // Don't show alert here, just log the error
      return;
    }

    setQuizLoading(true);
    setMcqs(null);
    setCurrentQuizSessionId(uuidv4());
    setQuizPassed(false);

    try {
      const res = await axios.post(API_ENDPOINTS.PREREQUISITES_MCQ, {
        prerequisites: data.prerequisites,
        restart: resetCache,
      });
      setMcqs(res.data);
      console.log("MCQs fetched successfully. Current quiz ID:", currentQuizSessionId);
    } catch (err) {
      console.error('Error fetching MCQs:', err);
      alert('Failed to fetch quiz questions. Please try again.');
    } finally {
      setQuizLoading(false);
    }
  };

  const handleConceptClick = async (concept: string) => {
    setSelectedConcept(concept);
    setConceptSummary('⏳ Loading...');
    try {
      const res = await axios.post(API_ENDPOINTS.TOPIC_SUMMARY, {
        topic: concept,
        mainTopic: data?.topic || '',
      });
      setConceptSummary(res.data.summary);
    } catch (err) {
      console.error('Error fetching summary', err);
      setConceptSummary('⚠️ Failed to load summary.');
    }
  };

  const handleQuizRestart = async (score: number, passed: boolean) => {
    console.log("App.tsx: Quiz restart requested by Quiz component. Score:", score, "Passed:", passed);
    if (passed) {
      console.log("Restart blocked: User passed the quiz.");
      setQuizPassed(true);
      return;
    }

    try {
      const res = await axios.get(API_ENDPOINTS.QUIZ_ATTEMPTS, {
        params: { topic: data?.topic },
      });
      setAttemptsToday(res.data.attemptsToday);
      setCanAttempt(res.data.canAttempt);
      if (!res.data.canAttempt) {
        console.log("Restart blocked: Max attempts reached.");
        return;
      }
    } catch (err) {
      console.error('Error checking quiz attempts:', err);
      // Don't show alert here, just log the error and return
      return;
    }

    setIsAcknowledged(false);
    await fetchMCQs(true);
  };

  const handleQuizSubmit = async (score: number, total: number) => {
    const passed = (score / total) * 100 >= 65;
    setQuizPassed(passed);
    try {
      await axios.post(API_ENDPOINTS.QUIZ_ATTEMPTS, {
        quizId: currentQuizSessionId,
        score: (score / total) * 100,
        passed,
        topic: data?.topic,
      });
      setAttemptsToday((prev) => prev + 1);
      setCanAttempt(attemptsToday + 1 < 3);
      // Refresh user data to get updated quiz scores
      await refreshUserData();
    } catch (err) {
      console.error('Error recording quiz attempt:', err);
      alert('Failed to record quiz attempt. Please try again.');
    }
  };

  // If user is authenticated and wants to learn, show learning interface
  if (user && showLearningInterface) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(90deg, #6366f1 0%, #2dd4bf 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>LearnPath</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Connection Status Indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                background: connectionStatus === 'connected' ? 'rgba(16, 185, 129, 0.2)' :
                           connectionStatus === 'checking' ? 'rgba(245, 158, 11, 0.2)' :
                           'rgba(239, 68, 68, 0.2)',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: connectionStatus === 'connected' ? '#10b981' :
                           connectionStatus === 'checking' ? '#f59e0b' :
                           '#ef4444',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: connectionStatus === 'connected' ? '#10b981' :
                             connectionStatus === 'checking' ? '#f59e0b' :
                             '#ef4444',
                  animation: connectionStatus === 'checking' ? 'pulse 1s infinite' : 'none',
                }} />
                <span style={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                }}>
                  {connectionStatus === 'connected' ? 'Connected' :
                   connectionStatus === 'checking' ? 'Checking...' :
                   'Disconnected'}
                </span>
                {connectionStatus === 'disconnected' && (
                  <button
                    onClick={testConnection}
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      marginLeft: '8px',
                    }}
                  >
                    Retry
                  </button>
                )}
              </div>
              
              <button
                onClick={() => setShowLearningInterface(false)}
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
          
          <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <div style={{ marginBottom: '30px' }}>
              <input
                type="text"
                value={topic}
                onChange={(e) => {
                  console.log('Topic changed to:', e.target.value);
                  setTopic(e.target.value);
                }}
                placeholder="Enter a topic you want to learn..."
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '18px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  marginBottom: '20px',
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
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
                
                <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                  {/* Left side - Prerequisite Summary */}
                  <div style={{ flex: '1', minWidth: '300px' }}>
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
                          <li key={index} style={{ marginBottom: '10px' }}>
                            <strong>{prereq}</strong>
                            <button
                              onClick={() => handleConceptClick(prereq)}
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
                        <div style={{ marginTop: '20px', padding: '15px', background: '#e0f2fe', borderRadius: '6px', border: '1px solid #0288d1' }}>
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
                  <div style={{ flex: '1', minWidth: '400px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#374151' }}>
                      Learning Path Visualization
                    </h3>
                    <Graph topic={data.topic} prerequisites={data.prerequisites} />
                  </div>
                </div>

                {!isAcknowledged && (
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
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
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
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
                    quizId={currentQuizSessionId}
                    onRestartQuiz={handleQuizRestart}
                    onSubmitQuiz={handleQuizSubmit}
                    canAttempt={canAttempt}
                    attemptsToday={attemptsToday}
                    quizPassed={quizPassed}
                    topic={data.topic}
                    onLearningPathGenerated={refreshUserData}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {showAuthForms && (
        <AuthForms onAuthSuccess={handleAuthSuccess} onClose={() => setShowAuthForms(false)} />
      )}
      {user && user.role === 'admin' ? (
        <AdminDashboard user={user} onLogout={handleLogout} />
      ) : user && user.role === 'student' ? (
        <StudentDashboard 
          user={user} 
          onLogout={handleLogout} 
          onStartLearning={handleStartLearning}
        />
      ) : (
        <LandingPage 
          onStartLearning={() => setShowAuthForms(true)}
          onAuthClick={() => setShowAuthForms(true)}
        />
      )}
      {showUserProfile && user && (
        <UserProfile user={user} onLogout={handleLogout} onClose={() => setShowUserProfile(false)} />
      )}
    </>
  );
}

function App() {
  return (
    <WebSocketProvider>
      <AppContent />
    </WebSocketProvider>
  );
}

export default App;
