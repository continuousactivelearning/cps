import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const CustomQuiz: React.FC = () => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get('level') || 'beginner';
  const context = searchParams.get('context') || 'dashboard'; // 'setup' or 'dashboard'
  const [questions, setQuestions] = useState<any[]>([]);
  const [customQuizId, setCustomQuizId] = useState<string>('');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [review, setReview] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAvailabilityAndCreateQuiz = async () => {
      try {
        // First check if this level is available for the user
        const userRes = await axios.get(`/api/users/${userId}`);
        const userData = userRes.data;
        
        // Get all custom quizzes for this user to check progression
        const customQuizzesRes = await axios.get(`/api/users/${userId}/custom-quizzes`);
        const allCustomQuizzes = customQuizzesRes.data.customQuizzes || [];
        
        // Check if this level is already completed
        const levelCompleted = allCustomQuizzes.some((quiz: any) => 
          quiz.quizLevel === difficulty && quiz.isSubmitted
        );
        
        if (levelCompleted) {
          alert(`You have already completed the ${difficulty} level! Each level can only be attempted once.`);
          navigate('/initial-setup');
          return;
        }
        
        // Check if user can access this level (sequential unlock)
        const difficultyOrder = ['beginner', 'intermediate', 'advanced'];
        const currentIndex = difficultyOrder.indexOf(difficulty);
        
        if (currentIndex > 0) {
          // Check if previous levels are completed
          for (let i = 0; i < currentIndex; i++) {
            const prevLevel = difficultyOrder[i];
            const prevLevelCompleted = allCustomQuizzes.some((quiz: any) => 
              quiz.quizLevel === prevLevel && quiz.isSubmitted
            );
            
            if (!prevLevelCompleted) {
              alert(`Please complete ${prevLevel} level first before attempting ${difficulty} level.`);
              navigate('/initial-setup');
              return;
            }
          }
        }
        
        // If we reach here, the user can access this level
        const userLang = userData.lang || 'java';
        
        // Create custom quiz for user based on enrolled courses
        const res = await axios.post(`/api/users/${userId}/custom-quiz?lang=${userLang}&level=${difficulty}&totalQuestions=15`);
        
        if (res.data.customQuiz) {
          setCustomQuizId(res.data.customQuiz._id);
          setQuestions(res.data.customQuiz.customQuestions || []);
        }
      } catch (error) {
        console.error('Error creating custom quiz:', error);
        setQuestions([]);
      }
    };

    if (userId) {
      checkAvailabilityAndCreateQuiz();
    }
  }, [userId, difficulty, navigate]);

  // Fetch review after submission
  useEffect(() => {
    if (submitted && userId && customQuizId) {
      axios.get(`/api/users/${userId}/custom-quiz/${customQuizId}`).then(res => {
        setReview(res.data);
      }).catch(() => setReview(null));
    }
  }, [submitted, userId, customQuizId]);

  const handleAnswer = (ans: string) => {
    setAnswers(prev => {
      const copy = [...prev];
      copy[current] = ans;
      return copy;
    });
  };

  const handleNext = () => setCurrent(c => c + 1);
  const handlePrev = () => setCurrent(c => c - 1);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`/api/users/${userId}/custom-quiz/${customQuizId}/submit`, {
        answers
      });
      setScore(res.data.results?.score ?? res.data.score);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting custom quiz:', error);
      alert('Failed to submit quiz. Please try again.');
    }
  };

  // Helper to get correct/incorrect count from review if available
  const correctCount = review?.results?.correctAnswers ?? (score || 0);
  const incorrectCount = questions.length - correctCount;

  // Calculate percentage based on correct answers and total questions
  const percentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  // Function to get next difficulty level
  const getNextLevel = (): string | null => {
    if (difficulty === 'beginner') return 'intermediate';
    if (difficulty === 'intermediate') return 'advanced';
    return null; // No next level after advanced
  };

  const getNextLevelDisplay = (): string => {
    const nextLevel = getNextLevel();
    return nextLevel ? nextLevel.charAt(0).toUpperCase() + nextLevel.slice(1) : '';
  };

  const handleNextLevel = () => {
    if (context === 'setup') {
      // During initial setup, go back to initial setup flow
      navigate('/initial-setup');
    } else {
      // From dashboard, navigate to next level quiz
      const nextLevel = getNextLevel();
      if (nextLevel) {
        navigate(`/users/${userId}/quiz?level=${nextLevel}&context=dashboard`);
      }
    }
  };

  const handleCompletion = () => {
    if (context === 'setup') {
      // During initial setup, continue to setup flow
      navigate('/initial-setup');
    } else {
      // From dashboard, go to dashboard
      navigate('/dashboard');
    }
  };

  if (!questions.length) return <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  
  if (submitted) return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center mb-4">
        {/* Score Circle */}
        <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, #ff9800 60%, #1976d2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <span style={{ color: 'white', fontWeight: 700, fontSize: 32 }}>{score}</span>
        </div>
        
        <h3 className="mb-4 text-center fw-bold" style={{ letterSpacing: 1 }}>Quiz Completed!</h3>
        
        {/* Stats Row */}
        <div className="row w-100 justify-content-center mb-4">
          <div className="col-6 col-md-2 mb-2">
            <div className="card text-center border-0 shadow-sm" style={{ background: '#f5f7fa' }}>
              <div className="card-body p-3">
                <div style={{ fontSize: 20, color: '#1976d2', fontWeight: 600 }}>{questions.length}</div>
                <div style={{ fontSize: 14, color: '#888' }}>Total</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-2">
            <div className="card text-center border-0 shadow-sm" style={{ background: '#e9fbe5' }}>
              <div className="card-body p-3">
                <div style={{ fontSize: 20, color: '#388e3c', fontWeight: 600 }}>{correctCount}</div>
                <div style={{ fontSize: 14, color: '#388e3c' }}>Correct</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-2">
            <div className="card text-center border-0 shadow-sm" style={{ background: '#ffebee' }}>
              <div className="card-body p-3">
                <div style={{ fontSize: 20, color: '#d32f2f', fontWeight: 600 }}>{incorrectCount}</div>
                <div style={{ fontSize: 14, color: '#d32f2f' }}>Wrong</div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-2">
            <div className="card text-center border-0 shadow-sm" style={{ background: '#e8f5e8' }}>
              <div className="card-body p-3">
                <div style={{ fontSize: 20, color: '#2e7d32', fontWeight: 600 }}>{percentage}%</div>
                <div style={{ fontSize: 14, color: '#2e7d32' }}>Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex gap-3 mb-4">
          {getNextLevel() ? (
            <button className="btn btn-primary px-4 py-2 fw-bold" onClick={handleNextLevel}>
              Continue to {getNextLevelDisplay()}
            </button>
          ) : (
            <button className="btn btn-success px-4 py-2 fw-bold" onClick={handleCompletion}>
              {context === 'setup' ? 'Continue Setup' : 'Go to Dashboard'}
            </button>
          )}
          <button className="btn btn-outline-secondary px-4 py-2" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>
            View Review
          </button>
        </div>
      </div>

      {/* Quiz Review Section */}
      <div className="container">
        <h4 className="fw-bold mb-4 text-center">Quiz Review</h4>
        {questions.map((question, qIdx) => {
          const userAnswer = answers[qIdx];
          const isCorrect = userAnswer === question.correctOption;
          
          return (
            <div key={qIdx} className="card mb-4 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <span className="fw-bold me-2" style={{ color: '#1976d2', fontSize: 18 }}>Q{qIdx + 1}.</span>
                  <span className="fw-bold flex-grow-1" style={{ fontSize: 17 }}>{question.questionText}</span>
                  <span className={`badge ${isCorrect ? 'bg-success' : 'bg-danger'}`} style={{ fontSize: 14 }}>
                    {isCorrect ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
                
                <div className="d-flex flex-column gap-2">
                  {question.options.map((option: any, optIdx: number) => {
                    let className = 'px-3 py-2 rounded border d-flex align-items-center';
                    let style: React.CSSProperties = { fontWeight: 500 };
                    
                    // Correct answer styling
                    if (option.optionTag === question.correctOption) {
                      className += ' border-success';
                      style = { ...style, backgroundColor: '#d1e7dd', borderColor: '#198754', color: '#198754' };
                    }
                    // User's wrong answer styling
                    else if (option.optionTag === userAnswer && userAnswer !== question.correctOption) {
                      className += ' border-danger';
                      style = { ...style, backgroundColor: '#f8d7da', borderColor: '#dc3545', color: '#dc3545' };
                    }
                    // Default styling
                    else {
                      className += ' border-light';
                      style = { ...style, backgroundColor: '#f8f9fa', color: '#6c757d' };
                    }

                    return (
                      <div key={optIdx} className={className} style={style}>
                        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px', fontSize: '14px', fontWeight: 'bold', color: '#495057' }}>
                          {option.optionTag}
                        </div>
                        <span>{option.optionText}</span>
                        {option.optionTag === question.correctOption && (
                          <i className="fas fa-check-circle text-success ms-auto"></i>
                        )}
                        {option.optionTag === userAnswer && userAnswer !== question.correctOption && (
                          <i className="fas fa-times-circle text-danger ms-auto"></i>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-3 p-3 bg-light rounded">
                  <div className="row">
                    <div className="col-md-4">
                      <small className="text-muted">Your Answer:</small>
                      <div className="fw-bold">{userAnswer || 'Not answered'}</div>
                    </div>
                    <div className="col-md-4">
                      <small className="text-muted">Correct Answer:</small>
                      <div className="fw-bold text-success">{question.correctOption}</div>
                    </div>
                    <div className="col-md-4">
                      <small className="text-muted">Points:</small>
                      <div className="fw-bold">{isCorrect ? question.score : 0}/{question.score}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Bottom Navigation */}
        <div className="text-center py-4">
          {getNextLevel() ? (
            <button className="btn btn-primary btn-lg px-5 py-3 fw-bold" onClick={handleNextLevel}>
              Continue to {getNextLevelDisplay()} Level
            </button>
          ) : (
            <button className="btn btn-success btn-lg px-5 py-3 fw-bold" onClick={handleCompletion}>
              {context === 'setup' ? 'Continue Setup' : 'Complete Setup - Go to Dashboard'}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const q = questions[current];

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          {/* Header with progress */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="text-muted mb-0">Question {current + 1} of {questions.length}</h5>
            <span className="badge bg-primary px-3 py-2 rounded-pill">
              Custom Quiz - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="progress mb-4" style={{ height: '8px' }}>
            <div 
              className="progress-bar bg-primary" 
              role="progressbar" 
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          
          {/* Main question card */}
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <div className="card-body">
              <h2 className="h4 fw-bold mb-4">{q.questionText}</h2>
              
              <div className="d-grid gap-3">
                {q.options.map((option: any, idx: number) => (
                  <div 
                    key={idx}
                    className={`card border-2 cursor-pointer ${answers[current] === option.optionTag ? 'border-primary bg-primary bg-opacity-10' : 'border-light'}`}
                    style={{ 
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => handleAnswer(option.optionTag)}
                    onMouseEnter={(e) => {
                      if (answers[current] !== option.optionTag) {
                        e.currentTarget.style.borderColor = '#0d6efd';
                        e.currentTarget.style.backgroundColor = '#f8f9ff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (answers[current] !== option.optionTag) {
                        e.currentTarget.style.borderColor = '#dee2e6';
                        e.currentTarget.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    <div className="card-body py-3 d-flex align-items-center">
                      <div 
                        className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${answers[current] === option.optionTag ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                        style={{ width: '40px', height: '40px', fontSize: '16px', fontWeight: 'bold' }}
                      >
                        {option.optionTag}
                      </div>
                      <span className="fs-5">{option.optionText}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="d-flex justify-content-end gap-2">
            {current > 0 && (
              <button 
                className="btn btn-outline-secondary px-4"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}
            {current < questions.length - 1 ? (
              <button 
                className="btn btn-primary px-4"
                onClick={handleNext}
                disabled={!answers[current]}
              >
                Next Question
              </button>
            ) : (
              <button 
                className="btn btn-success px-4"
                onClick={handleSubmit}
                disabled={!answers[current]}
              >
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomQuiz;