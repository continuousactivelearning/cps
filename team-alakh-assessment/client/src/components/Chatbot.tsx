import React, { useState, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";

interface ChatbotProps {
  notifications?: any[];
  minimized?: boolean;
  setMinimized?: (min: boolean) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ notifications = [], minimized, setMinimized }) => {
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatbotInitialized, setChatbotInitialized] = useState(false);
  // Use controlled minimized state if provided, else fallback to internal state
  const [internalMinimized, setInternalMinimized] = useState(true);
  const isMinimized = minimized !== undefined ? minimized : internalMinimized;
  const setMin = setMinimized || setInternalMinimized;
  const [chatbotPulse, setChatbotPulse] = useState(true);

  // Auto-scroll chat to bottom
  useEffect(() => {
    const chatContainer = document.querySelector('.chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  // Welcome message and chat initialization
  useEffect(() => {
    if (!isMinimized && chatMessages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        text: `Welcome to your learning assistant! 👋 I'm here to help you navigate the dependency-aware learning system. You can ask me about prerequisites, your progress, how to use the system, or anything else related to your learning journey. What would you like to know?`,
        sender: 'bot',
        timestamp: new Date()
      };
      setChatMessages([welcomeMessage]);
    } else if (isMinimized && chatMessages.length > 0) {
      setChatMessages([]);
    }
  }, [isMinimized]);

  // Keyboard shortcut: Escape closes chatbot
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isMinimized) {
        setMin(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMinimized, setMin]);

  // Chatbot attention animation state
  useEffect(() => {
    if (isMinimized) {
      const interval = setInterval(() => setChatbotPulse((p) => !p), 1200);
      return () => clearInterval(interval);
    }
  }, [isMinimized]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMessage = {
      id: Date.now(),
      text: chatInput,
      sender: 'user',
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput("");
    setTimeout(() => {
      const botResponse = generateBotResponse(chatInput);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    const userMessage = {
      id: Date.now(),
      text: action,
      sender: 'user',
      timestamp: new Date()
    };
    setChatMessages(prev => [...prev, userMessage]);
    setTimeout(() => {
      const botResponse = generateBotResponse(action);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('prerequisite') || lowerInput.includes('prereq')) {
      return "Prerequisites are foundational topics you need to master before learning advanced concepts. Check your profile page to see which prerequisites you're missing for your searched topics!";
    } else if (lowerInput.includes('profile') || lowerInput.includes('progress')) {
      return "Your profile page shows your learning progress, passed topics, missing prerequisites, and personalized recommendations. Click on your email in the header to view it!";
    } else if (lowerInput.includes('how') && lowerInput.includes('use')) {
      return "To use the system: 1) Search for a topic you want to learn, 2) Check if you have the prerequisites, 3) Learn missing prerequisites first, 4) Take assessments to prove your understanding!";
    } else if (lowerInput.includes('assessment') || lowerInput.includes('quiz')) {
      return "Assessments help you prove you understand a topic. You need to score 7/10 to pass. If you fail, you'll be directed to the learning material to improve!";
    } else if (lowerInput.includes('missing') || lowerInput.includes('not learned')) {
      return `You have ${notifications.length} topics with missing prerequisites. Check the notifications bell for details, or visit your profile page for a complete overview!`;
    } else if (lowerInput.includes('notification') || lowerInput.includes('alert')) {
      return "Notifications alert you about missing prerequisites for topics you've searched. Click on them to navigate directly to the learning material!";
    } else if (lowerInput.includes('complete') || lowerInput.includes('finish')) {
      return "To complete a topic: 1) Learn the material, 2) Take the assessment, 3) Score 7/10 or higher to pass. Failed attempts will guide you back to learning!";
    } else if (lowerInput.includes('search') || lowerInput.includes('find')) {
      return "Use the search bar on the dashboard to find any topic you want to learn. The system will check your prerequisites and guide you on the optimal learning path!";
    } else {
      return "I'm here to help you navigate the dependency-aware learning system! Ask me about prerequisites, your progress, how to use the system, or anything else!";
    }
  };

  const handleChatbotToggle = () => setMin(!isMinimized);

  return (
    <>
      {/* Floating Chatbot Bubble */}
      {isMinimized && (
        <button
          className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center border-4 border-white dark:border-gray-900 bg-black dark:bg-gray-900 animate-spin-slow ${chatbotPulse ? 'animate-bounce' : ''}`}
          onClick={handleChatbotToggle}
          aria-label="Open Chatbot"
          style={{ animationDuration: '2.5s' }}
        >
          <span className="text-3xl animate-pulse">🤖</span>
          {/* Tooltip/arrow */}
          <span className="absolute -left-40 top-0 -translate-y-1/2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2 rounded-xl shadow-lg font-semibold text-sm border border-gray-200 dark:border-gray-700 animate-fade-in pointer-events-none select-none">
            Need help? Chat with me!
            <span className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white dark:border-l-gray-900 ml-1"></span>
          </span>
        </button>
      )}
      {!isMinimized && (
        <div className="fixed bottom-8 right-8 z-50 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-gray-700 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-black dark:bg-gray-900 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <span className="text-2xl animate-pulse">🤖</span>
              <h3 className="font-semibold text-white">Learning Assistant</h3>
            </div>
            <button
              onClick={handleChatbotToggle}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 chat-messages">
            {chatMessages.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                <Bot className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Hi! I'm your learning assistant. Ask me about:</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Prerequisites and learning paths</li>
                  <li>• Your progress and missing topics</li>
                  <li>• How to use the system</li>
                  <li>• Assessment strategies</li>
                </ul>
              </div>
            ) : (
              <>
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {/* Quick Actions */}
                {chatMessages.length === 1 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    <button
                      onClick={() => handleQuickAction("How do I use this system?")}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      How to use?
                    </button>
                    <button
                      onClick={() => handleQuickAction("What are my missing prerequisites?")}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      Missing prereqs
                    </button>
                    <button
                      onClick={() => handleQuickAction("How do assessments work?")}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      Assessments
                    </button>
                    <button
                      onClick={() => handleQuickAction("Show me my progress")}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      My progress
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
          <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-xl transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot; 