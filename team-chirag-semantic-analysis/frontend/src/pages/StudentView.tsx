// src/pages/StudentView.tsx
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import axios from 'axios';
import {useState, type FormEvent } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

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
  );
};

export default StudentView;