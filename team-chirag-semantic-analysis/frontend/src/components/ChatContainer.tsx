import React, { useState, useRef, useEffect } from 'react';
import type{ Message as MessageType, LinkPreview } from '../types/chat';
import { Message } from './Message';
import { MessageInput } from './MessageInput';
import { TypingIndicator } from './TypingIndicator';
import { extractUrls, fetchLinkPreview } from '../utils/linkUtils';

export const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. I can help you with various tasks and answer questions. How can I assist you today?',
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

  // Generate AI response
  const generateAIResponse = async (userMessage: string): Promise<string> => {
  try {
    const res = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await res.json();
    return data.response || "Sorry, I couldn't generate a response.";
  } catch (err) {
    console.error("Error calling backend:", err);
    return "There was an error contacting the AI service.";
  }
};


  // Process links in a message
  const processMessageLinks = async (content: string): Promise<LinkPreview[]> => {
    const urls = extractUrls(content);
    if (urls.length === 0) return [];

    // Create loading previews first
    const loadingPreviews: LinkPreview[] = urls.map(url => ({
      url,
      loading: true,
      error: false
    }));

    // Fetch actual previews
    const previews = await Promise.all(
      urls.map(url => fetchLinkPreview(url).catch(() => ({
        url,
        loading: false,
        error: true,
        domain: new URL(url).hostname.replace('www.', '')
      })))
    );

    return previews;
  };

  const handleSendMessage = async (content: string) => {
    // Create user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    // Process links for user message
    const userLinks = await processMessageLinks(content);
    if (userLinks.length > 0) {
      userMessage.links = userLinks.map(link => ({ ...link, loading: true }));
    }

    setMessages(prev => [...prev, userMessage]);

    // Update user message with actual link previews
    if (userLinks.length > 0) {
      const actualPreviews = await Promise.all(
        userLinks.map(link => fetchLinkPreview(link.url))
      );
      
      setMessages(prev => prev.map(msg => 
        msg.id === userMessage.id 
          ? { ...msg, links: actualPreviews }
          : msg
      ));
    }

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Generate AI response
    const aiResponse = await generateAIResponse(content);
    const aiMessage: MessageType = {
      id: (Date.now() + 1).toString(),
      content: aiResponse,
      role: 'assistant',
      timestamp: new Date(),
    };

    // Process links in AI response
    const aiLinks = await processMessageLinks(aiResponse);
    if (aiLinks.length > 0) {
      aiMessage.links = aiLinks;
    }

    setIsTyping(false);
    setMessages(prev => [...prev, aiMessage]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          {messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          
          {/* Typing indicator */}
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

      {/* Input area */}
      <MessageInput
        onSendMessage={handleSendMessage}
        disabled={isTyping}
        placeholder="Type your message..."
      />
    </div>
  );
};