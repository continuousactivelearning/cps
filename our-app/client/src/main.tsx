
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './components/AuthContext'; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
         <AuthProvider>
            <App />
        </AuthProvider>
      </Router>
  </StrictMode>
);
