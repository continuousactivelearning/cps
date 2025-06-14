import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
interface User {
  username: string
}

interface JWTPayload {
  sub: string;
  exp: number;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleLogin = ({ username }: { username: string }) => {
    setUser({ username });
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  }
  useEffect(() => {
    document.title = 'Personal Learning Path';
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode<JWTPayload>(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          console.log('token is expired')
          localStorage.removeItem('token');
          setUser(null);
          navigate('/login');
        } else {
          console.log('token is alive');
          setUser({
            username: decodedToken.sub,
          });
          console.log(decodedToken.sub)
        }
      } catch (err) {
        console.error(err);
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
      }
    }
  }, [navigate]);

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} />
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/signup' element={<Signup onLogin={handleLogin} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
