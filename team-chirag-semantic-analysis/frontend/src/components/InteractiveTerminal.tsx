import {
    Box,
    Button,
    Chip,
    CircularProgress,
    Paper,
    TextField,
    Typography
} from '@mui/material';
import axios from 'axios';
import React, { type ChangeEvent, type FormEvent, useState } from 'react';
import ReactPlayer from 'react-player';

interface Concept {
  name: string;
  confidence: number;
}

interface Video {
  title: string;
  url: string;
}

interface Result {
  concepts: Concept[];
  video?: Video;
}

interface Message {
  sender: 'user' | 'bot';
  text: string;
  video?: Video;
  concepts?: Concept[];
}

const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post('/api/analyze', { query: input });
      const botMessage: Message = {
        sender: 'bot',
        text: 'Here is what I found:',
        video: res.data.video,
        concepts: res.data.concepts
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: 'Failed to process your query. Please try again later.' }
      ]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <Box sx={{ border: '1px solid #ccc', borderRadius: 2, p: 2, maxHeight: 500, overflowY: 'auto' }}>
      {messages.map((msg, idx) => (
        <Paper
          key={idx}
          sx={{
            mb: 2,
            p: 2,
            backgroundColor: msg.sender === 'user' ? '#e3f2fd' : '#f3e5f5'
          }}
        >
          <Typography variant="subtitle2" sx={{ color: 'black', mb: 1 }}>
            {msg.sender === 'user' ? 'You' : 'Assistant'}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              display: 'inline-block',
              bgcolor: msg.sender === 'user' ? 'primary.main' : 'white',
              color: msg.sender === 'user' ? 'white' : 'black',
              px: 2,
              py: 1,
              borderRadius: 2,
              maxWidth: '80%',
              wordBreak: 'break-word',
              boxShadow: 1,
            }}
          >
            {msg.text}
          </Typography>

          {msg.video && (
            <Box mt={2}>
              <Typography variant="subtitle1">{msg.video.title}</Typography>
              <ReactPlayer url={msg.video.url} controls width="100%" height="300px" />
            </Box>
          )}

          {msg.concepts && msg.concepts.length > 0 && (
            <Box mt={1}>
              <Typography variant="caption" color="textSecondary">
                Mapped Concepts:
              </Typography>
              <Box mt={1} sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {msg.concepts.map((concept, i) => (
                  <Chip
                    key={i}
                    label={`${concept.name} (${Math.round(concept.confidence * 100)}%)`}
                    color="primary"
                  />
                ))}
              </Box>
            </Box>
          )}
        </Paper>
      ))}

      <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          placeholder="Ask your query here..."
          multiline
          minRows={2}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" disabled={loading || !input.trim()}>
          {loading ? <CircularProgress size={24} /> : 'Send'}
        </Button>
      </form>
    </Box>
  );
};

export default InteractiveTerminal;
