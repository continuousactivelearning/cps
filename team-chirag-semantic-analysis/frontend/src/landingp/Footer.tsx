import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ py: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
    <Typography variant="body2">© {new Date().getFullYear()} DSA Learn Portal. All rights reserved.</Typography>
  </Box>
);

export default Footer;
