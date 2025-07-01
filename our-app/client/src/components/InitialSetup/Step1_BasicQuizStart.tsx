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
    for (let i = 0; i < currentIndex; i++) {
      if (!completed.includes(difficultyOrder[i])) {
        alert(`Please complete ${difficultyOrder[i]} level first before attempting ${difficulty} level.`);
        return;
      }
    }
    if (lockedUntil[difficulty]) {
      const unlockDate = new Date(lockedUntil[difficulty]);
      alert(`You have reached the maximum attempts for this level. Please try again after ${unlockDate.toLocaleString()}.`);
      return;
    }
    navigate(`/users/${userId}/${language}/${difficulty}/basic/quiz`);
  };

  const isDifficultyAvailable = (difficulty: string) => {
    const difficultyOrder = ['beginner', 'intermediate', 'advanced'];
    const currentIndex = difficultyOrder.indexOf(difficulty);
    if (currentIndex === 0) return !lockedUntil[difficulty];
    for (let i = 0; i < currentIndex; i++) {
      if (!completed.includes(difficultyOrder[i])) {
        return false;
      }
    }
    if (lockedUntil[difficulty]) return false;
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
        {difficulties.map(d => {
          const isCompleted = completed.includes(d.key);
          const isAvailable = isDifficultyAvailable(d.key);
          const isLocked = !isAvailable && !isCompleted;
          
          return (
            <div key={d.key} className="col-lg-4 col-md-6">
              <div 
                className={`card h-100 border-0 text-center ${
                  isCompleted 
                    ? 'bg-light border-success border-2' 
                    : isLocked 
                    ? 'bg-light border-secondary border-1 opacity-50'
                    : 'shadow-sm cursor-pointer'
                }`}
                style={{ 
                  cursor: isCompleted || isLocked ? 'not-allowed' : 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  transform: 'translateY(0)',
                  opacity: isCompleted ? 0.8 : isLocked ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (isAvailable && !isCompleted) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isAvailable && !isCompleted) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
                  }
                }}
              >
                <div className="card-body py-5">
                  <h3 className={`card-title fw-bold mb-3 ${d.color}`}>
                    {d.name}
                    {isCompleted && <span className="ms-2 text-success">✓</span>}
                    {isLocked && <span className="ms-2 text-muted">🔒</span>}
                  </h3>
                  <p className="card-text text-muted mb-4">
                    {d.description}
                    {isLocked && (
                      <><br/><small className="text-warning">Complete previous levels first</small></>
                    )}
                  </p>
                  <button
                    className={`btn ${
                      isCompleted 
                        ? 'btn-success' 
                        : isLocked 
                        ? 'btn-secondary' 
                        : 'btn-outline-primary'
                    }`}
                    onClick={() => handleStartQuiz(d.key)}
                    disabled={isCompleted || isLocked || Boolean(lockedUntil[d.key])}
                  >
                    {isCompleted 
                      ? 'Completed' 
                      : lockedUntil[d.key]
                      ? `Locked (${new Date(lockedUntil[d.key]).toLocaleTimeString()})`
                      : isLocked 
                      ? 'Locked' 
                      : 'Start Quiz'
                    }
                  </button>
                </div>
              </div>
            </div>
          );
        })}
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