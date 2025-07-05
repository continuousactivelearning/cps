import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BasicQuiz: React.FC = () => {
  // Get userId from localStorage or context if not passed as prop
  let userId = localStorage.getItem('userId') || '';
  // If userId is in the route, extract from params (for /users/:id/:lang/:level/:topic/quiz)
  const { id, lang, level, topic } = useParams();
  if (id) userId = id;

  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [review, setReview] = useState<any>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAvailabilityAndFetchQuestions = async () => {
      try {
        // First check if this level is available for the user
        const userRes = await axios.get(`/api/users/${userId}`);
        const user = userRes.data;
        
        if (topic === 'basic') {
          // Find attempts for this specific level and topic for basic quizzes
          const levelAttempts = user.quizzes.filter((q: any) => {
            if (typeof q.quizId === 'object' && q.quizId?.lang === lang && 
                q.quizId?.quizLevel === level && q.quizId?.topic?.courseName === topic) {
              return true;
            }
            return false;
          });
          
          // Check if this level is already completed (strict one-attempt blocking)
          const levelCompleted = levelAttempts.length > 0;
          
          if (levelCompleted) {
            alert(`You have already completed the ${level} level basic quiz! Each level can only be attempted once.`);
            // Redirect to appropriate next level for basic quizzes
            if (level === 'beginner') {
              navigate(`/users/${userId}/${lang}/intermediate/basic/quiz`, { replace: true });
            } else if (level === 'intermediate') {
              navigate(`/users/${userId}/${lang}/advanced/basic/quiz`, { replace: true });
            } else if (level === 'advanced') {
              navigate('/initial-setup?step=2', { replace: true }); // Go to assessment step
            }
            return;
          }
        } else {
          // For topic quizzes, check if user has passed (≥60%)
          const levelAttempts = user.quizzes.filter((q: any) => {
            if (typeof q.quizId === 'object' && q.quizId?.lang === lang && 
                q.quizId?.quizLevel === level && q.quizId?.topic?.courseName === topic) {
              return true;
            }
            return false;
          });
          
          // Check if user has a passing attempt (≥60%) for topic quizzes
          const passedAttempt = levelAttempts.find((attempt: any) => {
            const score = attempt.userScore || 0;
            const total = attempt.userAnswers?.length || 10;
            return (score / total) >= 0.6;
          });
          
          if (passedAttempt) {
            const passedPercentage = Math.round((passedAttempt.userScore / (passedAttempt.userAnswers?.length || 10)) * 100);
            alert(`You have already passed ${topic} ${level} level with ${passedPercentage}%!`);
            navigate(`/users/${userId}/${lang}/course/${encodeURIComponent(topic!)}`, { replace: true });
            return;
          }
        }
        
        // If we reach here, the user can access this level - fetch questions
        const res = await axios.get(`/api/users/${userId}/${lang}/${level}/${topic}/questions`);
        setQuestions(res.data.questions || []);
        
      } catch (error) {
        console.error('Error checking availability or fetching questions:', error);
        setQuestions([]);
      }
    };

    if (userId && lang && level && topic) {
      checkAvailabilityAndFetchQuestions();
    }
  }, [userId, lang, level, topic, navigate]);

  // Fetch review after submission
  useEffect(() => {
    if (submitted && userId && lang && level && topic) {
      axios.get(`/api/users/${userId}/${lang}/${level}/${topic}/review`).then(res => {
        setReview(res.data);
      }).catch(() => setReview(null));
    }
  }, [submitted, userId, lang, level, topic]);

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
      const res = await axios.post(`/api/users/${userId}/${lang}/${level}/${topic}/submit`, {
        answers
      });
      setScore(res.data.results?.score ?? res.data.score);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting quiz:', error);
      alert('Failed to submit quiz. Please try again.');
    }
  };

  // Helper to get correct/incorrect count - use actual answers submitted
  const correctCount = questions.filter((q, idx) => {
    const userAnswer = answers[idx];
    const correctAnswer = q?.correctOption;
    return userAnswer === correctAnswer;
  }).length;
  const incorrectCount = questions.length - correctCount;

  // Calculate percentage based on correct answers and total questions
  const percentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  // Function to get next difficulty level for basic quiz
  const getNextLevel = (): string | null => {
    if (level === 'beginner') return 'intermediate';
    if (level === 'intermediate') return 'advanced';
    return null; // No next level after advanced
  };

  const getNextLevelDisplay = (): string => {
    const nextLevel = getNextLevel();
    return nextLevel ? nextLevel.charAt(0).toUpperCase() + nextLevel.slice(1) : '';
  };

  const handleNextLevel = () => {
    if (topic === 'basic') {
      // For basic quizzes, always go back to initial setup flow, just like CustomQuiz
      navigate('/initial-setup');
    } else {
      // For course quizzes, return to the CourseQuiz selector
      navigate(`/users/${userId}/${lang}/course/${encodeURIComponent(topic!)}`);
    }
  };

  const handleCompletion = () => {
    if (topic === 'basic') {
      // After advanced basic quiz, go to assessment step
      navigate('/initial-setup?step=2');
    } else {
      // For course quizzes, return to the CourseQuiz selector or dashboard
      navigate(`/users/${userId}/${lang}/course/${encodeURIComponent(topic!)}`);
    }
  };

  if (!questions.length) return <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  
  if (submitted) return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center mb-4">
        {/* Score Circle */}
        <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, #ff9800 60%, #1976d2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <span style={{ color: 'white', fontWeight: 700, fontSize: 32 }}>{correctCount}</span>
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
              Continue to Assessment
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
                      <div className="fw-bold">{isCorrect ? 1 : 0}/1</div>
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
              Continue to Assessment
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const q = questions && questions[current] ? questions[current] : {};
  const questionText = q.questionText || q.question || q.Question || '';
  const options = Array.isArray(q.options)
    ? q.options
    : Array.isArray(q.Options)
      ? q.Options
      : [];

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          {/* Header with progress */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="text-muted mb-0">Question {current + 1} of {questions.length}</h5>
            <span className="badge bg-primary px-3 py-2 rounded-pill">
              {lang ? lang.charAt(0).toUpperCase() + lang.slice(1) : 'Quiz'} - {level || 'Level'}
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
              <h2 className="h4 fw-bold mb-4">{questionText}</h2>
              
              <div className="d-grid gap-3">
                {Array.isArray(options) && options.length > 0 ? (
                  options.map((opt: any, idx: number) => (
                    <div 
                      key={idx}
                      className={`card border-2 cursor-pointer ${answers[current] === opt.optionTag ? 'border-primary bg-primary bg-opacity-10' : 'border-light'}`}
                      style={{ 
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onClick={() => handleAnswer(opt.optionTag)}
                      onMouseEnter={(e) => {
                        if (answers[current] !== opt.optionTag) {
                          e.currentTarget.style.borderColor = '#0d6efd';
                          e.currentTarget.style.backgroundColor = '#f8f9ff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (answers[current] !== opt.optionTag) {
                          e.currentTarget.style.borderColor = '#dee2e6';
                          e.currentTarget.style.backgroundColor = 'white';
                        }
                      }}
                    >
                      <div className="card-body py-3 d-flex align-items-center">
                        <div 
                          className={`rounded-circle d-flex align-items-center justify-content-center me-3 ${answers[current] === opt.optionTag ? 'bg-primary text-white' : 'bg-light text-dark'}`}
                          style={{ width: '40px', height: '40px', fontSize: '16px', fontWeight: 'bold' }}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="fs-5">{opt.optionText}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="alert alert-warning">No options available for this question.</div>
                )}
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

export default BasicQuiz;