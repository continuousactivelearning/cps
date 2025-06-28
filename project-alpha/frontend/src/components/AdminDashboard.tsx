import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';

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

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [activePage, setActivePage] = useState<'home' | 'students' | 'support'>('home');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [students, setStudents] = useState<User[]>([]);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [studentsError, setStudentsError] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  // Support chat state
  const [chatMessages, setChatMessages] = useState<{ sender: string; message: string }[]>([]);
  const [chatInput, setChatInput] = useState('');

  const handleThemeToggle = () => setDarkMode((prev) => !prev);

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

  // Fetch students when students page is active
  useEffect(() => {
    if (activePage === 'students') {
      setLoadingStudents(true);
      setStudentsError('');
      axios.get('http://localhost:5000/api/auth/users', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
        .then(res => {
          setStudents(res.data.filter((u: User) => u.role === 'student'));
        })
        .catch(() => setStudentsError('Failed to fetch students'))
        .finally(() => setLoadingStudents(false));
    }
  }, [activePage]);

  // Support chat send handler (mock, no backend)
  const handleSendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { sender: 'admin', message: chatInput }]);
      setChatInput('');
      // Here you would send to backend and get student/admin replies
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''} style={{ minHeight: '100vh', background: 'linear-gradient(90deg, #6366f1 0%, #2dd4bf 100%)' }}>
      {/* Navbar */}
      <nav style={{
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
          <button onClick={() => setActivePage('students')} style={{
            background: activePage === 'students' ? '#e0e7ff' : 'none',
            color: activePage === 'students' ? '#6366f1' : '#18181b',
            border: 'none',
            borderRadius: 8,
            padding: '8px 18px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            outline: 'none',
            transition: 'background 0.2s',
          }}>Students</button>
          <button onClick={() => setActivePage('support')} style={{
            background: activePage === 'support' ? '#e0e7ff' : 'none',
            color: activePage === 'support' ? '#6366f1' : '#18181b',
            border: 'none',
            borderRadius: 8,
            padding: '8px 18px',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            outline: 'none',
            transition: 'background 0.2s',
          }}>Support</button>
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
      <div style={{
        maxWidth: 700,
        margin: '60px auto 0',
        background: 'none',
        borderRadius: 18,
        boxShadow: 'none',
        padding: '0',
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Home Page */}
        {activePage === 'home' && (
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 420,
          }}>
            <div style={{
              background: '#fff',
              borderRadius: 18,
              boxShadow: '0 8px 32px rgba(99,102,241,0.10)',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: 340,
              maxWidth: 420,
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
                Welcome Back, <span style={{ color: '#10b981' }}>Admin</span>
              </h1>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                width: '100%'
              }}>
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
                  position: 'relative'
                }}>
                  {user.avatar ? (
                    <img src={user.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  ) : (
                    user.username.charAt(0).toUpperCase()
                  )}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#18181b', marginBottom: 6 }}>{user.username}</div>
                  <div style={{ fontSize: 16, color: '#6366f1', marginBottom: 2 }}>{user.email}</div>
                  <div style={{ fontSize: 13, color: '#64748b' }}>Admin</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Students Page */}
        {activePage === 'students' && (
          <div style={{ width: '100%' }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: darkMode ? '#fff' : '#18181b', marginBottom: 24 }}>All Students</h2>
            {loadingStudents ? (
              <div style={{ color: '#6b7280', fontSize: 18 }}>Loading students...</div>
            ) : studentsError ? (
              <div style={{ color: '#dc2626', fontSize: 18 }}>{studentsError}</div>
            ) : students.length === 0 ? (
              <div style={{
                color: darkMode ? '#fff' : '#64748b',
                fontSize: 20,
                textAlign: 'center',
                margin: '48px 0',
                fontWeight: 500
              }}>No students found.</div>
            ) : (
              <div style={{ overflowX: 'auto', borderRadius: 12, boxShadow: darkMode ? '0 2px 12px rgba(0,0,0,0.18)' : '0 2px 12px rgba(99,102,241,0.08)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: darkMode ? '#18181b' : '#fff', borderRadius: 10, minWidth: 900 }}>
                  <thead>
                    <tr style={{ background: darkMode ? '#23232a' : '#e0e7ff', color: darkMode ? '#fff' : '#6366f1' }}>
                      <th style={{ padding: 14, textAlign: 'left' }}>User ID</th>
                      <th style={{ padding: 14, textAlign: 'left' }}>Username</th>
                      <th style={{ padding: 14, textAlign: 'left' }}>Email</th>
                      <th style={{ padding: 14, textAlign: 'left' }}>Password</th>
                      <th style={{ padding: 14, textAlign: 'left' }}>Topics</th>
                      <th style={{ padding: 14, textAlign: 'left' }}>Prerequisites</th>
                      <th style={{ padding: 14, textAlign: 'left' }}>Quiz Marks</th>
                      <th style={{ padding: 14, textAlign: 'left' }}>Learning Path</th>
                      <th style={{ padding: 14, textAlign: 'center' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(s => (
                      <tr key={s.id} style={{ borderBottom: '1px solid #e5e7eb', color: darkMode ? '#fff' : '#18181b' }}>
                        <td style={{ padding: 12, fontFamily: 'monospace', fontSize: 13 }}>{s.id}</td>
                        <td style={{ padding: 12 }}>{s.username}</td>
                        <td style={{ padding: 12 }}>{s.email}</td>
                        <td style={{ padding: 12 }}>••••••••</td>
                        <td style={{ padding: 12 }}>{Array.isArray(s.topics) ? s.topics.join(', ') : ''}</td>
                        <td style={{ padding: 12 }}>
                          <button style={{ background: darkMode ? '#23232a' : '#e0e7ff', color: '#6366f1', border: 'none', borderRadius: 6, padding: '4px 10px', fontWeight: 600, cursor: 'pointer', fontSize: 13, marginRight: 6 }}>Edit</button>
                          {Array.isArray(s.prerequisites) ? s.prerequisites.map((p: any) => p.topic).join(', ') : ''}
                        </td>
                        <td style={{ padding: 12 }}>{Array.isArray(s.quizScores) ? s.quizScores.map((q: any) => `${q.topic}: ${q.score}`).join(', ') : ''}</td>
                        <td style={{ padding: 12 }}>{Array.isArray(s.learningPaths) ? s.learningPaths.map((lp: any) => lp.topic).join(', ') : ''}</td>
                        <td style={{ padding: 12, textAlign: 'center' }}>
                          <button style={{ background: '#dc2626', color: '#fff', border: 'none', borderRadius: 6, padding: '4px 12px', fontWeight: 600, cursor: 'pointer', fontSize: 13 }}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
        {/* Support Page */}
        {activePage === 'support' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', height: 400 }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: darkMode ? '#fff' : '#18181b', marginBottom: 24 }}>Support Queries</h2>
            <div style={{ flex: 1, overflowY: 'auto', background: darkMode ? '#23232a' : '#f9fafb', borderRadius: 10, padding: 16, marginBottom: 16, border: '1px solid #e5e7eb' }}>
              {chatMessages.length === 0 ? (
                <div style={{ color: '#6b7280', fontSize: 16 }}>No messages yet. Start a conversation!</div>
              ) : (
                chatMessages.map((msg, idx) => (
                  <div key={idx} style={{ marginBottom: 12, textAlign: msg.sender === 'admin' ? 'right' : 'left' }}>
                    <span style={{
                      display: 'inline-block',
                      background: msg.sender === 'admin' ? '#6366f1' : '#e0e7ff',
                      color: msg.sender === 'admin' ? '#fff' : '#18181b',
                      borderRadius: 8,
                      padding: '8px 14px',
                      fontSize: 15,
                      maxWidth: '70%',
                    }}>{msg.message}</span>
                  </div>
                ))
              )}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleSendMessage(); }}
                placeholder="Type your message..."
                style={{ flex: 1, padding: 12, borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 15 }}
              />
              <button onClick={handleSendMessage} style={{ padding: '12px 20px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Send</button>
            </div>
          </div>
        )}
      </div>
      {/* Profile Modal */}
      {showProfile && (
        <UserProfile user={user} onLogout={onLogout} onClose={() => setShowProfile(false)} />
      )}
    </div>
  );
};

export default AdminDashboard; 
