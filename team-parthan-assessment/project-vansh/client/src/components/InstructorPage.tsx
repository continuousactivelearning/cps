import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Network, Moon, Sun, Users, AlertCircle, TrendingUp, BookOpen } from 'lucide-react';
import type { UserProfile } from '../interface/types';
import api from '../services/api';
import { mutate } from 'swr';
import { getDetails } from '../services/detailService';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import Loading from './Loading';

interface Student {
  _id: string;
  name: string;
  email: string;
}

interface Concern {
  _id: string;
  studentId: string;
  topicId: string;
  message: string;
  pdfUrl: string;
  status: string;
}

const InstructorPage: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [concerns, setConcerns] = useState<Concern[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const token = localStorage.getItem('token');

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    masteredTopics: 2,
    totalScore: 0,
    streak: 0,
    role: 'instructor',
  });

  const [statusInputs, setStatusInputs] = useState<Record<string, string>>({});
  const [scoreInputs, setScoreInputs] = useState<Record<string, string>>({});


  useEffect(() => {
    const setstreak = async () => {
      await api.get('/me/streak');
      mutate('/me');
    };
    setstreak();
  }, []);

  useEffect(() => {
    const profile = async () => {
      try {
        const details = await getDetails();
        setUserProfile((prev) => ({
          ...prev,
          name: details.name,
          masteredTopics: details.masteredTopics || 0,
          totalScore: details.totalScore || 0,
          streak: details.streak || 0,
          enrolledUnder: details.enrolledUnder,
          role: details.role,
          instructorCode: details.instructorCode,
        }));
      } catch (error) {
        console.log('Error fetching details in mainpage ', error);
      }
    };
    profile();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentRes = await api.get('/instructor/students');
        setStudents(studentRes.data);

        const concernRes = await api.get('/instructor/concerns');
        setConcerns(concernRes.data);
      } catch (err) {
        console.error('Error fetching instructor data', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const [selectedProgress, setSelectedProgress] = useState<{
    name: string;
    masteredTopicsCount: number;
    averageScore: number;
    masteredTopics: string[];
  } | null>(null);

  const [progressOpen, setProgressOpen] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const fetchStudentProgress = async (student: Student) => {
    try {
      const res = await api.get(`/instructor/student-progress/${student._id}`);
      setSelectedProgress({
        name: student.name,
        masteredTopicsCount: res.data.masteredTopicsCount,
        averageScore: res.data.averageScore,
        masteredTopics: res.data.masteredTopics,
      });
      setProgressOpen(true);
    } catch (err) {
      console.error('Failed to fetch student progress', err);
    }
  };

  const handleSignOut = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/');
    setIsOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };



  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Loading isVisible= {loading} />
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl shadow-lg">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DSA Assessment Hub</h1>
                <p className="text-gray-600 dark:text-gray-400">Dependency-Aware Learning System</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Dark mode toggle */}
              <ThemeToggle />
              
              {/* User info */}
              <div className="text-right">
                <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {userProfile.name || 'Instructor'}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Role: {userProfile.role}</div>
                <div className="text-sm text-indigo-600 dark:text-indigo-400 font-mono">
                  Code: {userProfile.instructorCode || 'N/A'}
                </div>
              </div>
              
              <button
                onClick={handleSignOut}
                className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Students</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{students.length}</p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Concerns</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {concerns.filter(c => c.status === 'pending').length}
                </p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Concerns</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{concerns.length}</p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Students */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Enrolled Students</h2>
          </div>
          
          {students.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No students enrolled yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((student) => (
                <div
                  key={student._id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                        {student.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{student.email}</p>
                    </div>
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
                      <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                  
                  <button
                    onClick={() => fetchStudentProgress(student)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                  >
                    View Progress
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Progress Dialog */}
        <Dialog open={progressOpen} onOpenChange={setProgressOpen}>
          <DialogContent className="max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-white">
                Progress Report: {selectedProgress?.name}
              </DialogTitle>
            </DialogHeader>
            {selectedProgress && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Mastered Topics</p>
                    <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                      {selectedProgress.masteredTopicsCount}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">Average Score</p>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                      {selectedProgress.averageScore.toFixed(1)}%
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Mastered Topics:</h4>
                  <div className="space-y-2">
                    {selectedProgress.masteredTopics.map((topic, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Quiz Concerns */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quiz Concerns</h2>
          </div>
          
          {concerns.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No concerns submitted yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {concerns.map((concern) => {
                const status = statusInputs[concern._id] || 'in-progress';
                const score = scoreInputs[concern._id] || '';
                const student = students.find((s) => s._id === concern.studentId);

                return (
                  <div
                    key={concern._id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-gray-500" />
                          <span className="font-medium text-gray-900 dark:text-white">
                            {student?.name || 'Unknown Student'}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Topic ID: <span className="font-mono">{concern.topicId}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">{concern.message}</p>
                        
                        <a
                          href={`http://localhost:5000${concern.pdfUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                        >
                          📄 View PDF
                        </a>
                      </div>
                      
                      <span className={`px-3 py-1 text-xs rounded-full font-semibold ${getStatusColor(concern.status)}`}>
                        {concern.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Status Update:
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={status}
                          onChange={(e) =>
                            setStatusInputs((prev) => ({
                              ...prev,
                              [concern._id]: e.target.value,
                            }))
                          }
                        >
                          <option value="not-started">Not Started</option>
                          <option value="in-progress">In Progress</option>
                          <option value="ready">Ready</option>
                          <option value="mastered">Mastered</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Score Adjustment:
                        </label>
                        <input
                          type="number"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={score}
                          onChange={(e) =>
                            setScoreInputs((prev) => ({
                              ...prev,
                              [concern._id]: e.target.value,
                            }))
                          }
                          placeholder="Enter score (0-100)"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={async () => {
                          const confirmDelete = confirm("Are you sure you want to delete this concern?");
                          if (!confirmDelete) return;

                          try {
                            await api.delete(`/instructor/remove-concern/${concern._id}`);
                            setConcerns((prev) => prev.filter((c) => c._id !== concern._id));
                          } catch (err) {
                            console.error('Failed to delete concern', err);
                            alert('Error deleting concern');
                          }
                        }}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium"
                      >
                        Remove
                      </button>
                      
                      {concern.status === 'pending' && (
                        <button
                          onClick={async () => {
                            try {
                              await api.put('/instructor/resolve-concern', {
                                concernId: concern._id,
                                topicId: concern.topicId,
                                newStatus: status,
                                scoreAdjustment: parseFloat(score),
                                studentId: concern.studentId,
                              });

                              setConcerns((prev) =>
                                prev.map((c) =>
                                  c._id === concern._id ? { ...c, status: 'resolved' } : c
                                )
                              );
                            } catch (err) {
                              console.error('Failed to resolve concern', err);
                              alert('Error resolving concern');
                            }
                          }}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
                        >
                          Apply & Mark as Resolved
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default InstructorPage;