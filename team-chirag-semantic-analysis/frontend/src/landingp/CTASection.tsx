import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <Box sx={{ textAlign: 'center', py: 8,  background: 'linear-gradient(135deg,rgb(223, 42, 130) 30%,rgb(224, 193, 243) 90%)',
        color: '#fff' }}>
    <Typography variant="h4" gutterBottom>Start Your Learning Journey</Typography>
    <Typography variant="subtitle1" gutterBottom>Join now and explore our smart recommendation system</Typography>
    <Button variant="contained" size="large" component={Link} to="/signup">Join Now</Button>
  </Box>
);
  
export default CTASection;
