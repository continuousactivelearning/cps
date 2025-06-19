import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import StudentView from './pages/StudentView';
import { Header } from './components/Header';
import { ChatContainer } from './pages/ChatContainer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/student" element={<StudentView />} />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
      <Route path="/chat" element={<div className="h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Header />
      <ChatContainer />
    </div>} />
    </Routes>
  );
};
    
export default App;
