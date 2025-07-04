/* AUTHOR - SHREYAS MENE (UPDATED WITH LOGIN + REGISTER ROUTES BY RANI) */
/*Routes modified by Nakshatra on 16/6*/
/*UPDATED BY NIKITA S RAJ KAPINI(16/06/2025) --> Topic selector component*/
/*Routes modified by Nakshatra on 17/6 to ensure user can only go to dashboard after logging in*/
/*Modified by Nakshatra on 19/6/25 for the automatic logout*/
/*Nav bar componenet added by Nikita S Raj Kapini on 19/06/2025*/
/*Modified by Nakshatra on 23/6/25 for the forgot password*/
/*Updated by Nikita S Raj Kapini on 24/06/2025 and 26/06/2025*/

import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Chatbot from './components/Chatbot';
import TopicSelector from './components/TopicSelector';
import AssessmentDisplay from './components/AssessmentDisplay';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './hooks/useAuth';
import Sidebar from './components/Sidebar';
import './App.css';
import SessionExpiredModal from './components/SessionExpiredModal';


interface Topic {
  id: number;
  name: string;
  category: string;
}


const AppContent = () => {
   //useAuth();
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [shouldGenerateAssessment, setShouldGenerateAssessment] = useState(false);
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false);
  const [assessmentOngoing, setAssessmentOngoing] = useState(false);
  const [showTopicWarning, setShowTopicWarning] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useAuth(() => {
      if (location.pathname === '/dashboard') {
        setShowSessionExpiredModal(true);
      }
    }, location.pathname);

  const handleTopicSelect = (topicName: string | null) => {
    if (topicName) {
      setSelectedTopics([{ id: 1, name: topicName, category: 'default' }]); // adjust id/category as needed
      setShowTopicWarning(false);
    } else {
      setSelectedTopics([]);
    }
    setShouldGenerateAssessment(false);
  };


  const handleGenerateAssessment = () => {
    if (selectedTopics.length === 0 || !selectedTopics[0]?.name) {
      setShowTopicWarning(true);
      return;
    }
    setShowTopicWarning(false); 
    setShouldGenerateAssessment(true);
  };
 
  const handleAssessmentGenerated = () => {
    setShouldGenerateAssessment(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (showSessionExpiredModal) {
    return (
      <SessionExpiredModal
        onClose={() => {
          setShowSessionExpiredModal(false);
          localStorage.removeItem('token');
          navigate('/');
        }}
      />
    );
  }
  
  return (
    <div className="App">
      <div className="top-right">
      <ThemeToggle />
      </div>
      <div className="app-container">
        <header className="app-header">
          <div className="header-left">
            <h1>
              <img
                src="/graduation-cap.svg"
                alt="EduAssess Logo"
                className="header-icon"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/vite.svg';
                }}
              />
              EduAssess
            </h1>
            <p style={{ fontStyle: 'italic', fontWeight: 'normal', color: 'var(--primary-color)' }}>The self assessment tool for Machine Learning</p>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <div className="dashboard-container">
                      <Sidebar /> {/* ← non-invasive and does not disturb layout */}
                        <div className="content-container">
                          <TopicSelector
                            onTopicSelect={handleTopicSelect}
                            onGenerateAssessment={handleGenerateAssessment}
                            warningMessage={showTopicWarning ? '⚠️ Please select a target topic before generating an assessment.' : null}
                          />
                          <AssessmentDisplay
                            selectedTopics={selectedTopics}
                            shouldGenerateAssessment={shouldGenerateAssessment}
                            onAssessmentGenerated={handleAssessmentGenerated}
                            updateAssessmentStatus={setAssessmentOngoing} // <-- PASS HERE
                          />
                        </div>
                    </div>
                  </PrivateRoute>
                }
              />
          </Routes>
        </main>

        {isDashboard && <Chatbot disabled={assessmentOngoing} />}
      </div>
    </div>
  );
};


function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}
export default App; 
