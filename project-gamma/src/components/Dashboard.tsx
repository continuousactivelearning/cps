import React, { useState } from 'react';
import { UserProfile } from './UserProfile';
import { ProgressChart } from './ProgressChart';
import { TopicCard } from './TopicCard';
import { RecommendedTopics } from './RecommendedTopics';
import { KnownTopics } from './KnownTopics';
import { 
  mockUser, 
  mockTopics, 
  mockExamResults, 
  mockProgressData, 
  mockAIRecommendations 
} from '../data/mockData';
import { 
  Brain, 
  BookOpen, 
  TrendingUp, 
  Settings, 
  LogOut,
  Menu,
  X,
  Bell,
  Search
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
  onStartTopic: (topicId: string) => void;
  onTakeExam: (topicId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  onLogout, 
  onStartTopic, 
  onTakeExam 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'topics' | 'progress'>('overview');

  const inProgressTopics = mockTopics.filter(topic => topic.status === 'in-progress');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">DSA AI Tutor</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'overview' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('topics')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'topics' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  All Topics
                </button>
                <button 
                  onClick={() => setActiveTab('progress')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'progress' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Progress
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search topics..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              
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
              <button 
                onClick={() => { setActiveTab('overview'); setIsMenuOpen(false); }}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'overview' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => { setActiveTab('topics'); setIsMenuOpen(false); }}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'topics' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                All Topics
              </button>
              <button 
                onClick={() => { setActiveTab('progress'); setIsMenuOpen(false); }}
                className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'progress' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Progress
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">Welcome back, {mockUser.name}!</h1>
                  <p className="text-blue-100">Ready to continue your DSA learning journey?</p>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="AI Learning"
                    className="w-20 h-20 rounded-lg opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* User Profile and Progress */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <UserProfile user={mockUser} />
              </div>
              <div className="lg:col-span-2">
                <ProgressChart data={mockProgressData} />
              </div>
            </div>

            {/* AI Recommendations */}
            <RecommendedTopics 
              topics={mockTopics}
              recommendations={mockAIRecommendations}
              onStartTopic={onStartTopic}
            />

            {/* Current Topics */}
            {inProgressTopics.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Learning</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inProgressTopics.map(topic => (
                    <TopicCard 
                      key={topic.id} 
                      topic={topic} 
                      onStartTopic={onStartTopic}
                      onTakeExam={onTakeExam}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Known Topics */}
            <KnownTopics 
              topics={mockTopics}
              examResults={mockExamResults}
              onTakeExam={onTakeExam}
            />
          </div>
        )}

        {activeTab === 'topics' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">All DSA Topics</h1>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-6 h-6 text-blue-500" />
                <span className="text-lg font-medium text-gray-700">{mockTopics.length} Topics Available</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTopics.map(topic => (
                <TopicCard 
                  key={topic.id} 
                  topic={topic} 
                  onStartTopic={onStartTopic}
                  onTakeExam={onTakeExam}
                />
              ))}
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

            <div className="grid lg:grid-cols-2 gap-8">
              <UserProfile user={mockUser} />
              <ProgressChart data={mockProgressData} />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Exam Results</h3>
              <div className="space-y-4">
                {mockExamResults.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{result.topicName}</h4>
                      <p className="text-sm text-gray-600">
                        {new Date(result.date).toLocaleDateString()} • {result.timeSpent} minutes
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{result.score}%</div>
                      <div className="text-sm text-gray-600">{result.accuracy}% accuracy</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};