// developed by :@AlakhMathur
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Clock,
  Trophy,
  Play,
  Download,
  FileText,
  Video,
  BookMarked,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import api from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../components/ThemeToggle';

interface LearningModule {
  id: string;
  title: string;
  content: string;
  duration: string;
  type: 'text' | 'video' | 'interactive';
  downloadUrl?: string;
  completed: boolean;
}

const LearnPage: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<string>('');
  const [modules, setModules] = useState<LearningModule[]>([]);
  const [currentModule, setCurrentModule] = useState(0);
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([0]));
  const [error, setError] = useState('');
  const [learningHistory, setLearningHistory] = useState<any[]>([]);
  const [totalProgress, setTotalProgress] = useState(0);

  useEffect(() => {
    const fetchLearningContent = async () => {
      try {
        const token = localStorage.getItem('token');
        const contentResponse = await api.get(`/api/learn/${encodeURIComponent(topic!)}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const modulesResponse = await api.get(`/api/learn/${encodeURIComponent(topic!)}/modules`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const historyResponse = await api.get(`/api/learn/history/${encodeURIComponent(topic!)}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setContent(contentResponse.data.content);
        setModules(modulesResponse.data.modules || []);
        setLearningHistory(historyResponse.data.history || []);

        const completedModules = modulesResponse.data.modules?.filter((m: LearningModule) => m.completed).length || 0;
        const totalModules = modulesResponse.data.modules?.length || 1;
        setTotalProgress(Math.round((completedModules / totalModules) * 100));
      } catch (err: any) {
        console.error('Error fetching learning content:', err);
        setError('Failed to load learning content. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (topic) fetchLearningContent();
  }, [topic]);

  const handleModuleComplete = async (moduleId: string) => {
    try {
      const token = localStorage.getItem('token');
      await api.post(
        `/api/learn/complete-module`,
        { topic, moduleId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setModules(prev => prev.map(m => (m.id === moduleId ? { ...m, completed: true } : m)));

      const updatedModules = modules.map(m => (m.id === moduleId ? { ...m, completed: true } : m));
      const completedCount = updatedModules.filter(m => m.completed).length;
      setTotalProgress(Math.round((completedCount / modules.length) * 100));
    } catch (err) {
      console.error('Error marking module as complete:', err);
    }
  };

  const toggleModuleExpansion = (index: number) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(index)) newExpanded.delete(index);
    else newExpanded.add(index);
    setExpandedModules(newExpanded);
  };

  const downloadMaterial = async (moduleId: string, title: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get(`/api/learn/download/${encodeURIComponent(topic!)}/${moduleId}`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${title.replace(/\s+/g, '_')}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error downloading material:', err);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentModule]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transition-colors">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Loading Content</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Preparing learning material for {topic}...
          </p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Dashboard</span>
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center transition-colors">
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-full w-fit mx-auto mb-6">
              <BookOpen className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Content Loading Failed</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </button>

            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Learning: {topic}
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${totalProgress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {totalProgress}% Complete
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <ThemeToggle/>
            </div>

            <button
              onClick={() => navigate(`/quiz/${encodeURIComponent(topic!)}`)}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Trophy className="h-4 w-4" />
              <span>Take Quiz</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Learning Modules Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-8 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <BookMarked className="h-5 w-5 mr-2 text-blue-600" />
                Learning Modules
              </h3>

              <div className="space-y-3">
                {modules.map((module, index) => (
                  <div
                    key={module.id}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleModuleExpansion(index)}
                      className={`w-full p-3 text-left flex items-center justify-between transition-colors ${
                        currentModule === index
                          ? 'bg-blue-50 dark:bg-gray-700 border-blue-200 dark:border-gray-600'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            module.completed
                              ? 'bg-green-100 text-green-600'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                          }`}
                        >
                          {module.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-xs font-medium">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm text-gray-900 dark:text-gray-100">
                            {module.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {module.duration}
                          </p>
                        </div>
                      </div>
                      {expandedModules.has(index) ? (
                        <ChevronDown className="h-4 w-4 text-gray-400 dark:text-gray-300" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-300" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedModules.has(index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 transition-colors"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            {module.type === 'video' && <Video className="h-4 w-4 text-purple-600" />}
                            {module.type === 'text' && <FileText className="h-4 w-4 text-blue-600" />}
                            {module.type === 'interactive' && <Play className="h-4 w-4 text-green-600" />}
                            <span className="text-xs text-gray-600 dark:text-gray-300 capitalize">{module.type}</span>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setCurrentModule(index)}
                              className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs py-2 px-3 rounded transition-colors"
                            >
                              Study
                            </button>
                            {module.downloadUrl && (
                              <button
                                onClick={() => downloadMaterial(module.id, module.title)}
                                className="bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 text-white text-xs py-2 px-3 rounded transition-colors"
                              >
                                <Download className="h-3 w-3" />
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-colors">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold">{modules[currentModule]?.title || topic}</h1>
                      <p className="text-blue-100 mt-1">
                        {modules[currentModule]?.type === 'video'
                          ? 'Video Content'
                          : modules[currentModule]?.type === 'text'
                          ? 'Reading Material'
                          : modules[currentModule]?.type === 'interactive'
                          ? 'Interactive Learning'
                          : 'Comprehensive Learning Guide'}
                      </p>
                    </div>
                  </div>

                  {modules[currentModule] && !modules[currentModule].completed && (
                    <button
                      onClick={() => handleModuleComplete(modules[currentModule].id)}
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>Mark Complete</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-100 transition-colors">
                  <div
                    className="leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: (modules[currentModule]?.content || content).replace(/\n/g, '<br>'),
                    }}
                  />
                </div>

                {/* Module Navigation */}
                {modules.length > 0 && (
                  <div className="mt-12 flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-colors">
                    <button
                      onClick={() => setCurrentModule(Math.max(0, currentModule - 1))}
                      disabled={currentModule === 0}
                      className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </button>

                    <span className="text-gray-600 dark:text-gray-300">
                      Module {currentModule + 1} of {modules.length}
                    </span>

                    <button
                      onClick={() => setCurrentModule(Math.min(modules.length - 1, currentModule + 1))}
                      disabled={currentModule === modules.length - 1}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {/* Action Section */}
                <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 dark:bg-green-800 p-3 rounded-xl">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Ready to Test Your Knowledge?</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                          Take the quiz to demonstrate your understanding and unlock new topics.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate(`/quiz/${encodeURIComponent(topic!)}`)}
                      className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <Play className="h-5 w-5" />
                      <span>Start Quiz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LearnPage;
