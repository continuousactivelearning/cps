import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{
    py: 4,
    textAlign: 'center',
    bgcolor: 'primary.main',
    color: 'white'
  }}>
    <Typography variant="body2" mb={2}>© {new Date().getFullYear()} DSA Learn Portal. All rights reserved.</Typography>
    <Box>
      <IconButton color="inherit" href="#" target="_blank"><GitHub /></IconButton>
      <IconButton color="inherit" href="#" target="_blank"><LinkedIn /></IconButton>
      <IconButton color="inherit" href="#" target="_blank"><Twitter /></IconButton>
    </Box>
  </Box>
);

export default Footer;
