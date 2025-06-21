import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton, InputAdornment,
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
      await new Promise((res) => setTimeout(res, 1000)); // Simulate API
      
      // FIX 1: Store authentication token
      localStorage.setItem('token', 'dummy-auth-token');
      localStorage.setItem('onboardingCompleted', 'false');
      setSnackbarMsg('Signup successful! Redirecting to onboarding...');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setNavigateOnSnackbarClose(true);
    } catch {
      setSnackbarMsg('Signup failed. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    if (navigateOnSnackbarClose && snackbarSeverity === 'success') {
      // FIX 2: Always redirect to onboarding after signup
      navigate('/onboarding');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #df2a82 30%, #e0c1f3 90%)',
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
              Create Your Account
            </Typography>
            <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
              Start your personalized learning journey
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <TextField
                label="Email Address"
                fullWidth
                margin="normal"
                autoComplete="email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />

              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                autoComplete="new-password"
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
                  )
                }}
              />

              <TextField
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                fullWidth
                margin="normal"
                autoComplete="new-password"
                {...register('confirmPassword')}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        edge="end"
                        aria-label="toggle confirm password visibility"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{ mt: 2, mb: 2 }}
                disabled={!isDirty || !isValid || loading}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>

              <Typography variant="body2" align="center">
                Already have an account?{' '}
                <Button variant="text" size="small" onClick={() => navigate('/login')}>
                  Log In
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

export default Signup;
