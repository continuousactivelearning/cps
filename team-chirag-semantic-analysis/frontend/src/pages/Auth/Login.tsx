// src/pages/Auth/Login.tsx
import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleLogin } from '@react-oauth/google';

const LoginSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string().min(6, { message: 'Minimum 6 characters required' }),
});

type LoginFormData = z.infer<typeof LoginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [navigateOnSnackbarClose, setNavigateOnSnackbarClose] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      localStorage.setItem('token', 'dummy-auth-token');

      setSnackbarMsg('Login successful!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setNavigateOnSnackbarClose(true);
    } catch {
      setSnackbarMsg('Something went wrong. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setGoogleLoading(true);
      try {
        const { access_token } = tokenResponse;
        
        // Send tokens to your backend for authentication
        const response = await fetch('http://localhost:3000/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            accessToken: access_token,
            // Note: For client-side flow, we only have access_token
            // The backend will need to verify this token with Google
          }),
        });

        const data = await response.json();

        if (response.ok && data.token && data.user) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userProfile', JSON.stringify(data.user));

          setSnackbarMsg('Google login successful!');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setNavigateOnSnackbarClose(true);
        } else {
          throw new Error(data.message || 'Google authentication failed');
        }
      } catch (error) {
        console.error('Google login error:', error);
        setSnackbarMsg('Google login failed. Please try again.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      } finally {
        setGoogleLoading(false);
      }
    },
    onError: () => {
      console.log('Google Login Failed');
      setSnackbarMsg('Google login failed. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  });

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    if (navigateOnSnackbarClose && snackbarSeverity === 'success') {
      const onboardingCompleted = localStorage.getItem('onboardingCompleted') === 'true';
      navigate(onboardingCompleted ? '/chat' : '/onboarding');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2196f3 30%, #21cbf3 90%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={6} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 3 }}>
            <Typography variant="h4" align="center" color="primary" gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
              Log in to continue your journey
            </Typography>

            {/* Google Sign-In */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ marginBottom: 16 }}
            >
              <Button
                fullWidth
                variant="contained"
                startIcon={googleLoading ? <CircularProgress size={20} color="inherit" /> : <GoogleIcon />}
                onClick={() => handleGoogleLogin()}
                disabled={googleLoading}
                sx={{
                  background: 'linear-gradient(to right, #4285F4, #34A853)',
                  color: 'white',
                  textTransform: 'none',
                  py: 1.5,
                  fontWeight: 600,
                  mb: 2,
                  '&:hover': {
                    background: 'linear-gradient(to right, #3367d6, #2c8e4e)',
                  },
                }}
              >
                {googleLoading ? 'Signing in...' : 'Sign in with Google'}
              </Button>
            </motion.div>

            <Divider sx={{ mb: 3 }}>or</Divider>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <TextField
                label="Email Address"
                fullWidth
                autoComplete="email"
                margin="normal"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />

              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                autoComplete="current-password"
                margin="normal"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box mt={1} mb={2} textAlign="right">
                <Link href="#" underline="hover" variant="body2" color="primary">
                  Forgot password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={!isDirty || !isValid || loading}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                sx={{ mb: 2 }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>

              <Typography variant="body2" align="center">
                Don't have an account?{' '}
                <Button variant="text" size="small" onClick={() => navigate('/signup')}>
                  Sign Up
                </Button>
              </Typography>
            </form>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={2500}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert
                severity={snackbarSeverity}
                onClose={handleSnackbarClose}
                sx={{ width: '100%' }}
              >
                {snackbarMsg}
              </Alert>
            </Snackbar>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Login;