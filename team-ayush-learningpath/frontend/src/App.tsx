// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import First from './pages/First';

import './App.css';
import NewCourses from './pages/NewCourses';
import MyCourses from './pages/MyCourses';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/first" element={<First />} />
            <Route path="/new-courses" element={<NewCourses />} />
            <Route path="/my-courses" element={<MyCourses />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;