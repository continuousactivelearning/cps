import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface Props {
  userId: string;
  onNext: () => void;
}

const difficulties = [
  { name: 'Easy', key: 'beginner', description: 'Basic concepts and simple problems', color: 'text-success' },
  { name: 'Intermediate', key: 'intermediate', description: 'Moderate complexity problems', color: 'text-warning' },
  { name: 'Hard', key: 'advanced', description: 'Advanced and challenging problems', color: 'text-danger' }
];

const Step3_CustomQuizStart: React.FC<Props> = ({ userId, onNext }) => {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user dashboard to get completed custom quizzes
    axios.get(`/api/users/${userId}/dashboard`).then(res => {
      const customQuizInfos = res.data.customQuizzes || [];
      // Get completed custom quiz levels
      const done = customQuizInfos
        .filter((q: any) => q.quizId && q.quizId.level)
        .map((q: any) => q.quizId.level);
      setCompleted(done);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [userId]);

  const handleStartQuiz = (difficulty: string) => {
    // Navigate to custom quiz with difficulty level
    navigate(`/users/${userId}/quiz?level=${difficulty}`);
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Select Difficulty Level</h1>
        <p className="lead text-muted">Choose your preferred difficulty for <span className="fw-bold text-primary">Custom</span> DSA questions</p>
      </div>
      
      <div className="row g-4 justify-content-center">
        {difficulties.map(d => (
          <div key={d.key} className="col-lg-4 col-md-6">
            <div 
              className={`card h-100 border-0 text-center cursor-pointer ${completed.includes(d.key) ? 'bg-light border-success border-2' : 'shadow-sm'}`}
              style={{ 
                cursor: completed.includes(d.key) ? 'not-allowed' : 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: 'translateY(0)',
                opacity: completed.includes(d.key) ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!completed.includes(d.key)) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (!completed.includes(d.key)) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
                }
              }}
            >
              <div className="card-body py-5">
                <h3 className={`card-title fw-bold mb-3 ${d.color}`}>
                  {d.name}
                  {completed.includes(d.key) && <span className="ms-2 text-success">✓</span>}
                </h3>
                <p className="card-text text-muted mb-4">{d.description}</p>
                <button
                  className={`btn ${completed.includes(d.key) ? 'btn-success' : 'btn-outline-primary'}`}
                  onClick={() => handleStartQuiz(d.key)}
                  disabled={completed.includes(d.key)}
                >
                  {completed.includes(d.key) ? 'Completed' : 'Start Quiz'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {completed.length > 0 && (
        <div className="text-center mt-5">
          <div className="mb-3">
            <small className="text-muted">Progress: {completed.length}/3 levels completed</small>
          </div>
          <button
            className="btn btn-primary btn-lg px-5"
            disabled={completed.length < 3}
            onClick={() => onNext && onNext()}
          >
            {completed.length < 3
              ? `Complete ${3 - completed.length} more level${3 - completed.length > 1 ? 's' : ''} to continue`
              : 'Continue to Path Selection →'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Step3_CustomQuizStart;