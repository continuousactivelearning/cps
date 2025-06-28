import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Network } from 'lucide-react';
import type { UserProfile } from '../interface/types';
import api from '../services/api';
import { mutate } from 'swr';
import { getDetails } from '../services/detailService';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { useNavigate } from 'react-router-dom';

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

  if (loading) return <p className="p-4 text-gray-700">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Instructor Dashboard</h1>

        {/* Header */}
        <header className="bg-white shadow rounded-lg p-4 mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-full">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">DSA Assessment Hub</h2>
                <p className="text-sm text-gray-500">Dependency-Aware Learning System</p>
              </div>
            </div>
            <div className="text-sm text-right space-y-1">
              <div className="font-medium text-gray-700">👤 {userProfile.name || 'Instructor'}</div>
              <div className="text-gray-500">Role: {userProfile.role}</div>
              <div className="text-indigo-600 font-mono">Code: {userProfile.instructorCode || 'N/A'}</div>
              <button
                onClick={handleSignOut}
                className="text-sm text-red-600 hover:text-red-800 font-semibold border border-red-300 px-3 py-1 rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Enrolled Students */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enrolled Students</h2>
          {students.length === 0 ? (
            <p className="text-gray-500">No students enrolled.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {students.map((student) => (
                <li
                  key={student._id}
                  className="border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="text-base font-medium text-gray-800">{student.name}</div>
                  <div className="text-sm text-gray-500">{student.email}</div>
                  <button
                    onClick={() => fetchStudentProgress(student)}
                    className="mt-2 text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700"
                  >
                    View Progress
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Dialog for progress */}
        <Dialog open={progressOpen} onOpenChange={setProgressOpen}>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Progress of {selectedProgress?.name}</DialogTitle>
            </DialogHeader>
            {selectedProgress && (
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Mastered Topics:</strong> {selectedProgress.masteredTopicsCount}
                </p>
                <p>
                  <strong>Average Score:</strong> {selectedProgress.averageScore.toFixed(2)}
                </p>
                <div>
                  <strong>Mastered Topics List:</strong>
                  <ul className="list-disc list-inside mt-1">
                    {selectedProgress.masteredTopics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Quiz Concerns */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quiz Concerns</h2>
          {concerns.length === 0 ? (
            <p className="text-gray-500">No concerns submitted.</p>
          ) : (
            <ul className="space-y-4">
              {concerns.map((concern) => {
                const status = statusInputs[concern._id] || 'in-progress';
                const score = scoreInputs[concern._id] || '';
                const student = students.find((s) => s._id === concern.studentId);

                return (
                  <li
                    key={concern._id}
                    className="border p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                  >
                    <span className="block">👤 Student: {student?.name || 'Unknown'}</span>
                    <div className="font-medium text-gray-700 mb-1">Topic ID: {concern.topicId}</div>
                    <p className="text-sm text-gray-600 mb-2">{concern.message}</p>
                    <a
                      href={`http://localhost:5000${concern.pdfUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm underline block mt-1"
                    >
                      View PDF
                    </a>




                    <div className="mt-3 space-y-2">
                      <div className="flex space-x-2 items-center">
                        <label className="text-sm font-medium">Status:</label>
                        <select
                          className="border px-2 py-1 rounded"
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

                      <div className="flex space-x-2 items-center">
                        <label className="text-sm font-medium">Score:</label>
                        <input
                          type="number"
                          className="border px-2 py-1 rounded w-24"
                          value={score}
                          onChange={(e) =>
                            setScoreInputs((prev) => ({
                              ...prev,
                              [concern._id]: e.target.value,
                            }))
                          }
                          placeholder="e.g. 80"
                        />
                      </div>

                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full font-semibold ${
                            concern.status === 'resolved'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {concern.status.toUpperCase()}
                        </span>

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
  className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
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
                            className="ml-auto px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
                          >
                            Apply & Mark as Resolved
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default InstructorPage;
