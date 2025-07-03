import React, { useState, useEffect } from 'react';
import { UserProfile } from './UserProfile';
import { ProgressChart } from './ProgressChart';
import { TopicCard } from './TopicCard';
import { RecommendedTopics } from './RecommendedTopics';
import { KnownTopics } from './KnownTopics';
import { 
  Code, 
  BookOpen, 
  TrendingUp, 
  LogOut,
  Menu,
  X,
  Search
} from 'lucide-react';
import { User, Topic, AIRecommendation, ExamQuestion, ProgressData } from '../types';
import { CurrentTopics } from './CurrentTopics';
import { Recommendations } from './Recommendations';
import { Progress } from './Progress';
import axios from 'axios';
import SelectKnownTopics from '../pages/SelectKnownTopics';
import { ExamPage } from './ExamPage';
import { getRandomQuizQuestions, submitExamResult, refreshRecommendations, startLearningTopic } from '../services/api';
import { TutorialView } from './TutorialView';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

type Tab = 'overview' | 'topics' | 'progress' | 'app-description';

export const Dashboard: React.FC<DashboardProps> = ({ 
  user, 
  onLogout
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [localUser, setLocalUser] = useState<User>(user);
  const [showSelectKnown, setShowSelectKnown] = useState(false);
  const [examTopic, setExamTopic] = useState<Topic | null>(null);
  const [examInProgress, setExamInProgress] = useState(false);
  const [examQuestions, setExamQuestions] = useState<ExamQuestion[] | null>(null);
  const [userTopics, setUserTopics] = useState<{ topicName: string; status: string; progress: number }[]>([]);
  const [tutorialsTopic, setTutorialsTopic] = useState<Topic | null>(null);
  const [tutorialsInProgress, setTutorialsInProgress] = useState(false);
  const [recommendedTopics, setRecommendedTopics] = useState<AIRecommendation[]>([]);
  const [recommendationsLoading, setRecommendationsLoading] = useState(false);
  const [examLoading, setExamLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const startExam = (topic: Topic, questions: ExamQuestion[]) => {
    setExamTopic(topic);
    setExamQuestions(questions);
    setExamInProgress(true);
    setExamLoading(false);
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://dsa-lpr.onrender.com/api/topics', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTopics(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load topics:', err);
        setError('Failed to load topics');
        setLoading(false);
      }
    };
    fetchTopics();
  }, [user]);

  useEffect(() => {
    setLocalUser(user);
  }, [user]);

  useEffect(() => {
    const fetchUserTopics = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://dsa-lpr.onrender.com/api/user-topics/my', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserTopics(response.data);
      } catch (err) {
        console.error('Failed to load user topics:', err);
        // Optionally handle error
      }
    };
    fetchUserTopics();
  }, []);

  // Merge userTopics status/progress into topics for display
  const currentTopics = userTopics
    .filter(ut => ut.status === 'in-progress')
    .map(ut => {
      const topic = topics.find(
        t => t.name.trim().toLowerCase() === ut.topicName.trim().toLowerCase()
      );
      return topic ? { ...topic, ...ut } : null;
    })
    .filter((t): t is Topic & { topicName: string; status: string; progress: number } => t !== null);

  const knownTopics = userTopics
    .filter(ut => ut.status === 'completed')
    .map(ut => {
      const topic = topics.find(
        t => t.name.trim().toLowerCase() === ut.topicName.trim().toLowerCase()
      );
      return topic ? { ...topic, ...ut } : null;
    })
    .filter((t): t is Topic & { topicName: string; status: string; progress: number } => t !== null);

  // Debug logs for troubleshooting Current Topics
  console.log('userTopics:', userTopics);
  console.log('topics:', topics);
  console.log('currentTopics:', currentTopics);
  console.log('knownTopics (completed):', knownTopics.map(t => t.name));
  console.log('knownTopics names array:', knownTopics.map(t => t.name));

  // For recommendations - use backend recommendation service
  useEffect(() => {
    const fetchRecommendations = async () => {
      console.log('Fetching recommendations...');
      console.log('Current user email:', localUser.email);
      console.log('userTopics:', userTopics);
      console.log('topics:', topics);
      
      setRecommendationsLoading(true);
      try {
        const completedTopicNames = userTopics
          .filter(t => t.status === 'completed')
          .map(t => t.topicName);

        console.log('Completed topic names for user:', localUser.email, ':', completedTopicNames);

        // If no completed topics, recommend only the 'Arrays' topic (if it exists and is not in progress)
        if (completedTopicNames.length === 0) {
          const arraysTopic = topics.find(t => t.name.trim().toLowerCase() === 'arrays');
          const arraysInProgress = userTopics.some(
            ut => ut.topicName.trim().toLowerCase() === 'arrays' && ut.status === 'in-progress'
          );
          if (arraysTopic && !arraysInProgress) {
            setRecommendedTopics([{
              topicName: arraysTopic.name,
              reason: 'Start your DSA journey with Arrays!',
              confidence: 100,
              estimatedDifficulty: 3,
              prereqsMet: true,
              priority: 'high'
            }]);
          } else {
            setRecommendedTopics([]);
          }
          return;
        }

        const response = await refreshRecommendations(localUser.email, completedTopicNames);

        console.log('Backend response for user:', localUser.email, ':', response);

        // Convert backend recommendations to AIRecommendation format
        const backendRecommendations = response.recommendations;
        console.log('Backend recommendations for user:', localUser.email, ':', backendRecommendations);
        
        if (!backendRecommendations || backendRecommendations.length === 0) {
          console.log('No recommendations returned from backend for user:', localUser.email);
          setRecommendedTopics([]);
          return;
        }

        const aiRecommendations: AIRecommendation[] = backendRecommendations.map((rec: { topicId?: string; name: string; confidence?: number; difficulty?: string; priority?: string }) => ({
          topicId: rec.topicId || rec.name,
          topicName: rec.name,
          reason: `Based on your completion of ${completedTopicNames.join(', ')}`,
          confidence: Math.round((rec.confidence || 0.8) * 100),
          estimatedDifficulty: rec.difficulty === 'beginner' ? 3 : rec.difficulty === 'intermediate' ? 6 : 9,
          prereqsMet: true, // Backend ensures prerequisites are met
          priority: rec.priority || 'medium'
        }));

        console.log('AI recommendations for user:', localUser.email, ':', aiRecommendations);
        setRecommendedTopics(aiRecommendations);
      } catch (err) {
        console.error('Error fetching recommendations for user:', localUser.email, ':', err);
        // Fallback to empty recommendations
        setRecommendedTopics([]);
      } finally {
        setRecommendationsLoading(false);
      }
    };

    fetchRecommendations();
  }, [userTopics, topics, localUser.email]);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'topics', label: 'Topics' },
    { id: 'progress', label: 'Progress' },
    { id: 'app-description', label: 'App Description' },
  ];

  const handleAddKnownTopics = async (selectedTopicNames: string[]) => {
    const selectedTopic = topics.find(topic => topic.name === selectedTopicNames[0]);
    if (selectedTopic) {
      try {
        const questions = await getRandomQuizQuestions(selectedTopic.name, 10);
        setExamQuestions(questions);
        setExamTopic(selectedTopic);
        setExamInProgress(true);
      } catch (err) {
        console.error('Failed to load quiz questions:', err);
        alert('Failed to load quiz questions.');
      }
    }
    setShowSelectKnown(false);
  };

  // Update handleExamComplete to accept all fields
  const handleExamComplete = async ({ score, totalQuestions, correctAnswers, timeTaken }: {
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    timeTaken: number;
  }) => {
    if (!examTopic) return;
    try {
      await submitExamResult({
        topicName: examTopic.name,
        score,
        totalQuestions,
        correctAnswers,
        timeTaken
      });
      // Refetch user topics to get the latest progress
      const token = localStorage.getItem('token');
      const response = await axios.get('https://dsa-lpr.onrender.com/api/user-topics/my', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserTopics(response.data);
    } catch (err: unknown) {
      console.error('Exam submission error details:', err);
      const axiosError = err as { response?: { data?: unknown; status?: number } };
      console.error('Error response:', axiosError?.response?.data);
      console.error('Error status:', axiosError?.response?.status);
      
      // Try fallback to original endpoint if update endpoint fails
      try {
        console.log('Trying fallback to original exam-results endpoint...');
        const token = localStorage.getItem('token');
        await axios.post('https://dsa-lpr.onrender.com/api/exam-results', {
          topicName: examTopic.name,
          score,
          totalQuestions,
          correctAnswers,
          timeTaken
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Refetch user topics
        const response = await axios.get('https://dsa-lpr.onrender.com/api/user-topics/my', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserTopics(response.data);
      } catch (fallbackErr) {
        console.error('Fallback also failed:', fallbackErr);
        alert('Failed to save exam result. Please try again.');
      }
    }
    setExamInProgress(false);
    setExamTopic(null);
  };

  const handleExamBack = () => {
    setExamInProgress(false);
    setExamTopic(null);
  };

  const handleStartTutorials = (topicName: string) => {
    const topic = topics.find(t => t.name === topicName);
    if (topic) {
      setTutorialsTopic(topic);
      setTutorialsInProgress(true);
    }
  };

  const handleStartLearning = async (topicName: string) => {
    const topic = topics.find(t => t.name === topicName);
    if (topic) {
      try {
        // Add topic to userTopics collection with status "in-progress" and progress 0
        await startLearningTopic(topicName);
        
        // Refetch user topics to get the updated list
        const token = localStorage.getItem('token');
        const response = await axios.get('https://dsa-lpr.onrender.com/api/user-topics/my', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserTopics(response.data);
        
        // Switch to current topics tab
        setActiveTab('topics');
        
        // Show success message
        alert(`Started learning ${topicName}! You can now find it in your current topics.`);
      } catch (error) {
        console.error('Error starting topic:', error);
        alert('Failed to start learning this topic. Please try again.');
      }
    }
  };

  const handleTutorialsBack = () => {
    setTutorialsInProgress(false);
    setTutorialsTopic(null);
  };

  const handleShowPrereqs = (topic: Topic) => {
    // For now, just show an alert with prerequisites
    if (topic.prerequisites && topic.prerequisites.length > 0) {
      alert(`Prerequisites for ${topic.name}: ${topic.prerequisites.join(', ')}`);
    } else {
      alert(`No prerequisites required for ${topic.name}`);
    }
  };

  const handleTakeExam = async (topicName: string) => {
    console.log('handleTakeExam triggered for topic:', topicName);
    const topic = topics.find(t => t.name === topicName);
    if (topic) {
      setExamLoading(true);
      try {
        const questions = await getRandomQuizQuestions(topic.name, 10);
        startExam(topic, questions);
      } catch (err) {
        console.error('Error fetching exam questions:', err);
        alert('Failed to load quiz questions.');
        setExamLoading(false);
      }
    }
  };

  // Calculate locked topics count (topics not in completed, current, or recommended)
  const lockedTopicsCount = topics.length - knownTopics.length - currentTopics.length - recommendedTopics.length;

  // Create progress data for the Progress component using both completed and current topics
  const completedTopicsProgressData: ProgressData[] = [
    ...knownTopics.map(t => ({
      topicName: t.topicName,
      score: t.progress ?? 0,
      completed: t.status === 'completed',
      lastAttempted: t.lastAttempted || '',
      difficulty: t.difficulty
    })),
    ...currentTopics.map(t => ({
      topicName: t.topicName,
      score: t.progress ?? 0,
      completed: false, // Not completed, but in progress
      lastAttempted: t.lastAttempted || '',
      difficulty: t.difficulty
    }))
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Exam Loading Modal */}
      {examLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg font-medium text-gray-800">Preparing your exam...</p>
          </div>
        </div>
      )}

      {/* Exam Modal */}
      {examInProgress && examTopic && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full relative" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <ExamPage 
              topic={examTopic} 
              onBack={handleExamBack} 
              onComplete={handleExamComplete}
              questions={examQuestions || []}
            />
          </div>
        </div>
      )}

      {/* Tutorials Modal */}
      {tutorialsInProgress && tutorialsTopic && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl w-full relative" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <TutorialView 
              topic={tutorialsTopic} 
              onBack={handleTutorialsBack}
            />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">DSA AI Tutor</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Tab)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input 
                  type="text" 
                  placeholder="Search topics..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') setActiveTab('topics'); }}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              
              <button 
                onClick={onLogout}
                className="p-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>

              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id as Tab); setIsMenuOpen(false); }}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <>
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Welcome Section */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">Welcome back, {localUser.name}!</h1>
                    <p className="text-blue-100">Ready to continue your DSA learning journey?</p>
                  </div>
                  <div className="hidden md:block text-right max-w-xs">
                    <p className="italic text-lg font-semibold opacity-90">“Mastering DSA opens the door to opportunities you haven't imagined yet.”</p>
                  </div>
                </div>
              </div>

              {/* User Profile and Progress */}
              <div className="grid lg:grid-cols-2 gap-8 items-stretch min-h-[350px]">
                <div className="lg:col-span-1 h-full">
                  <UserProfile 
                    user={localUser} 
                    onProfileImageChange={(imageUrl) => setLocalUser(prev => ({ ...prev, profileImage: imageUrl }))}
                    completedCount={knownTopics.length}
                    currentCount={currentTopics.length}
                    recommendedCount={recommendedTopics.length}
                    totalTopics={topics.length}
                    lockedCount={lockedTopicsCount}
                  />
                </div>
                <div className="lg:col-span-1 h-full">
                  <ProgressChart data={completedTopicsProgressData} />
                </div>
              </div>

              {/* Recommended Topics */}
              <RecommendedTopics 
                topics={topics}
                recommendations={recommendedTopics}
                loading={recommendationsLoading}
                onStartTopic={handleStartTutorials}
              />

              {/* Known Topics */}
              <KnownTopics 
                topics={knownTopics}
                onAddKnownTopics={() => setShowSelectKnown(true)}
                onReview={handleStartTutorials}
                onTakeExam={handleTakeExam}
              />
              {knownTopics.length === 0 && (
                <div className="text-red-500 mt-2">No known topics found.</div>
              )}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Topics</h2>
                <CurrentTopics topics={currentTopics} onStartTopic={handleStartTutorials} onTakeExam={handleTakeExam} />
              </div>
              {showSelectKnown && !examInProgress && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                      onClick={() => setShowSelectKnown(false)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <SelectKnownTopics onContinue={handleAddKnownTopics} />
                  </div>
                </div>
              )}

              <Recommendations 
                user={localUser} 
                knownTopics={knownTopics.map(t => t.name)} 
                recommendedTopics={recommendedTopics.map(rec => {
                  const match = topics.find(t => t.name.trim().toLowerCase() === rec.topicName.trim().toLowerCase());
                  const userTopic = userTopics.find(ut => ut.topicName.trim().toLowerCase() === rec.topicName.trim().toLowerCase());
                  return match ? { ...match, ...userTopic, isRecommended: true } : null;
                }).filter(Boolean) as Topic[]} 
                onStartTopic={handleStartLearning} 
              />
            </div>
          )}

          {activeTab === 'topics' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">All DSA Topics</h1>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  <span className="text-lg font-medium text-gray-700">{topics.length} Topics Available</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics
                  .filter(topic =>
                    topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (topic.description && topic.description.toLowerCase().includes(searchQuery.toLowerCase()))
                  )
                  .map(topic => {
                    const userTopic = userTopics.find(ut => ut.topicName.trim().toLowerCase() === topic.name.trim().toLowerCase());
                    const mergedTopic = userTopic ? { ...topic, ...userTopic } as Topic : topic;
                    const isCompleted = knownTopics.some(t => t.name === topic.name);
                    const isInProgress = !isCompleted && currentTopics.some(t => t.name === topic.name);
                    const isRecommended = !isCompleted && !isInProgress && recommendedTopics.some(rec => rec.topicName === topic.name);
                    const isLocked = !isCompleted && !isInProgress && !isRecommended;
                    return (
                      <TopicCard
                        key={topic.name}
                        topic={mergedTopic}
                        isCompleted={isCompleted}
                        isInProgress={isInProgress}
                        isReview={isCompleted}
                        isRecommended={isRecommended}
                        isLocked={isLocked}
                        onStartTopic={isLocked ? () => handleShowPrereqs(topic) : handleStartTutorials}
                        onTakeExam={handleTakeExam}
                      />
                    );
                  })}
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Learning Progress</h1>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-medium text-gray-700">Detailed Analytics</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-stretch min-h-[350px]">
                <div className="lg:col-span-1 h-full">
                  <UserProfile 
                    user={localUser} 
                    onProfileImageChange={(imageUrl) => setLocalUser(prev => ({ ...prev, profileImage: imageUrl }))}
                    completedCount={knownTopics.length}
                    currentCount={currentTopics.length}
                    recommendedCount={recommendedTopics.length}
                    totalTopics={topics.length}
                    lockedCount={lockedTopicsCount}
                  />
                </div>
                <div className="lg:col-span-1 h-full">
                  <ProgressChart data={completedTopicsProgressData} />
                </div>
              </div>

              <Progress data={completedTopicsProgressData} />

              {/* Current Topics from user progress */}
              {currentTopics.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Topics (from your progress)</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentTopics.map(topic => (
                      <div key={topic.topicName} className="p-4 bg-white rounded shadow">
                        <div className="font-semibold">{topic.topicName}</div>
                        <div>Status: {topic.status}</div>
                        <div>Progress: {topic.progress}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Topics from user progress */}
              {knownTopics.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Completed Topics (from your progress)</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {knownTopics.map(topic => (
                      <div key={topic.topicName} className="p-4 bg-green-50 rounded shadow">
                        <div className="font-semibold">{topic.topicName}</div>
                        <div>Status: {topic.status}</div>
                        <div>Progress: {topic.progress}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'app-description' && (
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 rounded-2xl shadow-2xl p-12 text-gray-900 space-y-10 font-sans border border-blue-200">
              <h1 className="text-4xl font-extrabold mb-6 text-blue-800 tracking-tight drop-shadow-lg">About This Platform</h1>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-purple-700 border-l-4 border-purple-400 pl-3">Platform Overview</h2>
                <p className="text-lg leading-relaxed">
                  This DSA learning platform is designed to help you master Data Structures and Algorithms through topic-wise progress tracking, quizzes, recommendations, and interactive tutorials. The platform adapts to your learning journey, providing personalized recommendations and progress analytics.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-blue-700 border-l-4 border-blue-400 pl-3">Progress Tracking</h2>
                <p className="text-lg leading-relaxed">
                  Your progress is tracked for each topic. You can see your scores, completion status, and how you advance through the curriculum. The dashboard visualizes your highest, average, and lowest scores for completed topics.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-green-700 border-l-4 border-green-400 pl-3">Topic Completion Criteria</h2>
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold text-green-800">A topic is marked as completed only when you score 70 or above in its quiz or exam.</span> If you retake an exam and your score drops below 70, the topic will move back to your current topics for further study. If your score increases, your progress and badges are updated accordingly.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-pink-700 border-l-4 border-pink-400 pl-3">Exam Score & Retake Logic</h2>
                <ul className="list-disc ml-8 space-y-2 text-lg">
                  <li>Each topic has an associated quiz or exam.</li>
                  <li>You can retake exams to improve your score and badge.</li>
                  <li>If your new score is higher, your progress and badge are upgraded.</li>
                  <li>If your new score is lower and falls below 70, the topic is no longer considered completed.</li>
                  <li>Exam retake is encouraged for mastery and higher badges.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-yellow-700 border-l-4 border-yellow-400 pl-3">Badges & User Levels</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/80 rounded-lg p-6 shadow-inner border border-yellow-200">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">User Levels</h3>
                    <ul className="list-disc ml-8 space-y-1 text-base">
                      <li><span className="font-bold text-gray-700 bg-gradient-to-r from-gray-400 to-gray-600 px-2 py-1 rounded">Beginner</span>: 0-9 topics completed</li>
                      <li><span className="font-bold text-cyan-700 bg-gradient-to-r from-cyan-400 to-blue-400 px-2 py-1 rounded">Learning</span>: 10-19 topics completed</li>
                      <li><span className="font-bold text-green-700 bg-gradient-to-r from-green-400 to-blue-400 px-2 py-1 rounded">Intermediate</span>: 20-29 topics completed</li>
                      <li><span className="font-bold text-yellow-700 bg-gradient-to-r from-yellow-500 to-orange-500 px-2 py-1 rounded">Proficient</span>: 30-39 topics completed</li>
                      <li><span className="font-bold text-blue-700 bg-gradient-to-r from-blue-500 to-green-500 px-2 py-1 rounded">Expert</span>: 40-49 topics completed</li>
                      <li><span className="font-bold text-purple-700 bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded">Master</span>: 50+ topics completed</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">Your level is shown on your profile and updates as you progress.</p>
                  </div>
                  <div className="bg-white/80 rounded-lg p-6 shadow-inner border border-yellow-200">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Badges</h3>
                    <ul className="list-disc ml-8 space-y-1 text-base">
                      <li><span className="font-bold">🏅 Brass</span>: Score below 50 or equal to 50</li>
                      <li><span className="font-bold">🥉 Copper</span>: Score 60</li>
                      <li><span className="font-bold">🥈 Silver</span>: Score 70</li>
                      <li><span className="font-bold">🥇 Gold</span>: Score 80</li>
                      <li><span className="font-bold">🏆 Platinum</span>: Score 90</li>
                      <li><span className="font-bold">💎 Diamond</span>: Score 100</li>
                    </ul>
                    <p className="mt-2 text-sm text-gray-600">Earn higher badges by improving your scores in topic exams!</p>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-indigo-700 border-l-4 border-indigo-400 pl-3">Tutorials Assignment</h2>
                <p className="text-lg leading-relaxed">
                  Tutorials are assigned to help you master topics. If you do not pass a quiz, you are encouraged to review the tutorials before retaking the exam. Completed topics can always be revisited for further learning and practice.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-gray-700 border-l-4 border-gray-400 pl-3">Other Features</h2>
                <ul className="list-disc ml-8 space-y-2 text-lg">
                  <li>Personalized recommendations based on your progress.</li>
                  <li>Visual analytics and charts for your learning journey.</li>
                  <li>Ability to review and retake any topic at any time.</li>
                  <li>Support for user profile and progress history.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-3 text-blue-900 border-l-4 border-blue-700 pl-3">Getting Started</h2>
                <p className="text-lg leading-relaxed">
                  Begin by selecting your known topics or start with the recommended ones. Take quizzes, review tutorials, and track your progress as you advance through the DSA curriculum!
                </p>
              </section>
            </div>
          )}
        </>
      </main>
    </div>
  );
};




