import React from 'react';

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

interface StudentMyCoursesProps {
  user: User;
  onCourseSelect: (courseTitle: string) => void;
}

const StudentMyCourses: React.FC<StudentMyCoursesProps> = ({ user, onCourseSelect }) => {
  // Get user's enrolled topics and learning paths
  const enrolledCourses = user.topics?.map(topic => {
    const learningPath = user.learningPaths?.find(lp => lp.topic === topic);
    const quizScores = user.quizScores?.filter(qs => qs.topic === topic) || [];
    const averageScore = quizScores.length > 0
      ? quizScores.reduce((acc, score) => acc + score.score, 0) / quizScores.length
      : 0;
    const bestScore = quizScores.length > 0
      ? Math.max(...quizScores.map(s => s.score))
      : 0;

    // Get course icon and color based on topic
    const getCourseInfo = (topicName: string) => {
      const courseMap: { [key: string]: { icon: string; color: string; category: string } } = {
        'Machine Learning': { icon: '🤖', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', category: 'AI & Data Science' },
        'Artificial Intelligence': { icon: '🧠', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', category: 'AI & Data Science' },
        'Data Science': { icon: '📊', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', category: 'AI & Data Science' },
        'Web Development': { icon: '💻', color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', category: 'Software Development' },
        'Mobile App Development': { icon: '📱', color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', category: 'Software Development' },
        'Cybersecurity': { icon: '🔒', color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', category: 'Security' },
      };
      return courseMap[topicName] || { icon: '📚', color: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)', category: 'General' };
    };

    const courseInfo = getCourseInfo(topic);

    return {
      topic,
      learningPath,
      quizScores,
      averageScore,
      bestScore,
      attemptsCount: quizScores.length,
      ...courseInfo
    };
  }) || [];

  const getProgressColor = (score: number) => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const getProgressText = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score > 0) return 'Needs Improvement';
    return 'Not Started';
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      minHeight: '100vh',
      padding: '40px 24px',
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: 40,
        color: 'white',
      }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: 700,
          margin: '0 0 16px 0',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}>
          My Learning Journey
        </h1>
        <p style={{
          fontSize: 18,
          margin: 0,
          opacity: 0.9,
        }}>
          Track your progress and continue your learning path
        </p>
      </div>

      {/* Courses Grid */}
      {enrolledCourses.length > 0 ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: 24,
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          {enrolledCourses.map((course, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: 20,
                padding: 24,
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
              onClick={() => onCourseSelect(course.topic)}
            >
              {/* Course Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 20,
              }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: course.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                }}>
                  {course.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#1f2937',
                    margin: '0 0 4px 0',
                  }}>
                    {course.topic}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    color: '#6b7280',
                    margin: 0,
                    fontWeight: 500,
                  }}>
                    {course.category}
                  </p>
                </div>
              </div>

              {/* Progress Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
                marginBottom: 20,
              }}>
                <div style={{
                  background: '#f8fafc',
                  borderRadius: 12,
                  padding: 16,
                  textAlign: 'center',
                  border: '1px solid #e5e7eb',
                }}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#1f2937',
                    marginBottom: 4,
                  }}>
                    {course.attemptsCount}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: '#6b7280',
                  }}>
                    Quiz Attempts
                  </div>
                </div>

                <div style={{
                  background: '#f8fafc',
                  borderRadius: 12,
                  padding: 16,
                  textAlign: 'center',
                  border: '1px solid #e5e7eb',
                }}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: getProgressColor(course.averageScore),
                    marginBottom: 4,
                  }}>
                    {course.averageScore > 0 ? `${course.averageScore.toFixed(1)}%` : 'N/A'}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: '#6b7280',
                  }}>
                    Average Score
                  </div>
                </div>

                <div style={{
                  background: '#f8fafc',
                  borderRadius: 12,
                  padding: 16,
                  textAlign: 'center',
                  border: '1px solid #e5e7eb',
                }}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#10b981',
                    marginBottom: 4,
                  }}>
                    {course.bestScore > 0 ? `${course.bestScore.toFixed(1)}%` : 'N/A'}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: '#6b7280',
                  }}>
                    Best Score
                  </div>
                </div>
              </div>

              {/* Learning Path Info */}
              {course.learningPath && (
                <div style={{
                  background: '#f0f9ff',
                  borderRadius: 12,
                  padding: 16,
                  marginBottom: 20,
                  border: '1px solid #e0f2fe',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 8,
                  }}>
                    <span style={{ fontSize: 16 }}>🛤️</span>
                    <span style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#1f2937',
                    }}>
                      Learning Path Active
                    </span>
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: '#6b7280',
                    lineHeight: 1.4,
                  }}>
                    {course.learningPath.weeks} weeks • {course.learningPath.durationPerDay} daily • {course.learningPath.level} level
                  </div>
                </div>
              )}

              {/* Progress Status */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 16,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}>
                  <div style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: getProgressColor(course.averageScore),
                  }} />
                  <span style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: getProgressColor(course.averageScore),
                  }}>
                    {getProgressText(course.averageScore)}
                  </span>
                </div>
              </div>

              {/* Continue Learning Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCourseSelect(course.topic);
                }}
                style={{
                  width: '100%',
                  background: course.color,
                  color: 'white',
                  border: 'none',
                  borderRadius: 12,
                  padding: '12px 24px',
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Continue Learning 📚
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{
          background: 'white',
          borderRadius: 20,
          padding: 40,
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          maxWidth: 500,
          margin: '0 auto',
        }}>
          <div style={{
            fontSize: 64,
            marginBottom: 16,
          }}>
            📚
          </div>
          <h3 style={{
            fontSize: 24,
            fontWeight: 700,
            color: '#1f2937',
            margin: '0 0 8px 0',
          }}>
            No Courses Yet
          </h3>
          <p style={{
            fontSize: 16,
            color: '#6b7280',
            margin: '0 0 24px 0',
            lineHeight: 1.5,
          }}>
            You haven't enrolled in any courses yet. Browse available courses to start your learning journey!
          </p>
          <button
            onClick={() => window.location.href = '/student/courses'}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: 12,
              padding: '12px 24px',
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(102,126,234,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Browse Courses 🚀
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentMyCourses;
