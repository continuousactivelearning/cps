import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useWebSocket } from '../contexts/WebSocketContext';
import { API_ENDPOINTS } from '../config/api';

interface Chat {
  _id: string;
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

interface ProfessionalChatProps {
  onClose: () => void;
  initialChatId?: string;
  userRole: 'student' | 'admin';
}

const ProfessionalChat: React.FC<ProfessionalChatProps> = ({ onClose, initialChatId, userRole }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [newChatSubject, setNewChatSubject] = useState('');
  const [newChatMessage, setNewChatMessage] = useState('');
  const [showNewChatForm, setShowNewChatForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isConnected } = useWebSocket();

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    if (initialChatId && chats.length > 0) {
      const chat = chats.find(c => c._id === initialChatId);
      if (chat) {
        setSelectedChat(chat);
        setShowNewChatForm(false);
      }
    }
  }, [initialChatId, chats]);

  const fetchChats = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_ENDPOINTS.CHAT, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setChats(response.data);
    } catch (error) {
      console.error('Error fetching chats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNewChat = async () => {
    if (!newChatSubject.trim() || !newChatMessage.trim()) return;
    
    try {
      const response = await axios.post(API_ENDPOINTS.CHAT, {
        subject: newChatSubject,
        message: newChatMessage
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      
      setChats(prev => [response.data, ...prev]);
      setSelectedChat(response.data);
      setNewChatSubject('');
      setNewChatMessage('');
      setShowNewChatForm(false);
    } catch (error) {
      console.error('Error creating chat:', error);
      alert('Failed to create chat. Please try again.');
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim() || !selectedChat) return;
    
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
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return '#f59e0b';
      case 'in_progress': return '#3b82f6';
      case 'closed': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1001,
        backdropFilter: 'blur(2px)',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#ffffff',
          borderRadius: 16,
          width: '95%',
          maxWidth: 1000,
          height: '90%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid #e5e7eb',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Professional Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 32px',
          borderBottom: '1px solid #f3f4f6',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
            }}>
              💬
            </div>
            <div>
              <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
                {userRole === 'admin' ? 'Support Dashboard' : 'Support Center'}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, opacity: 0.9 }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: isConnected ? '#10b981' : '#ef4444',
                  animation: isConnected ? 'pulse 2s infinite' : 'none'
                }} />
                {isConnected ? 'Connected' : 'Connecting...'}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: 20,
              color: 'white',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          >
            ✕
          </button>
        </div>

        {/* Chat Content */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Chat List */}
          <div style={{
            width: 320,
            borderRight: '1px solid #f3f4f6',
            display: 'flex',
            flexDirection: 'column',
            background: '#fafafa',
          }}>
            {userRole === 'student' && (
              <div style={{ padding: 20 }}>
                <button
                  onClick={() => setShowNewChatForm(true)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 12,
                    padding: '16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <span>+</span>
                  New Conversation
                </button>
              </div>
            )}
            
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {loading ? (
                <div style={{ padding: 20, textAlign: 'center', color: '#6b7280' }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>⏳</div>
                  Loading conversations...
                </div>
              ) : chats.length === 0 ? (
                <div style={{ padding: 20, textAlign: 'center', color: '#6b7280' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>💬</div>
                  <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>
                    {userRole === 'admin' ? 'No support requests' : 'No conversations yet'}
                  </div>
                  <div style={{ fontSize: 14 }}>
                    {userRole === 'admin' ? 'Students will appear here when they need help' : 'Start a new conversation to get help!'}
                  </div>
                </div>
              ) : (
                chats.map(chat => (
                  <div
                    key={chat._id}
                    onClick={() => {
                      setSelectedChat(chat);
                      setShowNewChatForm(false);
                    }}
                    style={{
                      padding: '16px 20px',
                      borderBottom: '1px solid #f3f4f6',
                      cursor: 'pointer',
                      background: selectedChat?._id === chat._id ? '#e0e7ff' : 'transparent',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedChat?._id !== chat._id) {
                        e.currentTarget.style.background = '#f8fafc';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedChat?._id !== chat._id) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#1f2937', flex: 1 }}>
                        {chat.subject}
                      </div>
                      <div style={{
                        padding: '4px 8px',
                        borderRadius: 12,
                        fontSize: 11,
                        fontWeight: 600,
                        color: 'white',
                        background: getStatusColor(chat.status),
                      }}>
                        {chat.status}
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
                      {chat.messages.length} messages
                    </div>
                    <div style={{ fontSize: 11, color: '#9ca3af' }}>
                      {formatDate(chat.lastMessageAt)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Chat Messages */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
            {showNewChatForm ? (
              <div style={{ padding: 32, flex: 1, background: '#fafafa' }}>
                <div style={{
                  background: 'white',
                  borderRadius: 16,
                  padding: 32,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}>
                  <h3 style={{ marginBottom: 24, fontSize: 20, fontWeight: 600, color: '#1f2937' }}>
                    Start New Conversation
                  </h3>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={newChatSubject}
                      onChange={(e) => setNewChatSubject(e.target.value)}
                      placeholder="Brief description of your issue"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: 8,
                        fontSize: 14,
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    />
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
                      Message
                    </label>
                    <textarea
                      value={newChatMessage}
                      onChange={(e) => setNewChatMessage(e.target.value)}
                      placeholder="Describe your question or issue in detail"
                      rows={6}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #d1d5db',
                        borderRadius: 8,
                        fontSize: 14,
                        resize: 'vertical',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#667eea'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    />
                  </div>
                  <button
                    onClick={handleCreateNewChat}
                    disabled={!newChatSubject.trim() || !newChatMessage.trim()}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: 8,
                      padding: '12px 24px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      opacity: (!newChatSubject.trim() || !newChatMessage.trim()) ? 0.5 : 1,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (newChatSubject.trim() && newChatMessage.trim()) {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }
                    }}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            ) : selectedChat ? (
              <>
                {/* Chat Header */}
                <div style={{
                  padding: '20px 24px',
                  borderBottom: '1px solid #f3f4f6',
                  background: '#fafafa',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 600, color: '#1f2937', margin: 0, marginBottom: 4 }}>
                        {selectedChat.subject}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{
                          padding: '4px 8px',
                          borderRadius: 12,
                          fontSize: 11,
                          fontWeight: 600,
                          color: 'white',
                          background: getStatusColor(selectedChat.status),
                        }}>
                          {selectedChat.status}
                        </div>
                        <span style={{ fontSize: 12, color: '#6b7280' }}>
                          {selectedChat.messages.length} messages
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '24px',
                  background: '#f8fafc',
                }}>
                  {selectedChat.messages.map((message, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: 16,
                        display: 'flex',
                        justifyContent: message.sender === userRole ? 'flex-end' : 'flex-start',
                      }}
                    >
                      <div style={{
                        maxWidth: '70%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: message.sender === userRole ? 'flex-end' : 'flex-start',
                      }}>
                        <div style={{
                          background: message.sender === userRole 
                            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                            : '#ffffff',
                          color: message.sender === userRole ? '#ffffff' : '#1f2937',
                          borderRadius: 18,
                          padding: '12px 16px',
                          fontSize: 14,
                          lineHeight: 1.4,
                          boxShadow: message.sender === userRole 
                            ? '0 2px 8px rgba(102, 126, 234, 0.3)' 
                            : '0 2px 8px rgba(0, 0, 0, 0.1)',
                          border: message.sender === userRole ? 'none' : '1px solid #e5e7eb',
                        }}>
                          {message.message}
                        </div>
                        <div style={{
                          fontSize: 11,
                          color: '#6b7280',
                          marginTop: 4,
                          padding: '0 4px',
                        }}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div style={{
                  padding: '20px 24px',
                  borderTop: '1px solid #f3f4f6',
                  background: '#ffffff',
                }}>
                  <div style={{
                    display: 'flex',
                    gap: 12,
                    alignItems: 'flex-end',
                  }}>
                    <div style={{ flex: 1 }}>
                      <textarea
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        placeholder="Type your message..."
                        rows={1}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #d1d5db',
                          borderRadius: 12,
                          fontSize: 14,
                          resize: 'none',
                          outline: 'none',
                          transition: 'border-color 0.2s ease',
                          fontFamily: 'inherit',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#667eea'}
                        onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      />
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!chatInput.trim()}
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 12,
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        opacity: !chatInput.trim() ? 0.5 : 1,
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (chatInput.trim()) {
                          e.currentTarget.style.transform = 'scale(1.05)';
                        }
                      }}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      ➤
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: 16,
                background: '#f8fafc',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 64, marginBottom: 16 }}>💬</div>
                  <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#374151' }}>
                    Select a conversation
                  </div>
                  <div style={{ fontSize: 14 }}>
                    Choose a conversation from the list or start a new one
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default ProfessionalChat; 
