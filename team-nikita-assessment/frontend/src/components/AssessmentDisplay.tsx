/* AUTHOR - SHREYAS MENE (CREATED ON 13/06/2025) */
/* UPDATED BY NIKITA S RAJ KAPINI ON 16/06/2025 AND 17/06/2025 */
/*Modified by Nakshatra Bhandary on 18/6/25 to add the timer*/
/* UPDATED BY NIKITA S RAJ KAPINI ON 18/06/2025 */
/* UPDATED BY NIKITA S RAJ KAPINI ON 25/06/2025 */
/* UPDATED BY NIKITA S RAJ KAPINI ON 26/06/2025 */

import React, { useEffect, useRef, useState } from 'react';
import './AssessmentDisplay.css';
import html2pdf from 'html2pdf.js';
import { getUserEmailFromToken } from '../utils/userId';

interface Topic {
  id: number;
  name: string;
  category: string;
}

interface Question {
  id: number;
  question: string;
  type: string;
  options?: string[];
  correctAnswer?: string[];
  topic_tested?: string;
  concept_area?: string;
  difficulty?: string;
}

interface BackendQuestion {
  question: string;
  options?: string[];
  correct_answer: string[];
  type: string;
  topic_tested: string;
  concept_area: string;
  difficulty: string;
}

interface AssessmentResponse {
  _id: string;
  targetTopic: string;
  prerequisites: string[];
  questions: BackendQuestion[];
}

interface ResponseWithCorrectness {
  question: Question;
  userAnswer: string[];
  isCorrect: boolean;
}

const formatSeconds = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const AssessmentDisplay: React.FC<{
  selectedTopics: Topic[];
  shouldGenerateAssessment: boolean;
  onAssessmentGenerated: () => void;
  updateAssessmentStatus: (val: boolean) => void;
}> = ({ selectedTopics, shouldGenerateAssessment, onAssessmentGenerated, updateAssessmentStatus }) => {
  const [assessmentId, setAssessmentId] = useState<string>('');
  const [targetTopic, setTargetTopic] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, string[]>>({});
  const [responsesWithCorrectness, setResponsesWithCorrectness] = useState<ResponseWithCorrectness[]>([]);
  const [revisitTopics, setRevisitTopics] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [assessmentStarted,setAssessmentStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0); // in seconds
  const [totalTime, setTotalTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [showTimeUpModal, setShowTimeUpModal] = useState(false);
  const [actualTimeSpent, setActualTimeSpent] = useState<number>(0);
  const [isRetry, setIsRetry] = useState(false);
  const [noPrerequisitesMessage, setNoPrerequisitesMessage] = useState<string | null>(null);
  const modalShownRef = useRef(false);

  const quotes = [
    "🌟 Success is built on consistent effort, not last-minute miracles.",
    "🧠 Every expert was once a student who chose not to give up.",
    "💪 Challenges are what make learning interesting — overcoming them makes it meaningful.",
    "🛡️ True strength is doing the right thing, even when no one is watching.",
    "📚 Honest effort is more valuable than perfect answers.",
    "🚀 Progress, not perfection — that's the goal.",
    "🔐 Integrity is doing your best without shortcuts. Cheating steals your own growth.",
    "🌱 Mistakes are the stepping stones to mastery — embrace them.",
    "⏳ Time spent learning the right way lasts a lifetime. Cheating lasts a moment.",
    "🔥 Real success feels better than any shortcut ever could.",
    "🌍 Be your own hero. Push your limits, not the rules.",
    "📝 The mind grows stronger every time it solves, not copies.",
    "🎯 Focus on progress. Every click brings you closer to your potential.",
    "🚫 Cheating may get you past today, but it steals your future."
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const userId = getUserEmailFromToken();
  const reportRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (reportRef.current) {
      html2pdf()
        .set({
          margin: 0.5,
          filename: `assessment_report_${userId}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .from(reportRef.current)
        .save();
    }
  };

  const handleRetry = () => {
    if (timerRef.current) {
    clearInterval(timerRef.current);
    timerRef.current = null;
    }
    setIsRetry(true);
    setShowResults(false);
    setUserAnswers({});
    setResponsesWithCorrectness([]);
    setRevisitTopics([]);
    setActualTimeSpent(0);
    setAssessmentStarted(true); 
    updateAssessmentStatus(true); 
    setNoPrerequisitesMessage(null);
    modalShownRef.current = false;


    // Reset timeLeft
    const totalTime = questions.length * 1 * 60; // 1 mins per question
    setTimeLeft(totalTime);
    setTotalTime(totalTime);

    // Restart timer
    timerRef.current = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        if (!modalShownRef.current) {
          modalShownRef.current = true; // Mark it as shown
          setShowTimeUpModal(true);     // Trigger modal
        }
        return 0;
      }
      return prev - 1;
    });

    setActualTimeSpent((prev) => prev + 1);
  }, 1000);
  };

  useEffect(() => {
      if (loading) {
        const quoteInterval = setInterval(() => {
          setCurrentQuote(prev => {
            const currentIndex = quotes.indexOf(prev);
            const nextIndex = (currentIndex + 1) % quotes.length;
            return quotes[nextIndex];
          });
        }, 5000); // change every 5 seconds

        return () => clearInterval(quoteInterval); // cleanup
      }
    }, [loading]);

 
  useEffect(() => {
    const generateAssessment = async () => {
      const topic = selectedTopics[0]?.name;
      if (!topic) return;

      setTargetTopic(topic);
      setUserAnswers({});
      setShowResults(false); 
      setResponsesWithCorrectness([]); 
      setRevisitTopics([]); 
      setLoading(true);
      setActualTimeSpent(0);
      setNoPrerequisitesMessage(null);
      setIsRetry(false);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/assessment/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ target: topic })
        });

        const data: AssessmentResponse = await res.json();
        setAssessmentId(data._id);

          if (data.prerequisites.length === 0) {
            setNoPrerequisitesMessage(`There are no specific prerequisite topics to be covered before studying "${topic}". The basics you already know should be enough. 🚀 Please proceed with confidence!`);
            setQuestions([]);
            setAssessmentStarted(false);
            return; // skip loading questions
          }

        const transformed: Question[] = data.questions.map((q, idx) => ({
          id: idx + 1,
          question: q.question,
          type: q.type === 'single-correct-mcq' ? 'single-choice'
            : q.type === 'multiple-correct-mcq' ? 'multiple-choice'
              : q.type === 'true-false' ? 'true-false'
                : 'short-answer',
          options: q.options,
          correctAnswer: q.correct_answer,
          topic_tested: q.topic_tested,
          concept_area: q.concept_area,
          difficulty: q.difficulty
        }));

        setQuestions(transformed);
        setAssessmentStarted(true);  // when assessment starts
        updateAssessmentStatus(true); // when assessment ends
        const totalTime = data.questions.length * 1 * 60; // 1 minutes per question
        setTimeLeft(totalTime);
        setTotalTime(totalTime);

        // Start timer
        if (timerRef.current) clearInterval(timerRef.current);

        timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (!modalShownRef.current) {
              modalShownRef.current = true; // Mark it as shown
              setShowTimeUpModal(true);     // Trigger modal
            }
            return 0;
          }
          return prev - 1;
        });

        setActualTimeSpent((prev) => prev + 1);
      }, 1000);
      } catch (err) {
        console.error('Error generating assessment:', err);
      } finally {
        setLoading(false);
      }
    };

    if (shouldGenerateAssessment && selectedTopics.length > 0) {
      generateAssessment();
    }
  }, [shouldGenerateAssessment, selectedTopics]);

  const handleAnswerChange = (qid: number, value: string) => {
    setUserAnswers(prev => ({ ...prev, [qid]: [value] }));
  };

  const handleMultipleSelectChange = (qid: number, value: string) => {
    const prev = userAnswers[qid] || [];
    if (prev.includes(value)) {
      setUserAnswers((prevState) => ({
        ...prevState,
        [qid]: prev.filter((v) => v !== value)
      }));
    } else {
      setUserAnswers((prevState) => ({
        ...prevState,
        [qid]: [...prev, value]
      }));
    }
  };

  const handleSubmit = async () => {
  if (timerRef.current) 
    {clearInterval(timerRef.current);
      timerRef.current = null;
    }
  const token = localStorage.getItem('token');
    if (!token) {
      alert("Please login to continue.");
      return;
    }
    setShowResults(false);
    setLoading(true);
    modalShownRef.current = false;


    try {
      const payload = {
        assessmentId,
        userId,
        timeTaken: actualTimeSpent, 
        answers: questions.map((_, idx) => ({
        userAnswer: userAnswers[idx + 1] || [],
        }))
      };


      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/response/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload) 
      });

      const result = await response.json();
      if (!result?.result?.responses) {
        console.error('Malformed response:', result);
        return;
      }

      const scored = result.result.responses;

      const enriched: ResponseWithCorrectness[] = questions.map((q, idx) => ({
        question: q,
        userAnswer: scored[idx].userAnswer,
        isCorrect: scored[idx].isCorrect
      }));

      setResponsesWithCorrectness(enriched);

      const analysisRes = await fetch(`${import.meta.env.VITE_API_URL}/api/response/analysis/${assessmentId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const analysisData = await analysisRes.json();
      setRevisitTopics(analysisData.weakTopics);
      setShowResults(true);
      updateAssessmentStatus(false);
    } catch (err) {
      console.error('Error submitting assessment:', err);
    } finally {
      setLoading(false);
      onAssessmentGenerated();
    }
  };


  const calculateScore = () => {
    return responsesWithCorrectness.filter(r => r.isCorrect).length;
  };

  const getOptionClass = (option: string, userAns: string[], correctAns: string[]) => {
    if (userAns.includes(option) && correctAns.includes(option)) return 'option-label correct';
    if (userAns.includes(option) && !correctAns.includes(option)) return 'option-label incorrect';
    if (!userAns.includes(option) && correctAns.includes(option)) return 'option-label correct ghost';
    return 'option-label';
  };

  return (
    <div className="assessment-display">
      <div className="assessment-header">
        <h2>Assessment</h2>
        <p className="selected-topic">{targetTopic ? `Target Topic: ${targetTopic}` : 'No topic selected'}</p>
      </div>

      {noPrerequisitesMessage && (
        <div className="no-prereq-message">
          <h3>🎓 You're Ready!</h3>
          <p>{noPrerequisitesMessage}</p>
        </div>
      )}

      {!assessmentStarted && !loading ? (
        <div className="placeholder-content">
          <div className="placeholder-icon">📝</div>
          <h3>Assessment will appear here</h3>
          <p>Select your topics and click "Generate Assessment" to begin.</p>
        </div>
      ) : loading ? (
        <div className="loading-indicator">
          <div className="spinner"></div>
          <p className="generating-text">Processing your request...</p>
          <div className="quote-container">
            <p className="quote-text">💡 {currentQuote}</p>
          </div>
        </div>
      ) : (
        <div className="assessment-content">
          {!showResults ? (
            <div className="questions-container no-select">
                  <div className="timer-display mb-4 text-lg font-semibold text-red-600">
                    ⏳ Time Left: {Math.floor(timeLeft / 60)}:
                    {(timeLeft % 60).toString().padStart(2, '0')}
                  </div>
              {questions.map((q, index) => (
                <div key={q.id} className="question-card">
                  <h3>Question {index + 1}</h3>
                  <p>{q.question}</p>

                  {(q.type === 'single-choice' || q.type === 'true-false') && (
                    <div className="options-grid">
                      {(q.options || []).map((option, i) => (
                        <label key={i} className="option-label">
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={option}
                            checked={userAnswers[q.id]?.includes(option) || false}
                            onChange={() => handleAnswerChange(q.id, option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  )}

                  {q.type === 'multiple-choice' && (
                    <div className="options-grid">
                      {(q.options || []).map((option, i) => (
                        <label key={i} className="option-label">
                          <input
                            type="checkbox"
                            value={option}
                            checked={userAnswers[q.id]?.includes(option) || false}
                            onChange={() => handleMultipleSelectChange(q.id, option)}
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
                      value={userAnswers[q.id]?.[0] || ''}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    />
                  )}
                </div>
              ))}
              <button className="submit-button" onClick={handleSubmit}>Submit Assessment</button>
            </div>
          ) : (
            <div className="results-container" ref={reportRef}>
              <h3>📊 Assessment Report</h3>

              {responsesWithCorrectness.map((r, i) => (
                <div key={i} className="question-card">
                  <h3>Question {i + 1}</h3>
                  <p>{r.question.question}</p>
                  <p className="meta-info">
                    <strong>Topic:</strong> {r.question.topic_tested} | <strong>Concept:</strong> {r.question.concept_area} | <strong>Difficulty:</strong> {r.question.difficulty}
                  </p>

                  {(r.question.type === 'single-choice' || r.question.type === 'true-false' || r.question.type === 'multiple-choice') && (
                    <div className="options-grid">
                      {r.question.options?.map((option, idx) => (
                        <div key={idx} className={getOptionClass(option, r.userAnswer, r.question.correctAnswer || [])}>
                          {option}
                        </div>
                      ))}
                    </div>
                  )}

                  {r.question.type === 'short-answer' && (
                    <>
                      <p><strong>Your Answer:</strong> {r.userAnswer[0] || '—'}</p>
                      <p><strong>Correct Answer:</strong> {r.question.correctAnswer?.join(', ') || '—'}</p>
                    </>
                  )}

                  <p className={`font-semibold ${r.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    Score: {r.isCorrect ? '1/1' : '0/1'}
                  </p>
                </div>
              ))}

              <div className="score-display mt-4">
                <h4>Total Score: {calculateScore()} / {questions.length}</h4>
              </div>
              <div className="time-taken mt-4">
                <h4 className="text-blue-600">Time Taken</h4>
                <p>
                  You spent <strong>{formatSeconds(actualTimeSpent)}</strong> minutes on this assessment.<br />
                  Allotted time was <strong>{formatSeconds(totalTime)}</strong> minutes.
                </p>
                {timeLeft === 0 && (
                  <p className="text-yellow-700 font-semibold mt-2">
                    ⏰ You have exceeded the allotted time. Try to improve your speed next time!
                  </p>
                )}
              </div>

              {(() => {
                const score = calculateScore();
                const percentScore = (score / questions.length) * 100;
                const total = questions.length;
                const percentTime = ((totalTime - timeLeft) / totalTime) * 100;
                if (isRetry) {
                  return (
                    <div className="revisit-topics mt-4">
                      <h4 className="text-red-600">⚠️ Reminder</h4>
                      <p>
                        You've attempted this assessment again. Make sure to revisit <strong>all the topics involved</strong> before proceeding to "{targetTopic}". Consistent revision is key to mastery. 💡
                      </p>
                    </div>
                  );
                }
                if (score === total) {
                      return (
                        <div className="positive-message">
                          You're all set to proceed to "{targetTopic}"! 🎉
                        </div>
                      );
                    } else if (revisitTopics.length > 0 && percentScore >= 80) {
                      return (
                        <div className="revisit-topics mt-4">
                          <h4 className="text-red-600">Topics to Revisit</h4>
                          <ul className="list-disc list-inside revisit-highlight">
                              {revisitTopics.map((topic, i) => (
                                <li key={i}>{topic}</li>
                              ))}
                            </ul>
                            <div className="positive-message">
                              You're doing great! Just make sure to look through the topics listed once and you're all set to proceed to "{targetTopic}"! 🎉
                            </div>
                        </div>
                      );
                    } else if (revisitTopics.length > 0) {
                      return (
                        <div className="revisit-topics mt-4">
                          <h4 className="text-red-600">Topics to Revisit</h4>
                          <ul className="list-disc list-inside">
                            {revisitTopics.map((topic, i) => (
                              <li key={i}>{topic}</li>
                            ))}
                          </ul>
                          <p>
                            Please revisit all the above topics along with their associated concepts (shown below each question) before moving ahead with "{targetTopic}". Strengthening these areas will ensure you're fully prepared.
                          </p>
                        </div>
                      );
                    }

                    return null;
                  })()}

              <div className="mt-6 flex gap-4">
                <button className="retry-button" onClick={handleRetry}>🔁 Try Again</button>
                <button className="download-button" onClick={handleDownloadPDF}>📄 Download Report</button>
              </div>
            </div>
          )}
        </div>
      )}
        {showTimeUpModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>⏰ Time's Up!</h2>
              <p>
                Hi {userId?.split('@')[0] || 'Scholar'},you may still continue, but remember to practice more—this was the average expected completion time.
              </p>
              <button onClick={() => setShowTimeUpModal(false)} className="modal-close-btn">
                Got it!
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default AssessmentDisplay;


        

        

        

        

        

        