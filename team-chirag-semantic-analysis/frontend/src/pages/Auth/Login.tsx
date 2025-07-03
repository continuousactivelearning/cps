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
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase/config';
import Lottie from 'lottie-react';
import aiAnimation from '../../assets/ai-lottie.json';

const LoginSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string().min(6, { message: 'Minimum 6 characters required' }),
});

type LoginFormData = z.infer<typeof LoginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    if (navigateOnSnackbarClose && snackbarSeverity === 'success') {
      const onboardingCompleted = localStorage.getItem('onboardingCompleted') === 'true';
      navigate(onboardingCompleted ? '/chat' : '/onboarding');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem('token', await user.getIdToken());
      localStorage.setItem(
        'userProfile',
        JSON.stringify({
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );

      setSnackbarMsg('Google login successful!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setNavigateOnSnackbarClose(true);
    } catch (error) {
      console.error(error);
      setSnackbarMsg('Google sign-in failed.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #1976d2 0%, #42a5f5 60%, #26c6da 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background shapes */}
      <Box sx={{
        position: 'absolute',
        top: -100,
        left: -150,
        width: 400,
        height: 400,
        bgcolor: '#42a5f5',
        opacity: 0.1,
        borderRadius: '50%',
        zIndex: 0,
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: -120,
        right: -180,
        width: 450,
        height: 450,
        bgcolor: '#26c6da',
        opacity: 0.08,
        borderRadius: '50%',
        zIndex: 0,
      }} />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper 
            elevation={12} 
            sx={{ 
              p: { xs: 3, sm: 4 }, 
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Header with Mascot */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box sx={{ width: 80, height: 80, margin: '0 auto', mb: 2 }}>
                <Lottie 
                  animationData={aiAnimation} 
                  style={{ width: 80, height: 80 }} 
                  loop 
                />
              </Box>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #1976d2, #26c6da)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1,
                }}
              >
                Welcome Back!
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#666', mb: 3 }}>
                Continue your DSA learning journey with your AI buddy
              </Typography>
            </Box>

            {/* Google Sign-In */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ marginBottom: 16 }}
            >
              <Button
                fullWidth
                variant="contained"
                startIcon={<GoogleIcon />}
                onClick={handleGoogleLogin}
                sx={{
                  background: 'linear-gradient(to right, #4285F4, #34A853)',
                  color: 'white',
                  textTransform: 'none',
                  py: 1.5,
                  fontWeight: 600,
                  mb: 3,
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(66, 133, 244, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(to right, #3367d6, #2c8e4e)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(66, 133, 244, 0.4)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                Sign in with Google
              </Button>
            </motion.div>

            <Divider sx={{ mb: 3, color: '#ccc' }}>
              <Typography variant="body2" sx={{ color: '#666', px: 2 }}>
                or continue with email
              </Typography>
            </Divider>

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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': {
                      borderColor: '#42a5f5',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2',
                    },
                  },
                }}
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
                        sx={{ color: '#666' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': {
                      borderColor: '#42a5f5',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2',
                    },
                  },
                }}
              />

              <Box mt={1} mb={3} textAlign="right">
                <Link 
                  href="#" 
                  underline="hover" 
                  variant="body2" 
                  sx={{ 
                    color: '#1976d2',
                    fontWeight: 500,
                    '&:hover': {
                      color: '#26c6da',
                    },
                  }}
                >
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
                sx={{ 
                  mb: 3,
                  bgcolor: '#26c6da',
                  color: '#fff',
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: 3,
                  boxShadow: '0 4px 16px rgba(38, 198, 218, 0.3)',
                  '&:hover': {
                    bgcolor: '#1976d2',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(25, 118, 210, 0.4)',
                  },
                  '&:disabled': {
                    bgcolor: '#ccc',
                    transform: 'none',
                    boxShadow: 'none',
                  },
                  transition: 'all 0.2s',
                }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>

              <Typography variant="body2" align="center" sx={{ color: '#666' }}>
                Don't have an account?{' '}
                <Button 
                  variant="text" 
                  size="small" 
                  onClick={() => navigate('/signup')}
                  sx={{ 
                    color: '#1976d2',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      color: '#26c6da',
                      background: 'rgba(25, 118, 210, 0.1)',
                    },
                  }}
                >
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
