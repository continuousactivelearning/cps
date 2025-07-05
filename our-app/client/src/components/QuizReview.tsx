import React, { useState, useEffect } from "react";

interface QuizReviewProps {
  attempt: {
    quizId: string;
    userAnswers: string[];
    userScore: number;
    submittedAt: string;
    feedback?: string; // <-- add optional feedback
    type?: string;     // <-- add optional type
    // ...other fields as needed
  };
  onClose: () => void;
}

const QuizReview: React.FC<QuizReviewProps> = ({ attempt, onClose }) => {
  const [questionReviews, setQuestionReviews] = useState<any[]>([]);
  const [quizMeta, setQuizMeta] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("[QuizReview] attempt prop:", attempt);
    if (!attempt || !attempt.quizId) {
      setQuizMeta({ error: "No attempt found", message: "No valid attempt or quizId provided to QuizReview." });
      setLoading(false);
      return;
    }
    const id = String(attempt.quizId);
    const userAnswers = Array.isArray(attempt.userAnswers) ? attempt.userAnswers : [];
    const isCustomQuiz = (typeof attempt.feedback === 'string' && attempt.feedback === 'Custom Quiz') ||
                        (typeof attempt.type === 'string' && attempt.type === 'custom');
    const endpoint = isCustomQuiz ? `/api/custom-quizzes/${id}` : `/api/quizzes/${id}`;

    fetch(endpoint)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to fetch quiz data: ${res.status}`);
        return res.json();
      })
      .then(quizData => {
        let questions: any[] | null = null;
        if (Array.isArray(quizData.questions)) {
          questions = quizData.questions;
        } else if (Array.isArray(quizData.quizQuestions)) {
          questions = quizData.quizQuestions;
        } else if (Array.isArray(quizData.customQuestions)) {
          questions = quizData.customQuestions;
        }
        if (!questions) {
          throw new Error("Quiz data is missing or malformed (no questions array)");
        }
        setQuizMeta({
          title: quizData.title,
          description: quizData.description,
          totalQuestions: questions.length,
          isCustom: isCustomQuiz
        });
        const reviews = questions.map((q: any, i: number) => ({
          ...q,
          userAnswer: userAnswers[i] ?? null,
          isCorrect: userAnswers[i] === q.correctOption
        }));
        setQuestionReviews(reviews);
      })
      .catch(error => {
        setQuizMeta({ error: "Failed to load quiz details", message: error.message });
      })
      .finally(() => setLoading(false));
  }, [attempt]);

  const userScore = questionReviews.reduce((score, q) => score + (q.isCorrect ? (q.score || 1) : 0), 0);
  const totalPossibleScore = questionReviews.reduce((total, q) => total + (q.score || 1), 0);
  const userScorePercent = totalPossibleScore ? Math.round((userScore / totalPossibleScore) * 100) : 0;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Quiz Review</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {loading ? (
              <div className="text-center">
                <div className="spinner-border text-primary my-3" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading review data...</p>
              </div>
            ) : quizMeta && quizMeta.error ? (
              <div className="alert alert-danger">
                <h5><i className="bi bi-x-circle-fill me-2"></i>{quizMeta.error}</h5>
                {quizMeta.message && <p>{quizMeta.message}</p>}
              </div>
            ) : (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h5 className="mb-1">
                      {quizMeta?.title}
                      {attempt.feedback && <small className="text-muted ms-2">({attempt.feedback})</small>}
                    </h5>
                    {quizMeta?.description && <p className="text-secondary mb-0">{quizMeta.description}</p>}
                  </div>
                  <div className="text-end">
                    <h4 className={`mb-0 ${userScorePercent >= 70 ? 'text-success' : userScorePercent >= 40 ? 'text-warning' : 'text-danger'}`}>{userScore}/{totalPossibleScore} ({userScorePercent}%)</h4>
                  </div>
                </div>
                <hr className="my-4" />
                {questionReviews.map((question: any, index: number) => (
                  <div key={index} className="card mb-3 border-0 shadow-sm">
                    <div className="card-header bg-light d-flex justify-content-between">
                      <span>Question {index + 1}</span>
                      <span className={question.isCorrect ? 'text-success' : 'text-danger'}>
                        {question.isCorrect ? <><i className="bi bi-check-circle-fill me-1"></i>Correct</> : <><i className="bi bi-x-circle-fill me-1"></i>Incorrect</>}
                      </span>
                    </div>
                    <div className="card-body">
                      <p className="fw-semibold">{question.questionText}</p>
                      <div className="mt-3">
                        {question.options.map((option: any, optIndex: number) => (
                          <div
                            key={optIndex}
                            className={`p-2 mb-2 rounded ${
                              option.optionTag === question.correctOption
                                ? 'bg-success bg-opacity-10 border border-success'
                                : option.optionTag === question.userAnswer && option.optionTag !== question.correctOption
                                ? 'bg-danger bg-opacity-10 border border-danger'
                                : 'bg-light'
                            }`}
                          >
                            <div className="d-flex align-items-center">
                              <div
                                className={`rounded-circle me-2 d-flex align-items-center justify-content-center ${
                                  option.optionTag === question.correctOption
                                    ? 'bg-success text-white'
                                    : option.optionTag === question.userAnswer && option.optionTag !== question.correctOption
                                    ? 'bg-danger text-white'
                                    : 'bg-secondary bg-opacity-10'
                                }`}
                                style={{ width: 24, height: 24 }}
                              >
                                {option.optionTag}
                              </div>
                              <div>
                                {option.optionText}
                                {option.optionTag === question.userAnswer && (
                                  <span className="ms-2 badge bg-primary bg-opacity-75">Your answer</span>
                                )}
                                {option.optionTag === question.correctOption && (
                                  <span className="ms-2 badge bg-success">Correct answer</span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizReview;
