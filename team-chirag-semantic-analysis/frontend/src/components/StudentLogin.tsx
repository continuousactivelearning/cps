import { Close, Psychology, School } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    Chip,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

interface StudentLoginProps {
  open: boolean;
  onClose: () => void;
  onLogin: (credentials: {
    username: string;
    password: string;
    interests: string[];
  }) => void;
}

const StyledDialog = styled(Dialog)(({ }) => ({
  '& .MuiDialog-paper': {
    background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
    border: '1px solid rgba(79, 209, 199, 0.3)',
    borderRadius: '16px',
  },
}));

const StudentLogin: React.FC<StudentLoginProps> = ({ open, onClose, onLogin }) => {
  const [credentials, setCredentials] = useState<{
    username: string;
    password: string;
    interests: string[];
  }>({
    username: '',
    password: '',
    interests: []
  });

  const dsaTopics: string[] = ['Arrays', 'LinkedList', 'Trees', 'Graphs', 'DP', 'Sorting', 'Searching'];

  const handleInterestToggle = (topic: string) => {
    setCredentials(prev => ({
      ...prev,
      interests: prev.interests.includes(topic)
        ? prev.interests.filter(t => t !== topic)
        : [...prev.interests, topic]
    }));
  };

  const handleLogin = () => {
    onLogin(credentials);
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ background: 'linear-gradient(45deg, #4fd1c7, #63b3ed)' }}>
            <School />
          </Avatar>
          <Typography variant="h5">Student Login</Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ color: 'white' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
          <TextField
            label="Username"
            value={credentials.username}
            onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover fieldset': { borderColor: '#4fd1c7' },
                '&.Mui-focused fieldset': { borderColor: '#4fd1c7' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
            }}
          />

          <TextField
            label="Password"
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover fieldset': { borderColor: '#4fd1c7' },
                '&.Mui-focused fieldset': { borderColor: '#4fd1c7' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
            }}
          />

          <Box>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Psychology sx={{ color: '#4fd1c7' }} />
              Select DSA Interests
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {dsaTopics.map((topic) => (
                <Chip
                  key={topic}
                  label={topic}
                  onClick={() => handleInterestToggle(topic)}
                  color={credentials.interests.includes(topic) ? 'primary' : 'default'}
                  variant={credentials.interests.includes(topic) ? 'filled' : 'outlined'}
                  sx={{
                    '&:hover': { backgroundColor: 'rgba(79, 209, 199, 0.2)' },
                    ...(credentials.interests.includes(topic) && {
                      background: 'linear-gradient(45deg, #4fd1c7, #63b3ed)',
                    })
                  }}
                />
              ))}
            </Box>
          </Box>

          <Button
            variant="contained"
            onClick={handleLogin}
            disabled={!credentials.username || !credentials.password}
            sx={{
              background: 'linear-gradient(45deg, #4fd1c7, #63b3ed)',
              '&:hover': {
                background: 'linear-gradient(45deg, #45b8af, #5a9bd4)',
              },
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            Login to Dashboard
          </Button>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default StudentLogin;
