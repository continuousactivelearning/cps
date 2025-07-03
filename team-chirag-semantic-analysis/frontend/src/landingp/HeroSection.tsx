import { Box, Button, Typography, Tooltip, Fab } from '@mui/material';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import aiAnimation from '../assets/ai-lottie.json';
import React from 'react';

interface FloatingAssistantProps {
  onClick?: () => void;
}

const FloatingAssistant: React.FC<FloatingAssistantProps> = ({ onClick }) => (
  <Tooltip title="Need help? I'm your AI buddy!" placement="left">
    <Fab
      color="primary"
      onClick={onClick}
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 2000,
        boxShadow: 6,
        width: 72,
        height: 72,
        bgcolor: '#26c6da',
        '&:hover': { bgcolor: '#42a5f5' },
        display: { xs: 'none', sm: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
        cursor: 'pointer',
      }}
    >
      <Lottie animationData={aiAnimation} style={{ width: 56, height: 56 }} loop />
    </Fab>
  </Tooltip>
);

interface HeroSectionProps {
  onAiBuddyClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onAiBuddyClick }) => {
  return (
    <Box sx={{
      py: { xs: 8, md: 12 },
      textAlign: 'center',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(120deg, #1976d2 0%, #42a5f5 60%, #26c6da 100%)',
      minHeight: { xs: 500, md: 600 },
    }}>
      {/* Decorative background shapes */}
      <Box sx={{
        position: 'absolute',
        top: -80,
        left: -120,
        width: 320,
        height: 320,
        bgcolor: '#42a5f5',
        opacity: 0.18,
        borderRadius: '50%',
        zIndex: 0,
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: -100,
        right: -140,
        width: 340,
        height: 340,
        bgcolor: '#26c6da',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0,
      }} />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Lottie animationData={aiAnimation} style={{ width: 240, margin: '0 auto' }} loop />
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 800, letterSpacing: 1, mb: 2 }}>
          Welcome to your <span style={{ color: '#26c6da' }}>AI DSA Buddy</span>
        </Typography>
        <Typography variant="h5" mb={4} sx={{ opacity: 0.95 }}>
          Let's master Data Structures & Algorithms together—with friendly guidance, smart video picks, and a personalized journey.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            bgcolor: '#26c6da',
            color: '#fff',
            fontWeight: 700,
            px: 5,
            py: 1.5,
            fontSize: '1.2rem',
            borderRadius: 8,
            boxShadow: '0 4px 24px 0 #26c6da55',
            transition: 'all 0.2s',
            '&:hover': {
              bgcolor: '#1976d2',
              color: '#fff',
              transform: 'scale(1.06)',
              boxShadow: '0 8px 32px 0 #1976d255',
            },
          }}
          component={Link}
          to="/signup"
        >
          Get Started
        </Button>
      </Box>
      {/* Floating robot assistant */}
      <FloatingAssistant onClick={onAiBuddyClick} />
    </Box>
  );
};

export default HeroSection;