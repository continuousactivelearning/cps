import React, { useState } from 'react';
import { Flame, UserPlus, LogIn, LogOut, Compass, Sun, Moon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import StreakCalendar from '../components/StreakCalendar'

interface NavbarProps {
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignUpClick }) => {
  const { isAuthenticated, logout, user } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <Compass className="navbar-icon" />
            <span>BluePrint</span>
          </div>

          <div className="navbar-actions">
            <button
              onClick={toggleDarkMode}
              className="theme-toggle-btn"
              title="Toggle Theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {isAuthenticated ? (
              <div className="auth-section">
                <div className="welcome-box">
                  <Compass size={16} />
                  <span>Welcome, {user?.username}!</span>
                </div>
                {user?.role === 'user' && (
                  <button
                    className="streak-btn"
                    onClick={() => setShowCalendar(true)}
                    aria-label="View login streak"
                  >
                    <Flame size={18} />
                    <span className="streak-number">{user?.loginStreak}</span>
                  </button>
                )} <button className="nav-btn logout-btn" onClick={logout}>
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-section">
                <button onClick={onLoginClick} className="nav-btn login-btn">
                  <LogIn size={16} />
                  Login
                </button>
                <button onClick={onSignUpClick} className="nav-btn signup-btn">
                  <UserPlus size={16} />
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      {
        showCalendar && user?.role === 'user' && (
          <StreakCalendar onClose={() => setShowCalendar(false)} />
        )
      }
    </>
  );
};

export default Navbar;
