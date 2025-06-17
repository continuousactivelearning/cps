// src/App.tsx
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import StudentView from './pages/StudentView';
import { Header } from './components/Header';
import { ChatContainer } from './components/ChatContainer';

const App: React.FC = () => {
  return (
    <Routes>
      //Bypassed Authentication
      <Route path="/" element={<Navigate to="/chat" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/student" element={<StudentView />} />
      <Route path="/chat" element={<div className="h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />
      <ChatContainer />
    </div>} />
    </Routes>
  );
};

export default App;


