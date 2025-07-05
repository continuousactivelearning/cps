import React, { useEffect, useState } from 'react';
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
// import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
// import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

interface UserProfile {
  name?: string;
  email?: string;
  profileImage?: string;
}

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>({});

  useEffect(() => {
    // Get user data from localStorage
    const raw = localStorage.getItem("userProfile");
    if (raw) {
      const userData = JSON.parse(raw);
      setProfile({
        name: userData.name || 'User',
        email: userData.email || 'user@example.com',
        profileImage: userData.avatar || userData.profileImage
      });
    } else {
      setProfile({
        name: 'User',
        email: 'user@example.com'
      });
    }
  }, []);

  return (
    <Drawer anchor="left" open={open} onClose={onClose} sx={{ '& .MuiDrawer-paper': { width: 260 } }}>
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 h-full text-white p-4 flex flex-col">
        {/* User Info */}
        <div className="flex flex-col items-center mb-6">
          <Avatar 
            src={profile.profileImage}
            sx={{ width: 64, height: 64, mb: 1 }}
          >
            {profile.name?.[0]?.toUpperCase() || 'U'}
          </Avatar>
          <Typography variant="h6">{profile.name || 'Your Name'}</Typography>
          <Typography variant="caption">{profile.email || 'youremail@example.com'}</Typography>
        </div>

        <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.3)', mb: 2 }} />

        {/* Navigation Links */}
        <List>
          {/* <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/student'); onClose(); }}>
              <ListItemIcon sx={{ color: 'white' }}><HomeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/student-profile'); onClose(); }}>
              <ListItemIcon sx={{ color: 'white' }}><PersonIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/chat'); onClose(); }}>
              <ListItemIcon sx={{ color: 'white' }}><ChatIcon /></ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding>
            <ListItemButton onClick={() => { navigate('/settings'); onClose(); }}>
              <ListItemIcon sx={{ color: 'white' }}><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem> */}
        </List>
      </div>
    </Drawer>
  );
};
