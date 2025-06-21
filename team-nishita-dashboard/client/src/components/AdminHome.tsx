import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import { Upload, X, Users, Plus, BarChart3, FileText, Settings, Activity } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const AdminHome: React.FC = () => {
  const { user } = useAuth();
  const { darkMode } = useTheme();
  const [showCourseForm, setShowCourseForm] = useState(false);
  const [courseData, setCourseData] = useState({
    courseName: '',
    syllabusPDF: null as File | null,
    materialPDF: null as File | null,
  })

  const getAnimationProps = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay,
      duration: 0.6,
      type: "spring" as const,
    },
  });

  const {
    getRootProps: getSyllabusRootProps,
    getInputProps: getSyllabusInputProps,
    isDragActive: isSyllabusDragActive
  } = useDropzone({
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setCourseData(prev => ({ ...prev, syllabusPDF: acceptedFiles[0] }));
      }
    }
  });

  const {
    getRootProps: getMaterialRootProps,
    getInputProps: getMaterialInputProps,
    isDragActive: isMaterialDragActive
  } = useDropzone({
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setCourseData(prev => ({ ...prev, materialPDF: acceptedFiles[0] }));
      }
    }
  });
  const handleSubmitCourse = (e: React.FormEvent) => {
    e.preventDefault();

    if (!courseData.courseName.trim()) {
      alert('Please enter a course name');
      return;
    }

    if (!courseData.syllabusPDF) {
      alert('Please upload a syllabus PDF');
      return;
    }

    if (!courseData.materialPDF) {
      alert('Please upload a material PDF');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Course Data:', courseData);

    // Reset form
    setCourseData({
      courseName: '',
      syllabusPDF: null,
      materialPDF: null,
    });
    setShowCourseForm(false);

    alert('Course added successfully!');
  };

  const removeSyllabusPDF = () => {
    setCourseData(prev => ({ ...prev, syllabusPDF: null }));
  };

  const removeMaterialPDF = () => {
    setCourseData(prev => ({ ...prev, materialPDF: null }));
  };

  const stats = [
    { icon: <Users size={24} />, label: "Total Users", value: "1,240" },
    { icon: <Activity size={24} />, label: "Active Sessions", value: "342" },
    { icon: <FileText size={24} />, label: "Reports Generated", value: "87" },
    { icon: <BarChart3 size={24} />, label: "Completion Rate", value: "78%" },
  ];

  const recentActivities = [
    "New user 'jdoe' registered",
    "System backup completed successfully",
    "3 new messages received",
    "Course 'React Basics' updated",
    "Weekly report generated"
  ];

  return (
    <div className={`page-container ${darkMode ? 'dark' : 'light'}`}>
      <Navbar />

      <main className="main-content">
        <div className="content-wrapper">
          <motion.div className="page-header" {...getAnimationProps(0)}>
            <h1 className="page-title">Admin Dashboard</h1>
            <p className="page-subtitle">
              Welcome back, {user?.username}! Here's your system overview.
            </p>
          </motion.div>

          <motion.div className="admin-stats-grid" {...getAnimationProps(0.1)}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                {...getAnimationProps(0.2 + index * 0.1)}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">{stat.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="admin-content-grid">
            <motion.div className="admin-card" {...getAnimationProps(0.3)}>
              <div className="card-header">
                <Settings size={24} />
                <h3>System Management</h3>
              </div>
              <div className="card-content">
                <div className="admin-actions">
                  <button className="admin-btn primary">Manage Users</button>
                  <button className="admin-btn secondary">View Reports</button>
                  <button className="admin-btn secondary">System Settings</button>
                  <button className="admin-btn secondary">Backup Data</button>
                  <button
                    className="admin-btn primary"
                    onClick={() => setShowCourseForm(true)}
                  >
                    <Plus size={16} />
                    Add Course
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div className="admin-card" {...getAnimationProps(0.4)}>
              <div className="card-header">
                <Activity size={24} />
                <h3>Recent Activity</h3>
              </div>
              <div className="card-content">
                <div className="activity-list">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-dot"></div>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="admin-card chart-card" {...getAnimationProps(0.5)}>
              <div className="card-header">
                <BarChart3 size={24} />
                <h3>Analytics Overview</h3>
              </div>
              <div className="card-content">
                <div className="chart-placeholder">
                  <p>Analytics charts would be displayed here</p>
                  <div className="mock-chart">
                    <div className="chart-bar" style={{ height: '60%' }}></div>
                    <div className="chart-bar" style={{ height: '80%' }}></div>
                    <div className="chart-bar" style={{ height: '45%' }}></div>
                    <div className="chart-bar" style={{ height: '90%' }}></div>
                    <div className="chart-bar" style={{ height: '70%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {showCourseForm && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="course-form-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="modal-header">
              <h2>Add New Course</h2>
              <button
                className="close-btn"
                onClick={() => setShowCourseForm(false)}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmitCourse} className="course-form">
              <div className="form-group">
                <label htmlFor="courseName">Course Name</label>
                <input
                  type="text"
                  id="courseName"
                  value={courseData.courseName}
                  onChange={(e) => setCourseData(prev => ({ ...prev, courseName: e.target.value }))}
                  placeholder="Enter course name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Syllabus PDF</label>
                <div
                  {...getSyllabusRootProps()}
                  className={`dropzone ${isSyllabusDragActive ? 'active' : ''} ${courseData.syllabusPDF ? 'has-file' : ''}`}
                >
                  <input {...getSyllabusInputProps()} />
                  {courseData.syllabusPDF ? (
                    <div className="file-preview">
                      <FileText size={24} />
                      <span>{courseData.syllabusPDF.name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSyllabusPDF();
                        }}
                        className="remove-file-btn"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="dropzone-content">
                      <Upload size={32} />
                      <p>
                        {isSyllabusDragActive
                          ? "Drop the syllabus PDF here..."
                          : "Drag & drop syllabus PDF here, or click to select"}
                      </p>
                      <span className="file-types">PDF files only</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Material PDF</label>
                <div
                  {...getMaterialRootProps()}
                  className={`dropzone ${isMaterialDragActive ? 'active' : ''} ${courseData.materialPDF ? 'has-file' : ''}`}
                >
                  <input {...getMaterialInputProps()} />
                  {courseData.materialPDF ? (
                    <div className="file-preview">
                      <FileText size={24} />
                      <span>{courseData.materialPDF.name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeMaterialPDF();
                        }}
                        className="remove-file-btn"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="dropzone-content">
                      <Upload size={32} />
                      <p>
                        {isMaterialDragActive
                          ? "Drop the material PDF here..."
                          : "Drag & drop material PDF here, or click to select"}
                      </p>
                      <span className="file-types">PDF files only</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowCourseForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Add Course
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AdminHome;
