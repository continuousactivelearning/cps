import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <Drawer anchor="left" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: 260 } }}>
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 h-full text-white p-4 flex flex-col">
        {/* User Info */}
        <div className="flex flex-col items-center mb-6">
          <Avatar sx={{ width: 64, height: 64, mb: 1 }} />
          <Typography variant="h6">Your Name</Typography>
          <Typography variant="caption">youremail@example.com</Typography>
        </div>

        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)', mb: 2 }} />

        {/* Navigation Links */}
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/home'); onClose(); }}>
              <ListItemIcon sx={{ color: 'white' }}><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/chat'); onClose(); }}>
              <ListItemIcon sx={{ color: 'white' }}><ChatIcon /></ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/settings'); onClose(); }}>
              <ListItemIcon sx={{ color: 'white' }}><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};
