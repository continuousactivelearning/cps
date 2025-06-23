// src/main.tsx
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeContextProvider } from "./contexts/ThemeContext";import './index.css'

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <CssBaseline />
        <App />
       </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);