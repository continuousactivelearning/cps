import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home: React.FC = () => {
  const [user, setUser] = useState<string>('')
  useEffect(() => {

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const username = payload.username || 'User';
        setUser(username)
      } catch (err) {
        console.error('Error: ', err);
      }
    }
  }, []);
  return (
    <div style={{ minHeight: '100vh', background: '#f0f8ff', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        onLoginClick={() => window.location.href = '/'}
        onSignUpClick={() => window.location.href = '/'}
      />
      <main style={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#2c3e50'
        }}>
          Welcome, {user}
        </h1>
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f8f9fa' }}>
        <p>&copy; 2025 PathPilot</p>
      </footer>
    </div>
  );


};

export default Home;