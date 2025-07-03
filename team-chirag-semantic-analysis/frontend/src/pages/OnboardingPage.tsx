import {
    Alert,
    Box,
    Button,
    Checkbox,
    Chip,
    Container,
    FormControl,
    InputLabel,
    LinearProgress,
    ListItemText,
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
import Lottie from 'lottie-react';
import aiLottie from '../assets/ai-lottie.json';

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

// const LEARNING_GOALS = [
//   'Job Interview Preparation',
//   'Competitive Programming',
//   'Academic Learning',
//   'Personal Development',
//   'Algorithm Optimization',
//   'Problem Solving Skills'
// ];

const LEARNING_PACE = [
  { value: 'slow', label: 'Slow & Steady (1-2 hours/week)' },
  { value: 'moderate', label: 'Moderate (3-5 hours/week)' },
  { value: 'intensive', label: 'Intensive (6+ hours/week)' }
];

const MOTIVATIONAL_QUOTES = [
  "Every expert was once a beginner.",
  "Consistency is the key to mastery.",
  "Learning DSA is a marathon, not a sprint!",
  "Small steps every day lead to big results.",
  "Embrace challenges—they make you stronger!"
];

function getRandomQuote() {
  return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
}

// Add subtopics to onboarding state
type OnboardingDataWithSubtopics = OnboardingData & {
  subtopics: { [topic: string]: string[] }
};

// Interface for graph data structure
interface GraphNode {
  id: string;
  name: string;
  type: 'topic' | 'subtopic';
  level?: string;
  description?: string;
  parent_topic?: string;
  keywords?: string[];
}

interface GraphData {
  nodes: GraphNode[];
}

interface UserProfileNode {
  id: string;
  name: string;
  type: 'topic' | 'subtopic';
}

interface TopicWithSubtopics {
  id: string;
  name: string;
  type: 'topic';
  subtopics: UserProfileNode[];
}

interface UserProfile {
  userInfo: {
    name: string;
    email: string;
    programmingExperience: string;
    knownLanguages: string[];
    dsaExperience: string;
    preferredPace: string;
  };
  knownConcepts: {
    topics: TopicWithSubtopics[];
    totalTopics: number;
    totalSubtopics: number;
  };
  createdAt: string;
}

// Function to load graph data from local file
const loadGraphData = async (): Promise<GraphData> => {
  try {
    // Load from the static graph data file in public directory
    const response = await fetch('/graph_data.json');
    if (!response.ok) {
      throw new Error('Failed to load graph data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading graph data:', error);
    // Fallback: return empty structure with sample data for testing
    return { 
      nodes: [
        { id: 'array', name: 'Array', type: 'topic' },
        { id: 'linked_list', name: 'Linked List', type: 'topic' },
        { id: 'stack', name: 'Stack', type: 'topic' },
        { id: 'queue', name: 'Queue', type: 'topic' },
        { id: 'tree', name: 'Tree', type: 'topic' },
        { id: 'graph', name: 'Graph', type: 'topic' },
        { id: 'dynamic_programming', name: 'Dynamic Programming', type: 'topic' },
        { id: 'recursion', name: 'Recursion', type: 'topic' },
        { id: 'sorting', name: 'Sorting', type: 'topic' },
        { id: 'searching', name: 'Searching', type: 'topic' },
        { id: 'hash_table', name: 'Hash Table', type: 'topic' },
        { id: 'greedy', name: 'Greedy', type: 'topic' }
      ] 
    };
  }
};

// Function to match user selections to graph nodes and organize by topics
const matchSelectionsToNodes = (
  focusAreas: string[],
  subtopics: { [topic: string]: string[] },
  graphData: GraphData
): { topics: TopicWithSubtopics[], totalTopics: number, totalSubtopics: number } => {
  const organizedTopics: TopicWithSubtopics[] = [];
  let totalSubtopics = 0;

  // Create a case-insensitive lookup map for faster searching
  const nodeMap = new Map<string, GraphNode>();
  graphData.nodes.forEach(node => {
    nodeMap.set(node.name.toLowerCase(), node);
  });

  // Process each focus area (topic)
  focusAreas.forEach(area => {
    const normalizedArea = area.toLowerCase();
    
    // Try exact match first
    let matchedTopicNode = nodeMap.get(normalizedArea);
    
    // If no exact match, try partial matching
    if (!matchedTopicNode) {
      for (const [nodeName, node] of nodeMap.entries()) {
        if (nodeName.includes(normalizedArea) || normalizedArea.includes(nodeName)) {
          matchedTopicNode = node;
          break;
        }
      }
    }
    
    // Special mappings for common variations
    if (!matchedTopicNode) {
      const mappings: { [key: string]: string } = {
        'arrays & strings': 'array',
        'stacks & queues': 'stack',
        'trees & graphs': 'tree',
        'linked lists': 'linked list',
        'hash tables': 'hash table',
        'dynamic programming': 'dynamic programming',
        'recursion & backtracking': 'recursion',
        'sorting & searching': 'sorting',
        'greedy algorithms': 'greedy',
        'system design': 'design'
      };
      
      const mappedName = mappings[normalizedArea];
      if (mappedName) {
        matchedTopicNode = nodeMap.get(mappedName);
      }
    }

    if (matchedTopicNode && matchedTopicNode.type === 'topic') {
      // Find subtopics for this topic
      const topicSubtopics: UserProfileNode[] = [];
      const selectedSubtopics = subtopics[area] || [];
      
      selectedSubtopics.forEach(sub => {
        const normalizedSub = sub.toLowerCase();
        const matchedSubNode = nodeMap.get(normalizedSub);
        
        if (matchedSubNode && matchedSubNode.type === 'subtopic') {
          topicSubtopics.push({
            id: matchedSubNode.id,
            name: matchedSubNode.name,
            type: matchedSubNode.type
          });
          totalSubtopics++;
        }
      });

      // Add the topic with its subtopics
      organizedTopics.push({
        id: matchedTopicNode.id,
        name: matchedTopicNode.name,
        type: matchedTopicNode.type,
        subtopics: topicSubtopics
      });
    }
  });

  return { 
    topics: organizedTopics, 
    totalTopics: organizedTopics.length, 
    totalSubtopics 
  };
};

// Function to generate user profile
const generateUserProfile = async (formData: OnboardingDataWithSubtopics): Promise<UserProfile> => {
  const graphData = await loadGraphData();
  const { topics, totalTopics, totalSubtopics } = matchSelectionsToNodes(
    formData.focusAreas,
    formData.subtopics,
    graphData
  );

  return {
    userInfo: {
      name: localStorage.getItem('signupName') || '',
      email: localStorage.getItem('signupEmail') || '',
      programmingExperience: formData.programmingExperience,
      knownLanguages: formData.knownLanguages,
      dsaExperience: formData.dsaExperience,
      preferredPace: formData.preferredPace,
    },
    knownConcepts: {
      topics: topics,
      totalTopics: totalTopics,
      totalSubtopics: totalSubtopics
    },
    createdAt: new Date().toISOString(),
  };
};

// Function to save user profile
const saveUserProfile = async (userProfile: UserProfile): Promise<void> => {
  try {
    // Save to localStorage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    
    // Log the profile structure for debugging
    console.log('User profile generated:', userProfile);
    console.log(`Total topics: ${userProfile.knownConcepts.totalTopics}`);
    console.log(`Total subtopics: ${userProfile.knownConcepts.totalSubtopics}`);
    
    // Also create a downloadable JSON file for the user
    const dataStr = JSON.stringify(userProfile, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    // Use timestamp for unique filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const exportFileDefaultName = `user_profile_${timestamp}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    console.log('User profile saved successfully:', userProfile);
  } catch (error) {
    console.error('Error saving user profile:', error);
    // Fallback: save to localStorage only
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    throw error;
  }
};

const steps = ['Experience Level', 'Preferences', 'Subtopics/Deep Focus'];

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [availableTopics, setAvailableTopics] = useState<string[]>([]);
  const [dynamicSubtopicsMap, setDynamicSubtopicsMap] = useState<{ [topic: string]: string[] }>({});
  
  const [formData, setFormData] = useState<OnboardingDataWithSubtopics>({
    programmingExperience: '',
    knownLanguages: [],
    dsaExperience: '',
    learningGoals: [],
    preferredPace: '',
    focusAreas: [],
    subtopics: {},
  });

  const userName = localStorage.getItem('signupName');

  // Load graph data and initialize topics on component mount
  React.useEffect(() => {
    const initializeGraphData = async () => {
      try {
        const data = await loadGraphData();
        setGraphData(data);
        
        // Extract available topics
        const topics = extractTopicsFromGraphData(data);
        setAvailableTopics(topics);
        
      } catch (error) {
        console.error('Failed to load graph data:', error);
        setError('Failed to load course data. Using fallback options.');
        // Set fallback topics if graph data fails to load
        setAvailableTopics([
          'Array', 'Linked List', 'Stack', 'Queue', 'Tree', 'Graph', 
          'Dynamic Programming', 'Recursion', 'Sorting', 'Searching', 
          'Hash Table', 'Greedy'
        ]);
      }
    };

    initializeGraphData();
  }, []);

  // Update subtopics map when focus areas change
  React.useEffect(() => {
    if (graphData && formData.focusAreas.length > 0) {
      const subtopicsMap = createSubtopicsMap(formData.focusAreas, graphData);
      setDynamicSubtopicsMap(subtopicsMap);
    }
  }, [formData.focusAreas, graphData]);

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

  const handleSubtopicChange = (topic: string, selected: string[]) => {
    setFormData(prev => ({
      ...prev,
      subtopics: { ...prev.subtopics, [topic]: selected }
    }));
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 0:
        return formData.programmingExperience !== '' && 
               formData.knownLanguages.length > 0 && 
               formData.dsaExperience !== '';
      case 1:
        return formData.preferredPace !== '' && formData.focusAreas.length > 0;
      case 2:
        // Subtopics step is optional
        return true;
      default:
        return false;
    }
  };

  const submitOnboarding = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Generate user profile with graph data matching
      const userProfile = await generateUserProfile(formData);
      
      // Save the user profile
      await saveUserProfile(userProfile);

      // Mark onboarding as completed in localStorage
      localStorage.setItem('onboardingCompleted', 'true');
      
      // Save profile data for profile page (legacy format for compatibility)
      localStorage.setItem('userProfile', JSON.stringify({ 
        ...formData, 
        email: localStorage.getItem('signupEmail'), 
        name: localStorage.getItem('signupName') 
      }));

      // Navigate to main app
      navigate('/chat');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while saving your profile');
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
                sx={{
                  '& .MuiSelect-select': {
                    backgroundColor: formData.programmingExperience ? '#e3f2fd' : 'transparent',
                    fontWeight: formData.programmingExperience ? 600 : 400
                  }
                }}
              >
                {PROGRAMMING_EXPERIENCE.map((option) => (
                  <MenuItem 
                    key={option.value} 
                    value={option.value}
                    sx={{
                      backgroundColor: formData.programmingExperience === option.value ? '#e3f2fd' : 'transparent',
                      fontWeight: formData.programmingExperience === option.value ? 700 : 400,
                      '&:hover': {
                        backgroundColor: formData.programmingExperience === option.value ? '#bbdefb' : '#f5f5f5'
                      }
                    }}
                  >
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
                      <Chip key={value} label={value} size="small" color="primary" />
                    ))}
                  </Box>
                )}
                sx={{
                  '& .MuiSelect-select': {
                    backgroundColor: formData.knownLanguages.length > 0 ? '#e8f5e8' : 'transparent',
                    fontWeight: formData.knownLanguages.length > 0 ? 600 : 400
                  }
                }}
              >
                {PROGRAMMING_LANGUAGES.map((lang) => (
                  <MenuItem 
                    key={lang} 
                    value={lang}
                    sx={{
                      backgroundColor: formData.knownLanguages.includes(lang) ? '#e8f5e8' : 'transparent',
                      '&:hover': {
                        backgroundColor: formData.knownLanguages.includes(lang) ? '#c8e6c9' : '#f5f5f5'
                      }
                    }}
                  >
                    <Checkbox 
                      checked={formData.knownLanguages.includes(lang)}
                      sx={{ color: formData.knownLanguages.includes(lang) ? '#2e7d32' : '#ccc' }}
                    />
                    <ListItemText primary={lang} />
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
                sx={{
                  '& .MuiSelect-select': {
                    backgroundColor: formData.dsaExperience ? '#fff3e0' : 'transparent',
                    fontWeight: formData.dsaExperience ? 600 : 400
                  }
                }}
              >
                {DSA_EXPERIENCE.map((option) => (
                  <MenuItem 
                    key={option.value} 
                    value={option.value}
                    sx={{
                      backgroundColor: formData.dsaExperience === option.value ? '#fff3e0' : 'transparent',
                      fontWeight: formData.dsaExperience === option.value ? 700 : 400,
                      '&:hover': {
                        backgroundColor: formData.dsaExperience === option.value ? '#ffe0b2' : '#f5f5f5'
                      }
                    }}
                  >
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
              <InputLabel>Preferred Learning Pace</InputLabel>
              <Select
                value={formData.preferredPace}
                label="Preferred Learning Pace"
                onChange={(e) => handleSelectChange(e, 'preferredPace')}
                sx={{
                  '& .MuiSelect-select': {
                    backgroundColor: formData.preferredPace ? '#e0f2f1' : 'transparent',
                    fontWeight: formData.preferredPace ? 600 : 400
                  }
                }}
              >
                {LEARNING_PACE.map((option) => (
                  <MenuItem 
                    key={option.value} 
                    value={option.value}
                    sx={{
                      backgroundColor: formData.preferredPace === option.value ? '#e0f2f1' : 'transparent',
                      fontWeight: formData.preferredPace === option.value ? 700 : 400,
                      '&:hover': {
                        backgroundColor: formData.preferredPace === option.value ? '#b2dfdb' : '#f5f5f5'
                      }
                    }}
                  >
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
                disabled={availableTopics.length === 0}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" color="secondary" />
                    ))}
                  </Box>
                )}
                sx={{
                  '& .MuiSelect-select': {
                    backgroundColor: formData.focusAreas.length > 0 ? '#fce4ec' : 'transparent',
                    fontWeight: formData.focusAreas.length > 0 ? 600 : 400
                  }
                }}
              >
                {availableTopics.length === 0 ? (
                  <MenuItem disabled>
                    <Typography>Loading topics...</Typography>
                  </MenuItem>
                ) : (
                  availableTopics.map((area) => (
                    <MenuItem 
                      key={area} 
                      value={area}
                      sx={{
                        backgroundColor: formData.focusAreas.includes(area) ? '#fce4ec' : 'transparent',
                        '&:hover': {
                          backgroundColor: formData.focusAreas.includes(area) ? '#f8bbd9' : '#f5f5f5'
                        }
                      }}
                    >
                      <Checkbox 
                        checked={formData.focusAreas.includes(area)}
                        sx={{ color: formData.focusAreas.includes(area) ? '#c2185b' : '#ccc' }}
                      />
                      <ListItemText primary={area} />
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Box>
        );

      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Select the subtopics you know for each focus area:
            </Typography>
            {formData.focusAreas.length === 0 ? (
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                Please select focus areas in the previous step to see available subtopics.
              </Typography>
            ) : (
              formData.focusAreas.map(topic => {
                const subtopics = dynamicSubtopicsMap[topic] || [];
                return (
                  <FormControl fullWidth key={topic} sx={{ mb: 2 }}>
                    <InputLabel>{topic} Subtopics</InputLabel>
                    <Select
                      multiple
                      value={formData.subtopics[topic] || []}
                      onChange={e => handleSubtopicChange(topic, e.target.value as string[])}
                      input={<OutlinedInput label={`${topic} Subtopics`} />}
                      disabled={subtopics.length === 0}
                      renderValue={selected => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {(selected as string[]).map(value => (
                            <Chip key={value} label={value} size="small" color="primary" />
                          ))}
                        </Box>
                      )}
                    >
                      {subtopics.length === 0 ? (
                        <MenuItem disabled>
                          <Typography>No subtopics available for {topic}</Typography>
                        </MenuItem>
                      ) : (
                        subtopics.map(sub => (
                          <MenuItem key={sub} value={sub}>
                            <Checkbox checked={formData.subtopics[topic]?.includes(sub) || false} />
                            <ListItemText primary={sub} />
                          </MenuItem>
                        ))
                      )}
                    </Select>
                  </FormControl>
                );
              })
            )}
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(120deg, #e3f0ff 0%, #f8fbff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4,
    }}>
      <Container maxWidth="sm" sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        py: 4,
      }}>
        {/* Hero Section */}
        <Paper elevation={4} sx={{ p: { xs: 2, sm: 4 }, width: '100%', mb: 3, borderRadius: 3, textAlign: 'center', background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Box sx={{ width: { xs: 120, sm: 180 }, mx: 'auto', mb: { xs: 2, sm: 0 } }}>
              <Lottie animationData={aiLottie} loop={true} />
            </Box>
            <Box sx={{ flex: 1, ml: { sm: 3 } }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Welcome{userName ? `, ${userName}` : ''} to DSA Learn Portal!
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Let's personalize your learning journey.
              </Typography>
            </Box>
          </Box>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ my: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* Onboarding Form Steps */}
          <Box sx={{ minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {renderStepContent(activeStep)}
          </Box>
          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">Back</Button>
            {activeStep < steps.length - 1 ? (
              <Button onClick={handleNext} variant="contained" disabled={!isStepValid(activeStep)}>
                Next
              </Button>
            ) : (
              <Button onClick={submitOnboarding} variant="contained" disabled={!isStepValid(activeStep) || loading}>
                {loading ? <LinearProgress sx={{ width: 80 }} /> : 'Finish'}
              </Button>
            )}
          </Box>
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
        </Paper>
        {/* Motivational Quote */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontStyle: 'italic', textAlign: 'center' }}>
          {getRandomQuote()}
        </Typography>
      </Container>
    </Box>
  );
};

export default OnboardingPage;

// Function to extract unique topics from graph data
const extractTopicsFromGraphData = (graphData: GraphData): string[] => {
  const topics = graphData.nodes
    .filter(node => node.type === 'topic')
    .map(node => node.name)
    .sort();
  return [...new Set(topics)]; // Remove duplicates and sort
};

// Function to extract subtopics for a given topic from graph data
const extractSubtopicsForTopic = (topicName: string, graphData: GraphData): string[] => {
  // Find the topic node first
  const topicNode = graphData.nodes.find(node => 
    node.type === 'topic' && node.name.toLowerCase() === topicName.toLowerCase()
  );
  
  if (!topicNode) return [];
  
  // Find all subtopics that belong to this topic
  const subtopics = graphData.nodes
    .filter(node => 
      node.type === 'subtopic' && 
      node.parent_topic === topicNode.id
    )
    .map(node => node.name)
    .sort();
    
  return [...new Set(subtopics)]; // Remove duplicates and sort
};

// Function to create dynamic subtopics map from graph data
const createSubtopicsMap = (focusAreas: string[], graphData: GraphData): { [topic: string]: string[] } => {
  const subtopicsMap: { [topic: string]: string[] } = {};
  
  focusAreas.forEach(topic => {
    subtopicsMap[topic] = extractSubtopicsForTopic(topic, graphData);
  });
  
  return subtopicsMap;
};
