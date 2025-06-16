import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box, Button, Chip, Divider, Drawer, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const StudentView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<string[][]>([]); // Array of conversations

  const handleAsk = async () => {
    if (!query.trim()) return;
    const newMessages = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    setQuery('');
    setError('');
    try {
      const res = await fetch('http://localhost:8000/query/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      if (data.answer) {
        const updatedMessages = [...newMessages, { role: 'bot', content: data.answer }];
        setMessages(updatedMessages);
        if (data.video) setVideoUrl(data.video);
      } else {
        throw new Error('No answer received');
      }
    } catch (err) {
      setError('Oops! Something went wrong. Try again later.');
    }
  };

  const handleStartNewChat = () => {
    if (messages.length > 0) {
      setChatHistory(prev => [...prev, messages.map(m => m.content)]);
    }
    setMessages([]);
    setVideoUrl('');
    setQuery('');
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', color: 'black', p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" fontWeight="bold">
          <SmartToyIcon sx={{ color: 'teal', mr: 1 }} /> CPS-QueryMapper
        </Typography>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon sx={{ color: 'teal' }} />
        </IconButton>
      </Box>

      <Typography variant="subtitle1" mt={2} sx={{ fontStyle: 'italic', fontFamily: '"Bookman Old Style", Bookman, serif', whiteSpace: 'pre-line' }}>
        Ask me anything about algorithms, data structures, or CS concepts.
        I’ll provide explanations and relevant video resources.
      </Typography>

      <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
        {['Explain quicksort', 'Difference between arrays and linked lists', 'When to use dynamic programming', 'How hash tables handle collisions'].map((item, i) => (
          <Chip key={i} label={item} onClick={() => setQuery(item)} variant="outlined" sx={{ cursor: 'pointer', color: '#81d51e' }} />
        ))}
      </Box>

      <TextField
        fullWidth
        multiline
        rows={3}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your question here..."
        sx={{ mt: 3, bgcolor: '#97dfd0', color: 'black' }}
        InputProps={{ style: { color: 'black' } }}
      />

      <Button
        variant="contained"
        endIcon={<SendIcon />}
        onClick={handleAsk}
        sx={{ mt: 2, bgcolor: 'teal', '&:hover': { bgcolor: 'darkcyan' } }}
      >
        Ask
      </Button>

      {error && (
        <Box mt={2} p={2} bgcolor="#ffe6e6" color="red" borderRadius={1}>
          {error}
        </Box>
      )}

      <Box mt={4}>
        {messages.map((msg, index) => (
          <Box key={index} p={2} bgcolor={msg.role === 'user' ? '#e0f7fa' : '#f1f8e9'} borderRadius={2} mb={2}>
            <Typography fontWeight="bold">{msg.role === 'user' ? 'You' : 'Assistant'}</Typography>
            <Typography>{msg.content}</Typography>
          </Box>
        ))}
      </Box>

      {videoUrl && (
        <Box mt={3}>
          <Typography variant="h6" mb={1}>Recommended Video:</Typography>
          <video width="100%" height="auto" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      )}

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box width={280} p={2} bgcolor="#0f172a" height="100vh" color="white">
          <Typography variant="h6" fontWeight="bold" gutterBottom>CPS-QueryMapper</Typography>
          <Button fullWidth onClick={handleStartNewChat} sx={{ bgcolor: '#1e293b', color: 'white', mb: 2, '&:hover': { bgcolor: '#334155' } }}>
            + New Chat
          </Button>

          <Typography variant="subtitle2" gutterBottom>TODAY</Typography>
          <Divider sx={{ bgcolor: '#475569', mb: 1 }} />

          <List>
            {chatHistory.map((chat, index) => (
              <ListItem key={index} button sx={{ bgcolor: '#1e293b', mb: 1, borderRadius: 1 }}>
                <ListItemText
                  primary={`Conversation ${index + 1}`}
                  secondary={`${chat[0]?.slice(0, 25) || 'No messages'}...`}
                  secondaryTypographyProps={{ color: '#cbd5e1', fontSize: 12 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default StudentView;
