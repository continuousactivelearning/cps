//Author:Yeddula Pushkala             Date:12-06-25
/* AUTHOR(UI and components) - SHREYAS MENE (CREATED ON 12/06/2025) */
import React, { useState, useRef, useEffect } from 'react';
import { EnhancedChatbotService } from '../services';
import { ConversationMemoryManager } from '../services/conversationMemory';
import type { ConversationContext, Message } from '../services/conversationMemory';
import './Chatbot.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I can help you navigate our ML assessment platform, explain prerequisites, troubleshoot issues, interpret results, and guide your learning journey. What can I assist you with today?',
      isUser: false,
      timestamp: new Date(),
      intent: 'greeting'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Add the missing serviceReady state declaration
  const [serviceReady, setServiceReady] = useState(false);
  
  const [chatbotService] = useState(() => new EnhancedChatbotService());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeServices = async () => {
      try {
        await chatbotService.initialize();
        setServiceReady(true);
        console.log('Chatbot service initialized successfully');
      } catch (error) {
        console.error('Service initialization failed:', error);
        setServiceReady(false);
      }
    };
    initializeServices();
  }, [chatbotService]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, isUser: boolean, intent?: string, confidence?: number) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date(),
      intent,
      confidence
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add serviceReady check to prevent processing when service isn't ready
    if (!inputText.trim() || isLoading || !serviceReady) return;

    const userMessage = inputText.trim();
    addMessage(userMessage, true);
    setInputText('');
    setIsLoading(true);

    try {
      // Use the enhanced chatbot service with correct method name
      const result = await chatbotService.classifyAndRespond(
        userMessage,
        'default_user', // In production, use actual user ID
        'default_session' // In production, use actual session ID
      );
      
      // Add bot response with classification metadata
      addMessage(result.response, false, result.intent, result.confidence);

    } catch (error) {
      console.error('Error processing message:', error);
      addMessage('I apologize, but I encountered an error processing your request. Please try again or contact our support team if the issue persists.', false);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        onClick={toggleChat}
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>ML Assessment Assistant</h3>
            <span className={`service-status ${serviceReady ? 'ready' : 'initializing'}`}>
              {serviceReady ? '' : '🔄 Initializing...'}
            </span>
            <button onClick={toggleChat} className="close-button">✕</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.isUser ? 'user' : 'bot'}`}
              >
                <div className="message-content">
                  {formatMessage(message.text)}
                </div>
                <div className="message-metadata">
                  <span className="message-timestamp">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  {message.intent && message.confidence && (
                    <span className={`intent-debug confidence-${getConfidenceLevel(message.confidence)}`}>
                      {message.intent} ({(message.confidence * 100).toFixed(0)}%)
                    </span>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="message bot loading">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  Processing your request...
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input-form">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={serviceReady 
                ? "Ask about navigation, prerequisites, technical issues, results, or learning guidance..." 
                : "Initializing chatbot services..."
              }
              className="chatbot-input"
              disabled={isLoading || !serviceReady}
            />
            <button 
              type="submit" 
              className="chatbot-send-button"
              disabled={isLoading || !inputText.trim() || !serviceReady}
            >
              {isLoading ? '⏳' : '📤'}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

// Helper function to format messages
const formatMessage = (text: string) => {
  // Handle numbered lists and formatting
  const lines = text.split('\n');
  return lines.map((line, index) => {
    if (line.match(/^\d+\)/)) {
      return <div key={index} className="numbered-item">{line}</div>;
    }
    if (line.startsWith('**') && line.endsWith('**')) {
      return <div key={index} className="message-header">{line.slice(2, -2)}</div>;
    }
    return <span key={index}>{line}{index < lines.length - 1 && <br />}</span>;
  });
};

// Helper function to determine confidence level for styling
const getConfidenceLevel = (confidence: number): string => {
  if (confidence > 0.8) return 'high';
  if (confidence > 0.4) return 'medium';
  return 'low';
};

export default Chatbot;
