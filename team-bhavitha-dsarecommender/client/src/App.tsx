import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage.tsx";
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoutes from "./components/ProtectedRoutes";
import QuizPage from "./pages/QuizPage";
import QuizSelectPage from "./pages/QuizSelectPage";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ExploreTopicPage from "./pages/ExploreTopicPage";

// Inside <Routes>...



function App() {
  return (
    <Router>
      <Navbar />
      {/* Add padding top to account for fixed navbar height, and center content vertically and horizontally */}
      <div className="pt-5 mt-3 d-flex flex-grow-1 justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 80px)' }}> {/* Adjusted styling here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Protected routes go here */}
          <Route element={<ProtectedRoutes/>}>
            <Route path="/explore/:topic" element={<ExploreTopicPage />} />
            <Route path="/dashboard/:username" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz/:topic" element={<QuizPage />} />
            <Route path="/quiz-select" element={<QuizSelectPage/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;