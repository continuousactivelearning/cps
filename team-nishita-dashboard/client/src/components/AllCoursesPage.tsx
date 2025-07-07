import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Play } from 'lucide-react';
import { getAllCourses } from '../api/api';
import type { Course } from '../api/api';
import Layout from './Layout';

const UserHome: React.FC = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

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

  return (
    <Layout>
      <div className={`content-wrapper ${darkMode ? 'dark' : 'light'}`}>

        {/* Available Courses */}
        <motion.div className="courses-section" {...getAnimationProps(0.2)}>
          <div className="section-header">
            <h2>All Courses</h2>
            <p>Explore our comprehensive course catalog</p>
          </div>
          <div style={{ marginTop: '1rem', marginBottom: '2rem', maxWidth: '400px' }}>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '14px',
              }}
            />
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
              {courses
                .filter(course =>
                  course.courseName.toLowerCase().includes(search.toLowerCase()) ||
                  course.slug.toLowerCase().includes(search.toLowerCase())
                )
                .map((course, index) => (

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
