import React from 'react';
import { UserPlus, LogIn, LogOut, Compass } from 'lucide-react';
import './LandingPage.css'

interface NavbarProps {
  onLoginClick: () => void;
  onSignUpClick: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onSignUpClick }) => {
  const logged = Boolean(localStorage.getItem('token'));
  return (

    <header className="header">
      <div className="logo">
        <Compass size={24} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
        <span>PathPilot</span>
      </div>
      <nav>{logged ? (

        <button onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }} style={{
          backgroundColor: '#014d4d',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          marginRight: '0.5rem',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <LogOut size={16} style={{ marginRight: '6px' }} /> {/* ✅ LogOut icon */}
          Logout
        </button>
      ) : (
        <>
          <button
            onClick={onLoginClick}
            style={{
              backgroundColor: '#014d4d',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              marginRight: '0.5rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <LogIn size={16} />
            Login
          </button>
          <button
            onClick={onSignUpClick}
            style={{
              backgroundColor: '#014d4d',
              color: '#fff',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <UserPlus size={16} />
            Sign Up
          </button>
        </>
      )
      }
      </nav >
    </header >
  );
}

export default Navbar;
