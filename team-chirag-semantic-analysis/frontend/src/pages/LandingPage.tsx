import { Box, Button, Container, Grid, Typography, Card, CardContent, Paper } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../landingp/Navbar';
import Footer from '../landingp/Footer';
import Lottie from 'lottie-react';
import aiAnimation from '../assets/ai-lottie.json';
import { 
  Brain, 
  Search, 
  Target, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Mail, 
  MessageSquare, 
  Lightbulb, 
  TrendingUp, 
  Database, 
  Zap, 
  CheckCircle,
  Code,
  BarChart3,
  Video,
  BookMarked
} from 'lucide-react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'white' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                color: '#1e293b',
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Semantic Analysis of{' '}
              <span style={{ color: '#1976d2' }}>DSA Learning Queries</span>{' '}
              to Map Concept Gaps
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: '#64748b',
                mb: 6,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Transform DSA education by understanding what students really need to learn through 
              intelligent analysis of their questions and knowledge gaps in Data Structures & Algorithms.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#1976d2',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 16px rgba(25, 118, 210, 0.3)',
                  '&:hover': {
                    bgcolor: '#1565c0',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(25, 118, 210, 0.4)',
                  },
                  transition: 'all 0.2s',
                }}
              >
                Get Started
                <ArrowRight style={{ marginLeft: 8, width: 20, height: 20 }} />
              </Button>
              {/* <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#cbd5e1',
                  color: '#475569',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: '#1976d2',
                    color: '#1976d2',
                    bgcolor: 'rgba(25, 118, 210, 0.04)',
                  },
                }}
              >
                <MessageSquare style={{ marginRight: 8, width: 20, height: 20 }} />
                See Demo
              </Button> */}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Overview Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#1e293b', mb: 2 }}>
              How It Works
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: '600px', mx: 'auto' }}>
              Advanced natural language processing that understands the deeper meaning behind student DSA questions.
            </Typography>
          </Box>
          
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ space: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 4 }}>
                  <Box sx={{ bgcolor: '#dbeafe', p: 2, borderRadius: 2 }}>
                    <Search style={{ width: 24, height: 24, color: '#1976d2' }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b', mb: 1 }}>
                      Intelligent Query Processing
                    </Typography>
                    <Typography sx={{ color: '#64748b', lineHeight: 1.6 }}>
                      Analyze student DSA questions to understand not just what they're asking, but what underlying 
                      algorithms and data structures they're struggling with.
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3, mb: 4 }}>
                  <Box sx={{ bgcolor: '#dcfce7', p: 2, borderRadius: 2 }}>
                    <Target style={{ width: 24, height: 24, color: '#16a34a' }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b', mb: 1 }}>
                      Concept Gap Identification
                    </Typography>
                    <Typography sx={{ color: '#64748b', lineHeight: 1.6 }}>
                      Automatically map queries to specific DSA knowledge gaps and prerequisite concepts that 
                      students need to master.
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Box sx={{ bgcolor: '#f3e8ff', p: 2, borderRadius: 2 }}>
                    <Lightbulb style={{ width: 24, height: 24, color: '#9333ea' }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b', mb: 1 }}>
                      Personalized Learning Paths
                    </Typography>
                    <Typography sx={{ color: '#64748b', lineHeight: 1.6 }}>
                      Generate targeted learning recommendations with video content that address specific gaps 
                      and build foundational DSA understanding.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper sx={{ bgcolor: '#f8fafc', p: 4, borderRadius: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box sx={{ 
                    bgcolor: '#1976d2', 
                    color: 'white', 
                    fontSize: '2rem', 
                    fontWeight: 700,
                    py: 2, 
                    px: 3, 
                    borderRadius: 2, 
                    mb: 3, 
                    display: 'inline-block' 
                  }}>
                    AI + DSA Education
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#1e293b', mb: 2 }}>
                    Understanding Beyond Code
                  </Typography>
                  <Typography sx={{ color: '#64748b', lineHeight: 1.6 }}>
                    Our semantic analysis technology goes beyond keyword matching to understand the true intent 
                    and learning needs behind every student question about algorithms and data structures.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#1e293b', mb: 2 }}>
              Powerful Features
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: '600px', mx: 'auto' }}>
              Advanced capabilities that transform how educational platforms understand and support learners.
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} md={4}>
              <Card sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                bgcolor: 'white',
                minWidth: 260,
                maxWidth: 340,
                mx: 'auto',
              }}>
                <Box sx={{ bgcolor: '#e3edfa', width: 56, height: 56, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  <Database style={{ width: 28, height: 28, color: '#1976d2' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b', mb: 1, textAlign: 'center' }}>
                  Real-Time Analysis
                </Typography>
                <Typography sx={{ color: '#64748b', textAlign: 'center', lineHeight: 1.6 }}>
                  Process student queries instantly to provide immediate insights into learning needs and knowledge gaps as they emerge.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                bgcolor: 'white',
                minWidth: 260,
                maxWidth: 340,
                mx: 'auto',
              }}>
                <Box sx={{ bgcolor: '#e6f7ee', width: 56, height: 56, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  <Zap style={{ width: 28, height: 28, color: '#16a34a' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b', mb: 1, textAlign: 'center' }}>
                  Adaptive Learning Engine
                </Typography>
                <Typography sx={{ color: '#64748b', textAlign: 'center', lineHeight: 1.6 }}>
                  Continuously learn from student interactions to improve concept mapping accuracy and personalization over time.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                bgcolor: 'white',
                minWidth: 260,
                maxWidth: 340,
                mx: 'auto',
              }}>
                <Box sx={{ bgcolor: '#f3e8ff', width: 56, height: 56, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  <TrendingUp style={{ width: 28, height: 28, color: '#9333ea' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b', mb: 1, textAlign: 'center' }}>
                  Learning Analytics
                </Typography>
                <Typography sx={{ color: '#64748b', textAlign: 'center', lineHeight: 1.6 }}>
                  Comprehensive dashboards and insights that help educators understand class-wide learning patterns and common misconceptions.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Applications Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#1e293b', mb: 2 }}>
              Applications
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: '600px', mx: 'auto' }}>
              Transform educational experiences across platforms and learning environments.
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                bgcolor: 'white',
                minWidth: 220,
                maxWidth: 300,
                mx: 'auto',
              }}>
                <Box sx={{ bgcolor: '#e3edfa', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <BookOpen style={{ width: 28, height: 28, color: '#1976d2' }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1e293b', mb: 1, textAlign: 'center' }}>
                  Learning Management Systems
                </Typography>
                <Typography sx={{ color: '#64748b', textAlign: 'center', fontSize: 15 }}>
                  Integrate with existing LMS platforms to provide intelligent content recommendations.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                bgcolor: 'white',
                minWidth: 220,
                maxWidth: 300,
                mx: 'auto',
              }}>
                <Box sx={{ bgcolor: '#e6f7ee', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <MessageSquare style={{ width: 28, height: 28, color: '#16a34a' }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1e293b', mb: 1, textAlign: 'center' }}>
                  AI Tutoring Systems
                </Typography>
                <Typography sx={{ color: '#64748b', textAlign: 'center', fontSize: 15 }}>
                  Power intelligent tutoring systems that understand student needs and provide targeted help.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                bgcolor: 'white',
                minWidth: 220,
                maxWidth: 300,
                mx: 'auto',
              }}>
                <Box sx={{ bgcolor: '#f3e8ff', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <Users style={{ width: 28, height: 28, color: '#9333ea' }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1e293b', mb: 1, textAlign: 'center' }}>
                  Classroom Analytics
                </Typography>
                <Typography sx={{ color: '#64748b', textAlign: 'center', fontSize: 15 }}>
                  Provide educators with real-time insights into student understanding and learning gaps.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
                border: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                bgcolor: 'white',
                minWidth: 220,
                maxWidth: 300,
                mx: 'auto',
              }}>
                <Box sx={{ bgcolor: '#fef3c7', width: 56, height: 56, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <CheckCircle style={{ width: 28, height: 28, color: '#d97706' }} />
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1e293b', mb: 1, textAlign: 'center' }}>
                  Assessment Platforms
                </Typography>
                <Typography sx={{ color: '#64748b', textAlign: 'center', fontSize: 15 }}>
                  Enhance assessment tools with intelligent analysis of student responses and misconceptions.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#1e293b', mb: 2 }}>
              Why Choose Semantic Analysis for DSA?
            </Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: '600px', mx: 'auto' }}>
              Transform your educational platform with intelligent understanding of learner needs.
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-end', maxWidth: 500, ml: 'auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, maxWidth: 420 }}>
                  <CheckCircle style={{ width: 32, height: 32, color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b', mb: 0.5 }}>
                      Improved Learning Outcomes
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: 16 }}>
                      Students receive more targeted support that addresses their actual learning needs.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, maxWidth: 420 }}>
                  <CheckCircle style={{ width: 32, height: 32, color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b', mb: 0.5 }}>
                      Reduced Teacher Workload
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: 16 }}>
                      Automated analysis helps educators focus on high-impact teaching activities.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, maxWidth: 420 }}>
                  <CheckCircle style={{ width: 32, height: 32, color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b', mb: 0.5 }}>
                      Personalized Learning at Scale
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: 16 }}>
                      Deliver individualized education experiences to thousands of students simultaneously.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'flex-start', maxWidth: 500, mr: 'auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, maxWidth: 420 }}>
                  <CheckCircle style={{ width: 32, height: 32, color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b', mb: 0.5 }}>
                      Data-Driven Insights
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: 16 }}>
                      Make informed decisions about curriculum and content based on actual learning patterns.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, maxWidth: 420 }}>
                  <CheckCircle style={{ width: 32, height: 32, color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b', mb: 0.5 }}>
                      Early Intervention
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: 16 }}>
                      Identify learning difficulties before they become major obstacles to student success.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, maxWidth: 420 }}>
                  <CheckCircle style={{ width: 32, height: 32, color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e293b', mb: 0.5 }}>
                      Seamless Integration
                    </Typography>
                    <Typography sx={{ color: '#64748b', fontSize: 16 }}>
                      Easy to implement with existing educational technology infrastructure.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      {/*
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
        color: 'white'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
              Ready to Transform DSA Learning?
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, maxWidth: '600px', mx: 'auto', opacity: 0.9 }}>
              Join leading educational institutions and technology companies using semantic analysis 
              to create more effective DSA learning experiences.
            </Typography>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#fff',
                color: '#1976d2',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                '&:hover': {
                  bgcolor: '#f8fafc',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.2s',
              }}
            >
              Get Started
              <ArrowRight style={{ marginLeft: 8, width: 20, height: 20 }} />
            </Button>
          </Box>
        </Container>
      </Box>
      */}

      {/* Floating Up Arrow */}
      <Box sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 2000,
        display: { xs: 'none', sm: 'flex' },
      }}>
        <Box
          component="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            bgcolor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: 56,
            height: 56,
            boxShadow: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
              bgcolor: '#1565c0',
              boxShadow: 8,
              transform: 'translateY(-4px) scale(1.08)',
            },
          }}
          aria-label="Scroll to top"
        >
          <ArrowUpwardIcon sx={{ fontSize: 32 }} />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default LandingPage;