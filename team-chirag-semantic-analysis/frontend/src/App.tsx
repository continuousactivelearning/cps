// src/App.tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard';
import { OnboardingGuard } from './components/OnboardingGuard';
import { Header } from './components/Header';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import { ChatContainer } from './pages/ChatContainer';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import StudentView from './pages/StudentView';
import StudentProfile from './pages/StudentProfile'; // ✅ Import profile page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/onboarding"
        element={
          <AuthGuard>
            <OnboardingPage />
          </AuthGuard>
        }
      />

      <Route
        path="/student"
        element={
          <AuthGuard>
            <OnboardingGuard>
              <StudentView />
            </OnboardingGuard>
          </AuthGuard>
        }
      />

      {/* ✅ NEW StudentProfile route */}
      <Route
        path="/student-profile"
        element={
          <AuthGuard>
            <OnboardingGuard>
              <StudentProfile />
            </OnboardingGuard>
          </AuthGuard>
        }
      />

      <Route
        path="/chat"
        element={
          <AuthGuard>
            <OnboardingGuard>
              <>
                <Header />
                <ChatContainer />
              </>
            </OnboardingGuard>
          </AuthGuard>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
