import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  Snackbar,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Divider
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import GoogleIcon from '@mui/icons-material/Google';
import Lottie from 'lottie-react';
import aiAnimation from '../../assets/ai-lottie.json';

// Zod schema
const SignupSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
  password: z.string().min(6, { message: 'Minimum 6 characters required' }),
  confirmPassword: z.string().min(6, { message: 'Please confirm your password' }),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: "Passwords don't match",
});

type SignupFormData = z.infer<typeof SignupSchema>;

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [navigateOnSnackbarClose, setNavigateOnSnackbarClose] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      localStorage.setItem('token', 'dummy-auth-token');
      localStorage.setItem('signupEmail', data.email);
      localStorage.setItem('signupName', data.email.split('@')[0]);
      localStorage.setItem('onboardingCompleted', 'false');

      setSnackbarMsg('Signup successful! Redirecting...');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setNavigateOnSnackbarClose(true);
    } catch {
      setSnackbarMsg('Signup failed. Try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    if (navigateOnSnackbarClose && snackbarSeverity === 'success') {
      navigate('/onboarding');
    }
  };

  const handleGoogleLogin = () => {
    const width = 500, height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const authWindow = window.open(
      'http://localhost:5000/auth/google',
      '_blank',
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const messageListener = (event: MessageEvent) => {
      if (event.origin !== 'http://localhost:5000') return;

      const { token, user } = event.data;

      if (token && user) {
        localStorage.setItem('token', token);
        localStorage.setItem('signupEmail', user.email || '');
        localStorage.setItem('signupName', user.name || '');
        localStorage.setItem('onboardingCompleted', 'false');

        setSnackbarMsg('Google signup successful!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setNavigateOnSnackbarClose(true);
        authWindow?.close();
        window.removeEventListener('message', messageListener);
      }
    };

    window.addEventListener('message', messageListener);
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
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box sx={{ width: 80, height: 80, margin: '0 auto', mb: 2 }}>
                <Lottie animationData={aiAnimation} style={{ width: 80, height: 80 }} loop />
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
                Join Your AI Buddy!
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#666', mb: 3 }}>
                Start your personalized DSA learning journey today
              </Typography>
            </Box>

            {/* Google Button */}
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
                Sign up with Google
              </Button>
            </motion.div>

            <Divider sx={{ mb: 3, color: '#ccc' }}>
              <Typography variant="body2" sx={{ color: '#666', px: 2 }}>
                or create account with email
              </Typography>
            </Divider>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Email */}
              <TextField
                label="Email Address"
                fullWidth
                margin="normal"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': { borderColor: '#42a5f5' },
                    '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                  },
                }}
              />

              {/* Password */}
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword((prev) => !prev)} sx={{ color: '#666' }}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': { borderColor: '#42a5f5' },
                    '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                  },
                }}
              />

              {/* Confirm Password */}
              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                {...register('confirmPassword')}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmPassword((prev) => !prev)} sx={{ color: '#666' }}>
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    '&:hover fieldset': { borderColor: '#42a5f5' },
                    '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                disabled={!isDirty || !isValid || loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
                sx={{
                  mt: 3, mb: 3,
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
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <Typography variant="body2" align="center" sx={{ color: '#666' }}>
              Already have an account?{' '}
              <Button
                variant="text"
                onClick={() => navigate('/login')}
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
                Log In
              </Button>
            </Typography>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={2500}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert severity={snackbarSeverity} onClose={handleSnackbarClose} sx={{ width: '100%' }}>
                {snackbarMsg}
              </Alert>
            </Snackbar>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Signup;
