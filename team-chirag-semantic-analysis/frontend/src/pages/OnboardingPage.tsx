import {
    Alert,
    Box,
    Button,
    Chip,
    Container,
    FormControl,
    InputLabel,
    LinearProgress,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    type SelectChangeEvent,
    Step,
    StepLabel,
    Stepper,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface OnboardingData {
  programmingExperience: string;
  knownLanguages: string[];
  dsaExperience: string;
  learningGoals: string[];
  preferredPace: string;
  focusAreas: string[];
}

const PROGRAMMING_EXPERIENCE = [
  { value: 'beginner', label: 'Beginner (0-1 years)' },
  { value: 'intermediate', label: 'Intermediate (1-3 years)' },
  { value: 'advanced', label: 'Advanced (3+ years)' },
  { value: 'expert', label: 'Expert (5+ years)' }
];

const PROGRAMMING_LANGUAGES = [
  'JavaScript', 'Python', 'Java', 'C++', 'C', 'C#', 'Go', 'Rust', 'TypeScript', 'Swift', 'Kotlin'
];

const DSA_EXPERIENCE = [
  { value: 'none', label: 'No prior knowledge' },
  { value: 'basic', label: 'Basic understanding' },
  { value: 'intermediate', label: 'Some practice problems' },
  { value: 'advanced', label: 'Competitive programming experience' }
];

const LEARNING_GOALS = [
  'Job Interview Preparation',
  'Competitive Programming',
  'Academic Learning',
  'Personal Development',
  'Algorithm Optimization',
  'Problem Solving Skills'
];

const LEARNING_PACE = [
  { value: 'slow', label: 'Slow & Steady (1-2 hours/week)' },
  { value: 'moderate', label: 'Moderate (3-5 hours/week)' },
  { value: 'intensive', label: 'Intensive (6+ hours/week)' }
];

const FOCUS_AREAS = [
  'Arrays & Strings',
  'Linked Lists',
  'Stacks & Queues',
  'Trees & Graphs',
  'Dynamic Programming',
  'Recursion & Backtracking',
  'Sorting & Searching',
  'Hash Tables',
  'Greedy Algorithms',
  'System Design'
];

const steps = ['Experience Level', 'Learning Goals', 'Preferences'];

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<OnboardingData>({
    programmingExperience: '',
    knownLanguages: [],
    dsaExperience: '',
    learningGoals: [],
    preferredPace: '',
    focusAreas: []
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleMultiSelectChange = (
    event: SelectChangeEvent<string[]>,
    field: keyof OnboardingData
  ) => {
    const value = event.target.value as string[];
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string>,
    field: keyof OnboardingData
  ) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }));
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 0:
        return formData.programmingExperience !== '' && 
               formData.knownLanguages.length > 0 && 
               formData.dsaExperience !== '';
      case 1:
        return formData.learningGoals.length > 0;
      case 2:
        return formData.preferredPace !== '' && formData.focusAreas.length > 0;
      default:
        return false;
    }
  };

  const submitOnboarding = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, you would send this data to your backend
      // await fetch('/api/onboarding', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   },
      //   body: JSON.stringify(formData)
      // });

      // Mark onboarding as completed in localStorage
      localStorage.setItem('onboardingCompleted', 'true');
      
      // Navigate to main app
      navigate('/chat');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Programming Experience</InputLabel>
              <Select
                value={formData.programmingExperience}
                label="Programming Experience"
                onChange={(e) => handleSelectChange(e, 'programmingExperience')}
              >
                {PROGRAMMING_EXPERIENCE.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Known Programming Languages</InputLabel>
              <Select
                multiple
                value={formData.knownLanguages}
                onChange={(e) => handleMultiSelectChange(e, 'knownLanguages')}
                input={<OutlinedInput label="Known Programming Languages" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" />
                    ))}
                  </Box>
                )}
              >
                {PROGRAMMING_LANGUAGES.map((lang) => (
                  <MenuItem key={lang} value={lang}>
                    {lang}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>DSA Experience Level</InputLabel>
              <Select
                value={formData.dsaExperience}
                label="DSA Experience Level"
                onChange={(e) => handleSelectChange(e, 'dsaExperience')}
              >
                {DSA_EXPERIENCE.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Learning Goals</InputLabel>
              <Select
                multiple
                value={formData.learningGoals}
                onChange={(e) => handleMultiSelectChange(e, 'learningGoals')}
                input={<OutlinedInput label="Learning Goals" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" color="primary" />
                    ))}
                  </Box>
                )}
              >
                {LEARNING_GOALS.map((goal) => (
                  <MenuItem key={goal} value={goal}>
                    {goal}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <FormControl fullWidth>
              <InputLabel>Preferred Learning Pace</InputLabel>
              <Select
                value={formData.preferredPace}
                label="Preferred Learning Pace"
                onChange={(e) => handleSelectChange(e, 'preferredPace')}
              >
                {LEARNING_PACE.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Focus Areas</InputLabel>
              <Select
                multiple
                value={formData.focusAreas}
                onChange={(e) => handleMultiSelectChange(e, 'focusAreas')}
                input={<OutlinedInput label="Focus Areas" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" color="secondary" />
                    ))}
                  </Box>
                )}
              >
                {FOCUS_AREAS.map((area) => (
                  <MenuItem key={area} value={area}>
                    {area}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary.main">
            Welcome to DSA Learn Portal!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Let's personalize your learning experience
          </Typography>
        </Box>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <LinearProgress 
          variant="determinate" 
          value={(activeStep / (steps.length - 1)) * 100} 
          sx={{ mb: 3 }}
        />

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ minHeight: '300px', mb: 4 }}>
          {renderStepContent(activeStep)}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Back
          </Button>
          
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={submitOnboarding}
              disabled={!isStepValid(activeStep) || loading}
            >
              {loading ? 'Saving...' : 'Complete Setup'}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!isStepValid(activeStep)}
            >
              Next
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default OnboardingPage;
