import {
    Psychology,
    TrendingUp,
    VideoLibrary,
    Whatshot,
} from '@mui/icons-material';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Grid,
    LinearProgress,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { type MouseEvent, useEffect, useState } from 'react';

// Types
type Query = {
  query: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | string;
  concepts: string[];
};

type Stats = {
  conceptsLearned: number;
  gapsIdentified: number;
  videosWatched: number;
  dayStreak: number;
};

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(45, 55, 72, 0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
    border: '1px solid #4fd1c7',
  },
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  background: 'linear-gradient(45deg, #4fd1c7, #63b3ed)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '8px',
}));

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [stats, setStats] = useState<Stats>({
    conceptsLearned: 0,
    gapsIdentified: 0,
    videosWatched: 0,
    dayStreak: 0,
  });

  const [recentQueries] = useState<Query[]>([
    {
      query: 'How does binary search tree insertion work?',
      time: '2 hours ago',
      difficulty: 'Medium',
      concepts: ['BST', 'Recursion'],
    },
    {
      query: 'Explain dynamic programming approach for fibonacci',
      time: '1 day ago',
      difficulty: 'Hard',
      concepts: ['DP', 'Memoization'],
    },
    {
      query: 'What is time complexity of merge sort?',
      time: '2 days ago',
      difficulty: 'Easy',
      concepts: ['Sorting', 'Complexity'],
    },
    {
      query: 'How to implement graph traversal using DFS?',
      time: '3 days ago',
      difficulty: 'Medium',
      concepts: ['Graph', 'DFS'],
    },
    {
      query: 'Explain linked list reversal algorithm',
      time: '1 week ago',
      difficulty: 'Easy',
      concepts: ['LinkedList', 'Pointers'],
    },
  ]);

  // Animate stats on mount
  useEffect(() => {
    const targetStats: Stats = {
      conceptsLearned: 24,
      gapsIdentified: 8,
      videosWatched: 15,
      dayStreak: 5,
    };

    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setStats({
          conceptsLearned: Math.floor(targetStats.conceptsLearned * progress),
          gapsIdentified: Math.floor(targetStats.gapsIdentified * progress),
          videosWatched: Math.floor(targetStats.videosWatched * progress),
          dayStreak: Math.floor(targetStats.dayStreak * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          setStats(targetStats);
        }
      }, increment);
    };

    animateStats();
  }, []);

  const handleProfileClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'Easy':
        return '#48bb78';
      case 'Medium':
        return '#ed8936';
      case 'Hard':
        return '#e53e3e';
      default:
        return '#4fd1c7';
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #0f1419 0%, #1a202c 50%, #2d3748 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          sx={{ mb: 4, fontWeight: 'bold', textAlign: 'left' }}
        >
          Learning Dashboard
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            {
              icon: <Psychology sx={{ fontSize: 48, color: '#4fd1c7', mb: 2 }} />,
              value: stats.conceptsLearned,
              label: 'Concepts Learned',
              max: 30,
              gradient: 'linear-gradient(45deg, #4fd1c7, #63b3ed)',
              color: '#4fd1c7',
            },
            {
              icon: <TrendingUp sx={{ fontSize: 48, color: '#ed8936', mb: 2 }} />,
              value: stats.gapsIdentified,
              label: 'Gaps Identified',
              max: 12,
              gradient: 'linear-gradient(45deg, #ed8936, #f6ad55)',
              color: '#ed8936',
            },
            {
              icon: <VideoLibrary sx={{ fontSize: 48, color: '#63b3ed', mb: 2 }} />,
              value: stats.videosWatched,
              label: 'Videos Watched',
              max: 20,
              gradient: 'linear-gradient(45deg, #63b3ed, #90cdf4)',
              color: '#63b3ed',
            },
            {
              icon: <Whatshot sx={{ fontSize: 48, color: '#f6ad55', mb: 2 }} />,
              value: stats.dayStreak,
              label: 'Day Streak',
              max: 7,
              gradient: 'linear-gradient(45deg, #f6ad55, #fbd38d)',
              color: '#f6ad55',
            },
          ].map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <StyledCard>
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  {item.icon}
                  <StatNumber
                    sx={{
                      background: item.gradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.value}
                  </StatNumber>
                  <Typography
                    variant="h6"
                    sx={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    {item.label}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(item.value / item.max) * 100}
                    sx={{
                      mt: 2,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: item.color,
                      },
                    }}
                  />
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {/* Recent Queries */}
        <StyledCard>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
              Recent Queries
            </Typography>

            <List sx={{ p: 0 }}>
              {recentQueries.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    mb: 2,
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(79, 209, 199, 0.1)',
                      border: '1px solid rgba(79, 209, 199, 0.3)',
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                        {item.query}
                      </Typography>
                    }
                    secondary={
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          flexWrap: 'wrap',
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ color: 'rgba(255,255,255,0.6)' }}
                        >
                          {item.time}
                        </Typography>
                        <Chip
                          label={item.difficulty}
                          size="small"
                          sx={{
                            backgroundColor: getDifficultyColor(item.difficulty),
                            color: 'white',
                            fontSize: '0.75rem',
                          }}
                        />
                        {item.concepts.map((concept, idx) => (
                          <Chip
                            key={idx}
                            label={concept}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: '#4fd1c7',
                              color: '#4fd1c7',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </StyledCard>
      </Container>
    </Box>
  );
};

export default Dashboard;
