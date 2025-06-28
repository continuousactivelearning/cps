import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <Box
    sx={{
      position: 'relative',
      textAlign: 'center',
      py: 10,
      color: '#fff',
      backgroundImage: 'url("src/assets/cta-bg.gif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden'
    }}
    role="region"
    aria-label="Call to Action Section"
  >
    {/* Dark overlay for readability */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
      }}
      aria-hidden="true"
    />
    {/* Content Layer */}
    <Box sx={{ position: 'relative', zIndex: 2 }}>
      <Typography variant="h4" gutterBottom tabIndex={0}>
        Start Your Learning Journey
      </Typography>
      <Typography variant="subtitle1" gutterBottom tabIndex={0}>
        Join now and explore our smart recommendation system
      </Typography>
      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/signup"
        sx={{
          backgroundColor: '#fff',
          color: '#d81b60',
          '&:hover': {
            backgroundColor: '#ff4081',
            color: '#fff'
          }
        }}
        aria-label="Join Now"
      >
        Join Now
      </Button>
    </Box>
  </Box>
);

export default CTASection;
