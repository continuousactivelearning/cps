import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

const CustomQuiz: React.FC = () => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get('level') || 'beginner';
  const [questions, setQuestions] = useState<any[]>([]);
  const [quizId, setQuizId] = useState<string>('');
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/users/${userId}/quiz/${difficulty}/questions`)
      .then(res => res.json())
      .then(data => {
        // If backend returns the quiz object, not just questions
        if (Array.isArray(data.questions)) {
          setQuestions(data.questions);
          setQuizId(data._id || '');
        } else if (Array.isArray(data)) {
          setQuestions(data);
        } else {
          setQuestions([]);
        }
      });
  }, [userId, difficulty]);

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
    fetch(`/api/users/${userId}/quiz/${difficulty}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quizId, userAnswers: answers })
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

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4 rounded">
            <h3 className="card-title text-center mb-4 text-info">Custom Quiz - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h3>
            <div className="mb-4">
              <div className="fw-bold fs-5 mb-3">Q{current + 1}. {q.Question}</div>
              {q.Options.map((opt: string, idx: number) => (
                <div className="form-check mb-2" key={idx}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`q${current}`}
                    id={`q${current}_opt${idx}`}
                    checked={answers[current] === opt}
                    onChange={() => handleAnswer(opt)}
                  />
                  <label className="form-check-label" htmlFor={`q${current}_opt${idx}`}>{opt}</label>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-between">
              {current > 0 && <button className="btn btn-outline-secondary" onClick={handlePrev}>Previous</button>}
              {current < questions.length - 1 && <button className="btn btn-primary ms-auto" onClick={handleNext}>Next</button>}
              {current === questions.length - 1 && <button className="btn btn-success ms-auto" onClick={handleSubmit}>Submit</button>}
            </div>
            <div className="mt-4 text-center text-muted">
              Question {current + 1} of {questions.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomQuiz;