import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import Navbar from './Navbar';
import { ArrowLeft, Play, Award, Download, ExternalLink } from 'lucide-react';
import { getCourseBySlug } from '../api/api';
import type { Course as Course } from '../api/api'

const CoursePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  // const { user } = useAuth();
  const { darkMode } = useTheme();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  const getAnimationProps = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay,
      duration: 0.6,
      type: "spring" as const,
    },
  });

  useEffect(() => {
    const fetchCourse = async () => {
      if (!slug) return;

      try {
        const response = await getCourseBySlug(slug);
        setCourse(response.data.course);
      } catch (error) {
        console.error('Error fetching course:', error);
        navigate('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [slug, navigate]);

  const handlePlaylistClick = () => {
    if (course?.playlistURL) {
      navigate(`/courses/${course.slug}/playlist`)
    }
  };

  const handleQuizClick = () => {
    // Implement quiz navigation
    alert('Quiz feature coming soon!');
  };

  // const handleChatClick = () => {
  //   // Implement chat navigation
  //   alert('Chat feature coming soon!');
  // };

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div className="main-content">
          <div className="content-wrapper">
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading course...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div className="main-content">
          <div className="content-wrapper">
            <div className="error-state">
              <h2>Course not found</h2>
              <button onClick={() => navigate('/dashboard')} className="btn-primary">
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`page-container ${darkMode ? 'dark' : 'light'}`}>
      <Navbar />
      <div className="main-content">
        <div className="content-wrapper">
          {/* Header */}
          <motion.div className="course-header" {...getAnimationProps()}>
            <button
              className="back-btn"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft size={20} />
              Back to Dashboard
            </button>
            <div className="course-info">
              <div className="course-badge">Course {course.courseId}</div>
              <h1 className="course-title">{course.courseName}</h1>
              <p className="course-description">
                Master the fundamentals and advanced concepts in this comprehensive course.
              </p>
            </div>
          </motion.div>

          {/* Main Actions */}
          <motion.div className="course-actions-grid" {...getAnimationProps(0.1)}>
            {course.playlistURL && (

              <div className="action-card primary" onClick={handlePlaylistClick} style={{ cursor: 'pointer' }}>
                <div className="action-icon">
                  <Play size={32} />
                </div>
                <div className="action-content">
                  <h3>Video Playlist</h3>
                  <p>Watch comprehensive video lectures</p>
                </div>
                <ExternalLink size={20} className="action-arrow" />
              </div>

            )}

            <div className="action-card secondary" onClick={handleQuizClick}>
              <div className="action-icon">
                <Award size={32} />
              </div>
              <div className="action-content">
                <h3>Take Quiz</h3>
                <p>Test your knowledge and earn certificates</p>
              </div>
              <ExternalLink size={20} className="action-arrow" />
            </div>

            {/* <div className="action-card secondary" onClick={handleChatClick}> */}
            {/*   <div className="action-icon"> */}
            {/*     <MessageSquare size={32} /> */}
            {/*   </div> */}
            {/*   <div className="action-content"> */}
            {/*     <h3>AI Chat</h3> */}
            {/*     <p>Get instant help and clarifications</p> */}
            {/*   </div> */}
            {/*   <ExternalLink size={20} className="action-arrow" /> */}
            {/* </div> */}
          </motion.div>

          {/* Course Materials */}
          <motion.div className="course-materials" {...getAnimationProps(0.2)}>
            <h2>Course Materials</h2>
            <div className="materials-grid">
              <div className="material-card">
                <div className="material-header">
                  <Download size={24} />
                  <h3>Course Syllabus</h3>
                </div>
                <p>Detailed course outline and learning objectives</p>
                <button
                  className="material-btn"
                  onClick={() => handleDownload(course.syllabusPDF)}
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>

              <div className="material-card">
                <div className="material-header">
                  <Download size={24} />
                  <h3>Study Materials</h3>
                </div>
                <p>Comprehensive study guide and reference materials</p>
                <button
                  className="material-btn"
                  onClick={() => handleDownload(course.materialPDF)}
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </div>
          </motion.div>

          {/* Course Progress */}
          <motion.div className="course-progress" {...getAnimationProps(0.3)}>
            <h2>Your Progress</h2>
            <div className="progress-card">
              <div className="progress-info">
                <div className="progress-stats">
                  <div className="stat">
                    <span className="stat-value">0%</span>
                    <span className="stat-label">Completed</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">0</span>
                    <span className="stat-label">Videos Watched</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">0</span>
                    <span className="stat-label">Quizzes Taken</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
