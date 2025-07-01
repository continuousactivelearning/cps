import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LearnPage from "./pages/LearnPage";
import QuizPage from "./pages/QuizPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import InstructorGreeting from "./pages/InstructorGreeting";
import InstructorRegister from "./pages/InstructorRegister";
import InstructorLogin from "./pages/InstructorLogin";
import InstructorDashboard from "./pages/InstructorDashboard";
import InstructorStudents from "./pages/InstructorStudents";
import InstructorContent from "./pages/InstructorContent";
import InstructorAuditLogs from "./pages/InstructorAuditLogs";
import InstructorProfile from "./pages/InstructorProfile";
import InstructorAssessmentTracking from "./pages/InstructorAssessmentTracking";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
          path="/learn/:topic"
          element={
            <ProtectedRoute>
              <LearnPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/:topic"
          element={
            <ProtectedRoute>
              <QuizPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/instructor-greeting"
          element={
            <PublicRoute>
              <InstructorGreeting />
            </PublicRoute>
          }
        />
        <Route
          path="/instructor-register"
          element={
            <PublicRoute>
              <InstructorRegister />
            </PublicRoute>
          }
        />
        <Route
          path="/instructor-login"
          element={
            <PublicRoute>
              <InstructorLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/instructor-dashboard"
          element={
            <ProtectedRoute isInstructor={true}>
              <InstructorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor/students"
          element={
            <ProtectedRoute isInstructor={true}>
              <InstructorStudents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor/content"
          element={
            <ProtectedRoute isInstructor={true}>
              <InstructorContent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor/audit-logs"
          element={
            <ProtectedRoute isInstructor={true}>
              <InstructorAuditLogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor/profile"
          element={
            <ProtectedRoute isInstructor={true}>
              <InstructorProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor/assessment-tracking"
          element={
            <ProtectedRoute isInstructor={true}>
              <InstructorAssessmentTracking />
            </ProtectedRoute>
          }
        />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;