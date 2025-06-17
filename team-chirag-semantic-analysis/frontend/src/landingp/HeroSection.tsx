import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
        background: 'linear-gradient(135deg, #2196f3 30%, #21cbf3 90%)',
        color: '#fff'
      }}
    >
      <Typography variant="h3" gutterBottom>Master DSA with AI-Powered Guidance</Typography>
      <Typography variant="h6" mb={4}>Ask questions, get video recommendations, and personalized learning paths.</Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        component={Link}
        to="/signup"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
