// src/pages/StudentView.tsx


import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  AppBar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import React, { useState, type FormEvent } from 'react';

import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import UserProfileMenu from '../components/UserProfileMenu';
import { useThemeContext } from '../contexts/ThemeContext';


const ThemeToggleButton = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <Tooltip title="Toggle light/dark mode">
      <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
};


interface Concept {
  name: string;
  confidence: number;
}

interface VideoResult {
  title: string;
  url: string;
}

interface AnalyzeResponse {
  video?: VideoResult;
  concepts: Concept[];
}

interface Suggestion {
  title: string;
  url: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  concepts: string[];
}

const StudentView: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<AnalyzeResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [recentQueries, setRecentQueries] = useState<string[]>([]);
  const [tabValue, setTabValue] = useState<string>('all');
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null);


  const [suggestions] = useState<Suggestion[]>([
    {
      title: 'Introduction to Algorithms',
      url: 'https://youtu.be/rL8X2mlNHPM',
      difficulty: 'Beginner',
      concepts: ['Algorithms', 'Complexity']
    },
    {
      title: 'Advanced Data Structures',
      url: 'https://youtu.be/B31LgI4Y4DQ',
      difficulty: 'Advanced',
      concepts: ['Trees', 'Graphs']
    }
  ]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await axios.post<AnalyzeResponse>('/api/analyze', { query });
      setResults(response.data);
      setRecentQueries(prev => [query, ...prev.slice(0, 4)]);
      setQuery('');
    } catch (err) {
      setError('Failed to process query. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredSuggestions = suggestions.filter(
    suggestion => tabValue === 'all' || suggestion.difficulty === tabValue
  );

  return ( 
   <>
    <AppBar position="static">
  <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="h6" sx={{ fontWeight: 600 }}>
      DSA Learn Portal
    </Typography>

    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <ThemeToggleButton />
      <UserProfileMenu />
    </Box>
  </Toolbar>
</AppBar>

    

    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
          Ask Your DSA Question
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Explain time complexity of merge sort..."
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading || !query.trim()}
              sx={{ px: 4 }}
            >
              {loading ? <CircularProgress size={24} /> : 'Analyze'}
            </Button>

            {recentQueries.length > 0 && (
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="caption" color="textSecondary">
                  Recent queries:
                </Typography>
                {recentQueries.map((q, i) => (
                  <Chip
                    key={i}
                    label={q}
                    onClick={() => setQuery(q)}
                    size="small"
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
            )}
          </Box>
        </form>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Paper>

      {results && (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          {results.video ? (
  <>
    <Typography variant="h5" gutterBottom>
      Recommended Video: {results.video.title}
    </Typography>

    <Box sx={{ mb: 3 }}>
      <ReactPlayer
        url={results.video.url}
        controls
        width="100%"
        height="400px"
      />
    </Box>

    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1">Mapped Concepts:</Typography>
      {results.concepts.map((concept, i) => (
        <Chip
          key={i}
          label={`${concept.name} (${Math.round(concept.confidence * 100)}%)`}
          sx={{ mr: 1, mb: 1 }}
          color="primary"
        />
      ))}
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
      <Tooltip title="Helpful">
        <IconButton
          onClick={() => setFeedback('like')}
          color={feedback === 'like' ? 'success' : 'default'}
        >
          <ThumbUpIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Not Helpful">
        <IconButton
          onClick={() => setFeedback('dislike')}
          color={feedback === 'dislike' ? 'error' : 'default'}
        >
          <ThumbDownIcon />
        </IconButton>
      </Tooltip>

      {feedback && (
        <Typography variant="body2" color="text.secondary">
          You marked this as {feedback === 'like' ? 'helpful 👍' : 'not helpful 👎'}
        </Typography>
      )}
    </Box>
  </>
) : (

            <Typography variant="h6" color="textSecondary">
              Sorry, we couldn't find a video for your query
            </Typography>
          )}
        </Paper>
      )}

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Recommended Learning Paths
        </Typography>

        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{ mb: 2 }}
        >
          <Tab label="All" value="all" />
          <Tab label="Beginner" value="Beginner" />
          <Tab label="Intermediate" value="Intermediate" />
          <Tab label="Advanced" value="Advanced" />
        </Tabs>

        <Grid container spacing={3}>
          {filteredSuggestions.map((suggestion, i) => (
            <Grid key={i} size={{ xs: 12, md: 6 }}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <ReactPlayer
                  url={suggestion.url}
                  width="100%"
                  height="200px"
                  controls
                />
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {suggestion.title}
                </Typography>
                <Chip
                  label={suggestion.difficulty}
                  size="small"
                  sx={{ mt: 1 }}
                  color={
                    suggestion.difficulty === 'Advanced'
                      ? 'error'
                      : suggestion.difficulty === 'Intermediate'
                      ? 'warning'
                      : 'success'
                  }
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
     </>
  );
};

export default StudentView;