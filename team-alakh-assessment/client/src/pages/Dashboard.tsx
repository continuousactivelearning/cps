import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  BookOpen,
  Trophy,
  User,
  LogOut,
  AlertTriangle,
  CheckCircle,
  Play,
  PenTool,
  Bell,
  MessageCircle,
  Target,
  TrendingUp,
  Clock,
  Sparkles,
  ChevronRight,
  X,
  Send,
  Bot,
  Trash2,
  HelpCircle,
  FileText,
} from "lucide-react";
import api, { addToSearchHistory, getSearchHistory, getPrerequisites, getActivityCalendar } from "../services/api";
import ThemeToggle from "../components/ThemeToggle";
import Profile from "./Profile";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Chatbot from '../components/Chatbot';
import GalaxyBackground from '../components/GalaxyBackground';
import AnimatedIntroText from '../components/AnimatedIntroText';
import axios from 'axios';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [missingPrereqs, setMissingPrereqs] = useState<string[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [userProfile, setUserProfile] = useState<any>(null);
  const [profileComplete, setProfileComplete] = useState(false);
  const [userStats, setUserStats] = useState<any>(null);
  const [showPrereqModal, setShowPrereqModal] = useState(false);
  const [selectedPrereq, setSelectedPrereq] = useState<string>("");
  const [activityDates, setActivityDates] = useState<string[]>([]);
  const [passedTopics, setPassedTopics] = useState<string[]>([]);
  const [allPrereqs, setAllPrereqs] = useState<string[]>([]);
  const navigate = useNavigate();
  const profileRef = useRef<HTMLDivElement>(null);
  const dependencyMapRef = useRef<HTMLDivElement>(null);
  const assessmentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [chatbotMinimized, setChatbotMinimized] = useState(true);
  const [showMasteredModal, setShowMasteredModal] = useState(false);
  const [queryModalOpen, setQueryModalOpen] = useState(false);
  const [queryContent, setQueryContent] = useState('');
  const [queryFiles, setQueryFiles] = useState<File[]>([]);
  const [queryMsg, setQueryMsg] = useState('');
  const [myQueries, setMyQueries] = useState<any[]>([]);
  const [queryLoading, setQueryLoading] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<{ open: boolean, id: string | null }>({ open: false, id: null });
  const [queryPanelOpen, setQueryPanelOpen] = useState(false);
  const [queryToastMsg, setQueryToastMsg] = useState('');
  const [queryToastType, setQueryToastType] = useState<'success' | 'error'>('success');

  // Particle options
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);
  const particlesOptions = {
    background: { color: { value: "#f8fafc00" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: ["#7F5AF0", "#2CB67D", "#FBBF24", "#FF6F91"] },
      links: { enable: true, color: "#7F5AF0", distance: 120, opacity: 0.2, width: 1 },
      collisions: { enable: false },
      move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
      number: { density: { enable: true, area: 800 }, value: 60 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 5 } },
    },
    detectRetina: true,
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const headers = { Authorization: `Bearer ${token}` };
        
        // Fetch user data
        const [userRes, searchRes, profileRes, statsRes] = await Promise.all([
          api.get("/api/user/passed", { headers }),
          getSearchHistory(token),
          api.get("/api/user/profile", { headers }),
          api.get("/api/user/stats", { headers })
        ]);
        
        setUserEmail(userRes.data.email || null);
        setSearchHistory(searchRes.data.searchHistory || []);
        setUserProfile(profileRes.data);
        setUserStats(statsRes.data);
        setPassedTopics(userRes.data.passed || []);
        
        // Check if profile is complete
        const profile = profileRes.data;
        setProfileComplete(profile?.profile?.name && profile?.profile?.picture);
        
        // Generate notifications for missing prerequisites
        await generateNotifications(token, searchRes.data.searchHistory || []);
        
        // Fetch activity calendar
        const activityRes = await getActivityCalendar(token);
        setActivityDates(activityRes.data.activityDates || []);
        
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showProfile) {
          handleProfileClose();
        }
        if (showNotifications) {
          setShowNotifications(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showProfile, showNotifications]);

  // Auto-scroll chat to bottom
  useEffect(() => {
    const chatContainer = document.querySelector('.chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  const generateNotifications = async (token: string, searchedTopics: string[]) => {
    const newNotifications = [];
    
    for (const topic of searchedTopics) {
      try {
        const prereqRes = await getPrerequisites(token, topic);
        const prereqs = prereqRes.data.prerequisites || [];
        
        // Get user's passed topics
        const userRes = await api.get("/api/user/passed", { headers: { Authorization: `Bearer ${token}` } });
        const passedTopics = userRes.data.passed || [];
        
        const missing = prereqs.filter((pr: string) => !passedTopics.includes(pr));
        
        if (missing.length > 0) {
          newNotifications.push({
            id: Date.now() + Math.random(),
            type: 'prerequisite',
            title: `Missing Prerequisites for ${topic}`,
            message: `You need to complete: ${missing.join(', ')}`,
            topic,
            missingPrereqs: missing,
            timestamp: new Date()
          });
        }
      } catch (err) {
        console.log(`No prerequisites found for ${topic}`);
      }
    }
    
    setNotifications(newNotifications);
  };

  const handleTopicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMissingPrereqs([]);
    setCanProceed(false);

    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      // Check if topic is already mastered
      if (passedTopics.includes(topic)) {
        setAllPrereqs([]);
        setMissingPrereqs([]);
        setCanProceed(false);
        setLoading(false);
        return;
      }

      // Track search history
      await addToSearchHistory(token!, topic);

      const prereqRes = await api.get(`/api/prerequisite/${topic}`, { headers });
      const prereqs: string[] = prereqRes.data.prerequisites || [];
      const userRes = await api.get(`/api/user/passed`, { headers });
      const passed: string[] = userRes.data.passed || [];
      const missing = prereqs.filter((pr) => !passed.includes(pr));
      if (missing.length === 0) {
        setCanProceed(true);
      } else {
        setMissingPrereqs(missing);
      }
      setAllPrereqs(prereqs);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while processing your request.");
    }
    setLoading(false);
  };

  const handleProceedToLearn = () => {
    navigate(`/learn/${encodeURIComponent(topic)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleNotificationClick = (notification: any) => {
    if (notification.type === 'prerequisite') {
      // Navigate to the first missing prerequisite
      const firstPrereq = notification.missingPrereqs[0];
      navigate(`/learn/${encodeURIComponent(firstPrereq)}`);
    }
  };

  const handleProfileClose = () => {
    setShowProfile(false);
    // Refresh user data after profile update
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const headers = { Authorization: `Bearer ${token}` };
        
        const [userRes, searchRes, profileRes, statsRes] = await Promise.all([
          api.get("/api/user/passed", { headers }),
          getSearchHistory(token),
          api.get("/api/user/profile", { headers }),
          api.get("/api/user/stats", { headers })
        ]);
        
        setUserEmail(userRes.data.email || null);
        setSearchHistory(searchRes.data.searchHistory || []);
        setUserProfile(profileRes.data);
        setUserStats(statsRes.data);
        setPassedTopics(userRes.data.passed || []);
        
        // Check if profile is complete
        const profile = profileRes.data;
        setProfileComplete(profile?.profile?.name && profile?.profile?.picture);
        
        // Generate notifications for missing prerequisites
        await generateNotifications(token, searchRes.data.searchHistory || []);
        
        // Fetch activity calendar
        const activityRes = await getActivityCalendar(token);
        setActivityDates(activityRes.data.activityDates || []);
        
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
    fetchUserData();
  };

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

    // Generate bot response
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

    // Generate bot response
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

  // Scroll to section in Profile modal
  const handleStatClick = (section: 'topics' | 'inprogress' | 'assessments' | 'stats') => {
    setShowProfile(true);
    setTimeout(() => {
      if (section === 'topics' && profileRef.current) profileRef.current.scrollIntoView({ behavior: 'smooth' });
      if (section === 'inprogress' && dependencyMapRef.current) dependencyMapRef.current.scrollIntoView({ behavior: 'smooth' });
      if (section === 'assessments' && assessmentRef.current) assessmentRef.current.scrollIntoView({ behavior: 'smooth' });
      if (section === 'stats' && statsRef.current) statsRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  // Floating chatbot bubble
  const handleChatbotToggle = () => setChatbotMinimized((min) => !min);

  // Chatbot attention animation state
  const [chatbotPulse, setChatbotPulse] = useState(true);
  useEffect(() => {
    if (chatbotMinimized) {
      const interval = setInterval(() => setChatbotPulse((p) => !p), 1200);
      return () => clearInterval(interval);
    }
  }, [chatbotMinimized]);

  // Animated SVG background and scrolling icons
  const AnimatedBackground = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* SVG Waves */}
      <svg className="absolute top-0 left-0 w-full h-64" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#7F5AF0" fillOpacity="0.18" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        <path fill="#2CB67D" fillOpacity="0.12" d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,186.7C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
      {/* Scrolling icons */}
      <div className="absolute bottom-0 left-0 w-full h-16 flex items-center overflow-hidden pointer-events-none">
        <div className="flex animate-scroll-x space-x-12 text-3xl opacity-30">
          <span>📚</span><span>💡</span><span>🧠</span><span>🔬</span><span>💻</span><span>📝</span><span>🔗</span><span>📈</span><span>🧩</span><span>🌐</span>
        </div>
      </div>
    </div>
  );

  // Utility to get color for prerequisite
  const getPrereqColor = (prereq: string) =>
    passedTopics.includes(prereq)
      ? 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200'
      : 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200';

  // Handle prerequisite click for modal
  const handlePrereqClick = (prereq: string) => {
    if (passedTopics.includes(prereq)) {
      setSelectedPrereq(prereq);
      setShowMasteredModal(true);
    } else {
      setSelectedPrereq(prereq);
      setShowPrereqModal(true);
    }
  };
  const handlePrereqAction = (action: 'learn' | 'quiz') => {
    setShowPrereqModal(false);
    if (action === 'learn') {
      navigate(`/learn/${encodeURIComponent(selectedPrereq)}`);
    } else {
      navigate(`/quiz/${encodeURIComponent(selectedPrereq)}`);
    }
  };

  // Add Escape key handling for modal
  useEffect(() => {
    if (!showProfile) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleProfileClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showProfile]);

  // Calendar Heatmap Component
  const renderCalendarHeatmap = () => {
    if (!activityDates.length) return null;
    // Get the last 60 days
    const today = new Date();
    const days = [];
    for (let i = 59; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
      days.push({ date: dateStr, active: activityDates.includes(dateStr) });
    }
    return (
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
          <Clock className="h-5 w-5 mr-2 text-green-500" />
          Activity Streak (last 60 days)
        </h3>
        <div className="flex items-center gap-4 mb-2">
          <span className="flex items-center gap-1 text-xs font-medium"><span className="inline-block w-4 h-4 rounded bg-green-500 border border-green-600"></span> <span className="text-green-700">Activity</span></span>
          <span className="flex items-center gap-1 text-xs font-medium"><span className="inline-block w-4 h-4 rounded bg-gray-200 border border-gray-400"></span> <span className="text-gray-700">No Activity</span></span>
        </div>
        <div className="grid grid-cols-12 gap-1">
          {days.map((day, idx) => (
            <div
              key={day.date}
              title={day.date + (day.active ? ' - Active' : '')}
              className={`w-4 h-4 rounded transition-all duration-200 border
                ${day.active ? 'bg-green-500 border-green-600' : 'bg-gray-200 border-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  // Utility to get pending prerequisites for suggestions
  const getPendingSuggestions = () => {
    // Gather all notifications for missing prerequisites
    return notifications
      .map(n => n.missingPrereqs[0])
      .filter(prereq => prereq && !passedTopics.includes(prereq));
  };

  const fetchMyQueries = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/query/my', { headers: { Authorization: `Bearer ${token}` } });
      setMyQueries(res.data);
    } catch {}
  };
  useEffect(() => { fetchMyQueries(); }, []);

  const handleQueryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setQueryFiles(Array.from(e.target.files));
  };
  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQueryLoading(true);
    setQueryMsg('');
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('content', queryContent);
      queryFiles.forEach(f => formData.append('attachments', f));
      await axios.post('/api/query', formData, { headers: { Authorization: `Bearer ${token}` } });
      setQueryToastMsg('Query sent!');
      setQueryToastType('success');
      setQueryContent('');
      setQueryFiles([]);
      fetchMyQueries();
      setTimeout(() => { setQueryModalOpen(false); setQueryToastMsg(''); }, 2000);
    } catch {
      setQueryToastMsg('Failed to send query.');
      setQueryToastType('error');
      setTimeout(() => setQueryToastMsg(''), 2000);
    }
    setQueryLoading(false);
  };
  const handleCloseQuery = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`/api/query/${id}/close`, {}, { headers: { Authorization: `Bearer ${token}` } });
      setQueryToastMsg('Query deleted.');
      setQueryToastType('success');
      fetchMyQueries();
      setTimeout(() => setQueryToastMsg(''), 2000);
    } catch {
      setQueryToastMsg('Failed to delete query.');
      setQueryToastType('error');
      setTimeout(() => setQueryToastMsg(''), 2000);
    }
  };

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      {/* Galaxy Background */}
      <GalaxyBackground />
      {/* AnimatedBackground SVGs */}
      <AnimatedBackground />
      {/* Header */}
      <div className="bg-white/80 dark:bg-[#181818]/70 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Profile Photo */}
            <button
              className="relative group w-14 h-14 rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-lg overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer hover-glow"
              onClick={() => setShowProfile(true)}
              tabIndex={0}
              aria-label="Open Profile"
              type="button"
            >
              {userProfile?.profile?.picture ? (
                <img src={userProfile.profile.picture} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl text-gray-400">👤</span>
              )}
              <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">View Profile</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {userProfile?.profile?.name ? `Welcome back, ${userProfile.profile.name}!` : 'Welcome to PreAssess!'}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Empowering your dependency-aware learning journey</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Profile Completion Alert */}
            {!profileComplete && (
              <div className="bg-gray-100 dark:bg-[#222] px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800">
                <button 
                  onClick={() => setShowProfile(true)}
                  className="text-gray-800 dark:text-gray-200 text-sm font-medium hover:text-gray-900 dark:hover:text-white flex items-center space-x-1"
                >
                  <Sparkles className="h-4 w-4 text-gray-700 dark:text-gray-200" />
                  <span>Complete Profile</span>
                </button>
              </div>
            )}

            {/* Notifications */}
            <div className="relative group">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover-glow"
                aria-label="View Notifications"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
                <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">Notifications</span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-[#181818] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 z-50">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.length > 0 ? notifications.map((notification) => (
                      <div
                        key={notification.id}
                        onClick={() => handleNotificationClick(notification)}
                        className="p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#222] cursor-pointer transition-colors"
                      >
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">{notification.title}</h4>
                            <p className="text-gray-700 dark:text-gray-300 text-xs mt-1">{notification.message}</p>
                            <p className="text-gray-400 text-xs mt-2">{notification.timestamp.toLocaleTimeString()}</p>
                          </div>
                        </div>
                      </div>
                    )) : (
                      <div className="p-4 text-center text-gray-500 dark:text-gray-400">No notifications</div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Button */}
            {userEmail && (
              <div className="relative flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg hover-glow group">
                <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <button 
                  onClick={() => setShowProfile(true)}
                  className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Open Profile"
                >
                  {userEmail}
                </button>
                <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">Check Profile</span>
              </div>
            )}

            {/* Chatbot Toggle */}
            <div className="relative">
              <button
                onClick={() => setChatbotMinimized(false)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover-glow group"
                aria-label="Open Chatbot"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">Ask the Assistant</span>
              </button>
            </div>

            <div className="relative">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors hover-glow group"
                aria-label="Logout"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Logout</span>
                <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">Sign out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="bg-white/80 dark:bg-[#181818]/70 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 px-8 py-10 mb-4 inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Welcome to Your</h1>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200">Learning Journey</h1>
            <AnimatedIntroText />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <button type="button" onClick={() => handleStatClick('topics')} className="relative focus:outline-none hover-glow group" aria-label="Topics Mastered">
            <div className="bg-white/80 dark:bg-[#181818]/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transform transition-all duration-200 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100/80 dark:bg-[#222]/80 p-3 rounded-xl shadow">
                  <CheckCircle className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Topics Mastered</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {passedTopics.length}
                  </p>
                </div>
              </div>
              <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">See mastered topics</span>
            </div>
          </button>
          <button type="button" onClick={() => handleStatClick('inprogress')} className="relative focus:outline-none hover-glow group" aria-label="In Progress">
            <div className="bg-white/80 dark:bg-[#181818]/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transform transition-all duration-200 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100/80 dark:bg-[#222]/80 p-3 rounded-xl shadow">
                  <Target className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{searchHistory.length}</p>
                </div>
              </div>
              <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">See topics in progress</span>
            </div>
          </button>
          <button type="button" onClick={() => handleStatClick('assessments')} className="relative focus:outline-none hover-glow group" aria-label="Assessments">
            <div className="bg-white/80 dark:bg-[#181818]/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transform transition-all duration-200 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100/80 dark:bg-[#222]/80 p-3 rounded-xl shadow">
                  <TrendingUp className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Assessments</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{userStats?.totalQuizzes || 0}</p>
                </div>
              </div>
              <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">See assessment history</span>
            </div>
          </button>
          <button type="button" onClick={() => handleStatClick('stats')} className="relative focus:outline-none hover-glow group" aria-label="Stats">
            <div className="bg-white/80 dark:bg-[#181818]/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transform transition-all duration-200 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100/80 dark:bg-[#222]/80 p-3 rounded-xl shadow">
                  <Clock className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Stats</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{userStats?.currentStreak || 0}d</p>
                </div>
              </div>
              <span className="absolute left-1/2 -bottom-8 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-black text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity z-50 whitespace-nowrap">See your stats</span>
            </div>
          </button>
        </div>

        {/* Calendar Heatmap */}
        {renderCalendarHeatmap()}

        {/* Search Form */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-700">
          <form onSubmit={handleTopicSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="topic"
                className="block text-xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                What would you like to learn today?
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  id="topic"
                  type="text"
                  className="w-full pl-14 pr-6 py-5 text-lg border-2 border-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  placeholder="e.g., Machine Learning, React Hooks, Binary Trees..."
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full m-auto relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl hover:shadow-2xl text-lg before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-gray-400 before:animate-border-glow before:pointer-events-none"
              style={{ boxShadow: '0 4px 32px 0 rgba(255,255,255,0.08), 0 1.5px 8px 0 rgba(80,80,80,0.10)' }}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing Prerequisites...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-3">
                  <Search className="h-5 w-5" />
                  <span>Check Learning Path</span>
                  <ChevronRight className="h-5 w-5" />
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Prerequisites/Ready to Learn Section - moved up for better UX */}
        {(canProceed || missingPrereqs.length > 0 || error || passedTopics.includes(topic)) && (
          <div className="mb-8">
            {/* Mastered Topic Message */}
            {passedTopics.includes(topic) && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-2xl mb-8 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-green-900 mb-2">You have already mastered this topic!</h3>
                  <p className="text-green-800 mb-4">You can revise the material below.</p>
                  <button
                    onClick={handleProceedToLearn}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                  >
                    📚 Revise / Learn Again
                  </button>
                </div>
              </div>
            )}
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-400 p-6 rounded-2xl mb-8">
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
                  <p className="text-red-700 dark:text-red-300 font-medium">{error}</p>
                </div>
              </div>
            )}
            {/* Ready to Learn */}
            {canProceed && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800 rounded-3xl overflow-hidden mb-8">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
                    <h3 className="text-2xl font-semibold text-green-900 dark:text-green-200">
                      Ready to Learn!
                    </h3>
                  </div>
                  <p className="text-green-800 dark:text-green-300 mb-8 text-lg">
                    Excellent! You have all the prerequisites needed to learn{" "}
                    <strong className="text-green-900 dark:text-green-100">{topic}</strong>. 
                    You can now proceed to the learning material.
                  </p>
                  <button
                    onClick={handleProceedToLearn}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-3"
                  >
                    <Play className="h-5 w-5" />
                    <span>Start Learning {topic}</span>
                  </button>
                </div>
              </div>
            )}
            {/* Prerequisites Required */}
            {missingPrereqs.length > 0 && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border border-amber-200 dark:border-amber-800 rounded-3xl overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="h-8 w-8 text-amber-500 mr-4" />
                    <h3 className="text-2xl font-semibold text-amber-900 dark:text-amber-200">
                      Prerequisites Required
                    </h3>
                  </div>
                  <p className="text-amber-800 dark:text-amber-300 mb-8 text-lg">
                    To master <strong className="text-amber-900 dark:text-amber-100">{topic}</strong>, 
                    you'll need to complete these prerequisite topics first. This ensures you have the 
                    foundation needed for success.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {missingPrereqs.map((prereq, index) => (
                      <div
                        key={prereq}
                        className={`${getPrereqColor(prereq)} rounded-2xl p-6 shadow-lg border border-amber-200 dark:border-amber-700 hover:shadow-xl transition-shadow duration-200 cursor-pointer`}
                        onClick={() => handlePrereqClick(prereq)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-xl">
                            <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{prereq}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Prerequisite #{index + 1}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {allPrereqs.length > 0 && (
              <div className="mb-6 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow flex flex-col gap-4">
                <div className="flex items-center gap-6 mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">All Prerequisites for <span className="text-blue-600 dark:text-blue-400">{topic}</span>:</h4>
                  <div className="flex items-center gap-3 ml-auto">
                    <span className="flex items-center gap-1 text-xs font-medium"><span className="inline-block w-4 h-4 rounded-full bg-green-200 border border-green-400 mr-1"></span> <span className="text-green-700">Passed</span></span>
                    <span className="flex items-center gap-1 text-xs font-medium"><span className="inline-block w-4 h-4 rounded-full bg-amber-200 border border-amber-400 mr-1"></span> <span className="text-amber-800">Yet to Pass</span></span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  {allPrereqs.map((prereq, idx) => (
                    <button
                      key={prereq}
                      onClick={() => handlePrereqClick(prereq)}
                      className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 focus:outline-none ${getPrereqColor(prereq)}`}
                    >
                      {passedTopics.includes(prereq) ? <span className="text-green-600">✅</span> : <span className="text-amber-500">⏳</span>}
                      {prereq}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recent Activity & Suggestions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Searches */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Search className="h-5 w-5 mr-2 text-blue-500" />
              Recent Searches
            </h3>
            {searchHistory.length > 0 ? (
              <div className="space-y-3">
                {searchHistory.slice(0, 5).map((searchedTopic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    onClick={() => setTopic(searchedTopic)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{searchedTopic}</span>
                    </div>
                    <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                      Search Again
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No recent searches</p>
                <p className="text-sm mt-1">Start exploring topics to see your search history here!</p>
              </div>
            )}
          </div>

          {/* Learning Suggestions */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
              Learning Suggestions
            </h3>
            {getPendingSuggestions().length > 0 ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Complete these prerequisites to unlock more learning opportunities:
                </p>
                {getPendingSuggestions().slice(0, 3).map((prereq, idx) => (
                  <div
                    key={prereq}
                    className="p-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 border border-yellow-300 dark:border-yellow-700 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handlePrereqClick(prereq)}
                  >
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                        {prereq}
                      </span>
                    </div>
                    <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                      Prerequisite
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No pending prerequisites</p>
                <p className="text-sm mt-1">Great job! You're ready to learn new topics.</p>
              </div>
            )}
            
            {/* Quick Actions */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Quick Actions:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setShowProfile(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-4 py-2 rounded-full text-xs shadow-md hover:brightness-110 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  View Profile
                </button>
                <button
                  onClick={() => setChatbotMinimized(false)}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-4 py-2 rounded-full text-xs shadow-md hover:brightness-110 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Ask Assistant
                </button>
                {!profileComplete && (
                  <button
                    onClick={() => setShowProfile(true)}
                    className={`${getPrereqColor('')} text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors`}
                  >
                    Complete Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Chatbot notifications={notifications} minimized={chatbotMinimized} setMinimized={setChatbotMinimized} />

      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
             onClick={e => { if (e.target === e.currentTarget) handleProfileClose(); }}>
          <div className="animate-fade-in-scale w-full max-w-3xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl transition-all duration-300">
            <Profile
              onClose={handleProfileClose}
              topicsRef={profileRef}
              dependencyMapRef={dependencyMapRef}
              assessmentRef={assessmentRef}
              statsRef={statsRef}
            />
          </div>
        </div>
      )}

      {showPrereqModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-[#181818] rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Choose Your Learning Path</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">What would you like to do with <strong>"{selectedPrereq}"</strong>?</p>
            <div className="space-y-3">
              <button
                onClick={() => handlePrereqAction('learn')}
                className={`${getPrereqColor('')} w-full bg-white dark:bg-[#181818] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200`}
                disabled={passedTopics.includes(selectedPrereq)}
              >
                📚 Learn the Material
              </button>
              <button
                onClick={() => handlePrereqAction('quiz')}
                className={`${getPrereqColor('')} w-full bg-white dark:bg-[#181818] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200`}
                disabled={passedTopics.includes(selectedPrereq)}
              >
                🧠 Take Assessment
              </button>
              <button
                onClick={() => setShowPrereqModal(false)}
                className={`${getPrereqColor('')} w-full bg-gray-100 dark:bg-[#222] text-gray-700 dark:text-gray-300 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-[#333] transition-all duration-200`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Mastered Prerequisite Modal */}
      {showMasteredModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-[#181818] rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-green-200 dark:border-green-800">
            <h3 className="text-xl font-semibold text-green-800 mb-6 text-center">Topic Mastered</h3>
            <p className="text-green-700 mb-6 text-center">
              You have already <span className="font-bold">mastered</span> <strong>"{selectedPrereq}"</strong>.<br/>
              You can revise the material if you wish.
            </p>
            <button
              onClick={() => { setShowMasteredModal(false); navigate(`/learn/${encodeURIComponent(selectedPrereq)}`); }}
              className={`${getPrereqColor('')} w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg mb-2`}
            >
              📚 Revise / Learn Again
            </button>
            <button
              onClick={() => setShowMasteredModal(false)}
              className={`${getPrereqColor('')} w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-200`}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Floating Raise Query Button */}
      <motion.button
        drag
        dragConstraints={{ left: 0, right: window.innerWidth - 80, top: 0, bottom: window.innerHeight - 80 }}
        initial={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -6 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setQueryPanelOpen(true)}
        className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-0 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl font-bold hover:scale-110 transition-all duration-200 cursor-pointer border-4 border-white/30"
        title="Raise a Query"
        aria-label="Raise a Query"
      >
        <HelpCircle className="w-8 h-8 animate-pulse" />
        {myQueries.some(q => q.status === 'open' || q.status === 'under_progress') && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">!</span>
        )}
      </motion.button>

      {/* Query Panel (sub-window) */}
      {queryPanelOpen && (
        <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] z-[9999] bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 animate-slide-in-right">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-indigo-500">
            <div className="text-lg font-bold text-white flex items-center gap-2"><HelpCircle className="w-6 h-6" /> Your Queries</div>
            <button onClick={() => setQueryPanelOpen(false)} className="text-white text-2xl font-bold hover:scale-110 transition">&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {myQueries.map(q => (
              <div key={q._id} className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-gray-200/40 dark:border-gray-700/60 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex-1">
                  <div className="text-gray-900 dark:text-white font-semibold mb-1 flex items-center gap-2">
                    {q.content}
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${q.status === 'open' ? 'bg-blue-100 text-blue-700' : q.status === 'under_progress' ? 'bg-yellow-100 text-yellow-700' : q.status === 'solved' ? 'bg-green-100 text-green-700' : q.status === 'irrelevant' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-700'}`}>{q.status.replace('_', ' ')}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap mb-1">
                    {q.attachments?.map((a: any, i: number) => (
                      a.type.startsWith('image') ? (
                        <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-block w-12 h-12 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
                          <img src={a.url} alt="attachment" className="object-cover w-full h-full" />
                        </a>
                      ) : a.type.startsWith('video') ? (
                        <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 underline"><Play className="w-5 h-5" />Video</a>
                      ) : (
                        <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 underline"><FileText className="w-5 h-5" />PDF</a>
                      )
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                    Status: <span className="font-bold">{q.status.replace('_', ' ')}</span>
                    {q.response && <span className="text-green-700">Instructor: {q.response}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2 md:ml-4">
                  <button onClick={() => setShowDeleteConfirm({ open: true, id: q._id })} className="text-red-500 hover:text-red-700 p-2 rounded-full bg-red-100/60 hover:bg-red-200 transition" title="Delete Query" aria-label="Delete Query"><Trash2 className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
            <button onClick={() => setQueryModalOpen(true)} className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"><HelpCircle className="w-5 h-5" /> Raise New Query</button>
          </div>
          {queryPanelOpen && queryToastMsg && (
            <div className={`fixed top-4 right-8 z-[10000] px-6 py-3 rounded-xl shadow-lg font-bold text-white ${queryToastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>{queryToastMsg}</div>
          )}
        </div>
      )}

      {/* Move the Modal for raising a query to only show if queryPanelOpen && queryModalOpen */}
      {queryPanelOpen && (
        <Modal isOpen={queryModalOpen} onRequestClose={() => setQueryModalOpen(false)} ariaHideApp={false} className="fixed inset-0 flex items-center justify-center z-[99999]" overlayClassName="fixed inset-0 bg-black/40 z-[99998]">
          <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/60 z-[99999]">
            <button className="absolute top-2 right-4 text-2xl text-white" onClick={() => setQueryModalOpen(false)}>&times;</button>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">Raise a Query</div>
            <form onSubmit={handleQuerySubmit} className="flex flex-col gap-4">
              <textarea value={queryContent} onChange={e => setQueryContent(e.target.value)} placeholder="Describe your query..." className="input w-full min-h-[80px]" required />
              <input type="file" multiple accept="image/*,video/*,application/pdf" onChange={handleQueryFileChange} className="input w-full" />
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition" disabled={queryLoading}>{queryLoading ? 'Sending...' : 'Send Query'}</button>
              {queryMsg && <div className="text-blue-600 font-medium mt-2">{queryMsg}</div>}
            </form>
          </div>
        </Modal>
      )}

      {/* Delete confirmation modal */}
      <Modal isOpen={showDeleteConfirm.open} onRequestClose={() => setShowDeleteConfirm({ open: false, id: null })} ariaHideApp={false} className="fixed inset-0 flex items-center justify-center z-[9999]" overlayClassName="fixed inset-0 bg-black/40 z-[9998]">
        <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 w-full max-w-sm relative backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/60 z-[9999]">
          <button className="absolute top-2 right-4 text-2xl text-white" onClick={() => setShowDeleteConfirm({ open: false, id: null })}>&times;</button>
          <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">Delete Query?</div>
          <div className="mb-4 text-gray-700 dark:text-gray-200">Are you sure you want to delete this query? This action cannot be undone.</div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setShowDeleteConfirm({ open: false, id: null })} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">Cancel</button>
            <button onClick={async () => { if (showDeleteConfirm.id) { await handleCloseQuery(showDeleteConfirm.id); setShowDeleteConfirm({ open: false, id: null }); } }} className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition">Delete</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
