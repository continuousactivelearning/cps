import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizProgression } from '../../hooks/useQuizProgression';

interface Props {
  userId: string;
  language: string;
  onNext?: () => void;
}

const difficulties = [
  { name: 'Easy', key: 'beginner', description: 'Basic concepts and simple problems', color: 'text-success' },
  { name: 'Intermediate', key: 'intermediate', description: 'Moderate complexity problems', color: 'text-warning' },
  { name: 'Hard', key: 'advanced', description: 'Advanced and challenging problems', color: 'text-danger' }
];

const Step1_BasicQuizStart: React.FC<Props> = ({ userId, language, onNext }) => {
  const navigate = useNavigate();
  const topic = 'basic';
  const { completed, lockedUntil, loading, refresh } = useQuizProgression({ userId, language, topic, difficulties });

  const handleStartQuiz = (difficulty: string) => {
    const difficultyOrder = ['beginner', 'intermediate', 'advanced'];
    const currentIndex = difficultyOrder.indexOf(difficulty);
    
    // Check if previous levels are completed (sequential unlock)
    for (let i = 0; i < currentIndex; i++) {
      if (!completed.includes(difficultyOrder[i])) {
        alert(`Please complete ${difficultyOrder[i]} level first before attempting ${difficulty} level.`);
        return;
      }
    }
    
    // Check if this level is locked (already completed)
    if (completed.includes(difficulty)) {
      alert(`You have already completed the ${difficulty} level. Each level can only be attempted once.`);
      return;
    }
    
    // Check if locked due to cooldown
    if (lockedUntil[difficulty]) {
      const unlockDate = new Date(lockedUntil[difficulty]);
      alert(`You have reached the maximum attempts for this level. Please try again after ${unlockDate.toLocaleString()}.`);
      return;
    }
    
    // Navigate to the basic quiz
    navigate(`/users/${userId}/${language}/${difficulty}/basic/quiz`);
  };

  const isDifficultyAvailable = (difficulty: string) => {
    const difficultyOrder = ['beginner', 'intermediate', 'advanced'];
    const currentIndex = difficultyOrder.indexOf(difficulty);
    
    // Check if this level is locked (already completed)
    if (completed.includes(difficulty)) return false;
    
    // First level (beginner) is always available if not locked
    if (currentIndex === 0) return true;
    
    // Other levels require previous levels to be completed
    for (let i = 0; i < currentIndex; i++) {
      if (!completed.includes(difficultyOrder[i])) {
        return false;
      }
    }
    
    return true;
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">Select Difficulty Level</h1>
        <p className="lead text-muted">Choose your preferred difficulty for <span className="fw-bold text-primary">{language}</span> DSA questions</p>
      </div>
      
      <div className="row g-4 justify-content-center">
        {difficulties.map(d => (
          <div key={d.key} className="col-lg-4 col-md-6">
            <div 
              className={`card h-100 border-0 text-center cursor-pointer ${
                completed.includes(d.key) 
                  ? 'bg-success bg-opacity-10 border-success border-2' 
                  : !isDifficultyAvailable(d.key)
                    ? 'bg-light border-secondary border-2'
                    : 'shadow-sm'
              }`}
              style={{ 
                cursor: completed.includes(d.key) || !isDifficultyAvailable(d.key) ? 'not-allowed' : 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: 'translateY(0)',
                opacity: completed.includes(d.key) || !isDifficultyAvailable(d.key) ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!completed.includes(d.key) && isDifficultyAvailable(d.key)) {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (!completed.includes(d.key) && isDifficultyAvailable(d.key)) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
                }
              }}
            >
              <div className="card-body py-5">
                <div className="mb-3">
                  {completed.includes(d.key) ? (
                    <div className="text-success">
                      <i className="fas fa-check-circle fa-3x"></i>
                      <div className="mt-2">
                        <span className="badge bg-success px-3 py-2">Completed</span>
                      </div>
                    </div>
                  ) : !isDifficultyAvailable(d.key) ? (
                    <div className="text-secondary">
                      <i className="fas fa-lock fa-3x"></i>
                      <div className="mt-2">
                        <span className="badge bg-secondary px-3 py-2">Locked</span>
                      </div>
                    </div>
                  ) : (
                    <div className={d.color}>
                      <i className="fas fa-play-circle fa-3x"></i>
                      <div className="mt-2">
                        <span className="badge bg-primary px-3 py-2">Available</span>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className={`card-title fw-bold mb-3 ${d.color}`}>
                  {d.name}
                </h3>
                <p className="card-text text-muted mb-4">{d.description}</p>
                <button
                  className={`btn ${
                    completed.includes(d.key) 
                      ? 'btn-success' 
                      : !isDifficultyAvailable(d.key)
                        ? 'btn-secondary'
                        : 'btn-outline-primary'
                  }`}
                  onClick={() => {
                    if (completed.includes(d.key)) {
                      alert(`You have already completed the ${d.key} level!`);
                    } else if (!isDifficultyAvailable(d.key)) {
                      const difficultyOrder = ['beginner', 'intermediate', 'advanced'];
                      const currentIndex = difficultyOrder.indexOf(d.key);
                      if (currentIndex > 0) {
                        alert(`Please complete ${difficultyOrder[currentIndex - 1]} level first!`);
                      }
                    } else {
                      handleStartQuiz(d.key);
                    }
                  }}
                  disabled={completed.includes(d.key) || !isDifficultyAvailable(d.key)}
                >
                  {completed.includes(d.key) 
                    ? 'Completed' 
                    : !isDifficultyAvailable(d.key)
                      ? 'Locked'
                      : 'Start Quiz'
                  }
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
              : 'Continue to Assessment →'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Step1_BasicQuizStart;