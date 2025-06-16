import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'wouter';

import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';

const StudentView = React.lazy(() => import('./pages/StudentView'));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4fd1c7' },
    secondary: { main: '#63b3ed' },
    background: { default: '#0f1419', paper: '#1a202c' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ErrorBoundary>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" component={StudentView} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;


