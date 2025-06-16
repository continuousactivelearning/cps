// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { ThemeProviderWrapper } from './contexts/ThemeContext';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <CssBaseline />
        <App />
       </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
