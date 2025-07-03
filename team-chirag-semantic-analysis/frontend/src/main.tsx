// src/main.tsx
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ToastProvider } from './components/ToastProvider';
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = '980000591135-jlv3easao7s1fdflvjdf9floaioft4fi.apps.googleusercontent.com';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <ThemeContextProvider>
          <ToastProvider>
            <CssBaseline />
            <App />
          </ToastProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);