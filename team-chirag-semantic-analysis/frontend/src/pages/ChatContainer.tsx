import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header'; // Make sure you have this import
import { Message } from '../components/Message';
import { MessageInput } from '../components/MessageInput';
import { Sidebar } from '../components/Sidebar';
import { TypingIndicator } from '../components/TypingIndicator';
import type { LinkPreview, Message as MessageType } from '../types/chat';
import { extractUrls, fetchLinkPreview } from '../utils/linkUtils';

interface ChatHistory {
  id: string;
  title: string;
  messages: MessageType[];
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

  const generateAIResponse = async (userMessage: string): Promise<{ response: string; videos: any[] }> => {
    try {
      const res = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await res.json();
      return {
        response: data.response,
        videos: data.videos || []
      };
    } catch (err) {
      console.error("Error:", err);
      return {
        response: "There was an error contacting the AI service.",
        videos: []
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
          className="flex-1 flex flex-col"
          style={{
            marginLeft: sidebarCollapsed ? '4rem' : '16rem',
            paddingTop: HEADER_HEIGHT,
            height: '100vh',
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
              <Message key={message.id} message={message} />
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
              height: `${FOOTER_HEIGHT}px`,
              background: 'inherit',
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
