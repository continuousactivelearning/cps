// src/components/UserProfileMenu.tsx
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfileMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const dummyUser = {
    name: 'John Doe',
    email: 'john@example.com',
    enrolledSince: 'Jan 2024',
    queriesAsked: 5
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleCloseMenu();
    navigate('/login');
  };

  return (
    <>
      <Tooltip title="User Profile">
        <IconButton onClick={handleOpenMenu} color="inherit">
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
      </Tooltip>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
        <MenuItem onClick={() => { setProfileOpen(true); handleCloseMenu(); }}>
          View Profile
        </MenuItem>
        <MenuItem onClick={() => { navigate('/student/profile'); setProfileOpen(false); }}>View Profile</MenuItem>

        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      <Dialog open={profileOpen} onClose={() => setProfileOpen(false)}>
        <DialogTitle>User Profile</DialogTitle>
        <DialogContent dividers>
          <Typography><strong>Name:</strong> {dummyUser.name}</Typography>
          <Typography><strong>Email:</strong> {dummyUser.email}</Typography>
          <Typography><strong>Enrolled Since:</strong> {dummyUser.enrolledSince}</Typography>
          <Typography><strong>Queries Submitted:</strong> {dummyUser.queriesAsked}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserProfileMenu;
