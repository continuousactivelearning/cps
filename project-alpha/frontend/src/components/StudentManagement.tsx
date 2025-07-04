import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'student';
  topics?: string[];
  prerequisites?: { topic: string; prerequisites: string[] }[];
  quizScores?: { topic: string; score: number; date: string }[];
  learningPaths?: { topic: string; weeks: number; level: string; durationPerDay: string; path: any[]; generatedAt: string }[];
  avatar?: string;
}

interface StudentManagementProps {
  darkMode: boolean;
}

const StudentManagement: React.FC<StudentManagementProps> = ({ darkMode }) => {
  const [students, setStudents] = useState<User[]>([]);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [studentsError, setStudentsError] = useState('');
  const [studentFilter, setStudentFilter] = useState('');
  const [filteredStudents, setFilteredStudents] = useState<User[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<User | null>(null);
  const [deletingStudentId, setDeletingStudentId] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState('');

  // Filter students when filter changes
  useEffect(() => {
    const filtered = students.filter(student =>
      student.username.toLowerCase().includes(studentFilter.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [students, studentFilter]);

  // Fetch students
  useEffect(() => {
    setLoadingStudents(true);
    setStudentsError('');

    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    console.log('=== DEBUGGING ADMIN ACCESS ===');
    console.log('Token exists:', !!token);
    console.log('Token value:', token);
    console.log('User from localStorage:', userStr);

    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        console.log('Parsed user object:', user);
        console.log('User role from localStorage:', user.role);
        console.log('Is admin according to localStorage?', user.role === 'admin');
      } catch (e) {
        console.error('Error parsing user from localStorage:', e);
      }
    }

    // Let's also decode the JWT token to see what's inside
    if (token) {
      try {
        const tokenParts = token.split('.');
        if (tokenParts.length === 3) {
          const payload = JSON.parse(atob(tokenParts[1]));
          console.log('JWT token payload:', payload);
          console.log('Role in JWT token:', payload.role);
          console.log('User ID in JWT token:', payload.id);
        }
      } catch (e) {
        console.error('Error decoding JWT token:', e);
      }
    }

    if (!token) {
      setStudentsError('No authentication token found. Please log in again.');
      setLoadingStudents(false);
      return;
    }

    axios.get(API_ENDPOINTS.USERS, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        console.log('Students fetched successfully:', res.data);
        const studentUsers = res.data.filter((u: User) => u.role === 'student');
        console.log('Filtered students:', studentUsers);
        setStudents(studentUsers);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
        console.error('Error response:', error.response);

        if (error.response?.status === 403) {
          setStudentsError('Access denied: You do not have admin privileges. Please make sure you are logged in as an admin user.');
        } else if (error.response?.status === 401) {
          setStudentsError('Authentication failed. Please log in again.');
        } else {
          setStudentsError(`Failed to fetch students: ${error.response?.data?.message || error.message}`);
        }
      })
      .finally(() => setLoadingStudents(false));
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Delete student handler
  const handleDeleteStudent = async (studentId: string) => {
    if (!window.confirm('Are you sure you want to delete this student? This action cannot be undone.')) return;
    setDeletingStudentId(studentId);
    setDeleteError('');
    try {
      const token = localStorage.getItem('token');
      await axios.delete(API_ENDPOINTS.DELETE_USER(studentId), {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStudents(prev => prev.filter(s => s.id !== studentId));
      setFilteredStudents(prev => prev.filter(s => s.id !== studentId));
      if (selectedStudent && selectedStudent.id === studentId) setSelectedStudent(null);
    } catch (error: any) {
      setDeleteError(error.response?.data?.message || error.message || 'Failed to delete student');
    } finally {
      setDeletingStudentId(null);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Header with Filter */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: darkMode ? '#fff' : '#18181b' }}>All Students</h2>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Filter by username..."
            value={studentFilter}
            onChange={(e) => setStudentFilter(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: 6,
              fontSize: 14,
              minWidth: 200,
              background: darkMode ? '#23232a' : '#fff',
              color: darkMode ? '#fff' : '#18181b'
            }}
          />
          <button
            onClick={() => setStudentFilter('')}
            style={{
              background: '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              padding: '8px 12px',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Clear
          </button>
        </div>
      </div>
      
      {/* Loading State */}
      {loadingStudents && (
        <div style={{ color: '#6b7280', fontSize: 18 }}>Loading students...</div>
      )}
      
      {/* Error State */}
      {studentsError && (
        <div style={{ color: '#dc2626', fontSize: 18 }}>{studentsError}</div>
      )}
      
      {/* Empty State */}
      {!loadingStudents && !studentsError && filteredStudents.length === 0 && (
        <div style={{
          color: darkMode ? '#fff' : '#64748b',
          fontSize: 20,
          textAlign: 'center',
          margin: '48px 0',
          fontWeight: 500
        }}>
          {studentFilter ? 'No students found matching your filter.' : 'No students found.'}
        </div>
      )}
      
      {/* Students Table */}
      {!loadingStudents && !studentsError && filteredStudents.length > 0 && (
        <div style={{ overflowX: 'auto', borderRadius: 12, boxShadow: darkMode ? '0 2px 12px rgba(0,0,0,0.18)' : '0 2px 12px rgba(99,102,241,0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: darkMode ? '#18181b' : '#fff', borderRadius: 10, minWidth: 900 }}>
            <thead>
              <tr style={{ background: darkMode ? '#23232a' : '#e0e7ff', color: darkMode ? '#fff' : '#6366f1' }}>
                <th style={{ padding: 14, textAlign: 'left' }}>Avatar</th>
                <th style={{ padding: 14, textAlign: 'left' }}>Username</th>
                <th style={{ padding: 14, textAlign: 'left' }}>Email</th>
                <th style={{ padding: 14, textAlign: 'left' }}>Topics</th>
                <th style={{ padding: 14, textAlign: 'left' }}>Quiz Scores</th>
                <th style={{ padding: 14, textAlign: 'left' }}>Learning Paths</th>
                <th style={{ padding: 14, textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr 
                  key={student.id} 
                  style={{ 
                    borderBottom: '1px solid #e5e7eb', 
                    color: darkMode ? '#fff' : '#18181b',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onClick={() => setSelectedStudent(student)}
                >
                  <td style={{ padding: 12 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#e0e7ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 16,
                      color: '#6366f1',
                      fontWeight: 600,
                      overflow: 'hidden'
                    }}>
                      {student.avatar ? (
                        <img src={student.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                      ) : (
                        student.username.charAt(0).toUpperCase()
                      )}
                    </div>
                  </td>
                  <td style={{ padding: 12, fontWeight: 600 }}>{student.username}</td>
                  <td style={{ padding: 12 }}>{student.email}</td>
                  <td style={{ padding: 12 }}>
                    {Array.isArray(student.topics) && student.topics.length > 0 ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {student.topics.slice(0, 2).map((topic, index) => (
                          <span key={index} style={{
                            background: '#e0e7ff',
                            color: '#6366f1',
                            padding: '2px 8px',
                            borderRadius: 12,
                            fontSize: 12,
                            fontWeight: 500
                          }}>
                            {topic}
                          </span>
                        ))}
                        {student.topics.length > 2 && (
                          <span style={{
                            background: '#f3f4f6',
                            color: '#6b7280',
                            padding: '2px 8px',
                            borderRadius: 12,
                            fontSize: 12,
                            fontWeight: 500
                          }}>
                            +{student.topics.length - 2}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span style={{ color: '#9ca3af', fontSize: 14 }}>No topics</span>
                    )}
                  </td>
                  <td style={{ padding: 12 }}>
                    {Array.isArray(student.quizScores) && student.quizScores.length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {student.quizScores.slice(0, 2).map((score, index) => (
                          <div key={index} style={{ fontSize: 12 }}>
                            <span style={{ fontWeight: 500 }}>{score.topic}:</span>
                            <span style={{ 
                              color: score.score >= 80 ? '#10b981' : score.score >= 60 ? '#f59e0b' : '#ef4444',
                              fontWeight: 600,
                              marginLeft: 4
                            }}>
                              {score.score}%
                            </span>
                          </div>
                        ))}
                        {student.quizScores.length > 2 && (
                          <span style={{ color: '#9ca3af', fontSize: 12 }}>
                            +{student.quizScores.length - 2} more
                          </span>
                        )}
                      </div>
                    ) : (
                      <span style={{ color: '#9ca3af', fontSize: 14 }}>No scores</span>
                    )}
                  </td>
                  <td style={{ padding: 12 }}>
                    {Array.isArray(student.learningPaths) && student.learningPaths.length > 0 ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        {student.learningPaths.slice(0, 2).map((path, index) => (
                          <span key={index} style={{
                            background: '#dcfce7',
                            color: '#16a34a',
                            padding: '2px 8px',
                            borderRadius: 12,
                            fontSize: 12,
                            fontWeight: 500
                          }}>
                            {path.topic}
                          </span>
                        ))}
                        {student.learningPaths.length > 2 && (
                          <span style={{
                            background: '#f3f4f6',
                            color: '#6b7280',
                            padding: '2px 8px',
                            borderRadius: 12,
                            fontSize: 12,
                            fontWeight: 500
                          }}>
                            +{student.learningPaths.length - 2}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span style={{ color: '#9ca3af', fontSize: 14 }}>No paths</span>
                    )}
                  </td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedStudent(student);
                      }}
                      style={{
                        background: '#6366f1',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 6,
                        padding: '6px 12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: 13,
                        transition: 'background-color 0.2s',
                        marginRight: 8
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#4f46e5'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#6366f1'}
                    >
                      View Details
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteStudent(student.id);
                      }}
                      style={{
                        background: '#dc2626',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 6,
                        padding: '6px 12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: 13,
                        opacity: deletingStudentId === student.id ? 0.5 : 1
                      }}
                      disabled={deletingStudentId === student.id}
                    >
                      {deletingStudentId === student.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 20
        }}>
          <div style={{
            background: darkMode ? '#18181b' : '#fff',
            borderRadius: 16,
            padding: 32,
            maxWidth: 800,
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedStudent(null)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'none',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                color: '#6b7280',
                width: 32,
                height: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              ×
            </button>

            {/* Student Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: '#e0e7ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                color: '#6366f1',
                fontWeight: 700,
                overflow: 'hidden'
              }}>
                {selectedStudent.avatar ? (
                  <img src={selectedStudent.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                ) : (
                  selectedStudent.username.charAt(0).toUpperCase()
                )}
              </div>
              <div>
                <h2 style={{ fontSize: 28, fontWeight: 700, color: darkMode ? '#fff' : '#18181b', marginBottom: 4 }}>
                  {selectedStudent.username}
                </h2>
                <p style={{ fontSize: 16, color: '#6b7280', marginBottom: 8 }}>{selectedStudent.email}</p>
                <div style={{
                  background: '#e0e7ff',
                  color: '#6366f1',
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: 600,
                  display: 'inline-block'
                }}>
                  Student ID: {selectedStudent.id}
                </div>
              </div>
            </div>

            {/* Student Details Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {/* Topics Section */}
              <div style={{
                background: darkMode ? '#23232a' : '#f9fafb',
                padding: 20,
                borderRadius: 12,
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: darkMode ? '#fff' : '#18181b', marginBottom: 16 }}>
                  Learning Topics ({selectedStudent.topics?.length || 0})
                </h3>
                {Array.isArray(selectedStudent.topics) && selectedStudent.topics.length > 0 ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {selectedStudent.topics.map((topic, index) => (
                      <span key={index} style={{
                        background: '#e0e7ff',
                        color: '#6366f1',
                        padding: '6px 12px',
                        borderRadius: 16,
                        fontSize: 14,
                        fontWeight: 500
                      }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: '#9ca3af', fontSize: 14 }}>No topics selected yet.</p>
                )}
              </div>

              {/* Prerequisites Section */}
              <div style={{
                background: darkMode ? '#23232a' : '#f9fafb',
                padding: 20,
                borderRadius: 12,
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: darkMode ? '#fff' : '#18181b', marginBottom: 16 }}>
                  Prerequisites ({selectedStudent.prerequisites?.length || 0})
                </h3>
                {Array.isArray(selectedStudent.prerequisites) && selectedStudent.prerequisites.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {selectedStudent.prerequisites.map((prereq, index) => (
                      <div key={index} style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: 8 }}>
                        <div style={{ fontWeight: 600, color: '#6366f1', marginBottom: 4 }}>
                          {prereq.topic}
                        </div>
                        <div style={{ fontSize: 14, color: '#6b7280' }}>
                          {prereq.prerequisites.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: '#9ca3af', fontSize: 14 }}>No prerequisites set.</p>
                )}
              </div>

              {/* Quiz Scores Section */}
              <div style={{
                background: darkMode ? '#23232a' : '#f9fafb',
                padding: 20,
                borderRadius: 12,
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: darkMode ? '#fff' : '#18181b', marginBottom: 16 }}>
                  Quiz Performance ({selectedStudent.quizScores?.length || 0})
                </h3>
                {Array.isArray(selectedStudent.quizScores) && selectedStudent.quizScores.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {selectedStudent.quizScores.map((score, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 12px',
                        background: darkMode ? '#18181b' : '#fff',
                        borderRadius: 8,
                        border: '1px solid #e5e7eb'
                      }}>
                        <span style={{ fontWeight: 500, color: darkMode ? '#fff' : '#18181b' }}>
                          {score.topic}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{
                            color: score.score >= 80 ? '#10b981' : score.score >= 60 ? '#f59e0b' : '#ef4444',
                            fontWeight: 700,
                            fontSize: 16
                          }}>
                            {score.score}%
                          </span>
                          <span style={{ fontSize: 12, color: '#9ca3af' }}>
                            {formatDate(score.date)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: '#9ca3af', fontSize: 14 }}>No quiz attempts yet.</p>
                )}
              </div>

              {/* Learning Paths Section */}
              <div style={{
                background: darkMode ? '#23232a' : '#f9fafb',
                padding: 20,
                borderRadius: 12,
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: darkMode ? '#fff' : '#18181b', marginBottom: 16 }}>
                  Learning Paths ({selectedStudent.learningPaths?.length || 0})
                </h3>
                {Array.isArray(selectedStudent.learningPaths) && selectedStudent.learningPaths.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {selectedStudent.learningPaths.map((path, index) => (
                      <div key={index} style={{
                        background: darkMode ? '#18181b' : '#fff',
                        padding: 12,
                        borderRadius: 8,
                        border: '1px solid #e5e7eb'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <span style={{ fontWeight: 600, color: '#16a34a' }}>
                            {path.topic}
                          </span>
                          <span style={{
                            background: '#dcfce7',
                            color: '#16a34a',
                            padding: '2px 8px',
                            borderRadius: 12,
                            fontSize: 12,
                            fontWeight: 500
                          }}>
                            {path.level}
                          </span>
                        </div>
                        <div style={{ fontSize: 14, color: '#6b7280', marginBottom: 4 }}>
                          {path.weeks} weeks • {path.durationPerDay} per day
                        </div>
                        <div style={{ fontSize: 12, color: '#9ca3af' }}>
                          Generated: {formatDate(path.generatedAt)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: '#9ca3af', fontSize: 14 }}>No learning paths generated yet.</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 32, justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedStudent(null)}
                style={{
                  background: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 24px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  // TODO: Implement edit functionality
                  alert('Edit functionality coming soon!');
                }}
                style={{
                  background: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 24px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 14,
                }}
              >
                Edit Student
              </button>
              <button
                onClick={() => handleDeleteStudent(selectedStudent.id)}
                style={{
                  background: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 24px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: 14,
                  opacity: deletingStudentId === selectedStudent.id ? 0.5 : 1
                }}
                disabled={deletingStudentId === selectedStudent.id}
              >
                {deletingStudentId === selectedStudent.id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
            {deleteError && (
              <div style={{ color: '#dc2626', fontSize: 16, marginTop: 16, textAlign: 'right' }}>{deleteError}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentManagement; 
