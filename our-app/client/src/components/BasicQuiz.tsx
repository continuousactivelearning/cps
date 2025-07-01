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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`/api/users/${userId}/${lang}/${level}/${topic}/questions`);
        setQuestions(res.data.questions || []);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setQuestions([]);
      }
    };

    if (userId && lang && level && topic) {
      fetchQuestions();
    }
  }, [userId, lang, level, topic]);

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

  // Helper to get correct/incorrect count from review if available
  const correctCount = review?.results?.correctAnswers ?? (review?.attempts && review.attempts.length > 0 ? review.attempts[review.attempts.length-1].answers.filter((ans: string, idx: number) => {
    const q = questions[idx];
    return ans === q?.correctOption;
  }).length : 0);
  const incorrectCount = questions.length - correctCount;

  // Calculate percentage based on correct answers and total questions
  const percentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  if (!questions.length) return <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (submitted) return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center">
        {/* Score Circle */}
        <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, #ff9800 60%, #1976d2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <span style={{ color: 'white', fontWeight: 700, fontSize: 32 }}>{percentage}%</span>
        </div>
        {/* Stats Row */}
        <div className="row w-100 justify-content-center mb-4">
          <div className="col-6 col-md-2 mb-2">
            <div className="card text-center border-0 shadow-sm" style={{ background: '#f5f7fa' }}>
              <div className="card-body p-3">
                <div style={{ fontSize: 20, color: '#1976d2', fontWeight: 600 }}>{questions.length}</div>
                <div style={{ fontSize: 14, color: '#888' }}>Total Questions</div>
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
            <div className="card text-center border-0 shadow-sm" style={{ background: '#fdeaea' }}>
              <div className="card-body p-3">
                <div style={{ fontSize: 20, color: '#d32f2f', fontWeight: 600 }}>{incorrectCount}</div>
                <div style={{ fontSize: 14, color: '#d32f2f' }}>Incorrect</div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-danger mb-4 px-4 py-2 fw-bold" onClick={() => navigate('/initial-setup')}>Keep Learning!</button>
        <h3 className="mb-4 text-center fw-bold" style={{ letterSpacing: 1 }}>Detailed Review</h3>
        {/* Stats Summary */}
        {review && (
        <div className="row w-100 justify-content-center mb-4">
          <div className="col-md-10">
            <div className="card border-0 shadow-sm mb-4 p-3" style={{ background: '#f8fafd' }}>
              <div className="row text-center">
                <div className="col-6 col-md-3 mb-2"><span style={{ color: '#1976d2', fontWeight: 600 }}>Attempts:</span> {review.statistics?.totalAttempts ?? '-'}</div>
                <div className="col-6 col-md-3 mb-2"><span style={{ color: '#1976d2', fontWeight: 600 }}>Average Score:</span> {review.statistics?.averageScore ?? '-'}</div>
                <div className="col-6 col-md-3 mb-2"><span style={{ color: '#1976d2', fontWeight: 600 }}>Best Score:</span> {review.statistics?.bestScore ?? '-'}</div>
                <div className="col-6 col-md-3 mb-2"><span style={{ color: '#1976d2', fontWeight: 600 }}>Improvement:</span> {review.progress?.improvement ?? '-'}</div>
                <div className="col-12 col-md-12 mb-2"><span style={{ color: '#1976d2', fontWeight: 600 }}>Trend:</span> {review.progress?.trend ?? '-'}</div>
              </div>
            </div>
          </div>
        </div>
        )}
        {/* Question Review Cards */}
        {review && review.attempts && review.attempts.length > 0 && (
        <div className="row w-100 justify-content-center">
          <div className="col-md-10">
            <div className="mb-4">
              {review.attempts[review.attempts.length-1].answers.map((ans: string, idx: number) => {
                const q = questions[idx];
                const correct = q?.correctOption;
                const options = Array.isArray(q?.options) ? q.options : (Array.isArray(q?.Options) ? q.Options : []);
                const isCorrect = ans === correct;
                return (
                  <div key={idx} className={`card mb-4 shadow-sm border-0`}>
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <span className="fw-bold me-2" style={{ color: '#1976d2', fontSize: 18 }}>Q{idx+1}.</span>
                        <span className="fw-bold" style={{ fontSize: 17 }}>{q?.questionText}</span>
                        <span className={`badge ms-auto ${isCorrect ? 'bg-success' : 'bg-danger'}`} style={{ fontSize: 14 }}>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                      </div>
                      <div className="d-flex flex-column gap-2 mb-2">
                        {options.map((opt: any, oidx: number) => {
                          let style: React.CSSProperties = { fontWeight: 500 };
                          let className = 'px-3 py-2 rounded border';
                          if (opt.optionTag === correct) {
                            style = { ...style, backgroundColor: '#d1e7dd', borderColor: '#198754', color: '#198754' };
                            className += ' border-success';
                          }
                          if (opt.optionTag === ans && ans !== correct) {
                            style = { ...style, backgroundColor: '#f8d7da', borderColor: '#dc3545', color: '#dc3545' };
                            className += ' border-danger';
                          }
                          if (opt.optionTag === ans && ans === correct) {
                            style = { ...style, backgroundColor: '#d1e7dd', borderColor: '#198754', color: '#198754' };
                            className += ' border-success';
                          }
                          return (
                            <span key={oidx} className={className} style={style}>
                              <strong>{opt.optionTag}.</strong> {opt.optionText}
                              {opt.optionTag === correct && <span className="ms-2 badge bg-success">Correct Answer</span>}
                              {opt.optionTag === ans && ans !== correct && <span className="ms-2 badge bg-danger">Your Answer</span>}
                              {opt.optionTag === ans && ans === correct && <span className="ms-2 badge bg-success">Your Answer</span>}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        )}
        <button className="btn btn-danger mb-4 px-4 py-2 fw-bold" onClick={() => navigate('/initial-setup')}>Keep Learning!</button>
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