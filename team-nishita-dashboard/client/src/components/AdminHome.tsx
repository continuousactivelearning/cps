import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Upload, X, Users, Plus, BarChart3, FileText, Settings, Activity } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { uploadToCloudinary } from '../utils/cloudinaryUpload';
import { addCourse } from '../api/api';
import slugify from 'slugify';

interface AdminHomeProps {
  showAddCourseForm?: boolean;
}

const AdminHome: React.FC<AdminHomeProps> = ({ showAddCourseForm = false }) => {
  const { user } = useAuth();
  const { darkMode } = useTheme();
  const [showCourseForm, setShowCourseForm] = useState(showAddCourseForm);
  const [uploading, setUploading] = useState(false);
  const [courseData, setCourseData] = useState({
    courseId: '',
    courseName: '',
    slug: '',
    syllabusPDF: null as File | null,
    materialPDF: null as File | null,
  });

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

  const handleSubmitCourse = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!courseData.courseId.trim()) {
      alert('Please enter a course ID');
      return;
    }

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

    setUploading(true);

    try {
      // Upload files to Cloudinary
      const folderName = `courses/${courseData.courseId}`;

      const [syllabusURL, materialURL] = await Promise.all([
        uploadToCloudinary(courseData.syllabusPDF, folderName),
        uploadToCloudinary(courseData.materialPDF, folderName)
      ]);

      // Send data to backend
      const response = await addCourse({
        courseId: parseInt(courseData.courseId),
        courseName: courseData.courseName,
        slug: courseData.slug,
        syllabusPDF: syllabusURL,
        materialPDF: materialURL
      });

      console.log('Course added:', response.data);

      // Reset form
      setCourseData({
        courseId: '',
        courseName: '',
        slug: '',
        syllabusPDF: null,
        materialPDF: null,
      });
      setShowCourseForm(false);
      alert('Course added successfully!');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error adding course:', error);
      const errorMessage = error.response?.data?.message || 'Failed to add course';
      alert(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  const removeSyllabusPDF = () => {
    setCourseData(prev => ({ ...prev, syllabusPDF: null }));
  };

  const removeMaterialPDF = () => {
    setCourseData(prev => ({ ...prev, materialPDF: null }));
  };

  const stats = [
    { icon: Users, label: 'Total Users', value: '1,234' },
    { icon: FileText, label: 'Courses', value: '42' },
    { icon: Activity, label: 'Active Sessions', value: '89' },
    { icon: BarChart3, label: 'Completion Rate', value: '87%' }
  ];

  return (
    <div className={`page-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="main-content">
        <div className="content-wrapper">
          <motion.div className="page-header" {...getAnimationProps()}>
            <h1 className="page-title">Admin Dashboard</h1>
            <p className="page-subtitle">
              Welcome back, {user?.username}! Here's your system overview.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div className="admin-stats-grid" {...getAnimationProps(0.1)}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <stat.icon size={24} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">{stat.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="admin-content-grid">
            {/* System Management */}
            <motion.div className="admin-card" {...getAnimationProps(0.2)}>
              <div className="card-header">
                <Settings size={20} />
                <h3>System Management</h3>
              </div>
              <div className="admin-actions">
                <button
                  className="admin-btn primary"
                  onClick={() => setShowCourseForm(true)}
                >
                  <Plus size={16} />
                  Add New Course
                </button>
                <button className="admin-btn secondary">
                  <Users size={16} />
                  Manage Users
                </button>
                <button className="admin-btn secondary">
                  <FileText size={16} />
                  Course Analytics
                </button>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div className="admin-card" {...getAnimationProps(0.3)}>
              <div className="card-header">
                <Activity size={20} />
                <h3>Recent Activity</h3>
              </div>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <span>New user registration: john_doe</span>
                </div>
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <span>Course completed: React Fundamentals</span>
                </div>
                <div className="activity-item">
                  <div className="activity-dot"></div>
                  <span>System backup completed</span>
                </div>
              </div>
            </motion.div>

            {/* Analytics Overview */}
            <motion.div className="admin-card" {...getAnimationProps(0.4)}>
              <div className="card-header">
                <BarChart3 size={20} />
                <h3>Analytics Overview</h3>
              </div>
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Form Modal */}
      {showCourseForm && (
        <div className="modal-overlay" onClick={() => setShowCourseForm(false)}>
          <motion.div
            className="course-form-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h2>Add New Course</h2>
              <button
                className="modal-close-btn"
                onClick={() => setShowCourseForm(false)}
                disabled={uploading}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmitCourse} className="course-form">
              {/* Course ID Field */}
              <div className="form-group">
                <label htmlFor="courseId" className="form-label">Course ID</label>
                <input
                  type="number"
                  id="courseId"
                  className="form-input"
                  placeholder="Enter course ID (e.g., 101)"
                  value={courseData.courseId}
                  onChange={(e) => setCourseData(prev => ({ ...prev, courseId: e.target.value }))}
                  min="1"
                  required
                  disabled={uploading}
                />
              </div>

              {/* Course Name Field */}
              <div className="form-group">
                <label htmlFor="courseName" className="form-label">Course Name</label>
                <input
                  type="text"
                  id="courseName"
                  className="form-input"
                  placeholder="Enter course name"
                  value={courseData.courseName}
                  onChange={(e) => {
                    const courseName = e.target.value;
                    const generatedSlug = slugify(courseData.courseName, { lower: true, strict: true })
                    setCourseData(prev => ({ ...prev, courseName: courseName, slug: generatedSlug }))
                  }}
                  required
                  disabled={uploading}
                />
                {courseData.courseName && (
                  <div className="slug-preview">
                    Slug: {slugify(courseData.courseName, { lower: true, strict: true })}
                  </div>
                )}
              </div>

              {/* Syllabus PDF Upload */}
              <div className="form-group">
                <label className="form-label">Syllabus PDF</label>
                <div
                  {...getSyllabusRootProps()}
                  className={`dropzone ${isSyllabusDragActive ? 'active' : ''} ${courseData.syllabusPDF ? 'has-file' : ''} ${uploading ? 'disabled' : ''}`}
                >
                  <input {...getSyllabusInputProps()} disabled={uploading} />
                  {courseData.syllabusPDF ? (
                    <div className="file-preview">
                      <FileText size={24} />
                      <span className="file-name">{courseData.syllabusPDF.name}</span>
                      <button
                        type="button"
                        className="remove-file-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSyllabusPDF();
                        }}
                        disabled={uploading}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="dropzone-content">
                      <Upload size={32} />
                      <p>Drag & drop syllabus PDF here, or click to select</p>
                      <span className="dropzone-hint">PDF files only</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Material PDF Upload */}
              <div className="form-group">
                <label className="form-label">Course Material PDF</label>
                <div
                  {...getMaterialRootProps()}
                  className={`dropzone ${isMaterialDragActive ? 'active' : ''} ${courseData.materialPDF ? 'has-file' : ''} ${uploading ? 'disabled' : ''}`}
                >
                  <input {...getMaterialInputProps()} disabled={uploading} />
                  {courseData.materialPDF ? (
                    <div className="file-preview">
                      <FileText size={24} />
                      <span className="file-name">{courseData.materialPDF.name}</span>
                      <button
                        type="button"
                        className="remove-file-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeMaterialPDF();
                        }}
                        disabled={uploading}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="dropzone-content">
                      <Upload size={32} />
                      <p>Drag & drop material PDF here, or click to select</p>
                      <span className="dropzone-hint">PDF files only</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Actions */}
              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowCourseForm(false)}
                  disabled={uploading}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={uploading}>
                  {uploading ? (
                    <>
                      <div className="spinner"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Plus size={16} />
                      Add Course
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
