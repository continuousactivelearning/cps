import React, { useState } from 'react';
import { topics as localTopics } from '../data/topics';
import { Topic } from '../types';
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Video,
  BookOpen,
  Star,
  Target,
  Zap
} from 'lucide-react';

interface TutorialViewProps {
  topic: Topic;
  onBack: () => void;
}

type AnyTutorial = {
  id: string;
  title: string;
  content: string;
  description?: string;
  duration?: number;
  completed?: boolean;
};

type AnyTopic = {
  name: string;
  description: string;
  tutorials: AnyTutorial[];
  progress?: number;
  totalProblems?: number;
};

export const TutorialView: React.FC<TutorialViewProps> = ({ 
  topic, 
  onBack 
}) => {
  const [selectedTutorial, setSelectedTutorial] = useState<string | null>(null);

  // Always use the full topic from localTopics for tutorials
  const fullTopic: AnyTopic = (localTopics.find(t => t.name === topic.name) as AnyTopic) || topic;
  console.log('fullTopic:', fullTopic);

  const handleStartTutorial = (tutorialId: string) => {
    setSelectedTutorial(tutorialId);
  };

  const handleBackToTutorials = () => {
    setSelectedTutorial(null);
  };

  // If a tutorial is selected, show its content from localTopics
  if (selectedTutorial) {
    const tutorial = fullTopic.tutorials.find(t => t.id === selectedTutorial);
    console.log('tutorial:', tutorial);
    if (!tutorial) return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-xl text-red-600">Tutorial not found.</div>
      </div>
    );

    // Simple markdown to HTML (for demo; you can use a real markdown parser for production)
    const formatContent = (content: string) => {
      return content
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/# (.*?)(<br>|$)/g, '<h1>$1</h1>')
        .replace(/## (.*?)(<br>|$)/g, '<h2>$1</h2>')
        .replace(/### (.*?)(<br>|$)/g, '<h3>$1</h3>');
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleBackToTutorials}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Tutorials</span>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{tutorial.title}</h1>
                <p className="text-gray-600">{fullTopic.name} • Tutorial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div 
              className="prose prose-lg max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: formatContent(tutorial.content) }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Helper functions for safe property access
  const getProgress = () => ('progress' in fullTopic && typeof fullTopic.progress === 'number' ? fullTopic.progress : 0);
  const getTotalProblems = () => ('totalProblems' in fullTopic && typeof fullTopic.totalProblems === 'number' ? fullTopic.totalProblems : 0);
  const getCompletedCount = () => Array.isArray(fullTopic.tutorials) ? fullTopic.tutorials.filter(t => t.completed).length : 0;
  const getTutorialCompleted = (t: AnyTutorial) => ('completed' in t && typeof t.completed === 'boolean' ? t.completed : false);
  const getTutorialDescription = (t: AnyTutorial) => ('description' in t && typeof t.description === 'string' ? t.description : '');
  const getTutorialDuration = (t: AnyTutorial) => ('duration' in t && typeof t.duration === 'number' ? t.duration : 15);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Topics</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{fullTopic.name}</h1>
              <p className="text-gray-600">{fullTopic.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-6">
              <h3 className="font-bold text-gray-900 mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Completion</span>
                    <span className="font-medium">{getProgress()}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgress()}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Video className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-blue-600">
                      {getCompletedCount()}/{Array.isArray(fullTopic.tutorials) ? fullTopic.tutorials.length : 0}
                    </div>
                    <div className="text-xs text-gray-600">Tutorials</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Clock className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-green-600">{getTotalProblems()}</div>
                    <div className="text-xs text-gray-600">Problems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tutorials List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Tutorials</h2>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600">{Array.isArray(fullTopic.tutorials) ? fullTopic.tutorials.length : 0} tutorials available</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid gap-6">
                  {Array.isArray(fullTopic.tutorials) && fullTopic.tutorials.map((tutorial, index) => (
                    <div 
                      key={tutorial.id}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          getTutorialCompleted(tutorial)
                            ? 'bg-green-100 border-2 border-green-300' 
                            : 'bg-gradient-to-br from-blue-500 to-purple-600'
                        }`}>
                          {getTutorialCompleted(tutorial) ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                              {getTutorialDescription(tutorial) && (
                                <p className="text-gray-600 mb-4">{getTutorialDescription(tutorial)}</p>
                              )}
                              <div className="flex items-center space-x-6 mb-4">
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">{getTutorialDuration(tutorial)} min</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Target className="w-4 h-4 text-gray-400" />
                                  <span className="text-sm text-gray-600">Beginner</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                  <Star className="w-4 h-4 text-yellow-400" />
                                  <span className="text-sm text-gray-600">4.8/5</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button 
                              onClick={() => handleStartTutorial(tutorial.id)}
                              className={`group relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                                getTutorialCompleted(tutorial)
                                  ? 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-300'
                                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                {getTutorialCompleted(tutorial) ? (
                                  <>
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Review Tutorial</span>
                                  </>
                                ) : (
                                  <>
                                    <Zap className="w-4 h-4" />
                                    <span>Start Now</span>
                                  </>
                                )}
                              </div>
                              {!getTutorialCompleted(tutorial) && (
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 