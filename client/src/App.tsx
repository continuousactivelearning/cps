import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage.tsx";
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoutes from "./components/ProtectedRoutes";
import QuizPage from "./pages/QuizPage";
import QuizSelectPage from "./pages/QuizSelectPage";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/quiz/:topic" element={<QuizPage />} />
        <Route path="/quiz-select" element={<QuizSelectPage/>} />
        {/* Protected routes go here */}
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard/:username" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
