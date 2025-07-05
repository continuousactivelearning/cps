import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header'; // Make sure you have this import
import { Message } from '../components/Message';
import { MessageInput } from '../components/MessageInput';
import { Sidebar } from '../components/Sidebar';
import { TypingIndicator } from '../components/TypingIndicator';
import { useToast } from '../components/ToastProvider';
import type { LinkPreview, Message as MessageType } from '../types/chat';
import { extractUrls, fetchLinkPreview } from '../utils/linkUtils';

interface ChatHistory {
  id: string;
  title: string;
  messages: MessageType[];
}

interface AIAnalysis {
  gaps?: string[];
  learning_path?: string[];
  next_step?: string;
  next_step_explanation?: string;
  next_step_videos?: VideoData[];
  known_topics?: string[];
  dynamic?: boolean;
  logged?: boolean;
  learning_session_active?: boolean;
  graph_based?: boolean;
  small_talk?: boolean;
  topic_completed?: string;
  progress?: string;
  awaiting_confirmation?: boolean;
  current_topic?: string;
  confirmation_requested?: boolean;
  error?: string;
}

interface AIResponse {
  response: string;
  videos: VideoData[];
  analysis?: AIAnalysis;
}

interface VideoData {
  title: string;
  url: string;
  description: string;
  channel?: string;
  duration?: string;
  views?: string;
}

const getDefaultWelcome = (): MessageType => ({
  id: '1',
  content: `Hello! I'm your AI assistant. I can help you with data structures, algorithms, and even show you useful videos. How can I assist you today?`,
  role: 'assistant',
  timestamp: new Date(),
});

export const ChatContainer: React.FC = () => {
  const [chats, setChats] = useState<ChatHistory[]>([
    { id: 'chat-1', title: 'New Chat', messages: [getDefaultWelcome()] },
  ]);
  const [activeChatId, setActiveChatId] = useState('chat-1');
  const [isTyping, setIsTyping] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { showSuccess, showError, showInfo } = useToast();

  const activeChat = chats.find((chat) => chat.id === activeChatId)!;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat.messages, isTyping]);

  const handleSendMessage = async (content: string) => {
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    const userLinks = await processMessageLinks(content);
    if (userLinks.length > 0) {
      userMessage.links = userLinks.map(link => ({ ...link, loading: true }));
    }

    updateActiveChatMessages([...activeChat.messages, userMessage]);

    if (userLinks.length > 0) {
      const actualPreviews = await Promise.all(
        userLinks.map(link => fetchLinkPreview(link.url))
      );
      updateActiveChatMessages(prev =>
        prev.map(msg =>
          msg.id === userMessage.id ? { ...msg, links: actualPreviews } : msg
        )
      );
    }

    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    const response = await generateAIResponse(content);

    const aiMessage: MessageType = {
      id: (Date.now() + 1).toString(),
      content: response.response,
      role: 'assistant',
      timestamp: new Date(),
      analysis: response.analysis,
      // Only add regular videos to links, not next_step_videos (those go in analysis)
      links: response.videos.map(video => ({
        url: video.url,
        domain: 'youtube.com',
        title: video.title,
        description: video.description,
        image: `https://i.ytimg.com/vi/${video.url.split('v=')[1]}/hqdefault.jpg`,
        favicon: 'https://www.youtube.com/s/desktop/6d45fb89/img/favicon.ico',
        badge: 'YouTube',
        loading: false,
        error: false
      }))
    };

    setIsTyping(false);
    updateActiveChatMessages(prev => [...prev, aiMessage]);

    if (activeChat.title === 'New Chat') {
      setChats(cs =>
        cs.map(c =>
          c.id === activeChatId
            ? { ...c, title: content.slice(0, 20) || 'Chat' }
            : c
        )
      );
    }
  };

  function updateActiveChatMessages(
    updater: MessageType[] | ((prev: MessageType[]) => MessageType[])
  ) {
    setChats(cs =>
      cs.map(c =>
        c.id === activeChatId
          ? { ...c, messages: typeof updater === 'function' ? updater(c.messages) : updater }
          : c
      )
    );
  }

  const processMessageLinks = async (content: string): Promise<LinkPreview[]> => {
    const urls = extractUrls(content);
    if (urls.length === 0) return [];

    const previews = await Promise.all(
      urls.map(url =>
        fetchLinkPreview(url).catch(() => ({
          url,
          domain: new URL(url).hostname.replace('www.', ''),
          loading: false,
          error: true
        }))
      )
    );
    return previews;
  };

  const generateAIResponse = async (userMessage: string): Promise<AIResponse> => {
    try {
      // Prepare chat history for context (last 5 messages)
      const chatHistory = activeChat.messages.slice(-5).map(msg => ({
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp.toISOString()
      }));

      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage,
          chat_history: chatHistory,
          user_id: 'default' // You can make this dynamic based on user auth
        })
      });
      
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      
      const data = await res.json();
      
      // Show success notifications for certain analysis types
      if (data.analysis?.profile_updated) {
        showSuccess('Topic added to your profile!');
      }
      if (data.analysis?.path_completed) {
        showSuccess('🎉 Congratulations! Learning path completed!');
      }
      
      return {
        response: data.response,
        videos: data.videos || [],
        analysis: data.analysis || {}
      };
    } catch (err) {
      console.error("Error:", err);
      showError("There was an error contacting the AI service. Please try again.");
      return {
        response: "There was an error contacting the AI service.",
        videos: [],
        analysis: {}
      };
    }
  };

  const handleNewChat = () => {
    const newId = `chat-${Date.now()}`;
    setChats(cs => [
      ...cs,
      { id: newId, title: 'New Chat', messages: [getDefaultWelcome()] },
    ]);
    setActiveChatId(newId);
  };

  const handleSelectChat = (id: string) => {
    setActiveChatId(id);
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(c => !c);
  };

  const handleProgressAction = async (action: string) => {
    // Show immediate feedback
    switch (action) {
      case 'understand':
        showInfo('Great! Moving to next topic...');
        break;
      case 'next':
        showInfo('Continuing to next topic...');
        break;
      case 'need_help':
        showInfo('Getting more explanation...');
        break;
      case 'satisfied':
        showSuccess('Adding topic to your profile...');
        break;
      default:
        showInfo('Processing your request...');
    }
    
    // Convert action to appropriate message to send to backend
    let message = '';
    switch (action) {
      case 'understand':
        message = 'I understand this topic';
        break;
      case 'next':
        message = 'Next topic';
        break;
      case 'need_help':
        message = 'I need more explanation';
        break;
      case 'satisfied':
        message = 'I am satisfied with this topic and ready to add it to my profile';
        break;
      default:
        message = 'Continue learning';
    }
    
    // Send the message automatically
    await handleSendMessage(message);
  };

  // Heights (adjust if your header/footer are taller)
  const HEADER_HEIGHT = 64;
  const FOOTER_HEIGHT = 80;

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-950">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Header />
      </div>
      <div className="flex h-full">
        {/* Sidebar */}
        <Sidebar
          chats={chats}
          activeChatId={activeChatId}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
          collapsed={sidebarCollapsed}
          onToggle={handleToggleSidebar}
        />
        {/* Chat Area */}
        <div
          className="flex-1 flex flex-col fixed top-0 bottom-0 right-0 transition-all duration-300"
          style={{
            left: sidebarCollapsed ? '4rem' : '16rem', // 4rem (64px) when collapsed, 16rem (256px) when expanded
            paddingTop: HEADER_HEIGHT,
            height: '100vh',
            width: `calc(100vw - ${sidebarCollapsed ? '4rem' : '16rem'})`,
            zIndex: 20,
            background: 'inherit',
          }}
        >
          {/* Scrollable Messages Area */}
          <div
            className="flex-1 overflow-y-auto px-4 py-6 max-w-4xl mx-auto w-full"
            style={{
              paddingBottom: FOOTER_HEIGHT,
            }}
          >
            {activeChat.messages.map((message) => (
              <Message 
                key={message.id} 
                message={message} 
                onProgressAction={handleProgressAction}
              />
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3">
                    <TypingIndicator />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Footer is now fixed at the bottom of the window */}
          <div
            className="fixed bottom-0 right-0 z-30 w-full"
            style={{
              left: sidebarCollapsed ? '4rem' : '16rem',
              height: `${FOOTER_HEIGHT}px`,
              background: 'inherit',
              width: `calc(100vw - ${sidebarCollapsed ? '4rem' : '16rem'})`,
              transition: 'left 0.3s, width 0.3s',
            }}
          >
            <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 h-full flex items-center">
              <div className="max-w-4xl mx-auto w-full">
                <MessageInput
                  onSendMessage={handleSendMessage}
                  disabled={isTyping}
                  placeholder="Type your DSA topic or question..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


