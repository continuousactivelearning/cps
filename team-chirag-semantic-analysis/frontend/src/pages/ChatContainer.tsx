import React, { useState, useRef, useEffect } from 'react';
import type { Message as MessageType, LinkPreview } from '../types/chat';
import { Message } from '../components/Message';
import { MessageInput } from '../components/MessageInput';
import { TypingIndicator } from '../components/TypingIndicator';
import { extractUrls, fetchLinkPreview } from '../utils/linkUtils';

export const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      content: `Hello! I'm your AI assistant. I can help you with data structures, algorithms, and even show you useful videos. How can I assist you today?`,
      role: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

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

    setMessages(prev => [...prev, userMessage]);

    // Update with real previews if available
    if (userLinks.length > 0) {
      const actualPreviews = await Promise.all(
        userLinks.map(link => fetchLinkPreview(link.url))
      );
      setMessages(prev => prev.map(msg =>
        msg.id === userMessage.id ? { ...msg, links: actualPreviews } : msg
      ));
    }

    // Show typing...
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
    setMessages(prev => [...prev, aiMessage]);
  };

  // For detecting user-submitted URLs
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

  const generateAIResponse = async (userMessage: string): Promise<{ response: string, videos: any[] }> => {
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

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
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
      </div>

      <MessageInput
        onSendMessage={handleSendMessage}
        disabled={isTyping}
        placeholder="Type your DSA topic or question..."
      />
    </div>
  );
};