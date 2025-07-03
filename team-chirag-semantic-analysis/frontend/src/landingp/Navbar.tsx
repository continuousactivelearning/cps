import MenuIcon from '@mui/icons-material/Menu';
import { 
  AppBar, 
  Box, 
  Button, 
  Drawer, 
  IconButton, 
  List, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  Typography,
  Divider
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import aiAnimation from '../assets/ai-lottie.json';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar 
      position="sticky" 
      elevation={4}
      sx={{
        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 50%, #26c6da 100%)',
        color: '#fff',
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Lottie 
              animationData={aiAnimation} 
              style={{ width: 32, height: 32 }} 
              loop 
            />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              color: '#fff',
              letterSpacing: 0.5,
            }}
          >
            ConceptBridge
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/login"
            sx={{
              fontWeight: 500,
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s',
            }}
          >
            Login
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/signup"
            sx={{
              fontWeight: 500,
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.15)',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s',
            }}
          >
            Signup
          </Button>
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            sx={{
              bgcolor: '#fff',
              color: '#1976d2',
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: 3,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                bgcolor: '#f5f5f5',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
              },
              transition: 'all 0.2s',
            }}
          >
            Get Started
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton 
            color="inherit" 
            onClick={() => setOpen(true)}
            sx={{
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.15)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer 
          anchor="right" 
          open={open} 
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: 280,
              background: '#fff',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            }
          }}
        >
          <Box sx={{ p: 3 }}>
            {/* Drawer Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box sx={{ width: 32, height: 32 }}>
                <Lottie 
                  animationData={aiAnimation} 
                  style={{ width: 28, height: 28 }} 
                  loop 
                />
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #1976d2, #26c6da)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                ConceptBridge
              </Typography>
            </Box>
            
            <Divider sx={{ mb: 2 }} />
            
            <List>
              <ListItemButton 
                component={Link} 
                to="/login" 
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  '&:hover': {
                    background: 'rgba(25, 118, 210, 0.1)',
                  },
                }}
              >
                <ListItemText 
                  primary="Login" 
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
              <ListItemButton 
                component={Link} 
                to="/signup" 
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  '&:hover': {
                    background: 'rgba(25, 118, 210, 0.1)',
                  },
                }}
              >
                <ListItemText 
                  primary="Signup" 
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </List>
            
            <Divider sx={{ my: 2 }} />
            
            <Button
              variant="contained"
              component={Link}
              to="/signup"
              fullWidth
              onClick={() => setOpen(false)}
              sx={{
                bgcolor: '#26c6da',
                color: '#fff',
                fontWeight: 600,
                py: 1.5,
                borderRadius: 3,
                boxShadow: '0 4px 16px rgba(38, 198, 218, 0.3)',
                '&:hover': {
                  bgcolor: '#1976d2',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 8px 24px rgba(25, 118, 210, 0.4)',
                },
                transition: 'all 0.2s',
              }}
            >
              Get Started
            </Button>
          </Box>
          </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;