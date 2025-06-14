import React, { useState, useEffect } from 'react';
//import './AssessmentDisplay.css';

interface Topic {
  id: number;
  name: string;
  category: string;
}

interface Question {
  id: number;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer?: string | number;
}

interface AssessmentDisplayProps {
  selectedTopics: Topic[];
  shouldGenerateAssessment: boolean;
  onAssessmentGenerated: () => void;
}

const AssessmentDisplay: React.FC<AssessmentDisplayProps> = ({
  selectedTopics,
  shouldGenerateAssessment,
  onAssessmentGenerated
}) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string | number>>({});
  const [showResults, setShowResults] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);

  const fetchAssessment = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/assessment/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topics: selectedTopics.map(t => t.name) })
      });

      const data = await response.json();
      console.log('Received questions:', data.questions); // helpful debug log
      setQuestions(data.questions);
    } catch (error) {
      console.error('Failed to fetch assessment:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (shouldGenerateAssessment && selectedTopics.length > 0) {
      setLoading(true);
      setShowResults(false);
      setUserAnswers({});
      setAssessmentStarted(true);
      fetchAssessment(); // ✅ backend fetch
    } else if (!shouldGenerateAssessment && !assessmentStarted) {
      setQuestions([]);
      setUserAnswers({});
      setShowResults(false);
    }
  }, [shouldGenerateAssessment, selectedTopics]);

  const handleAnswerChange = (questionId: number, answer: string | number) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    setAssessmentStarted(false);
    onAssessmentGenerated();
  };

  const handleRetry = () => {
    setShowResults(false);
    setUserAnswers({});
    setAssessmentStarted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    let total = 0;
    questions.forEach(q => {
      if (q.correctAnswer !== undefined) {
        total++;
        if (userAnswers[q.id] === q.correctAnswer) {
          correct++;
        }
      }
    });
    return total > 0 ? Math.round((correct / total) * 100) : 0;
  };

  return (
    <div className="assessment-display">
      <div className="assessment-header">
        <h2>Assessment</h2>
        <p className="selected-topic">
          {selectedTopics.length > 0
            ? Selected Topics: ${selectedTopics.map(t => t.name).join(', ')}
            : 'No topics selected'}
        </p>
      </div>

      {!shouldGenerateAssessment && !assessmentStarted ? (
        <div className="placeholder-content">
          <div className="placeholder-icon">📝</div>
          <h3>Assessment will appear here</h3>
          <p>Select your topics and click "Generate Assessment" to begin.</p>
        </div>
      ) : loading ? (
        <div className="assessment-content">
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Generating your assessment...</p>
          </div>
        </div>
      ) : (
        <div className="assessment-content">
          <div className="questions-container">
            {questions.map((q, index) => (
              <div key={q.id} className="question-card">
                <h3>Question {index + 1}</h3>
                <p>{q.question}</p>

                {q.type === 'multiple-choice' && (
                  <div className="options-grid">
                    {q.options?.map((option, i) => (
                      <label
                        key={i}
                        className={`option-label ${
                          showResults && i === q.correctAnswer ? 'correct' : ''
                        } ${
                          showResults &&
                          userAnswers[q.id] === i &&
                          i !== q.correctAnswer
                            ? 'incorrect'
                            : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name={question-${q.id}}
                          value={i}
                          checked={userAnswers[q.id] === i}
                          onChange={() => handleAnswerChange(q.id, i)}
                          disabled={showResults}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}

                {q.type === 'true-false' && (
                  <div className="options-grid">
                    {['True', 'False'].map((option, i) => (
                      <label
                        key={i}
                        className={`option-label ${
                          showResults && i === q.correctAnswer ? 'correct' : ''
                        } ${
                          showResults &&
                          userAnswers[q.id] === i &&
                          i !== q.correctAnswer
                            ? 'incorrect'
                            : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name={question-${q.id}}
                          value={i}
                          checked={userAnswers[q.id] === i}
                          onChange={() => handleAnswerChange(q.id, i)}
                          disabled={showResults}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}

                {q.type === 'short-answer' && (
                  <textarea
                    className="short-answer-input"
                    placeholder="Type your answer here..."
                    value={(userAnswers[q.id] as string) || ''}
                    onChange={e => handleAnswerChange(q.id, e.target.value)}
                    disabled={showResults}
                  />
                )}
              </div>
            ))}
          </div>

          {questions.length > 0 && !showResults && (
            <button className="submit-button" onClick={handleSubmit}>
              Submit Assessment
            </button>
          )}

          {showResults && (
            <div className="results-container">
              <h3>Assessment Results</h3>
              <div className="score-display">
                <div className="score-circle">
                  <span className="score-number">{calculateScore()}%</span>
                </div>
                <p>Score</p>
              </div>
              <button className="retry-button" onClick={handleRetry}>
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AssessmentDisplay;