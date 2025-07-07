import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Play, Award, Clock, Users } from 'lucide-react';
import { getAllCourses } from '../api/api';
import type { Course } from '../api/api';
import Layout from './Layout';

const UserHome: React.FC = () => {
  const { user } = useAuth();
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
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
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (course: Course) => {
    navigate(`/course/${course.slug}`);
  };

  const stats = [
    { icon: BookOpen, label: 'Enrolled Courses', value: '3' },
    { icon: Award, label: 'Certificates', value: '1' },
    { icon: Clock, label: 'Hours Learned', value: '24' },
    { icon: Users, label: 'Study Groups', value: '2' }
  ];

  return (
    <Layout>
      <div className={`content-wrapper ${darkMode ? 'dark' : 'light'}`}>
        <motion.div className="page-header" {...getAnimationProps()}>
          <h1 className="page-title">Welcome back, {user?.username}!</h1>
          <p className="page-subtitle">
            Continue your learning journey and explore new courses.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div className="user-stats-grid" {...getAnimationProps(0.1)}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${!darkMode ? 'stat-orange-card' : ''}`}
              style={
                darkMode
                  ? {
                      background: 'linear-gradient(135deg, #23263a 0%, #181A20 100%)',
                      border: '2px solid #2d3148',
                      color: '#fff',
                      boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                      borderRadius: 18,
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 120,
                      padding: '32px 24px',
                    }
                  : undefined
              }
            >
              <stat.icon
                size={32}
                className="stat-icon"
                style={
                  darkMode
                    ? {
                        color:
                          stat.label === 'Enrolled Courses'
                            ? '#7dd3fc' // pastel blue
                            : stat.label === 'Certificates'
                            ? '#6ee7b7' // pastel teal
                            : stat.label === 'Hours Learned'
                            ? '#c4b5fd' // pastel purple
                            : stat.label === 'Study Groups'
                            ? '#fde68a' // pastel yellow
                            : '#fff',
                        marginBottom: 16,
                      }
                    : undefined
                }
              />
              <div className="stat-content" style={{ alignItems: 'center', textAlign: 'center' }}>
                <div
                  className="stat-label"
                  style={darkMode ? { color: '#d1d5db', fontWeight: 500, fontSize: 16 } : undefined}
                >
                  {stat.label}
                </div>
                <div
                  className="stat-value"
                  style={darkMode ? { color: '#fff', fontWeight: 700, fontSize: 28 } : undefined}
                >
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Available Courses */}
        <motion.div className="courses-section" {...getAnimationProps(0.2)}>
          <div className="section-header">
            <h2>Available Courses</h2>
            <p>Explore our comprehensive course catalog</p>
          </div>

          {loading ? (
            <div className="loading-grid">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="course-card-skeleton">
                  <div className="skeleton-header"></div>
                  <div className="skeleton-content">
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line short"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="courses-grid">
              {courses.map((course, index) => (
                <motion.div
                  key={course._id}
                  className="course-card"
                  onClick={() => handleCourseClick(course)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="course-header">
                    <div className="course-id">Course {course.courseId}</div>
                    <BookOpen size={20} className="course-icon" />
                  </div>
                  <div className="course-content">
                    <h3 className="course-title">{course.courseName}</h3>
                    <div className="course-actions">
                      <button className="course-btn primary">
                        <Play size={16} />
                        Start Learning
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && courses.length === 0 && (
            <div className="empty-state">
              <BookOpen size={48} />
              <h3>No courses available</h3>
              <p>Check back later for new courses!</p>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default UserHome;
