import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // IMPORTANT: Ensure axios is imported for backend calls
import { v4 as uuidv4 } from 'uuid'; // IMPORTANT: Ensure uuidv4 is imported if you use it directly for quizId generation here, though often it's in App.tsx

type MCQ = {
  id: string;
  topic: string;
  question: string;
  options: string[];
  answer: string;
};

type Props = {
  mcqs: MCQ[];
  quizId: string;
  onRestartQuiz?: (score: number, passed: boolean) => void;
  onSubmitQuiz?: (score: number, total: number) => void;
  canAttempt: boolean;
  attemptsToday: number;
  quizPassed: boolean;
  topic: string;
};

// IMPORTANT: Define the type for the quiz attempt payload
interface QuizAttemptPayload {
  quizId: string;
  score: number;
  passed: boolean;
  topic: string;
}

const Quiz: React.FC<Props> = ({ mcqs, quizId, onRestartQuiz, onSubmitQuiz, canAttempt, attemptsToday, quizPassed, topic }) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(mcqs.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showEnterFullScreenModal, setShowEnterFullScreenModal] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [overallTimeLeft, setOverallTimeLeft] = useState(mcqs.length * 60);
  const [warningsLeft, setWarningsLeft] = useState(3);
  const [keyPressWarningShown, setKeyPressWarningShown] = useState(false);
  const [showKeyPressAlert, setShowKeyPressAlert] = useState(false);
  const [showNavigationPane, setShowNavigationPane] = useState(false);

  const quizRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  // Constants for results logic
  const totalQuestions = mcqs.length;
  const passingThreshold = 0.65; // 65% for green/red message

  // --- Utility Functions for Results ---
  const getScore = () => {
    let score = 0;
    mcqs.forEach((q, i) => {
      const userAnswer = userAnswers[i]?.trim().toLowerCase() || '';
      const correctAnswer = q.answer.trim().toLowerCase();
      if (userAnswer === correctAnswer) score++;
    });
    return score;
  };

  const getScorePercentage = () => {
    if (mcqs.length === 0) return 0;
    return (getScore() / mcqs.length) * 100;
  };

  const performanceRating = (percentage: number) => {
    if (percentage >= 85) return "Excellent";
    if (percentage >= 65) return "Good";
    return "Poor";
  };

  const getCompliment = (percentage: number) => {
    if (percentage === 100) return "Excellent!";
    if (percentage >= 85) return "Great!";
    if (percentage >= 65) return "Good!";
    return "Average - Room to Improve!";
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const renderWarningsLeft = () => {
    return '⚡'.repeat(warningsLeft);
  };

  const initialTime = mcqs.length * 60;
  const timeSpent = initialTime - overallTimeLeft;

  // Calculate detailed stats for results display (after submission)
  const calculateDetailedResults = () => {
    let correctCount = 0;
    let attemptedCount = 0;
    mcqs.forEach((q, i) => {
      if (userAnswers[i] !== '') {
        attemptedCount++;
        if (userAnswers[i].trim().toLowerCase() === q.answer.trim().toLowerCase()) {
          correctCount++;
        }
      }
    });
    const incorrectCount = attemptedCount - correctCount;
    const unattemptedCount = totalQuestions - attemptedCount;
    return { correctCount, incorrectCount, unattemptedCount, attemptedCount };
  };

  // Destructure results only if submitted, otherwise initialize to 0 to avoid errors
  const { correctCount, incorrectCount, unattemptedCount, attemptedCount } = submitted ? calculateDetailedResults() : {
    correctCount: 0, incorrectCount: 0, unattemptedCount: 0, attemptedCount: 0
  };

  // --- Effects ---

  useEffect(() => {
    console.log("Quiz component: quizId changed or mcqs length changed. Resetting state.");
    setUserAnswers(Array(mcqs.length).fill(''));
    setSubmitted(false);
    setShowWarning(false);
    setShowEnterFullScreenModal(true);
    setCurrentQuestionIndex(0);
    setOverallTimeLeft(mcqs.length * 60);
    setWarningsLeft(3);
    setKeyPressWarningShown(false);
    setShowKeyPressAlert(false);
    setShowNavigationPane(false);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => { });
    }
  }, [quizId, mcqs.length]);

  useEffect(() => {
    if (isFullScreen && !submitted) {
      timerRef.current = window.setInterval(() => {
        setOverallTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setSubmitted(true);
            console.log("Quiz auto-submitted: Time ran out.");
            if (onSubmitQuiz) onSubmitQuiz(getScore(), mcqs.length);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isFullScreen, submitted, onSubmitQuiz, mcqs.length, getScore]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isCurrentlyFullScreen = !!document.fullscreenElement;
      setIsFullScreen(isCurrentlyFullScreen);
      if (!isCurrentlyFullScreen && !submitted && !showEnterFullScreenModal) {
        setWarningsLeft((prev) => {
          if (prev <= 1) {
            setSubmitted(true);
            if (timerRef.current) clearInterval(timerRef.current);
            console.log(`Auto-submit: Full-screen exit at ${new Date().toISOString()}. Last warning exhausted.`);
            if (onSubmitQuiz) onSubmitQuiz(getScore(), mcqs.length);
            return 0;
          }
          const newWarnings = prev - 1;
          setShowWarning(true);
          console.log(`Warning: User exited full-screen mode at ${new Date().toISOString()}. Warnings left: ${newWarnings}`);
          return newWarnings;
        });
      } else if (isCurrentlyFullScreen) {
        setShowWarning(false);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden && isFullScreen && !submitted) {
        setWarningsLeft((prev) => {
          if (prev <= 1) {
            setSubmitted(true);
            if (timerRef.current) clearInterval(timerRef.current);
            console.log(`Auto-submit: Tab switch at ${new Date().toISOString()}. Last warning exhausted.`);
            if (onSubmitQuiz) onSubmitQuiz(getScore(), mcqs.length);
            return 0;
          }
          const newWarnings = prev - 1;
          setShowWarning(true);
          console.log(`Warning: Tab switch detected at ${new Date().toISOString()}. Warnings left: ${newWarnings}`);
          return newWarnings;
        });
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isFullScreen, submitted, onSubmitQuiz, mcqs.length, showEnterFullScreenModal, getScore]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isProhibitedKey = ['Control', 'Alt', 'Meta', 'PrintScreen'].includes(event.key) ||
                             event.ctrlKey || event.altKey || event.metaKey;

      if (isFullScreen && !submitted && isProhibitedKey) {
        if (!keyPressWarningShown) {
          setShowKeyPressAlert(true);
          setKeyPressWarningShown(true);
          console.log(`Alert: Key "${event.key}" pressed at ${new Date().toISOString()}. First warning issued.`);
        } else {
          setWarningsLeft((prev) => {
            if (prev <= 1) {
              setSubmitted(true);
              if (timerRef.current) clearInterval(timerRef.current);
              console.log(`Auto-submit: Key "${event.key}" pressed at ${new Date().toISOString()}. Last warning exhausted.`);
              if (onSubmitQuiz) onSubmitQuiz(getScore(), mcqs.length);
              return 0;
            }
            const newWarnings = prev - 1;
            setShowWarning(true);
            console.log(`Warning: Key "${event.key}" pressed at ${new Date().toISOString()}. Warnings left: ${newWarnings}`);
            return newWarnings;
          });
          setShowKeyPressAlert(true);
          setTimeout(() => setShowKeyPressAlert(false), 3000);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullScreen, submitted, keyPressWarningShown, warningsLeft, onSubmitQuiz, mcqs.length, getScore]);

  const handleCopy = (event: React.ClipboardEvent) => {
    event.preventDefault();
    if (isFullScreen && !submitted) {
      if (!keyPressWarningShown) {
        setShowKeyPressAlert(true);
        setKeyPressWarningShown(true);
        console.log(`Alert: Copy attempt at ${new Date().toISOString()}. First warning issued.`);
      } else {
        setWarningsLeft((prev) => {
          if (prev <= 1) {
            setSubmitted(true);
            if (timerRef.current) clearInterval(timerRef.current);
            console.log(`Auto-submit: Copy attempt at ${new Date().toISOString()}. Last warning exhausted.`);
            if (onSubmitQuiz) onSubmitQuiz(getScore(), mcqs.length);
            return 0;
          }
          const newWarnings = prev - 1;
          setShowWarning(true);
          console.log(`Warning: Copy attempt at ${new Date().toISOString()}. Warnings left: ${newWarnings}`);
          return newWarnings;
        });
        setShowKeyPressAlert(true);
        setTimeout(() => setShowKeyPressAlert(false), 3000);
      }
    }
  };

  // --- Handlers ---
  const handleOptionChange = (index: number, value: string) => {
    if (!submitted && isFullScreen) {
      const newAnswers = [...userAnswers];
      newAnswers[index] = value;
      setUserAnswers(newAnswers);
    }
  };

  const handleSubmit = async () => {
    if (isFullScreen) {
      setSubmitted(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      console.log("Quiz submitted manually.");

      const currentScore = getScore();
      const passed = getScorePercentage() >= (passingThreshold * 100);

      // Record the attempt on the backend
      try {
        const payload: QuizAttemptPayload = { // IMPORTANT: Explicitly define the payload type here
          quizId,
          score: currentScore,
          passed: passed,
          topic,
        };
        await axios.post('http://localhost:5000/api/quiz-attempts', payload); // IMPORTANT: Use the typed payload
        console.log('Quiz attempt recorded successfully.');
      } catch (error) {
        console.error('Failed to record quiz attempt:', error);
      }

      if (onSubmitQuiz) onSubmitQuiz(currentScore, mcqs.length);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < mcqs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleGoToQuestion = (index: number) => {
    if (!submitted && isFullScreen) {
      setCurrentQuestionIndex(index);
    }
  };

  const enterFullScreen = () => {
    if (quizRef.current) {
      quizRef.current.requestFullscreen().then(() => {
        setIsFullScreen(true);
        setShowWarning(false);
        setShowEnterFullScreenModal(false);
        console.log("Entered full-screen mode.");
      }).catch((err) => {
        console.error('Error entering full-screen mode:', err);
        alert('Failed to enter full-screen mode. Please allow full-screen in browser settings.');
      });
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
        console.log("Exited full-screen mode manually.");
      }).catch((err) => {
        console.error('Error exiting full-screen mode:', err);
      });
    }
  };

  const handleRetakeQuiz = () => {
    console.log("Quiz component: Retake Quiz clicked, calling onRestartQuiz prop.");
    if (onRestartQuiz) {
      const passed = quizPassed || (getScorePercentage() >= (passingThreshold * 100)); // Use passingThreshold
      onRestartQuiz(getScore(), passed);
    }
    setSubmitted(false);
    setUserAnswers(Array(mcqs.length).fill(''));
    setCurrentQuestionIndex(0);
    setOverallTimeLeft(mcqs.length * 60);
    setWarningsLeft(3);
    setKeyPressWarningShown(false);
    setShowKeyPressAlert(false);
    setShowNavigationPane(false);
    setShowEnterFullScreenModal(true);
  };

  if (mcqs.length === 0) {
    return <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>No MCQs available for this topic.</div>;
  }

  return (
    <div
      ref={quizRef}
      style={{
        padding: isFullScreen ? '40px' : '20px',
        background: '#f9fafb',
        borderRadius: isFullScreen ? '0' : '12px',
        minHeight: isFullScreen ? '100vh' : 'auto',
        width: isFullScreen ? '100vw' : 'auto',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
      onCopy={handleCopy}
    >
      {showEnterFullScreenModal && !isFullScreen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center',
              maxWidth: '500px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            <h3 style={{ color: '#6366f1', marginBottom: '20px' }}>
              📝 Enter Full-Screen Mode
            </h3>
            <p style={{ marginBottom: '20px', color: '#374151' }}>
              Please enter full-screen mode to start the quiz for {topic}. You have {mcqs.length} minute(s) for {mcqs.length} question(s). Pressing Ctrl, Alt, Start (Windows key), PrintScreen, or attempting to copy for the first time will show a warning alert. Exiting full-screen, switching tabs, or repeating these actions will count as a warning. You have 3 warnings (⚡⚡⚡); the quiz will auto-submit silently if the last warning is exhausted. You have {3 - attemptsToday} attempt(s) left today for {topic}.
            </p>
            <button
              onClick={enterFullScreen}
              style={{
                padding: '12px 20px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Enter Full Screen
            </button>
          </div>
        </div>
      )}

      {showWarning && !isFullScreen && !showEnterFullScreenModal && warningsLeft >= 0 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center',
              maxWidth: '500px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            <h3 style={{ color: '#ef4444', marginBottom: '20px' }}>
              ⚠️ Full-Screen Mode Required
            </h3>
            <p style={{ marginBottom: '20px', color: '#374151' }}>
              This quiz must be taken in full-screen mode. You have {warningsLeft} warning(s) ({renderWarningsLeft()}) left. Exiting full-screen, switching tabs, pressing Ctrl, Alt, Start (Windows key), PrintScreen, or attempting to copy again counts as a warning. The quiz will auto-submit silently if the last warning is exhausted.
            </p>
            <button
              onClick={enterFullScreen}
              style={{
                padding: '12px 20px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Re-enter Full Screen
            </button>
          </div>
        </div>
      )}

      {showKeyPressAlert && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#fef3c7',
            padding: '15px',
            borderRadius: '8px',
            border: '1px solid #f59e0b',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            zIndex: 1100,
            maxWidth: '300px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: '#b45309', marginBottom: '10px' }}>
            ⚠️ Warning: Pressing Ctrl, Alt, Start (Windows key), PrintScreen, or attempting to copy is prohibited. Next occurrence will reduce your warnings ({renderWarningsLeft()}).
          </p>
          <button
            onClick={() => setShowKeyPressAlert(false)}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            OK
          </button>
        </div>
      )}

      {isFullScreen && !submitted && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            <h2 style={{ marginBottom: '0', fontSize: '22px', fontWeight: 'bold' }}>
              MCQ Test (Question {currentQuestionIndex + 1} of {mcqs.length})
            </h2>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ fontWeight: 'bold', color: overallTimeLeft <= 30 ? 'red' : '#374151' }}>
                Time Left: {formatTime(overallTimeLeft)}
              </div>
              <button
                onClick={exitFullScreen}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Exit Full Screen
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '0px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span style={{ fontWeight: 'bold', color: '#374151' }}>Total Questions: {totalQuestions}</span>
              <span style={{ fontWeight: 'bold', color: 'green' }}>Answered: {userAnswers.filter(answer => answer !== '').length}</span>
              <span style={{ fontWeight: 'bold', color: 'red' }}>Unattempted: {totalQuestions - userAnswers.filter(answer => answer !== '').length}</span>
              <span style={{ fontWeight: 'bold', color: warningsLeft <= 1 ? 'red' : '#374151' }}>
                Warnings Left: {renderWarningsLeft()}
              </span>
            </div>
          </div>
        </>
      )}

      <div style={{
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        gap: '20px',
        position: 'relative',
      }}>
        <div style={{ flex: 1 }}>
          {mcqs.length > 0 && !submitted && isFullScreen && (
            <div
              style={{
                marginBottom: '20px',
                padding: '16px',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                userSelect: 'none',
              }}
            >
              <p style={{ fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: `${currentQuestionIndex + 1}. ${mcqs[currentQuestionIndex].question}` }} />
              <div>
                {mcqs[currentQuestionIndex].options.map((opt, j) => (
                  <label key={j} style={{ display: 'block', margin: '6px 0', userSelect: 'none' }}>
                    <input
                      type="radio"
                      name={`q${currentQuestionIndex}`}
                      value={opt}
                      checked={userAnswers[currentQuestionIndex] === opt}
                      onChange={() => handleOptionChange(currentQuestionIndex, opt)}
                      disabled={submitted || !isFullScreen}
                      style={{ marginRight: '8px' }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          )}

          {submitted && (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <h2 style={{ fontSize: '28px', marginBottom: '15px', color: '#2563eb' }}>
                Quiz Results for {topic}
              </h2>

              <div style={{
                backgroundColor: getScorePercentage() >= (passingThreshold * 100) ? '#dcfce7' : '#fee2e2',
                border: `1px solid ${getScorePercentage() >= (passingThreshold * 100) ? '#10b981' : '#ef4444'}`,
                borderRadius: '12px',
                padding: '25px',
                marginBottom: '20px',
                display: 'inline-block',
                minWidth: '300px',
              }}>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: getScorePercentage() >= (passingThreshold * 100) ? '#10b981' : '#ef4444',
                  margin: '0 0 10px',
                }}>
                  {getScorePercentage().toFixed(0)}%
                </p>
                <p style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: getScorePercentage() >= (passingThreshold * 100) ? '#10b981' : '#ef4444',
                  margin: '0',
                }}>
                  {performanceRating(getScorePercentage())}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '15px',
                marginBottom: '25px',
                maxWidth: '600px',
                margin: '0 auto 25px auto',
                textAlign: 'left',
              }}>
                <div style={{ backgroundColor: '#e0f2fe', padding: '15px', borderRadius: '8px', border: '1px solid #90cdf4' }}>
                  <p style={{ margin: '0', fontSize: '16px', color: '#2b6cb0' }}>✅ Correct Questions:</p>
                  <p style={{ margin: '5px 0 0', fontSize: '20px', fontWeight: 'bold', color: '#10b981' }}>{correctCount}</p>
                </div>
                <div style={{ backgroundColor: '#ffe0e0', padding: '15px', borderRadius: '8px', border: '1px solid #fc8181' }}>
                  <p style={{ margin: '0', fontSize: '16px', color: '#e53e3e' }}>❌ Incorrect Questions:</p>
                  <p style={{ margin: '5px 0 0', fontSize: '20px', fontWeight: 'bold', color: '#ef4444' }}>{incorrectCount}</p>
                </div>
                <div style={{ backgroundColor: '#fff3e0', padding: '15px', borderRadius: '8px', border: '1px solid #fbd38d' }}>
                  <p style={{ margin: '0', fontSize: '16px', color: '#dd6b20' }}>❓ Unattempted Questions:</p>
                  <p style={{ margin: '5px 0 0', fontSize: '20px', fontWeight: 'bold', color: '#f59e0b' }}>{unattemptedCount}</p>
                </div>
                <div style={{ backgroundColor: '#e6fffa', padding: '15px', borderRadius: '8px', border: '1px solid #81e6d9' }}>
                  <p style={{ margin: '0', fontSize: '16px', color: '#319795' }}>📊 Attempted Questions:</p>
                  <p style={{ margin: '5px 0 0', fontSize: '20px', fontWeight: 'bold', color: '#047857' }}>{attemptedCount}</p>
                </div>
              </div>
              <div style={{
                backgroundColor: '#eff6ff', padding: '15px', borderRadius: '8px', border: '1px solid #a7d4f9',
                maxWidth: '600px', margin: '0 auto 25px auto', textAlign: 'left',
              }}>
                <p style={{ margin: '0', fontSize: '16px', color: '#2c5282' }}>⏱️ Time Spent:</p>
                <p style={{ margin: '5px 0 0', fontSize: '20px', fontWeight: 'bold', color: '#2563eb' }}>{formatTime(timeSpent)}</p>
              </div>

              {getScorePercentage() >= (passingThreshold * 100) ? (
                <div style={{
                  backgroundColor: '#dcfce7',
                  border: '1px solid #10b981',
                  color: '#065f46',
                  padding: '15px',
                  borderRadius: '8px',
                  marginTop: '20px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}>
                  <p>🎉 Congratulations! You have successfully passed the quiz for {topic}. Keep up the great work!</p>
                </div>
              ) : (
                <div style={{
                  backgroundColor: '#fee2e2',
                  border: '1px solid #ef4444',
                  color: '#991b1b',
                  padding: '15px',
                  borderRadius: '8px',
                  marginTop: '20px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}>
                  <p>😞 You need some learning on these prerequisites. After learning these, come and retake the test.</p>
                </div>
              )}

              {mcqs.map((mcq, i) => (
                <div
                  key={mcq.id}
                  style={{
                    marginBottom: '20px',
                    padding: '16px',
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    marginTop: '20px',
                  }}
                >
                  <p style={{ fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: `${i + 1}. ${mcq.question}` }} />
                  <div>
                    {mcq.options.map((opt, j) => (
                      <label key={j} style={{ display: 'block', margin: '6px 0' }}>
                        <input
                          type="radio"
                          name={`q${i}`}
                          value={userAnswers[i] || ''}
                          checked={userAnswers[i] === opt}
                          disabled={true}
                          style={{ marginRight: '8px' }}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                  {userAnswers[i] ? (
                    <p
                      style={{
                        color:
                          userAnswers[i].trim().toLowerCase() === mcq.answer.trim().toLowerCase()
                            ? 'green'
                            : 'red',
                        fontWeight: 500,
                        marginTop: '6px',
                      }}
                    >
                      {userAnswers[i].trim().toLowerCase() === mcq.answer.trim().toLowerCase()
                        ? '✅ Correct'
                        : `❌ Incorrect (Correct answer: ${mcq.answer})`}
                    </p>
                  ) : (
                    <p
                      style={{
                        color: 'red',
                        fontWeight: 500,
                        marginTop: '6px',
                      }}
                    >
                      ❌ Not Answered (Correct answer: {mcq.answer})
                    </p>
                  )}
                </div>
              ))}

              {canAttempt ? (
                <button
                  onClick={handleRetakeQuiz}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: '#6366f1',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontSize: '16px',
                  }}
                >
                  Retake Quiz ({3 - attemptsToday} attempt{3 - attemptsToday === 1 ? '' : 's'} left today for {topic})
                </button>
              ) : (
                <p style={{ color: '#ef4444', marginTop: '20px', fontWeight: 'bold' }}>
                  ⚠️ Maximum attempts reached for {topic} today. Please try again tomorrow.
                </p>
              )}
              {warningsLeft <= 0 && (
                <p style={{ color: '#ef4444', marginTop: '10px' }}>
                  ⚠️ Quiz auto-submitted due to exhausting all warnings (exiting full-screen, switching tabs, pressing Ctrl, Alt, Start (Windows key), PrintScreen, or attempting to copy).
                </p>
              )}
            </div>
          )}
        </div>

        {!submitted && isFullScreen && (
          <>
            <button
              onClick={() => setShowNavigationPane(!showNavigationPane)}
              title={showNavigationPane ? 'Collapse Navigation' : 'Expand Navigation'}
              style={{
                position: 'absolute',
                right: showNavigationPane ? '210px' : '0px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                zIndex: 999,
                transition: 'right 0.3s ease-in-out',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              {showNavigationPane ? '»' : '«'}
            </button>

            <div
              style={{
                width: showNavigationPane ? '200px' : '0',
                background: '#fff',
                padding: showNavigationPane ? '10px' : '0',
                borderRadius: '8px',
                boxShadow: showNavigationPane ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
                overflow: 'hidden',
                transition: 'width 0.3s ease-in-out, padding 0.3s ease-in-out',
                position: 'fixed',
                right: '20px',
                top: '100px',
                maxHeight: 'calc(100vh - 120px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                flexShrink: 0,
                zIndex: 900,
              }}
            >
              {showNavigationPane && (
                <>
                  <div style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
                    <p style={{ fontWeight: 'bold', color: '#374151', fontSize: '14px', marginBottom: '5px' }}>
                      🚫 Prohibited Actions:
                    </p>
                    <ul style={{ listStyleType: 'disc', marginLeft: '15px', fontSize: '12px', color: '#555' }}>
                      <li>Pressing Ctrl, Alt, Meta (Windows key), PrintScreen.</li>
                      <li>Attempting to copy text.</li>
                      <li>Exiting Full-Screen mode (e.g., via Esc key).</li>
                      <li>Switching browser tabs.</li>
                    </ul>
                    <p style={{ fontWeight: 'bold', color: '#ef4444', fontSize: '12px', marginTop: '5px' }}>
                      After 3 warnings (⚡⚡⚡), the quiz will auto-submit silently.
                    </p>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))',
                    gap: '10px',
                    overflowY: 'auto',
                    paddingRight: '5px',
                    flexGrow: 1,
                  }}>
                    {mcqs.map((mcq, index) => (
                      <button
                        key={mcq.id}
                        onClick={() => handleGoToQuestion(index)}
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: userAnswers[index] ? '#10b981' : (index === currentQuestionIndex ? '#6366f1' : '#ef4444'),
                          color: 'white',
                          border: index === currentQuestionIndex ? '2px solid #000' : 'none',
                          borderRadius: '50%',
                          cursor: submitted || !isFullScreen ? 'not-allowed' : 'pointer',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          opacity: submitted || !isFullScreen ? 0.5 : 1,
                          pointerEvents: submitted || !isFullScreen ? 'none' : 'auto',
                        }}
                        disabled={submitted || !isFullScreen}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>

      {!submitted && isFullScreen && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0 || submitted || !isFullScreen}
              style={{
                padding: '12px 20px',
                backgroundColor: currentQuestionIndex === 0 || submitted || !isFullScreen ? '#d1d5db' : '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: currentQuestionIndex === 0 || submitted || !isFullScreen ? 'not-allowed' : 'pointer',
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === mcqs.length - 1 || submitted || !isFullScreen}
              style={{
                padding: '12px 20px',
                backgroundColor: currentQuestionIndex === mcqs.length - 1 || submitted || !isFullScreen ? '#d1d5db' : '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: currentQuestionIndex === mcqs.length - 1 || submitted || !isFullScreen ? 'not-allowed' : 'pointer',
              }}
            >
              Next
            </button>
          </div>
          <button
            onClick={handleSubmit}
            style={{
              padding: '12px 20px',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
