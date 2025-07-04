import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';
import ChatSupport from './ChatSupport';
import Graph from './Graph';
import Quiz from './Quiz';
import { useWebSocket } from '../contexts/WebSocketContext';
import { API_ENDPOINTS, API_BASE_URL } from '../config/api';
import { v4 as uuidv4 } from 'uuid';

interface WeeklyContent {
  week: number;
  topics: string[];
  tasks?: string[];
  description?: string;
}

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'student';
  topics?: string[];
  prerequisites?: { topic: string; prerequisites: string[] }[];
  quizScores?: { topic: string; score: number; date: string }[];
  learningPaths?: { topic: string; weeks: number; level: string; durationPerDay: string; path: WeeklyContent[]; generatedAt: string }[];
  avatar?: string;
}

interface Notification {
  _id: string;
  type: 'chat_response' | 'system' | 'quiz_result';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  relatedData?: Record<string, unknown>;
}

interface StudentDashboardProps {
  user: User;
  onLogout: () => void;
  onStartLearning: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ user, onLogout, onStartLearning }) => {
  const [activePage, setActivePage] = useState<'home' | 'myCourses' | 'courses'>('home');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showChatSupport, setShowChatSupport] = useState(false);
  const [initialChatId, setInitialChatId] = useState<string | null>(null);
  
  // Notifications state
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loadingNotifications, setLoadingNotifications] = useState(false);

  // Detailed topic view state
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showTopicDetails, setShowTopicDetails] = useState(false);

  // Prerequisites modal state
  const [showPrereqModal, setShowPrereqModal] = useState(false);
  const [topic, setTopic] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ topic: string; prerequisites: string[] } | null>(null);
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);
  const [conceptSummary, setConceptSummary] = useState('');
  const [mcqs, setMcqs] = useState<Array<{ id: string; topic: string; question: string; options: string[]; answer: string }> | null>(null);
  const [quizLoading, setQuizLoading] = useState(false);
  const [currentQuizSessionId, setCurrentQuizSessionId] = useState<string>('');
  const [canAttempt, setCanAttempt] = useState(true);
  const [attemptsToday, setAttemptsToday] = useState(0);
  const [quizPassed, setQuizPassed] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');

  const { isConnected } = useWebSocket();

  const handleThemeToggle = () => setDarkMode((prev) => !prev);

  // Close dropdowns on outside click
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.profile-dropdown')) {
        setShowProfileDropdown(false);
      }
      if (!target.closest('.notifications-dropdown')) {
        setShowNotifications(false);
      }
    };
    
    if (showProfileDropdown || showNotifications) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showProfileDropdown, showNotifications]);

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoadingNotifications(true);
        const [notificationsRes, unreadRes] = await Promise.all([
          axios.get(API_ENDPOINTS.NOTIFICATIONS, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }),
          axios.get(API_ENDPOINTS.NOTIFICATIONS_UNREAD_COUNT, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
        ]);
        setNotifications(notificationsRes.data);
        setUnreadCount(unreadRes.data.count);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoadingNotifications(false);
      }
    };

    fetchNotifications();
    // Poll for new notifications every 30 seconds
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleMarkNotificationRead = async (notificationId: string) => {
    try {
      await axios.put(API_ENDPOINTS.NOTIFICATION_READ(notificationId), {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNotifications(prev => 
        prev.map(n => n._id === notificationId ? { ...n, isRead: true } : n)
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await axios.put(API_ENDPOINTS.NOTIFICATIONS_READ_ALL, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  const handleNotificationClick = async (notification: Notification) => {
    // Mark notification as read
    await handleMarkNotificationRead(notification._id);
    
    // If it's a chat-related notification, open the chat
    if (notification.type === 'chat_response' && notification.relatedData?.chatId) {
      setShowChatSupport(true);
      setInitialChatId(notification.relatedData.chatId as string);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleCloseChatSupport = () => {
    setShowChatSupport(false);
    setInitialChatId(null);
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setShowTopicDetails(true);
  };

  const handleCloseTopicDetails = () => {
    setShowTopicDetails(false);
    setSelectedTopic(null);
  };

  const handleStartQuiz = (topic: string) => {
    // Navigate to the learning interface with the specific topic
    onStartLearning();
    // You can also store the topic in localStorage or pass it through props
    localStorage.setItem('selectedTopicForQuiz', topic);
  };

  const handleGetPrerequisites = async (topicName: string) => {
    setTopic(topicName);
    setShowPrereqModal(true);
    setData(null);
    setSelectedConcept(null);
    setConceptSummary('');
    setIsAcknowledged(false);
    setMcqs(null);
    setCurrentQuizSessionId(uuidv4());
    setQuizPassed(false);

    // Automatically fetch prerequisites for the selected topic
    if (topicName.trim()) {
      setLoading(true);
      try {
        const response = await axios.post(`${API_BASE_URL}/api/prerequisites`, {
          topic: topicName
        }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });

        console.log('Prerequisites response:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching prerequisites:', error);
        alert('Failed to fetch prerequisites. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

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
    } catch (err: unknown) {
      console.error('Error fetching prerequisites:', err);
      if ((err as { response?: { status?: number } }).response?.status === 401) {
        alert('Authentication error. Please log in again.');
      } else {
        alert('Failed to fetch prerequisites. Please try again.');
      }
    } finally {
      setLoading(false);
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
        courseName: data.topic // Send the course/topic name for better MCQ generation context
      });
      setMcqs(res.data);
    } catch (err) {
      console.error('Error fetching MCQs:', err);
      alert('Failed to fetch quiz questions. Please try again.');
    } finally {
      setQuizLoading(false);
    }
  };

  const handleQuizRestart = async (_score: number, passed: boolean) => {
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
    } catch (err) {
      console.error('Error recording quiz attempt:', err);
      alert('Failed to record quiz attempt. Please try again.');
    }
  };

  const refreshUserData = async () => {
    try {
      const response = await axios.get(API_ENDPOINTS.PROFILE, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const updatedUser = response.data;
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error: unknown) {
      console.error('Error refreshing user data:', error);
    }
  };

  const handleClosePrereqModal = () => {
    setShowPrereqModal(false);
    setTopic('');
    setData(null);
    setLoading(false);
    setIsAcknowledged(false);
    setSelectedConcept(null);
    setConceptSummary('');
  };



  // Hardcoded courses data
  const availableCourses = [
    {
      id: 1,
      title: 'Machine Learning',
      description: 'Learn the fundamentals of machine learning algorithms and their applications',
      duration: '8-12 weeks',
      difficulty: 'Intermediate',
      category: 'AI & Data Science',
      icon: '🤖',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Artificial Intelligence',
      description: 'Explore the world of AI, neural networks, and intelligent systems',
      duration: '10-14 weeks',
      difficulty: 'Advanced',
      category: 'AI & Data Science',
      icon: '🧠',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Master data analysis, visualization, and statistical modeling',
      duration: '6-10 weeks',
      difficulty: 'Intermediate',
      category: 'AI & Data Science',
      icon: '📊',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Web Development',
      description: 'Build modern web applications with React, Node.js, and databases',
      duration: '8-12 weeks',
      difficulty: 'Beginner',
      category: 'Software Development',
      icon: '💻',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Create iOS and Android apps using React Native and Flutter',
      duration: '10-14 weeks',
      difficulty: 'Intermediate',
      category: 'Software Development',
      icon: '📱',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      description: 'Learn about network security, cryptography, and ethical hacking',
      duration: '8-12 weeks',
      difficulty: 'Advanced',
      category: 'Security',
      icon: '🔒',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    }
  ];

  /*
  const handleCourseSelect = (courseTitle: string) => {
    // Navigate to the learning interface with the selected course
    onStartLearning();
    // Store the course topic for the learning process
    localStorage.setItem('selectedTopicForQuiz', courseTitle);
  };
  */

  return (
    <div className={darkMode ? 'dark' : ''} style={{ minHeight: '100vh', background: 'linear-gradient(90deg, #6366f1 0%, #2dd4bf 100%)' }}>
      {/* Navbar */}
      <nav
        className="dashboard-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 40px',
          background: '#fff',
          borderBottom: '1px solid #e5e7eb',
          position: 'relative',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        }}>
        <div style={{ fontWeight: 700, fontSize: 22, color: '#18181b' }}>LearnPath</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <button onClick={() => setActivePage('home')} style={{
            background: activePage === 'home' ? '#e0e7ff' : 'none',
            color: activePage === 'home' ? '#6366f1' : '#18181b',
            border: 'none',
            borderRadius: 8,
            padding: '8px 18px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            outline: 'none',
            transition: 'background 0.2s',
          }}>Home</button>
          <button onClick={() => setActivePage('courses')} style={{
            background: activePage === 'courses' ? '#e0e7ff' : 'none',
            color: activePage === 'courses' ? '#6366f1' : '#18181b',
            border: 'none',
            borderRadius: 8,
            padding: '8px 18px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            outline: 'none',
            transition: 'background 0.2s',
          }}>Courses</button>
          <button onClick={() => setActivePage('myCourses')} style={{
            background: activePage === 'myCourses' ? '#e0e7ff' : 'none',
            color: activePage === 'myCourses' ? '#6366f1' : '#18181b',
            border: 'none',
            borderRadius: 8,
            padding: '8px 18px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            outline: 'none',
            transition: 'background 0.2s',
          }}>My Courses</button>
          
          {/* Notifications Bell */}
          <div style={{ position: 'relative' }} className="notifications-dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNotifications(!showNotifications);
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 24,
                color: '#6366f1',
                position: 'relative',
                padding: 8,
              }}
              title="Notifications"
            >
              🔔
              {unreadCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: '#ef4444',
                  color: 'white',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  fontSize: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}>
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="notifications-dropdown" style={{
                position: 'absolute',
                right: 0,
                top: 50,
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                minWidth: 320,
                maxWidth: 400,
                maxHeight: 400,
                overflowY: 'auto',
                zIndex: 10,
                padding: 8,
              }}>
                <div style={{ 
                  padding: '12px 16px', 
                  borderBottom: '1px solid #e5e7eb', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                }}>
                  <span style={{ fontWeight: 600, fontSize: 16 }}>
                    Unread Notifications ({unreadCount})
                  </span>
                  {unreadCount > 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMarkAllAsRead();
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#6366f1',
                        fontSize: 12,
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontWeight: 500,
                      }}
                    >
                      Mark all read
                    </button>
                  )}
                </div>
                {loadingNotifications ? (
                  <div style={{ padding: 16, textAlign: 'center', color: '#6b7280' }}>
                    Loading...
                  </div>
                ) : notifications.filter(n => !n.isRead).length === 0 ? (
                  <div style={{ padding: 16, textAlign: 'center', color: '#6b7280' }}>
                    No unread notifications
                  </div>
                ) : (
                  notifications
                    .filter(notification => !notification.isRead)
                    .slice(0, 10)
                    .map(notification => (
                      <div
                        key={notification._id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNotificationClick(notification);
                        }}
                        style={{
                          padding: '12px 16px',
                          borderBottom: '1px solid #f3f4f6',
                          cursor: 'pointer',
                          background: '#f0f9ff',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#e0f2fe'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#f0f9ff'}
                      >
                        <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                          {notification.title}
                        </div>
                        <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 4 }}>
                          {notification.message}
                        </div>
                        <div style={{ fontSize: 11, color: '#9ca3af' }}>
                          {formatDate(notification.createdAt)}
                        </div>
                        {notification.type === 'chat_response' && (
                          <div style={{ fontSize: 11, color: '#6366f1', marginTop: 4 }}>
                            💬 Click to view chat
                          </div>
                        )}
                      </div>
                    ))
                )}
              </div>
            )}
          </div>

          {/* Theme toggle icon */}
          <button onClick={handleThemeToggle} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 22,
            color: '#6366f1',
            marginLeft: 8,
          }} title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {darkMode ? '🌙' : '☀️'}
          </button>
          
          {/* Profile dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowProfileDropdown((prev) => !prev)}
              style={{
                background: 'none',
                border: '2px solid #6366f1',
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 18,
                color: '#6366f1',
                marginLeft: 8,
                cursor: 'pointer',
                overflow: 'hidden',
                padding: 0
              }}
              title="Profile"
              className="profile-dropdown"
            >
              {user.avatar ? (
                <img src={user.avatar} alt="avatar" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
              ) : (
                user.username.charAt(0).toUpperCase()
              )}
            </button>
            {showProfileDropdown && (
              <div className="profile-dropdown" style={{
                position: 'absolute',
                right: 0,
                top: 50,
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 10,
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                minWidth: 180,
                zIndex: 10,
                padding: 8,
              }}>
                <button onClick={() => { setShowProfile(true); setShowProfileDropdown(false); }} style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: '#18181b',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '10px 0',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderBottom: '1px solid #e5e7eb',
                }}>My Profile</button>
                <button onClick={onLogout} style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: '#dc2626',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '10px 0',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="dashboard-content"
        style={{
          maxWidth: 1200,
          margin: '60px auto 0',
          padding: '0 20px',
          minHeight: 400,
        }}>
        {/* Home Page */}
        {activePage === 'home' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 420,
            textAlign: 'center',
          }}>
            <div style={{
              background: '#fff',
              borderRadius: 18,
              boxShadow: '0 8px 32px rgba(99,102,241,0.10)',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: 600,
              width: '100%',
              margin: '0 auto',
            }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#18181b',
                marginBottom: '1.5rem',
                letterSpacing: '-1px',
                textShadow: '0 2px 8px rgba(99,102,241,0.08)'
              }}>
                Hi, <span style={{ color: '#10b981' }}>{user.username}</span>! 👋
              </h1>
              
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: '#e0e7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 38,
                color: '#6366f1',
                fontWeight: 700,
                boxShadow: '0 2px 12px rgba(99,102,241,0.08)',
                overflow: 'hidden',
                marginBottom: '2rem'
              }}>
                {user.avatar ? (
                  <img src={user.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                ) : (
                  user.username.charAt(0).toUpperCase()
                )}
              </div>

              <div style={{
                fontSize: 18,
                color: '#6b7280',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                maxWidth: 500,
              }}>
                Welcome to LearnPath! Your AI-powered learning companion that creates personalized learning journeys. 
                Discover topics, take quizzes, and follow custom learning paths designed just for you.
              </div>

              <button
                onClick={onStartLearning}
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 12,
                  padding: '16px 32px',
                  fontSize: 18,
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(99,102,241,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.3)';
                }}
              >
                Get Started 🚀
              </button>
            </div>
          </div>
        )}

        {/* Courses Page */}
        {activePage === 'courses' && (
          <div style={{
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 20px',
          }}>
            {/* Header Section */}
            <div style={{
              textAlign: 'center',
              marginBottom: 40,
              animation: 'slideInDown 0.6s ease-out',
            }}>
              <h1 style={{
                fontSize: 36,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 12,
              }}>
                Popular Learning Topics (Examples)
              </h1>
              <p style={{
                fontSize: 18,
                color: darkMode ? '#9ca3af' : '#6b7280',
                marginBottom: 24,
              }}>
                These are just a few examples. You can start learning any topic you want—just enter your subject of interest!
              </p>
            </div>

            {/* Courses Grid */}
            <div
              className="course-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: 24,
              marginBottom: 40,
            }}>
              {availableCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="course-card clickable"
                  style={{
                    background: darkMode ? '#1f2937' : '#ffffff',
                    borderRadius: 20,
                    padding: 24,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid',
                    borderColor: darkMode ? '#374151' : '#e5e7eb',
                    transition: 'all 0.3s ease',
                    animation: `slideInUp 0.6s ease-out ${0.1 + index * 0.1}s both`,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Course Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 16,
                  }}>
                    <div style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: course.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 28,
                      marginRight: 16,
                    }}>
                      {course.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: darkMode ? '#ffffff' : '#1f2937',
                        margin: '0 0 4px 0',
                      }}>
                        {course.title}
                      </h3>
                      <span style={{
                        fontSize: 12,
                        color: darkMode ? '#9ca3af' : '#6b7280',
                        background: darkMode ? '#374151' : '#f3f4f6',
                        padding: '4px 8px',
                        borderRadius: 12,
                        fontWeight: 500,
                      }}>
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Course Description */}
                  <p style={{
                    fontSize: 14,
                    color: darkMode ? '#9ca3af' : '#6b7280',
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}>
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div style={{
                    display: 'flex',
                    gap: 16,
                    marginBottom: 20,
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: 12,
                      color: darkMode ? '#9ca3af' : '#6b7280',
                    }}>
                      <span style={{ marginRight: 4 }}>⏱️</span>
                      {course.duration}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: 12,
                      color: darkMode ? '#9ca3af' : '#6b7280',
                    }}>
                      <span style={{ marginRight: 4 }}>📈</span>
                      {course.difficulty}
                    </div>
                  </div>

                  {/* Get Prerequisites Button */}
                  <button
                    onClick={() => handleGetPrerequisites(course.title)}
                    style={{
                      width: '100%',
                      background: course.color,
                      color: 'white',
                      border: 'none',
                      borderRadius: 12,
                      padding: '12px 24px',
                      fontSize: 16,
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    Get Prerequisites �
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Courses Page (formerly History) */}
        {activePage === 'myCourses' && (
          <div style={{
            width: '100%',
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 20px',
          }}>
            {/* Header Section */}
            <div style={{
              textAlign: 'center',
              marginBottom: 40,
              animation: 'slideInDown 0.6s ease-out',
            }}>
              <h1 style={{
                fontSize: 36,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 12,
              }}>
                Learning Journey
              </h1>
              <p style={{
                fontSize: 18,
                color: darkMode ? '#9ca3af' : '#6b7280',
                marginBottom: 24,
              }}>
                Track your progress, achievements, and personalized learning paths
              </p>
              
              {/* Stats Overview */}
              <div
                className="stats-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 24,
                marginBottom: 32,
              }}>
                <div
                  className="stat-card"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: 16,
                    padding: '24px 20px',
                    color: 'white',
                    textAlign: 'center',
                    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                    animation: 'slideInUp 0.6s ease-out 0.1s both',
                  }}>
                  <div className="stat-number" style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
                    {user.topics?.length || 0}
                  </div>
                  <div className="stat-label" style={{ fontSize: 14, opacity: 0.9 }}>Topics Studied</div>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: 16,
                  padding: '24px 20px',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 8px 32px rgba(240, 147, 251, 0.3)',
                  animation: 'slideInUp 0.6s ease-out 0.2s both',
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
                    {user.quizScores?.length || 0}
                  </div>
                  <div style={{ fontSize: 14, opacity: 0.9 }}>Quizzes Completed</div>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: 16,
                  padding: '24px 20px',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 8px 32px rgba(79, 172, 254, 0.3)',
                  animation: 'slideInUp 0.6s ease-out 0.3s both',
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
                    {user.learningPaths?.length || 0}
                  </div>
                  <div style={{ fontSize: 14, opacity: 0.9 }}>Learning Paths</div>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                  borderRadius: 16,
                  padding: '24px 20px',
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 8px 32px rgba(67, 233, 123, 0.3)',
                  animation: 'slideInUp 0.6s ease-out 0.4s both',
                }}>
                  <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
                    {user.quizScores ? Math.round(user.quizScores.reduce((acc, score) => acc + score.score, 0) / user.quizScores.length) : 0}%
                  </div>
                  <div style={{ fontSize: 14, opacity: 0.9 }}>Average Score</div>
                </div>
              </div>

              {/* Enhanced Topic Details Section */}
              <div style={{
                display: 'grid',
                gap: 32,
                gridTemplateColumns: '1fr',
              }}>
                {/* Comprehensive Topic Overview */}
                <div style={{
                  background: darkMode ? '#1f2937' : '#ffffff',
                  borderRadius: 20,
                  padding: 32,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  border: '1px solid',
                  borderColor: darkMode ? '#374151' : '#e5e7eb',
                  animation: 'slideInUp 0.6s ease-out 0.5s both',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 32,
                  }}>
                    <div style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 28,
                      marginRight: 20,
                    }}>
                      📚
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: darkMode ? '#ffffff' : '#1f2937',
                        margin: 0,
                      }}>
                        Your Learning Journey
                      </h3>
                      <p style={{
                        fontSize: 16,
                        color: darkMode ? '#9ca3af' : '#6b7280',
                        margin: 0,
                      }}>
                        Comprehensive overview of all your topics and progress
                      </p>
                    </div>
                  </div>

                  {user.topics && user.topics.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      {user.topics.map((topic, index) => {
                        const prereq = user.prerequisites?.find(p => p.topic === topic);
                        const topicScores = user.quizScores?.filter(s => s.topic === topic) || [];
                        const learningPath = user.learningPaths?.find(p => p.topic === topic);
                        const averageScore = topicScores.length > 0 
                          ? topicScores.reduce((acc, score) => acc + score.score, 0) / topicScores.length 
                          : 0;
                        const bestScore = topicScores.length > 0 
                          ? Math.max(...topicScores.map(s => s.score)) 
                          : 0;
                        const attemptsCount = topicScores.length;

                        return (
                          <div key={index} style={{
                            background: darkMode ? '#374151' : '#f8fafc',
                            borderRadius: 16,
                            padding: 24,
                            border: '1px solid',
                            borderColor: darkMode ? '#4b5563' : '#e5e7eb',
                            transition: 'all 0.3s ease',
                            animation: `slideInRight 0.6s ease-out ${0.6 + index * 0.1}s both`,
                            cursor: 'pointer',
                          }}
                          onClick={() => handleTopicClick(topic)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}>
                            
                            {/* Topic Header */}
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: 20,
                            }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                  width: 48,
                                  height: 48,
                                  borderRadius: '50%',
                                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: 20,
                                  color: 'white',
                                  fontWeight: 600,
                                }}>
                                  {topic.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <h4 style={{
                                    fontSize: 24,
                                    fontWeight: 700,
                                    color: darkMode ? '#ffffff' : '#1f2937',
                                    margin: 0,
                                  }}>
                                    {topic}
                                  </h4>
                                  <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    marginTop: 4,
                                  }}>
                                    <span style={{
                                      padding: '4px 12px',
                                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                      color: 'white',
                                      borderRadius: 20,
                                      fontSize: 12,
                                      fontWeight: 600,
                                    }}>
                                      {learningPath?.level || 'Beginner'}
                                    </span>
                                    {attemptsCount > 0 && (
                                      <span style={{
                                        padding: '4px 8px',
                                        background: darkMode ? '#4b5563' : '#e0e7ff',
                                        color: darkMode ? '#e5e7eb' : '#3730a3',
                                        borderRadius: 12,
                                        fontSize: 11,
                                        fontWeight: 500,
                                      }}>
                                        {attemptsCount} attempt{attemptsCount > 1 ? 's' : ''}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                              }}>
                                {averageScore > 0 && (
                                  <div style={{
                                    textAlign: 'center',
                                    padding: '12px 16px',
                                    background: darkMode ? '#4b5563' : '#ffffff',
                                    borderRadius: 12,
                                    border: '1px solid',
                                    borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                                    minWidth: 80,
                                  }}>
                                    <div style={{
                                      fontSize: 18,
                                      fontWeight: 700,
                                      color: averageScore >= 80 ? '#10b981' : 
                                             averageScore >= 60 ? '#f59e0b' : '#ef4444',
                                    }}>
                                      {averageScore.toFixed(1)}%
                                    </div>
                                    <div style={{
                                      fontSize: 11,
                                      color: darkMode ? '#9ca3af' : '#6b7280',
                                    }}>
                                      Average
                                    </div>
                                  </div>
                                )}
                                
                                {bestScore > 0 && (
                                  <div style={{
                                    textAlign: 'center',
                                    padding: '12px 16px',
                                    background: darkMode ? '#4b5563' : '#ffffff',
                                    borderRadius: 12,
                                    border: '1px solid',
                                    borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                                    minWidth: 80,
                                  }}>
                                    <div style={{
                                      fontSize: 18,
                                      fontWeight: 700,
                                      color: '#10b981',
                                    }}>
                                      {bestScore.toFixed(1)}%
                                    </div>
                                    <div style={{
                                      fontSize: 11,
                                      color: darkMode ? '#9ca3af' : '#6b7280',
                                    }}>
                                      Best
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Topic Details Grid */}
                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                              gap: 20,
                            }}>
                              
                              {/* Prerequisites Section */}
                              <div style={{
                                background: darkMode ? '#4b5563' : '#ffffff',
                                borderRadius: 12,
                                padding: 20,
                                border: '1px solid',
                                borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                              }}>
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginBottom: 16,
                                }}>
                                  <span style={{ fontSize: 20, marginRight: 8 }}>🎯</span>
                                  <h5 style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: darkMode ? '#ffffff' : '#1f2937',
                                    margin: 0,
                                  }}>
                                    Prerequisites
                                  </h5>
                                </div>
                                
                                {prereq && prereq.prerequisites.length > 0 ? (
                                  <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 6,
                                  }}>
                                    {prereq.prerequisites.map((pr, idx) => (
                                      <span key={idx} style={{
                                        padding: '6px 10px',
                                        background: darkMode ? '#6b7280' : '#e0e7ff',
                                        color: darkMode ? '#e5e7eb' : '#3730a3',
                                        borderRadius: 8,
                                        fontSize: 12,
                                        fontWeight: 500,
                                      }}>
                                        {pr}
                                      </span>
                                    ))}
                                  </div>
                                ) : (
                                  <div style={{
                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                    fontSize: 14,
                                    fontStyle: 'italic',
                                  }}>
                                    No prerequisites defined
                                  </div>
                                )}
                              </div>

                              {/* Quiz Performance Section */}
                              <div style={{
                                background: darkMode ? '#4b5563' : '#ffffff',
                                borderRadius: 12,
                                padding: 20,
                                border: '1px solid',
                                borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                              }}>
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginBottom: 16,
                                }}>
                                  <span style={{ fontSize: 20, marginRight: 8 }}>📊</span>
                                  <h5 style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: darkMode ? '#ffffff' : '#1f2937',
                                    margin: 0,
                                  }}>
                                    Quiz Performance
                                  </h5>
                                </div>
                                
                                {topicScores.length > 0 ? (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {topicScores.map((score, scoreIndex) => (
                                      <div key={scoreIndex} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '8px 12px',
                                        background: darkMode ? '#6b7280' : '#f8fafc',
                                        borderRadius: 8,
                                      }}>
                                        <div style={{
                                          fontSize: 14,
                                          color: darkMode ? '#e5e7eb' : '#374151',
                                        }}>
                                          Attempt {scoreIndex + 1}
                                        </div>
                                        <div style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: 8,
                                        }}>
                                          <div style={{
                                            padding: '4px 8px',
                                            background: score.score >= 80 ? '#10b981' :
                                                       score.score >= 60 ? '#f59e0b' : '#ef4444',
                                            color: 'white',
                                            borderRadius: 6,
                                            fontSize: 12,
                                            fontWeight: 600,
                                          }}>
                                            {score.score.toFixed(1)}%
                                          </div>
                                          <span style={{
                                            fontSize: 12,
                                            color: darkMode ? '#9ca3af' : '#6b7280',
                                          }}>
                                            {formatDate(score.date)}
                                          </span>
                                        </div>
                                      </div>
                                    ))}
                                    
                                    {/* Retake Quiz Button */}
                                    <button
                                      onClick={() => handleStartQuiz(topic)}
                                      style={{
                                        padding: '8px 12px',
                                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: 6,
                                        fontSize: 12,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        marginTop: 8,
                                      }}
                                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                      📝 Retake Quiz
                                    </button>
                                  </div>
                                ) : prereq ? (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <div style={{
                                      color: darkMode ? '#9ca3af' : '#6b7280',
                                      fontSize: 14,
                                      fontStyle: 'italic',
                                      marginBottom: 8,
                                    }}>
                                      Prerequisites ready! Take the quiz to test your knowledge.
                                    </div>
                                    <button
                                      onClick={() => handleStartQuiz(topic)}
                                      style={{
                                        padding: '10px 16px',
                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: 8,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: 8,
                                      }}
                                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                      🚀 Start Quiz
                                    </button>
                                  </div>
                                ) : (
                                  <div style={{
                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                    fontSize: 14,
                                    fontStyle: 'italic',
                                  }}>
                                    Generate prerequisites first to take the quiz
                                  </div>
                                )}
                              </div>

                              {/* Learning Path Section */}
                              <div style={{
                                background: darkMode ? '#4b5563' : '#ffffff',
                                borderRadius: 12,
                                padding: 20,
                                border: '1px solid',
                                borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                              }}>
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  marginBottom: 16,
                                }}>
                                  <span style={{ fontSize: 20, marginRight: 8 }}>🛤️</span>
                                  <h5 style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: darkMode ? '#ffffff' : '#1f2937',
                                    margin: 0,
                                  }}>
                                    Learning Path
                                  </h5>
                                </div>
                                
                                {learningPath ? (
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <div style={{
                                      display: 'grid',
                                      gridTemplateColumns: 'repeat(2, 1fr)',
                                      gap: 8,
                                    }}>
                                      <div style={{
                                        textAlign: 'center',
                                        padding: '8px',
                                        background: darkMode ? '#6b7280' : '#f8fafc',
                                        borderRadius: 6,
                                      }}>
                                        <div style={{
                                          fontSize: 16,
                                          fontWeight: 700,
                                          color: darkMode ? '#ffffff' : '#1f2937',
                                        }}>
                                          {learningPath.weeks}
                                        </div>
                                        <div style={{
                                          fontSize: 10,
                                          color: darkMode ? '#9ca3af' : '#6b7280',
                                        }}>
                                          Weeks
                                        </div>
                                      </div>
                                      
                                      <div style={{
                                        textAlign: 'center',
                                        padding: '8px',
                                        background: darkMode ? '#6b7280' : '#f8fafc',
                                        borderRadius: 6,
                                      }}>
                                        <div style={{
                                          fontSize: 14,
                                          fontWeight: 700,
                                          color: darkMode ? '#ffffff' : '#1f2937',
                                        }}>
                                          {learningPath.durationPerDay}
                                        </div>
                                        <div style={{
                                          fontSize: 10,
                                          color: darkMode ? '#9ca3af' : '#6b7280',
                                        }}>
                                          Daily
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div style={{
                                      fontSize: 11,
                                      color: darkMode ? '#9ca3af' : '#6b7280',
                                    }}>
                                      Generated on {formatDate(learningPath.generatedAt)}
                                    </div>
                                    
                                    <button style={{
                                      padding: '8px 12px',
                                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                      color: 'white',
                                      border: 'none',
                                      borderRadius: 6,
                                      fontSize: 12,
                                      fontWeight: 600,
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                      View {learningPath.path?.length || 0} Modules
                                    </button>
                                  </div>
                                ) : (
                                  <div style={{
                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                    fontSize: 14,
                                    fontStyle: 'italic',
                                  }}>
                                    No learning path generated yet
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div style={{
                      textAlign: 'center',
                      padding: 60,
                      color: darkMode ? '#9ca3af' : '#6b7280',
                    }}>
                      <div style={{ fontSize: 64, marginBottom: 20 }}>📚</div>
                      <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>
                        Start Your Learning Journey
                      </div>
                      <div style={{ fontSize: 16, marginBottom: 24 }}>
                        Generate prerequisites for topics to see your comprehensive learning history here!
                      </div>
                      <button
                        onClick={onStartLearning}
                        style={{
                          padding: '12px 24px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white',
                          border: 'none',
                          borderRadius: 8,
                          fontSize: 16,
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Start Learning
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Chat Support Floating Button */}
      <button
        onClick={() => {
          setShowChatSupport(true);
          setInitialChatId(null);
        }}
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
          color: 'white',
          border: 'none',
          fontSize: 24,
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(99,102,241,0.3)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(99,102,241,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(99,102,241,0.3)';
        }}
        title={`Chat Support ${isConnected ? '(Connected)' : '(Connecting...)'}`}
      >
        💬
        <div style={{
          position: 'absolute',
          top: -2,
          right: -2,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: isConnected ? '#10b981' : '#f59e0b',
          border: '2px solid white',
        }} />
      </button>

      {/* Chat Support Modal */}
      {showChatSupport && (
        <ChatSupport onClose={handleCloseChatSupport} initialChatId={initialChatId || undefined} userRole="student" />
      )}

      {/* Profile Modal */}
      {showProfile && (
        <UserProfile user={user} onLogout={onLogout} onClose={() => setShowProfile(false)} />
      )}

      {/* Detailed Topic Modal */}
      {showTopicDetails && selectedTopic && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000,
          padding: 20,
        }}>
          <div style={{
            background: darkMode ? '#1f2937' : '#ffffff',
            borderRadius: 20,
            padding: 32,
            maxWidth: 1000,
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            border: '1px solid',
            borderColor: darkMode ? '#374151' : '#e5e7eb',
            animation: 'slideInUp 0.3s ease-out',
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 24,
              borderBottom: '1px solid',
              borderColor: darkMode ? '#374151' : '#e5e7eb',
              paddingBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  color: 'white',
                  fontWeight: 600,
                }}>
                  {selectedTopic.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: darkMode ? '#ffffff' : '#1f2937',
                    margin: 0,
                  }}>
                    {selectedTopic}
                  </h2>
                  <p style={{
                    fontSize: 16,
                    color: darkMode ? '#9ca3af' : '#6b7280',
                    margin: 0,
                  }}>
                    Comprehensive Learning Details
                  </p>
                </div>
              </div>
              
              <button
                onClick={handleCloseTopicDetails}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 24,
                  color: darkMode ? '#9ca3af' : '#6b7280',
                  cursor: 'pointer',
                  padding: 8,
                  borderRadius: 8,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = darkMode ? '#374151' : '#f3f4f6';
                  e.currentTarget.style.color = darkMode ? '#ffffff' : '#374151';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = darkMode ? '#9ca3af' : '#6b7280';
                }}
              >
                ✕
              </button>
            </div>

            {/* Topic Details Content */}
            {(() => {
              const prereq = user.prerequisites?.find(p => p.topic === selectedTopic);
              const topicScores = user.quizScores?.filter(s => s.topic === selectedTopic) || [];
              const learningPath = user.learningPaths?.find(p => p.topic === selectedTopic);
              const averageScore = topicScores.length > 0 
                ? topicScores.reduce((acc, score) => acc + score.score, 0) / topicScores.length 
                : 0;
              const bestScore = topicScores.length > 0 
                ? Math.max(...topicScores.map(s => s.score)) 
                : 0;
              const attemptsCount = topicScores.length;

              return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  
                  {/* Stats Overview */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: 16,
                  }}>
                    <div style={{
                      background: darkMode ? '#374151' : '#f8fafc',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: darkMode ? '#4b5563' : '#e5e7eb',
                    }}>
                      <div style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: darkMode ? '#ffffff' : '#1f2937',
                        marginBottom: 4,
                      }}>
                        {attemptsCount}
                      </div>
                      <div style={{
                        fontSize: 14,
                        color: darkMode ? '#9ca3af' : '#6b7280',
                      }}>
                        Quiz Attempts
                      </div>
                    </div>
                    
                    <div style={{
                      background: darkMode ? '#374151' : '#f8fafc',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: darkMode ? '#4b5563' : '#e5e7eb',
                    }}>
                      <div style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: averageScore >= 80 ? '#10b981' : 
                               averageScore >= 60 ? '#f59e0b' : '#ef4444',
                        marginBottom: 4,
                      }}>
                        {averageScore > 0 ? `${averageScore.toFixed(1)}%` : 'N/A'}
                      </div>
                      <div style={{
                        fontSize: 14,
                        color: darkMode ? '#9ca3af' : '#6b7280',
                      }}>
                        Average Score
                      </div>
                    </div>
                    
                    <div style={{
                      background: darkMode ? '#374151' : '#f8fafc',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: darkMode ? '#4b5563' : '#e5e7eb',
                    }}>
                      <div style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: '#10b981',
                        marginBottom: 4,
                      }}>
                        {bestScore > 0 ? `${bestScore.toFixed(1)}%` : 'N/A'}
                      </div>
                      <div style={{
                        fontSize: 14,
                        color: darkMode ? '#9ca3af' : '#6b7280',
                      }}>
                        Best Score
                      </div>
                    </div>
                    
                    <div style={{
                      background: darkMode ? '#374151' : '#f8fafc',
                      borderRadius: 12,
                      padding: 20,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: darkMode ? '#4b5563' : '#e5e7eb',
                    }}>
                      <div style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: darkMode ? '#ffffff' : '#1f2937',
                        marginBottom: 4,
                      }}>
                        {prereq?.prerequisites.length || 0}
                      </div>
                      <div style={{
                        fontSize: 14,
                        color: darkMode ? '#9ca3af' : '#6b7280',
                      }}>
                        Prerequisites
                      </div>
                    </div>
                  </div>

                  {/* Detailed Sections */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: 24,
                  }}>
                    
                    {/* Prerequisites Detail */}
                    <div style={{
                      background: darkMode ? '#374151' : '#f8fafc',
                      borderRadius: 16,
                      padding: 24,
                      border: '1px solid',
                      borderColor: darkMode ? '#4b5563' : '#e5e7eb',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 20,
                      }}>
                        <span style={{ fontSize: 24, marginRight: 12 }}>🎯</span>
                        <h3 style={{
                          fontSize: 20,
                          fontWeight: 600,
                          color: darkMode ? '#ffffff' : '#1f2937',
                          margin: 0,
                        }}>
                          Prerequisites
                        </h3>
                      </div>
                      
                      {prereq && prereq.prerequisites.length > 0 ? (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 12,
                        }}>
                          {prereq.prerequisites.map((pr, idx) => (
                            <div key={idx} style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 12,
                              padding: '12px 16px',
                              background: darkMode ? '#4b5563' : '#ffffff',
                              borderRadius: 8,
                              border: '1px solid',
                              borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                            }}>
                              <div style={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 12,
                                color: 'white',
                                fontWeight: 600,
                              }}>
                                {idx + 1}
                              </div>
                              <span style={{
                                fontSize: 14,
                                color: darkMode ? '#e5e7eb' : '#374151',
                                fontWeight: 500,
                              }}>
                                {pr}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{
                          color: darkMode ? '#9ca3af' : '#6b7280',
                          fontSize: 16,
                          fontStyle: 'italic',
                          textAlign: 'center',
                          padding: 20,
                        }}>
                          No prerequisites defined for this topic
                        </div>
                      )}
                    </div>

                    {/* Quiz History Detail */}
                    <div style={{
                      background: darkMode ? '#374151' : '#f8fafc',
                      borderRadius: 16,
                      padding: 24,
                      border: '1px solid',
                      borderColor: darkMode ? '#4b5563' : '#e5e7eb',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 20,
                      }}>
                        <span style={{ fontSize: 24, marginRight: 12 }}>📊</span>
                        <h3 style={{
                          fontSize: 20,
                          fontWeight: 600,
                          color: darkMode ? '#ffffff' : '#1f2937',
                          margin: 0,
                        }}>
                          Quiz History
                        </h3>
                      </div>
                      
                      {topicScores.length > 0 ? (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 12,
                        }}>
                          {topicScores.map((score, scoreIndex) => (
                            <div key={scoreIndex} style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '16px',
                              background: darkMode ? '#4b5563' : '#ffffff',
                              borderRadius: 12,
                              border: '1px solid',
                              borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                            }}>
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                              }}>
                                <div style={{
                                  width: 32,
                                  height: 32,
                                  borderRadius: '50%',
                                  background: score.score >= 80 ? '#10b981' :
                                             score.score >= 60 ? '#f59e0b' : '#ef4444',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: 14,
                                  color: 'white',
                                  fontWeight: 600,
                                }}>
                                  {scoreIndex + 1}
                                </div>
                                <div>
                                  <div style={{
                                    fontSize: 16,
                                    fontWeight: 600,
                                    color: darkMode ? '#ffffff' : '#1f2937',
                                  }}>
                                    Attempt {scoreIndex + 1}
                                  </div>
                                  <div style={{
                                    fontSize: 12,
                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                  }}>
                                    {formatDate(score.date)}
                                  </div>
                                </div>
                              </div>
                              
                              <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                              }}>
                                <div style={{
                                  padding: '6px 12px',
                                  background: score.score >= 80 ? '#10b981' :
                                             score.score >= 60 ? '#f59e0b' : '#ef4444',
                                  color: 'white',
                                  borderRadius: 8,
                                  fontSize: 14,
                                  fontWeight: 600,
                                }}>
                                  {score.score.toFixed(1)}%
                                </div>
                                <span style={{
                                  fontSize: 16,
                                }}>
                                  {score.score >= 80 ? '🏆' : score.score >= 60 ? '🎯' : '📝'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{
                          color: darkMode ? '#9ca3af' : '#6b7280',
                          fontSize: 16,
                          fontStyle: 'italic',
                          textAlign: 'center',
                          padding: 20,
                        }}>
                          No quiz attempts for this topic yet
                        </div>
                      )}
                    </div>

                    {/* Learning Path Detail */}
                    {learningPath && (
                      <div style={{
                        background: darkMode ? '#374151' : '#f8fafc',
                        borderRadius: 16,
                        padding: 24,
                        border: '1px solid',
                        borderColor: darkMode ? '#4b5563' : '#e5e7eb',
                        gridColumn: 'span 2',
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: 20,
                        }}>
                          <span style={{ fontSize: 24, marginRight: 12 }}>🛤️</span>
                          <h3 style={{
                            fontSize: 20,
                            fontWeight: 600,
                            color: darkMode ? '#ffffff' : '#1f2937',
                            margin: 0,
                          }}>
                            Learning Path
                          </h3>
                        </div>
                        
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                          gap: 20,
                          marginBottom: 20,
                        }}>
                          <div style={{
                            background: darkMode ? '#4b5563' : '#ffffff',
                            borderRadius: 12,
                            padding: 16,
                            border: '1px solid',
                            borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                          }}>
                            <div style={{
                              fontSize: 24,
                              fontWeight: 700,
                              color: darkMode ? '#ffffff' : '#1f2937',
                              marginBottom: 4,
                            }}>
                              {learningPath.weeks}
                            </div>
                            <div style={{
                              fontSize: 14,
                              color: darkMode ? '#9ca3af' : '#6b7280',
                            }}>
                              Weeks Duration
                            </div>
                          </div>
                          
                          <div style={{
                            background: darkMode ? '#4b5563' : '#ffffff',
                            borderRadius: 12,
                            padding: 16,
                            border: '1px solid',
                            borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                          }}>
                            <div style={{
                              fontSize: 20,
                              fontWeight: 700,
                              color: darkMode ? '#ffffff' : '#1f2937',
                              marginBottom: 4,
                            }}>
                              {learningPath.durationPerDay}
                            </div>
                            <div style={{
                              fontSize: 14,
                              color: darkMode ? '#9ca3af' : '#6b7280',
                            }}>
                              Daily Commitment
                            </div>
                          </div>
                          
                          <div style={{
                            background: darkMode ? '#4b5563' : '#ffffff',
                            borderRadius: 12,
                            padding: 16,
                            border: '1px solid',
                            borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                          }}>
                            <div style={{
                              fontSize: 20,
                              fontWeight: 700,
                              color: darkMode ? '#ffffff' : '#1f2937',
                              marginBottom: 4,
                            }}>
                              {learningPath.level}
                            </div>
                            <div style={{
                              fontSize: 14,
                              color: darkMode ? '#9ca3af' : '#6b7280',
                            }}>
                              Difficulty Level
                            </div>
                          </div>
                        </div>
                        
                        <div style={{
                          fontSize: 12,
                          color: darkMode ? '#9ca3af' : '#6b7280',
                          marginBottom: 16,
                        }}>
                          Generated on {formatDate(learningPath.generatedAt)}
                        </div>
                        
                        {learningPath.path && learningPath.path.length > 0 && (
                          <div>
                            <h4 style={{
                              fontSize: 16,
                              fontWeight: 600,
                              color: darkMode ? '#ffffff' : '#1f2937',
                              marginBottom: 12,
                            }}>
                              Weekly Modules ({learningPath.path.length} weeks)
                            </h4>
                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                              gap: 12,
                            }}>
                              {learningPath.path.slice(0, 6).map((week: WeeklyContent, weekIndex: number) => (
                                <div key={weekIndex} style={{
                                  background: darkMode ? '#4b5563' : '#ffffff',
                                  borderRadius: 8,
                                  padding: 12,
                                  border: '1px solid',
                                  borderColor: darkMode ? '#6b7280' : '#e5e7eb',
                                }}>
                                  <div style={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: darkMode ? '#ffffff' : '#1f2937',
                                    marginBottom: 8,
                                  }}>
                                    Week {week.week || weekIndex + 1}
                                  </div>
                                  <div style={{
                                    fontSize: 12,
                                    color: darkMode ? '#9ca3af' : '#6b7280',
                                    lineHeight: 1.4,
                                  }}>
                                    {week.tasks && week.tasks.length > 0 
                                      ? week.tasks.slice(0, 2).join(', ')
                                      : 'Tasks to be defined'
                                    }
                                  </div>
                                </div>
                              ))}
                            </div>
                            {learningPath.path.length > 6 && (
                              <div style={{
                                textAlign: 'center',
                                marginTop: 12,
                                fontSize: 14,
                                color: darkMode ? '#9ca3af' : '#6b7280',
                              }}>
                                +{learningPath.path.length - 6} more weeks...
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Prerequisites Modal */}
      {showPrereqModal && (
        <div
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 20,
        }}>
          <div
            className="modal-content scrollable-content"
            style={{
              background: darkMode ? '#1f2937' : '#ffffff',
              borderRadius: 16,
              padding: 32,
              maxWidth: 1200,
              maxHeight: '95vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              border: '1px solid',
              borderColor: darkMode ? '#374151' : '#e5e7eb',
              width: '100%',
            }}>
            {/* Close Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
              <button
                onClick={handleClosePrereqModal}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: 24,
                  cursor: 'pointer',
                  color: darkMode ? '#9ca3af' : '#6b7280',
                  padding: 8,
                  borderRadius: 8,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = darkMode ? '#374151' : '#f3f4f6';
                  e.currentTarget.style.color = darkMode ? '#ffffff' : '#374151';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = darkMode ? '#9ca3af' : '#6b7280';
                }}
              >
                ✕
              </button>
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

              {loading && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '60px',
                  color: '#6b7280'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid #e5e7eb',
                    borderTopColor: '#6366f1',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    marginBottom: '16px'
                  }}></div>
                  <div style={{ fontSize: '18px', fontWeight: '600' }}>
                    Generating Prerequisites...
                  </div>
                </div>
              )}

              {data && !loading && (
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
                          {data.prerequisites.map((prereq: string, index: number) => (
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
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Mobile Responsiveness for Student Dashboard */

        /* Small Mobile (0-479px) */
        @media (max-width: 479px) {
          .dashboard-nav {
            padding: 12px 16px !important;
            flex-direction: column !important;
            gap: 16px !important;
            align-items: flex-start !important;
          }

          .dashboard-nav > div:first-child {
            font-size: 18px !important;
          }

          .dashboard-nav > div:last-child {
            gap: 16px !important;
            flex-wrap: wrap !important;
            width: 100% !important;
            justify-content: flex-start !important;
          }

          .dashboard-nav button {
            padding: 8px 16px !important;
            font-size: 14px !important;
            min-width: 44px !important;
            min-height: 44px !important;
          }

          .dashboard-content {
            padding: 16px !important;
            gap: 16px !important;
          }

          .dashboard-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .dashboard-card {
            padding: 16px !important;
            margin-bottom: 16px !important;
          }

          .dashboard-card h3 {
            font-size: 18px !important;
            margin-bottom: 12px !important;
          }

          .course-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .course-card {
            padding: 16px !important;
          }

          .course-card h4 {
            font-size: 16px !important;
          }

          .course-card p {
            font-size: 14px !important;
          }

          .progress-bar {
            height: 6px !important;
          }

          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .stat-card {
            padding: 16px !important;
            text-align: center !important;
          }

          .stat-number {
            font-size: 24px !important;
          }

          .stat-label {
            font-size: 12px !important;
          }

          .modal-content {
            width: 95% !important;
            max-width: 95% !important;
            margin: 20px auto !important;
            max-height: 90vh !important;
            overflow-y: auto !important;
          }

          .modal-header {
            padding: 16px !important;
            flex-direction: column !important;
            gap: 12px !important;
            align-items: flex-start !important;
          }

          .modal-body {
            padding: 16px !important;
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
        }

        /* Large Mobile (480-767px) */
        @media (min-width: 480px) and (max-width: 767px) {
          .dashboard-nav {
            padding: 16px 24px !important;
            flex-wrap: wrap !important;
          }

          .dashboard-nav > div:last-child {
            gap: 20px !important;
          }

          .dashboard-nav button {
            padding: 10px 20px !important;
            font-size: 15px !important;
          }

          .dashboard-content {
            padding: 24px !important;
            gap: 20px !important;
          }

          .dashboard-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .course-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 16px !important;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }

          .modal-content {
            width: 90% !important;
            max-width: 500px !important;
          }

          .prerequisites-layout {
            flex-direction: column !important;
            gap: 20px !important;
          }

          .prerequisites-graph {
            height: 300px !important;
          }
        }

        /* Tablet (768-1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .dashboard-nav {
            padding: 18px 32px !important;
          }

          .dashboard-content {
            padding: 32px !important;
            gap: 24px !important;
          }

          .dashboard-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .course-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
            gap: 20px !important;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px !important;
          }

          .modal-content {
            width: 85% !important;
            max-width: 600px !important;
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
          .dashboard-grid {
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)) !important;
          }

          .course-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
          }

          .stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }

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

          .modal-overlay {
            padding: 16px;
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

export default StudentDashboard; 