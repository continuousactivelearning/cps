// src/pages/Auth/Login.tsx
import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Paper, Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isValidEmail = /\S+@\S+\.\S+/.test(email);
  const isStrongPassword = password.length >= 6;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail || !isStrongPassword) return;

    // Simulate successful login
    navigate('/student');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={email.length > 0 && !isValidEmail}
            helperText={!isValidEmail && email.length > 0 ? 'Enter a valid email address' : ''}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={password.length > 0 && !isStrongPassword}
            helperText={!isStrongPassword && password.length > 0 ? 'Minimum 6 characters required' : ''}
          />

          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={!email || !password || !isValidEmail || !isStrongPassword}
            >
              Login
            </Button>
          </Box>
          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Don't have an account?{' '}
              <Button variant="text" onClick={() => navigate('/signup')}>
                Sign Up
              </Button>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
