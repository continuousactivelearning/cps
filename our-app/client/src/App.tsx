import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import InitialSetup from "./pages/InitialSetup";
import BasicQuiz from "./components/BasicQuiz";
import CustomQuiz from "./components/CustomQuiz";
import CourseQuiz from "./components/CourseQuiz";
import DashboardWrapper from "./components/DashboardWrapper";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        
        {/* Protected Routes */}
        <Route path="/initial-setup" element={
          <ProtectedRoute>
            <InitialSetup />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardWrapper />
          </ProtectedRoute>
        } />
        <Route path="/quizzes/lang/:lang/level/:level/topic/:topic" element={
          <ProtectedRoute>
            <BasicQuiz />
          </ProtectedRoute>
        } />
        <Route path="/users/:id/:lang/:level/:topic/quiz" element={
          <ProtectedRoute>
            <BasicQuiz />
          </ProtectedRoute>
        } />
        <Route path="/users/:userId/quiz" element={
          <ProtectedRoute>
            <CustomQuiz />
          </ProtectedRoute>
        } />
        <Route path="/users/:userId/:lang/course/:topic" element={
          <ProtectedRoute>
            <CourseQuiz />
          </ProtectedRoute>
        } />
        
        {/* Catch old route format and redirect */}
        <Route path="/users/:userId/course/:topic/quiz" element={
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h3>Redirecting...</h3>
            <p>Old route detected. Please refresh the page or go back to dashboard.</p>
            <button onClick={() => window.location.href = '/dashboard'}>Go to Dashboard</button>
          </div>
        } />
      </Routes>
  </>
  );
};

export default App;