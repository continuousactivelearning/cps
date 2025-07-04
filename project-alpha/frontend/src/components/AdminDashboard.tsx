import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import UserProfile from './UserProfile';
import ChatSupport from './ChatSupport';
import StudentManagement from './StudentManagement';
import { useWebSocket } from '../contexts/WebSocketContext';
import { API_ENDPOINTS } from '../config/api';

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

interface Chat {
  _id: string;
  studentId?: { username: string; email: string } | null;
  adminId?: { username: string; email: string };
  subject: string;
  status: 'open' | 'in_progress' | 'closed';
  messages: Array<{
    sender: 'student' | 'admin';
    message: string;
    timestamp: string;
  }>;
  createdAt: string;
  lastMessageAt: string;
}

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

interface AdminHomeContentProps {
  user: User;
  chats: Chat[];
}

// Professional Admin Home Content Component
const AdminHomeContent: React.FC<AdminHomeContentProps> = ({ user, chats }) => {
  const navigate = useNavigate();
  // const [users, setUsers] = useState<User[]>([]);
  // const [loadingUsers, setLoadingUsers] = useState(false);
  const [dashboardStats, setDashboardStats] = useState({
    totalStudents: 0,
    totalChats: 0,
    openChats: 0,
    closedChats: 0,
    recentActivity: [] as any[]
  });

  // Fetch users and calculate statistics
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // setLoadingUsers(true);
        const response = await axios.get(API_ENDPOINTS.USERS, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        // setUsers(response.data);

        // Calculate statistics
        const students = response.data.filter((u: User) => u.role === 'student');
        const openChats = chats.filter(chat => chat.status === 'open' || chat.status === 'in_progress');
        const closedChats = chats.filter(chat => chat.status === 'closed');

        // Recent activity from chats
        const recentActivity = chats
          .sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime())
          .slice(0, 5)
          .map(chat => ({
            type: 'chat',
            title: chat.subject,
            description: `${chat.studentId?.username || 'Unknown Student'} • ${chat.status}`,
            timestamp: chat.lastMessageAt,
            status: chat.status
          }));

        setDashboardStats({
          totalStudents: students.length,
          totalChats: chats.length,
          openChats: openChats.length,
          closedChats: closedChats.length,
          recentActivity
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        // setLoadingUsers(false);
      }
    };

    fetchDashboardData();
  }, [chats]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const StatCard = ({ title, value, subtitle, icon, color, trend }: {
    title: string;
    value: string | number;
    subtitle?: string;
    icon: string;
    color: string;
    trend?: { value: string; isPositive: boolean };
  }) => (
    <div style={{
      background: 'white',
      borderRadius: 12,
      padding: 24,
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      border: '1px solid #f1f5f9',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#64748b', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {title}
          </h3>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#1e293b', margin: '8px 0' }}>
            {value}
          </div>
          {subtitle && (
            <p style={{ fontSize: 14, color: '#64748b', margin: 0 }}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: `linear-gradient(135deg, ${color}20, ${color}10)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20
        }}>
          {icon}
        </div>
      </div>
      {trend && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{
            fontSize: 12,
            fontWeight: 600,
            color: trend.isPositive ? '#10b981' : '#ef4444'
          }}>
            {trend.isPositive ? '↗' : '↘'} {trend.value}
          </span>
          <span style={{ fontSize: 12, color: '#64748b' }}>vs last week</span>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e293b', margin: 0 }}>
          Welcome back, {user.username}! 👋
        </h1>
        <p style={{ fontSize: 16, color: '#64748b', marginTop: 8 }}>
          Here's what's happening with your learning platform today.
        </p>
      </div>

      {/* Statistics Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 24,
        marginBottom: 32
      }}>
        <StatCard
          title="Total Students"
          value={dashboardStats.totalStudents}
          subtitle="Active learners"
          icon="👥"
          color="#6366f1"
          trend={{ value: "+12%", isPositive: true }}
        />
        <StatCard
          title="Support Chats"
          value={dashboardStats.totalChats}
          subtitle="All conversations"
          icon="💬"
          color="#10b981"
          trend={{ value: "+5%", isPositive: true }}
        />
        <StatCard
          title="Active Chats"
          value={dashboardStats.openChats}
          subtitle="Ongoing conversations"
          icon="🔄"
          color="#f59e0b"
          trend={{ value: "-8%", isPositive: true }}
        />
      </div>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
        {/* Recent Activity */}
        <div style={{
          background: 'white',
          borderRadius: 12,
          padding: 24,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          border: '1px solid #f1f5f9'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e293b', margin: 0 }}>
              Recent Activity
            </h2>
            <button style={{
              background: 'none',
              border: '1px solid #e2e8f0',
              borderRadius: 6,
              padding: '6px 12px',
              fontSize: 12,
              color: '#64748b',
              cursor: 'pointer'
            }}>
              View All
            </button>
          </div>

          <div style={{ margin: '16px 0' }}>
            {dashboardStats.recentActivity.length > 0 ? (
              dashboardStats.recentActivity.map((activity, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: index < dashboardStats.recentActivity.length - 1 ? '1px solid #f1f5f9' : 'none'
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: activity.status === 'open' ? '#fef3c7' :
                               activity.status === 'in_progress' ? '#dbeafe' : '#d1fae5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 12,
                    fontSize: 16
                  }}>
                    {activity.status === 'open' ? '🆕' :
                     activity.status === 'in_progress' ? '💬' : '✅'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: '#1e293b', margin: 0 }}>
                      {activity.title}
                    </h4>
                    <p style={{ fontSize: 12, color: '#64748b', margin: '2px 0 0 0' }}>
                      {activity.description}
                    </p>
                  </div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>
                    {formatDate(activity.timestamp)}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#64748b' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
                <p>No recent activity</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions & System Status */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Quick Actions */}
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            border: '1px solid #f1f5f9'
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: '0 0 16px 0' }}>
              Quick Actions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '12px 16px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              onClick={() => navigate('/admin/students')}>
                👥 Manage Students
              </button>
              <button style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '12px 16px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              onClick={() => navigate('/admin/support')}>
                💬 Support Center
              </button>
            </div>
          </div>

          {/* System Status */}
          <div style={{
            background: 'white',
            borderRadius: 12,
            padding: 24,
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            border: '1px solid #f1f5f9'
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', margin: '0 0 16px 0' }}>
              System Status
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, color: '#64748b' }}>Server Status</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#10b981' }}>Online</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, color: '#64748b' }}>Database</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#10b981' }}>Connected</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 14, color: '#64748b' }}>WebSocket</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#10b981' }}>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Debug user role
  useEffect(() => {
    console.log('AdminDashboard - Current user:', user);
    console.log('AdminDashboard - User role:', user.role);
    console.log('AdminDashboard - Is admin?', user.role === 'admin');

    const token = localStorage.getItem('token');
    console.log('AdminDashboard - Token exists:', !!token);

    if (user.role !== 'admin') {
      console.error('AdminDashboard - User is not an admin! Role:', user.role);
    }
  }, [user]);

  // Get current page from URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path.includes('/students')) return 'students';
    if (path.includes('/support')) return 'support';
    return 'home';
  };

  const activePage = getCurrentPage();

  // Support chat state
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  // const [chatInput, setChatInput] = useState('');
  // const [loadingChats, setLoadingChats] = useState(false);
  const [newChatNotification, setNewChatNotification] = useState(false);
  
  // Professional chat support state
  const [showChatSupport, setShowChatSupport] = useState(false);
  const [initialChatId, setInitialChatId] = useState<string | null>(null);

  const { socket, isConnected } = useWebSocket();

  // Debug WebSocket connection
  useEffect(() => {
    console.log('AdminDashboard WebSocket status:', { isConnected, socket: !!socket });
    if (socket) {
      console.log('Socket auth data:', socket.auth);
    }
  }, [socket, isConnected]);

  const handleThemeToggle = () => setDarkMode((prev) => !prev);

  // const handleOpenChatSupport = () => {
  //   setShowChatSupport(true);
  // };

  const handleCloseChatSupport = () => {
    setShowChatSupport(false);
    setInitialChatId(null);
  };

  // WebSocket event listeners for real-time chat
  useEffect(() => {
    if (!socket) return;

    // Listen for new chat requests
    socket.on('new_chat_request', (data: { chat: Chat }) => {
      setChats(prev => [data.chat, ...prev]);
      setNewChatNotification(true);
      
      // Show notification effect
      showNotificationEffect();
      
      // Auto-switch to support page if not already there
      if (activePage !== 'support') {
        navigate('/admin/support');
      }
    });

    // Listen for new messages in existing chats
    socket.on('new_chat_message', (data: { chatId: string; message: any; chat: Chat }) => {
      setChats(prev => prev.map(chat => 
        chat._id === data.chatId 
          ? { 
              ...chat, 
              messages: [...chat.messages, data.message],
              lastMessageAt: data.message.timestamp
            }
          : chat
      ));
      
      // Update selected chat if it's the current one
      if (selectedChat?._id === data.chatId) {
        setSelectedChat(prev => prev ? {
          ...prev,
          messages: [...prev.messages, data.message],
          lastMessageAt: data.message.timestamp
        } : null);
      }

      // Show notification effect
      showNotificationEffect();
    });

    return () => {
      socket.off('new_chat_request');
      socket.off('new_chat_message');
    };
  }, [socket, selectedChat, activePage]);

  const showNotificationEffect = () => {
    // Create a notification sound effect (optional)
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
    audio.play().catch(() => {}); // Ignore errors if audio fails to play
  };

  // Close dropdown on outside click
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.profile-dropdown')) {
        setShowProfileDropdown(false);
      }
    };
    if (showProfileDropdown) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showProfileDropdown]);

  // Fetch chats when support page is active
  useEffect(() => {
    if (activePage === 'support') {
      fetchChats();
    }
  }, [activePage]);

  const fetchChats = async () => {
    try {
      // setLoadingChats(true);
      const response = await axios.get(API_ENDPOINTS.CHAT, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      console.log('Fetched chats:', response.data);
      console.log('Chats with null studentId:', response.data.filter((chat: Chat) => !chat.studentId));
      setChats(response.data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    } finally {
      // setLoadingChats(false);
    }
  };

  /*
  const handleSendMessage = async () => {
    if (!chatInput.trim() || !selectedChat) return;

    if (socket && isConnected) {
      // Use WebSocket for real-time messaging
      socket.emit('send_message', {
        chatId: selectedChat._id,
        message: chatInput
      });

      // Add message optimistically
      const newMessage = {
        sender: 'admin' as const,
        message: chatInput,
        timestamp: new Date().toISOString()
      };

      setChats(prev => prev.map(chat =>
        chat._id === selectedChat._id
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              lastMessageAt: newMessage.timestamp
            }
          : chat
      ));

      setSelectedChat(prev => prev ? {
        ...prev,
        messages: [...prev.messages, newMessage],
        lastMessageAt: newMessage.timestamp
      } : null);

      setChatInput('');
    } else {
      // Fallback to REST API
      try {
        const response = await axios.post(API_ENDPOINTS.CHAT_MESSAGES(selectedChat._id), {
          message: chatInput
        }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        setChats(prev => prev.map(chat =>
          chat._id === selectedChat._id ? response.data : chat
        ));
        setSelectedChat(response.data);
        setChatInput('');
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again.');
      }
    }
  };
  */

  /*
  const handleCloseChat = async (chatId: string) => {
    try {
      const response = await axios.put(API_ENDPOINTS.CHAT_CLOSE(chatId), {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      setChats(prev => prev.map(chat =>
        chat._id === chatId ? response.data : chat
      ));
      if (selectedChat?._id === chatId) {
        setSelectedChat(response.data);
      }
    } catch (error) {
      console.error('Error closing chat:', error);
      alert('Failed to close chat. Please try again.');
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
  */

  return (
    <div
      className={`admin-container ${darkMode ? 'dark' : ''}`}
      style={{ minHeight: '100vh', background: 'linear-gradient(90deg, #6366f1 0%, #2dd4bf 100%)' }}>
      {/* Navbar */}
      <nav className="dashboard-navbar admin-header" aria-label="Admin Navigation">
        <div className="dashboard-navbar-content">
          <div className="dashboard-logo" tabIndex={0} aria-label="LearnPath Home">
            LearnPath
            {/* Debug info - remove this later */}
            <span style={{ fontSize: '0.8rem', marginLeft: '1rem', color: '#666' }}>
              Active: {activePage}
            </span>
          </div>
          <div className="dashboard-nav-actions admin-nav">
            <button
              onClick={() => navigate('/admin')}
              className={`dashboard-nav-btn ${activePage === 'home' ? 'active' : ''}`}
              aria-current={activePage === 'home' ? 'page' : undefined}
            >Home</button>
            <button
              onClick={() => navigate('/admin/students')}
              className={`dashboard-nav-btn ${activePage === 'students' ? 'active' : ''}`}
              aria-current={activePage === 'students' ? 'page' : undefined}
            >Students</button>
            <button
              onClick={() => navigate('/admin/support')}
              className={`dashboard-nav-btn ${activePage === 'support' ? 'active' : ''}`}
              style={{ position: 'relative' }}
              aria-current={activePage === 'support' ? 'page' : undefined}
            >
              Support
              {newChatNotification && (
                <span style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
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
                  animation: 'pulse 2s infinite',
                }}>
                  !
                </span>
              )}
            </button>
            {/* Theme toggle icon */}
            <button
              onClick={handleThemeToggle}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 22,
                color: '#6366f1',
                marginLeft: 8,
              }}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
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
                aria-haspopup="true"
                aria-expanded={showProfileDropdown}
                aria-label="Open profile menu"
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
                  <button
                    onClick={() => { setShowProfile(true); setShowProfileDropdown(false); }}
                    style={{
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
                    }}
                    tabIndex={0}
                  >My Profile</button>
                  <button
                    onClick={onLogout}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      color: '#dc2626',
                      fontWeight: 600,
                      fontSize: 15,
                      padding: '10px 0',
                      textAlign: 'left',
                      cursor: 'pointer',
                    }}
                    tabIndex={0}
                  >Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="dashboard-main-content admin-content">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<AdminHomeContent user={user} chats={chats} />} />

          {/* Students Page */}
          <Route path="/students" element={<StudentManagement darkMode={darkMode} />} />

          {/* Support Page - Direct Chat Interface */}
          <Route path="/support" element={
            <ChatSupport
              onClose={() => navigate('/admin')}
              userRole="admin"
              initialChatId={undefined}
            />
          } />
        </Routes>
      </div>

      {/* Chat Support Modal */}
      {showChatSupport && (
        <ChatSupport
          onClose={handleCloseChatSupport}
          userRole="admin"
          initialChatId={initialChatId || undefined}
        />
      )}

      {/* Profile Modal */}
      {showProfile && (
        <UserProfile user={user} onLogout={onLogout} onClose={() => setShowProfile(false)} />
      )}

      {/* Mobile Responsiveness Styles */}
      <style>{`
        /* Mobile Responsiveness for Admin Dashboard */

        /* Small Mobile (0-479px) */
        @media (max-width: 479px) {
          .admin-container {
            padding: 16px !important;
            margin: 0 !important;
          }

          .admin-header {
            padding: 16px !important;
            flex-direction: column !important;
            gap: 16px !important;
            align-items: flex-start !important;
          }

          .admin-header h1 {
            font-size: 20px !important;
            margin-bottom: 8px !important;
          }

          .admin-nav {
            flex-direction: column !important;
            gap: 8px !important;
            width: 100% !important;
          }

          .admin-nav button {
            width: 100% !important;
            padding: 12px !important;
            font-size: 16px !important;
            min-height: 44px !important;
            text-align: left !important;
          }

          .admin-content {
            padding: 16px !important;
            gap: 16px !important;
          }

          .admin-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .admin-stat-card {
            padding: 16px !important;
            text-align: center !important;
          }

          .admin-stat-number {
            font-size: 24px !important;
            margin-bottom: 8px !important;
          }

          .admin-stat-label {
            font-size: 14px !important;
          }

          .admin-chat-list {
            max-height: 300px !important;
            overflow-y: auto !important;
          }

          .admin-chat-item {
            padding: 12px !important;
            margin-bottom: 8px !important;
          }

          .admin-chat-subject {
            font-size: 14px !important;
            margin-bottom: 4px !important;
          }

          .admin-chat-meta {
            font-size: 12px !important;
            flex-direction: column !important;
            gap: 4px !important;
          }

          .admin-user-table {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
          }

          .admin-user-table table {
            min-width: 600px !important;
            font-size: 14px !important;
          }

          .admin-user-table th,
          .admin-user-table td {
            padding: 8px !important;
            white-space: nowrap !important;
          }

          .admin-action-buttons {
            flex-direction: column !important;
            gap: 8px !important;
          }

          .admin-action-buttons button {
            width: 100% !important;
            padding: 8px !important;
            font-size: 14px !important;
          }
        }

        /* Large Mobile (480-767px) */
        @media (min-width: 480px) and (max-width: 767px) {
          .admin-container {
            padding: 24px !important;
          }

          .admin-header {
            padding: 20px !important;
            flex-wrap: wrap !important;
          }

          .admin-header h1 {
            font-size: 24px !important;
          }

          .admin-nav {
            flex-wrap: wrap !important;
            gap: 12px !important;
          }

          .admin-nav button {
            flex: 1 !important;
            min-width: 120px !important;
          }

          .admin-content {
            padding: 24px !important;
            gap: 20px !important;
          }

          .admin-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }

          .admin-user-table table {
            font-size: 15px !important;
          }
        }

        /* Tablet (768-1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .admin-container {
            padding: 32px !important;
          }

          .admin-header {
            padding: 24px !important;
          }

          .admin-content {
            padding: 32px !important;
            gap: 24px !important;
          }

          .admin-stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px !important;
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

          .admin-modal {
            width: 95% !important;
            max-width: 95% !important;
            margin: 20px auto !important;
            padding: 16px !important;
          }

          .admin-modal-header {
            padding: 16px !important;
            flex-direction: column !important;
            gap: 12px !important;
          }

          .admin-modal-body {
            padding: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
