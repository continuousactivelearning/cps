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

interface StudentHomeProps {
  user: User;
}

const StudentHome: React.FC<StudentHomeProps> = ({ user }) => {
  return (
    <div style={{
      padding: 24,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh'
    }}>
      <div style={{
        background: 'white',
        borderRadius: 20,
        padding: 40,
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        maxWidth: 500,
        width: '100%'
      }}>
        <h1 style={{
          fontSize: 32,
          fontWeight: 700,
          margin: '0 0 8px 0',
          color: '#1f2937'
        }}>
          Hi, <span style={{ color: '#10b981' }}>{user.username}</span>! 👋
        </h1>

        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 32,
          color: 'white',
          fontWeight: 600,
          margin: '20px auto',
        }}>
          {user.avatar ? (
            <img src={user.avatar} alt="avatar" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
          ) : (
            user.username.charAt(0).toUpperCase()
          )}
        </div>

        <p style={{
          color: '#6b7280',
          marginTop: 16,
          fontSize: 16,
          lineHeight: 1.6
        }}>
          Welcome to LearnPath! Your AI-powered learning companion that creates personalized learning journeys. Discover topics, take quizzes, and follow custom learning paths designed just for you.
        </p>

        <button style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: 25,
          padding: '12px 24px',
          fontSize: 16,
          fontWeight: 600,
          cursor: 'pointer',
          marginTop: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          margin: '24px auto 0',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(102,126,234,0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          Get Started 🚀
        </button>
      </div>
    </div>
  );
};

export default StudentHome;
