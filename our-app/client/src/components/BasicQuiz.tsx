import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BasicQuiz: React.FC = () => {
  const { userId, language, quizLevel } = useParams(); // Remove topic from params
  const topic = 'basic'; // Always use 'basic' as topic
  const [questions, setQuestions] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/users/${userId}/${language}/${quizLevel}/${topic}/questions`)
      .then(res => res.json())
      .then(setQuestions);
  }, [userId, language, quizLevel, topic]);

  const handleAnswer = (ans: string) => {
    setAnswers(prev => {
      const copy = [...prev];
      copy[current] = ans;
      return copy;
    });
  };

  const handleNext = () => setCurrent(c => c + 1);
  const handlePrev = () => setCurrent(c => c - 1);

  const handleSubmit = () => {
    fetch(`/api/users/${userId}/${language}/${quizLevel}/${topic}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userAnswers: answers })
    })
      .then(res => res.json())
      .then(data => {
        setScore(data.score);
        setSubmitted(true);
      });
  };

  if (!questions.length) return <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (submitted) return (
    <div className="container mt-5">
      <div className="alert alert-success text-center shadow-lg p-4 rounded">
        <h2 className="mb-3">Quiz Submitted!</h2>
        <h4>Your Score: <span className="badge bg-primary">{score}</span></h4>
        <button
          className="btn btn-primary mt-4"
          onClick={() => navigate('/initial-setup')}
        >
          Next
        </button>
      </div>
    </div>
  );

  const q = questions[current];

  const questionText = q.questionText || q.question || q.Question;
  const options = q.options || q.Options;

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          {/* Header with progress */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="text-muted mb-0">Question {current + 1} of {questions.length}</h5>
            <span className="badge bg-primary px-3 py-2 rounded-pill">
              {language ? language.charAt(0).toUpperCase() + language.slice(1) : 'Quiz'} - {quizLevel || 'Level'}
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
                {options.map((opt: any, idx: number) => (
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

export default BasicQuiz;