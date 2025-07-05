import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
// import Graph from './components/Graph'; // Unused import
// import Quiz from './components/Quiz'; // Unused import
import LandingPage from './components/LandingPage';
import AuthForms from './components/AuthForms';
// import UserProfile from './components/UserProfile'; // Unused import
// import { v4 as uuidv4 } from 'uuid'; // Unused import
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import LearningInterfaceComponent from './components/LearningInterface';
import { WebSocketProvider, useWebSocket } from './contexts/WebSocketContext';
// import { API_ENDPOINTS, API_BASE_URL } from './config/api'; // Unused import
import GlobalStyles from './components/GlobalStyles';


// Type definitions (unused - commented out)
/*
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
*/

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

// Auth wrapper component
function AuthWrapper() {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthForms, setShowAuthForms] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { connect: connectWebSocket, disconnect: disconnectWebSocket } = useWebSocket();

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

        // Redirect to appropriate dashboard if on root
        if (location.pathname === '/') {
          if (parsedUser.role === 'admin') {
            navigate('/admin');
          } else if (parsedUser.role === 'student') {
            navigate('/student');
          }
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, [connectWebSocket, navigate, location.pathname]);

  const handleAuthSuccess = (token: string, userData: User) => {
    setUser(userData);
    setShowAuthForms(false);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // Connect to WebSocket after successful authentication
    connectWebSocket(token);

    // Navigate to appropriate dashboard
    if (userData.role === 'admin') {
      navigate('/admin');
    } else if (userData.role === 'student') {
      navigate('/student');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setShowAuthForms(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    // Disconnect WebSocket
    disconnectWebSocket();
    // Navigate to home page
    navigate('/');
  };

  const handleBackFromLearning = () => {
    // Refresh user data from localStorage before navigating back
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing updated user data:', error);
      }
    }
    navigate('/student');
  };

  return (
    <>
      <GlobalStyles />
      {showAuthForms && (
        <AuthForms onAuthSuccess={handleAuthSuccess} onClose={() => setShowAuthForms(false)} />
      )}

      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage onStartLearning={() => setShowAuthForms(true)} onAuthClick={() => setShowAuthForms(true)} />} />

        {/* Auth route */}
        <Route path="/auth" element={<AuthForms onAuthSuccess={handleAuthSuccess} onClose={() => navigate('/')} />} />

        {/* Admin routes */}
        <Route path="/admin/*" element={
          user && user.role === 'admin' ? (
            <AdminDashboard user={user} onLogout={handleLogout} />
          ) : (
            <Navigate to="/auth" replace />
          )
        } />

        {/* Learning interface route - must come before wildcard route */}
        <Route path="/student/learn" element={
          user && user.role === 'student' ? (
            <LearningInterfaceComponent user={user} onBack={handleBackFromLearning} />
          ) : (
            <Navigate to="/auth" replace />
          )
        } />

        {/* Student dashboard routes */}
        <Route path="/student/*" element={
          user && user.role === 'student' ? (
            <StudentDashboard user={user} onLogout={handleLogout} onStartLearning={() => navigate('/student/learn')} />
          ) : (
            <Navigate to="/auth" replace />
          )
        } />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}



/* Learning Interface Component (unused - using external component)
function LearningInterface({ user, onBack }: { user: User; onBack: () => void }) {
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
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');

  // Function to refresh user data
  const refreshUserData = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.PROFILE, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const updatedUser = response.data;
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error: any) {
      console.error('Error refreshing user data:', error);
    }
  };

  // Check remaining attempts on mount or topic change
  useEffect(() => {
    const checkAttempts = async () => {
      if (!topic || !data) return;
      try {
        const res = await axios.get(API_ENDPOINTS.QUIZ_ATTEMPTS, {
          params: { topic },
        });
        setAttemptsToday(res.data.attemptsToday);
        setCanAttempt(res.data.canAttempt);
      } catch (err) {
        console.error('Error checking quiz attempts:', err);
      }
    };
    checkAttempts();
  }, [topic, data]);

  // Auto-load prerequisites when topic is set from dashboard
  useEffect(() => {
    const selectedTopicForQuiz = localStorage.getItem('selectedTopicForQuiz');
    if (selectedTopicForQuiz) {
      setTopic(selectedTopicForQuiz);
      localStorage.removeItem('selectedTopicForQuiz');

      // Check if this topic already has prerequisites in user data
      const userPrereq = user?.prerequisites?.find(p => p.topic === selectedTopicForQuiz);
      if (userPrereq) {
        setData(userPrereq);
        setIsAcknowledged(true);
      }
    }
  }, [user]);

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

  useEffect(() => {
    testConnection();
  }, []);

  const handleSubmit = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic.');
      return;
    }

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
      await refreshUserData();
    } catch (err: any) {
      console.error('Error fetching prerequisites:', err);
      if (err.response?.status === 401) {
        alert('Authentication error. Please log in again.');
      } else {
        alert('Failed to fetch prerequisites. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchMCQs = async (resetCache: boolean = false) => {
    if (!data || (!isAcknowledged && !resetCache)) return;

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
    if (passed) {
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
        return;
      }
    } catch (err) {
      console.error('Error checking quiz attempts:', err);
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
      await refreshUserData();
    } catch (err) {
      console.error('Error recording quiz attempt:', err);
      alert('Failed to record quiz attempt. Please try again.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(90deg, #6366f1 0%, #2dd4bf 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>LearnPath</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={onBack}
              style={{
                padding: '10px 20px',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              ← Back to Dashboard
            </button>
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
              }} />
              <span style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
                {connectionStatus === 'connected' ? 'Connected' :
                 connectionStatus === 'checking' ? 'Checking...' :
                 'Disconnected'}
              </span>
            </div>
          </div>
        </div>

        // Learning Interface Content
        <div style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          {!data ? (
            <div>
              <h2 style={{ marginBottom: '20px', color: '#1f2937' }}>Enter a Topic to Learn</h2>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g., Machine Learning, React, Python..."
                  style={{
                    flex: 1,
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    padding: '12px 24px',
                    background: loading ? '#9ca3af' : '#6366f1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontWeight: '600'
                  }}
                >
                  {loading ? 'Loading...' : 'Get Prerequisites'}
                </button>
              </div>
            </div>
          ) : (
            <div>
              {data && <Graph topic={data.topic} prerequisites={data.prerequisites} />}
              {selectedConcept && (
                <div style={{ marginTop: '20px', padding: '20px', background: '#f9fafb', borderRadius: '8px' }}>
                  <h3 style={{ marginBottom: '10px', color: '#1f2937' }}>{selectedConcept}</h3>
                  <div style={{ color: '#4b5563', lineHeight: '1.6' }}>
                    {conceptSummary.split('\n').map((line, index) => (
                      <p key={index} style={{ margin: '8px 0' }}>{line}</p>
                    ))}
                  </div>
                </div>
              )}
              {data && !mcqs && isAcknowledged && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <button
                    onClick={() => fetchMCQs()}
                    disabled={quizLoading || !canAttempt}
                    style={{
                      padding: '12px 24px',
                      background: quizLoading || !canAttempt ? '#9ca3af' : '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: quizLoading || !canAttempt ? 'not-allowed' : 'pointer',
                      fontWeight: '600'
                    }}
                  >
                    {quizLoading ? 'Loading Quiz...' : !canAttempt ? `Max attempts reached (${attemptsToday}/3)` : 'Start Quiz'}
                  </button>
                </div>
              )}
              {mcqs && (
                <Quiz
                  mcqs={mcqs}
                  quizId={currentQuizSessionId}
                  onSubmitQuiz={handleQuizSubmit}
                  onRestartQuiz={handleQuizRestart}
                  attemptsToday={attemptsToday}
                  canAttempt={canAttempt}
                  quizPassed={quizPassed}
                  topic={data?.topic || ''}
                  onLearningPathGenerated={refreshUserData}
                  onBackToHome={handleBackFromLearning}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
*/


function App() {
  return (
    <WebSocketProvider>
      <AuthWrapper />
    </WebSocketProvider>
  );
}

export default App;
