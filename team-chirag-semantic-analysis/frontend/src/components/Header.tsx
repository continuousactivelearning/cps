import PersonIcon from '@mui/icons-material/Person';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', path: '/' }
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ background: '#232c3d', boxShadow: 'none' }}>
      <Toolbar>
        {/* Logo and Title */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#4fd1c7',
              mr: 1,
              letterSpacing: 1,
            }}
          >
            ConceptBridge
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Semantic Learning Assistant
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: 'white',
                background:
                  location.pathname === item.path
                    ? 'rgba(79,209,199,0.2)'
                    : 'transparent',
                fontWeight: location.pathname === item.path ? 700 : 400,
                borderRadius: 2,
                px: 3,
                '&:hover': {
                  background: 'rgba(79,209,199,0.15)'
                }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Student/Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
          <Avatar sx={{ bgcolor: '#4fd1c7', width: 36, height: 36, mr: 1 }}>
            <PersonIcon sx={{ color: '#232c3d' }} />
          </Avatar>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Student
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
