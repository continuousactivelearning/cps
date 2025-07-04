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

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  category: string;
  icon: string;
  color: string;
}

interface StudentCoursesProps {
  user: User;
  onCourseSelect: (courseTitle: string) => void;
}

const StudentCourses: React.FC<StudentCoursesProps> = ({ onCourseSelect }) => {
  // Course data from StudentDashboard
  const availableCourses: Course[] = [
    {
      id: 1,
      title: 'Machine Learning',
      description: 'Learn the fundamentals of machine learning algorithms and their applications',
      duration: '8-12 weeks',
      difficulty: 'Intermediate',
      category: 'AI & Data Science',
      icon: '🤖',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Artificial Intelligence',
      description: 'Explore the world of AI, neural networks, and intelligent systems',
      duration: '10-14 weeks',
      difficulty: 'Advanced',
      category: 'AI & Data Science',
      icon: '🧠',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Master data analysis, visualization, and statistical modeling',
      duration: '6-10 weeks',
      difficulty: 'Intermediate',
      category: 'AI & Data Science',
      icon: '📊',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Web Development',
      description: 'Build modern web applications with React, Node.js, and databases',
      duration: '8-12 weeks',
      difficulty: 'Beginner',
      category: 'Software Development',
      icon: '💻',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      description: 'Create iOS and Android apps using React Native and Flutter',
      duration: '10-14 weeks',
      difficulty: 'Intermediate',
      category: 'Software Development',
      icon: '📱',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      description: 'Learn about network security, cryptography, and ethical hacking',
      duration: '8-12 weeks',
      difficulty: 'Advanced',
      category: 'Security',
      icon: '🔒',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return '#10b981';
      case 'Intermediate': return '#f59e0b';
      case 'Advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
          Popular Learning Topics (Examples)
        </h1>
        <p style={{
          fontSize: 18,
          margin: 0,
          opacity: 0.9,
        }}>
          These are just a few examples. You can start learning any topic you want—just enter your subject of interest!
        </p>
      </div>

      {/* Course Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 24,
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        {availableCourses.map((course) => (
          <div
            key={course.id}
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
          >
            {/* Course Icon */}
            <div style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: course.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              marginBottom: 16,
            }}>
              {course.icon}
            </div>

            {/* Course Title */}
            <h3 style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#1f2937',
              margin: '0 0 8px 0',
            }}>
              {course.title}
            </h3>

            {/* Course Category */}
            <p style={{
              fontSize: 14,
              color: '#6b7280',
              margin: '0 0 12px 0',
              fontWeight: 500,
            }}>
              {course.category}
            </p>

            {/* Course Description */}
            <p style={{
              fontSize: 16,
              color: '#4b5563',
              lineHeight: 1.5,
              margin: '0 0 16px 0',
            }}>
              {course.description}
            </p>

            {/* Course Details */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 20,
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}>
                <span style={{ fontSize: 16 }}>⏱️</span>
                <span style={{
                  fontSize: 14,
                  color: '#6b7280',
                  fontWeight: 500,
                }}>
                  {course.duration}
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}>
                <span style={{ fontSize: 16 }}>📊</span>
                <span style={{
                  fontSize: 14,
                  color: getDifficultyColor(course.difficulty),
                  fontWeight: 600,
                }}>
                  {course.difficulty}
                </span>
              </div>
            </div>

            {/* Start Learning Button */}
            <button
              onClick={() => onCourseSelect(course.title)}
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
              Start Learning 🚀
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
