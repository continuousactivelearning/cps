// src/App.tsx
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import LandingPage from './components/LandingPage';

interface User {
  username: string;
}

interface JWTPayload {
  username: string;
  id: string;
  exp: number;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = ({ username }: { username: string }) => {
    setUser({ username });
    navigate('/home');
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setUser(null);
  //   navigate('/');
  // };

  useEffect(() => {
    document.title = 'Personal Learning Path';
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode<JWTPayload>(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          console.log('Token expired');
          localStorage.removeItem('token');
          setUser(null);
          navigate('/');
        } else {
          console.log('Token valid');
          setUser({ username: decodedToken.username });
        }
      } catch (err) {
        console.error('Error decoding token:', err);
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
        //temp fix
        console.log(user)
        //temp fix
      }
    }
  }, [navigate]);

  const isLandingPage = location.pathname === '/';

  return (
    <div>
      {!isLandingPage}
      <Routes>
        <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
