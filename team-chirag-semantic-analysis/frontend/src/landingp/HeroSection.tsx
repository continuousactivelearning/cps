import { Box, Button, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import aiAnimation from '../assets/ai-lottie.json';

const HeroSection = () => {
  return (
    <Box sx={{
      py: 12,
      textAlign: 'center',
      color: '#fff',
      background: 'linear-gradient(-45deg, #2196f3, #21cbf3)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 10s ease infinite',
      '@keyframes gradientShift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' }
      }
    }}>
      <Lottie animationData={aiAnimation} style={{ width: 200, margin: '0 auto' }} />
      <Typography variant="h3" gutterBottom>Master DSA with AI-Powered Guidance</Typography>
      <Typography variant="h6" mb={4}>Ask questions, get video recommendations, and personalized learning paths.</Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ '&:hover': { boxShadow: '0 0 10px #fff', transform: 'scale(1.05)' } }}
        component={Link}
        to="/signup"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;