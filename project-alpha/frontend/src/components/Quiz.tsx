import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

type MCQ = {
  id: string;
  topic: string;
  question: string;
  options: string[];
  answer: string;
};

type LearningPathWeek = {
  week: number;
  tasks: string[];
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

const Quiz: React.FC<Props> = ({ mcqs, quizId, onRestartQuiz, onSubmitQuiz, canAttempt, attemptsToday, quizPassed, topic }) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(() => Array(mcqs.length).fill(''));
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
  const [showFeedback, setShowFeedback] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [showLearningPathPage, setShowLearningPathPage] = useState(false);
  const [weeksInput, setWeeksInput] = useState('');
  const [learningPath, setLearningPath] = useState<LearningPathWeek[] | null>(null);
  const [learningPathLoading, setLearningPathLoading] = useState(false);

  const quizRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const totalTime = mcqs.length * 60;

  const themeStyles = {
    light: {
      quizBackground: '#f9fafb',
      questionBackground: '#fff',
      textPrimary: '#374151',
      textSecondary: '#555',
      buttonPrimary: '#6366f1',
      buttonPrimaryGradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
      buttonSecondary: '#ef4444',
      buttonSuccess: '#10b981',
      buttonDisabled: '#d1d5db',
      modalBackground: '#fff',
      modalOverlay: 'rgba(0, 0, 0, 0.8)',
      alertBackground: '#fef3c7',
      alertBorder: '#f59e0b',
      alertTextColor: '#b45309',
      alertButtonBackground: '#f59e0b',
      passBackground: '#d1fae5',
      passBorderColor: '#34d399',
      passTextColor: '#065f46',
      failBackgroundColor: '#fee2e2',
      failBorderColor: '#ef4444',
      failTextBackgroundColor: '#991b1b',
      boxGradientNeutral: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
      boxGradientCorrect: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
      boxGradientIncorrect: 'linear-gradient(135deg, #fee2e2, #fecaca)',
      boxGradientPoor: 'linear-gradient(135deg, #fee2e2, #fecaca)',
      boxGradientAverage: 'linear-gradient(135deg, #fef3c7, #fef9c3)',
      boxGradientGood: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      boxShadowHover: '0 6px 18px rgba(0,0,0,0.2)',
      navigationBackground: '#fff',
      navigationBorder: '#eee',
      progressRingBackground: '#e5e7eb',
      progressRingPoor: '#ef4444',
      progressRingAverage: '#f59e0b',
      progressRingGood: '#10b981',
      unattemptedColor: '#f59d05',
      resultsHeading: '#2563eb',
      learningPathBackground: '#e0f2fe',
      learningBorderColor: '#3b82f6',
      learningTextColor: '#1e40af',
      learningHighlightColor: '#fef3c7',
      timerIconFill: '#374151',
      timerIconStroke: '#6366f1',
    },
    dark: {
      quizBackground: '#1f2937',
      questionBackground: '#374151',
      textPrimary: '#e5e7eb',
      textSecondary: '#9ca3af',
      buttonPrimary: '#818cf8',
      buttonPrimaryGradient: 'linear-gradient(135deg, #818cf8, #6366f1)',
      buttonSecondary: '#f87171',
      buttonSuccess: '#34d399',
      buttonDisabled: '#4b5563',
      modalBackground: '#374151',
      modalOverlay: 'rgba(0,0,0,0.9)',
      alertBackground: '#78350f',
      alertBorder: '#d97706',
      alertTextColor: '#fed7aa',
      alertButtonBackground: '#d97706',
      passBackground: '#065f46',
      passBorderColor: '#10b981',
      passTextColor: '#d1fae5',
      failBackgroundColor: '#7f1d1d',
      failBorderColor: '#ef4444',
      failTextBackgroundColor: '#fee2e2',
      boxGradientNeutral: 'linear-gradient(135deg, #4b5563, #6b7280)',
      boxGradientCorrect: 'linear-gradient(135deg, #065f46, #10b981)',
      boxGradientIncorrect: 'linear-gradient(135deg, #7f1d1d, #b91c1c)',
      boxGradientPoor: 'linear-gradient(135deg, #7f1d1d, #b91c1c)',
      boxGradientAverage: 'linear-gradient(135deg, #78350f, #b45309)',
      boxGradientGood: 'linear-gradient(135deg, #065f46, #10b981)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      boxShadowHover: '0 6px 18px rgba(0,0,0,0.4)',
      navigationBackground: '#374151',
      navigationBorder: '#4b5563',
      progressRingBackground: '#4b5563',
      progressRingPoor: '#f87171',
      progressRingAverage: '#d97706',
      progressRingGood: '#34d399',
      unattemptedColor: '#d97706',
      resultsHeading: '#60a5fa',
      learningPathBackground: '#1e3a8a',
      learningBorderColor: '#60a5fa',
      learningTextColor: '#bfdbfe',
      learningHighlightColor: '#78350f',
      timerIconFill: '#e5e7eb',
      timerIconStroke: '#818cf8',
    },
  };

  const currentTheme = isDarkMode ? themeStyles.dark : themeStyles.light;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  useEffect(() => {
    console.log("Quiz component: quizId changed or mcqs length changed. Resetting state.");
    setUserAnswers(() => Array(mcqs.length).fill(''));
    setSubmitted(false);
    setShowWarning(false);
    setShowEnterFullScreenModal(true);
    setCurrentQuestionIndex(0);
    setOverallTimeLeft(mcqs.length * 60);
    setWarningsLeft(3);
    setKeyPressWarningShown(false);
    setShowKeyPressAlert(false);
    setShowNavigationPane(false);
    setShowFeedback(false);
    setShowLearningPathPage(false);
    setWeeksInput('');
    setLearningPath(null);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
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
  }, [isFullScreen, submitted, onSubmitQuiz, mcqs.length]);

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
  }, [isFullScreen, submitted, onSubmitQuiz, mcqs.length, showEnterFullScreenModal]);

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
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullScreen, submitted, keyPressWarningShown, onSubmitQuiz, mcqs.length]);

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
      }
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    if (!submitted && isFullScreen) {
      const newAnswers = [...userAnswers];
      newAnswers[index] = value;
      setUserAnswers(newAnswers);
    }
  };

  const handleClearOption = (index: number) => {
    if (!submitted && isFullScreen) {
      const newAnswers = [...userAnswers];
      newAnswers[index] = '';
      setUserAnswers(newAnswers);
      console.log(`Cleared answer for question ${index + 1} at ${new Date().toISOString()}`);
    }
  };

  const handleSubmit = () => {
    if (isFullScreen) {
      setSubmitted(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      console.log("Quiz submitted manually.");
      if (onSubmitQuiz) onSubmitQuiz(getScore(), mcqs.length);
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

  const getPerformanceLabel = () => {
    const percentage = getScorePercentage();
    if (percentage < 40) return 'Poor';
    if (percentage < 55) return 'Average';
    return 'Good';
  };

  const enterFullScreen = () => {
    if (quizRef.current) {
      quizRef.current.requestFullscreen()
        .then(() => {
          setIsFullScreen(true);
          setShowWarning(false);
          setShowEnterFullScreenModal(false);
          console.log("Entered full-screen mode.");
        })
        .catch((err) => {
          console.error('Error entering full-screen mode:', err);
          alert('Failed to enter full-screen mode. Please allow full-screen in browser settings.');
        });
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
        .then(() => {
          setIsFullScreen(false);
          console.log("Exited full-screen mode manually.");
        })
        .catch((err) => {
          console.error('Error exiting full-screen mode:', err);
        });
    }
  };

  const handleRetakeQuiz = () => {
    console.log("Quiz component: Retake Quiz clicked, calling onRestartQuiz prop.");
    if (onRestartQuiz) {
      onRestartQuiz(getScore(), getScorePercentage() >= 65);
    }
  };

  const handleLearningPathSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const weeks = parseInt(weeksInput, 10);
    if (isNaN(weeks) || weeks < 1 || weeks > 52) {
      alert('Please enter a valid number of weeks (1-52).');
      return;
    }

    setLearningPathLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/learning-path', {
        topic,
        scorePercentage: getScorePercentage(),
        weeks,
      });
      setLearningPath(res.data.learningPath);
    } catch (err) {
      console.error('Error fetching learning path:', err);
      alert('Failed to generate learning path. Please try again.');
    } finally {
      setLearningPathLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const renderWarningsLeft = () => {
    return '⚡'.repeat(warningsLeft);
  };

  const totalQuestions = mcqs.length;
  const answeredQuestions = userAnswers.filter(answer => answer !== '').length;
  const unattemptedQuestions = totalQuestions - answeredQuestions;
  const correctAnswers = getScore();
  const incorrectAnswers = answeredQuestions - correctAnswers;
  const timeSpent = totalTime - overallTimeLeft;

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - getScorePercentage() / 100);

  return (
    <div
      ref={quizRef}
      style={{
        padding: isFullScreen ? '40px' : '20px',
        background: currentTheme.quizBackground,
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
            backgroundColor: currentTheme.modalOverlay,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: currentTheme.modalBackground,
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center',
              maxWidth: '500px',
              boxShadow: currentTheme.boxShadow,
            }}
          >
            <h3 style={{ color: currentTheme.buttonPrimary, marginBottom: '20px' }}>
              📝 Enter Full-Screen Mode
            </h3>
            <p style={{ marginBottom: '20px', color: currentTheme.textPrimary }}>
              Please enter full-screen mode to start the quiz for {topic}. You have {mcqs.length} minute(s) for {mcqs.length} question(s). Pressing Ctrl, Alt, Start (Windows key), PrintScreen, or attempting to copy for the first time will show a warning alert. Exiting full-screen, switching tabs, or repeating these actions will count as a warning. You have 3 warnings (⚡⚡⚡); the quiz will auto-submit silently if the last warning is exhausted. You have {3 - attemptsToday} attempt(s) left today for {topic}.
            </p>
            <button
              onClick={enterFullScreen}
              style={{
                padding: '12px 20px',
                backgroundColor: currentTheme.buttonPrimary,
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

      {showLearningPathPage && quizPassed && (
        <div
          style={{
            padding: '40px',
            background: currentTheme.quizBackground,
            borderRadius: '12px',
            maxWidth: '1200px',
            margin: '0 auto',
            boxShadow: currentTheme.boxShadow,
            overflowY: 'auto',
            height: '100vh',
            boxSizing: 'border-box',
          }}
        >
          <h2 style={{
            fontSize: '28px',
            marginBottom: '20px',
            textAlign: 'center',
            color: currentTheme.resultsHeading,
            fontWeight: 'bold',
          }}>
            🎉 Congratulations on Passing the {topic} Quiz!
          </h2>
          <p style={{
            textAlign: 'center',
            color: currentTheme.textPrimary,
            marginBottom: '30px',
            fontSize: '18px',
          }}>
            You're ready to embark on your learning journey for {topic}. Plan your path below.
          </p>
          <button
            onClick={() => setShowLearningPathPage(false)}
            style={{
              display: 'block',
              margin: '0 auto 30px',
              padding: '12px 20px',
              backgroundColor: currentTheme.buttonSecondary,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Back to Quiz Results
          </button>
          <div style={{
            backgroundColor: currentTheme.modalBackground,
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '0 auto',
            boxShadow: currentTheme.boxShadow,
          }}>
            <h3 style={{ color: currentTheme.buttonPrimary, marginBottom: '20px' }}>
              📚 Plan Your Learning Journey
            </h3>
            <p style={{ marginBottom: '20px', color: currentTheme.textPrimary }}>
              How many weeks are you willing to dedicate to mastering {topic}?
            </p>
            <form onSubmit={handleLearningPathSubmit}>
              <input
                type="number"
                value={weeksInput}
                onChange={(e) => setWeeksInput(e.target.value)}
                placeholder="Enter number of weeks (1-52)"
                min="1"
                max="52"
                style={{
                  padding: '12px',
                  width: '100%',
                  marginBottom: '20px',
                  border: `1px solid ${currentTheme.buttonPrimary}`,
                  borderRadius: '8px',
                  color: currentTheme.textPrimary,
                  backgroundColor: currentTheme.questionBackground,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px 20px',
                  backgroundColor: currentTheme.buttonSuccess,
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: learningPathLoading ? 'not-allowed' : 'pointer',
                  opacity: learningPathLoading ? 0.5 : 1,
                }}
                disabled={learningPathLoading}
              >
                {learningPathLoading ? 'Generating...' : 'Generate Learning Path'}
              </button>
            </form>
          </div>
          {learningPath && (
            <div style={{ marginTop: '40px', position: 'relative' }}>
              <h2 style={{
                fontSize: '28px',
                marginBottom: '30px',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
                <span style={{ color: currentTheme.resultsHeading }}>Learning Path for</span>{' '}
                <span style={{
                  color: currentTheme.buttonSuccess,
                  backgroundColor: currentTheme.learningHighlightColor,
                  padding: '2px 8px',
                  borderRadius: '8px',
                }}>
                  {topic}
                </span>
              </h2>
              <div className="roadway" style={{
                position: 'relative',
                paddingLeft: '40px',
                paddingRight: '20px',
              }}>
                {learningPath.map((week, index) => (
                  <div key={week.week} className="roadway-item" style={{
                    marginBottom: '20px',
                    position: 'relative',
                    padding: '10px 20px',
                    background: currentTheme.learningPathBackground,
                    border: `1px solid ${currentTheme.learningBorderColor}`,
                    borderRadius: '8px',
                    color: currentTheme.learningTextColor,
                    boxShadow: currentTheme.boxShadow,
                    animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`,
                    opacity: '0',
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      marginBottom: '10px',
                      color: currentTheme.textPrimary,
                    }}>
                      Week {week.week}
                    </h3>
                    <ul style={{
                      paddingLeft: '20px',
                      lineHeight: '1.8',
                      listStyleType: 'disc',
                      color: currentTheme.textPrimary,
                    }}>
                      {week.tasks.map((task, i) => (
                        <li key={i} style={{ marginBottom: '6px' }}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {showWarning && !isFullScreen && !showEnterFullScreenModal && warningsLeft > 0 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: currentTheme.modalOverlay,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: currentTheme.modalBackground,
              padding: '30px',
              borderRadius: '12px',
              textAlign: 'center',
              maxWidth: '500px',
              boxShadow: currentTheme.boxShadow,
            }}
          >
            <h3 style={{ color: currentTheme.buttonSecondary, marginBottom: '20px' }}>
              ⚠️ Full-Screen Mode Required
            </h3>
            <p style={{ marginBottom: '20px', color: currentTheme.textPrimary }}>
              This quiz must be taken in full-screen mode. You have {warningsLeft} warning(s) left ({renderWarningsLeft()}). Exiting full-screen, switching tabs, pressing Ctrl, Alt, Start (Windows key), PrintScreen, or attempting to copy again counts as a warning. The quiz will auto-submit silently if the last warning is exhausted.
            </p>
            <button
              onClick={enterFullScreen}
              style={{
                padding: '12px 20px',
                backgroundColor: currentTheme.buttonPrimary,
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
            backgroundColor: currentTheme.alertBackground,
            padding: '15px',
            border: `1px solid ${currentTheme.alertBorder}`,
            borderRadius: '8px',
            boxShadow: currentTheme.boxShadow,
            zIndex: 1100,
            maxWidth: '300px',
            textAlign: 'center',
          }}
        >
          <p style={{ color: currentTheme.alertTextColor, marginBottom: '10px' }}>
            ⚠️ Warning: Pressing Ctrl, Alt, Start (Windows key), PrintScreen, or attempting to copy is prohibited. Next occurrence will reduce your warnings ({renderWarningsLeft()}).
          </p>
          <button
            onClick={() => setShowKeyPressAlert(false)}
            style={{
              padding: '8px 16px',
              backgroundColor: currentTheme.alertButtonBackground,
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

      {!showLearningPathPage && (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
            {isFullScreen && !submitted && (
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={currentTheme.timerIconFill}
                    stroke={currentTheme.timerIconStroke}
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="12" x2="12" y2="6" />
                    <line x1="12" y1="12" x2="16" y2="12" />
                  </svg>
                  <span style={{
                    fontWeight: 'bold',
                    color: overallTimeLeft <= 30 ? currentTheme.buttonSecondary : currentTheme.textPrimary
                  }}>
                    {formatTime(overallTimeLeft)}
                  </span>
                </div>
                <button
                  onClick={exitFullScreen}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: currentTheme.buttonSecondary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Exit Full Screen
                </button>
              </div>
            )}
          </div>

          {!submitted && isFullScreen && (
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <span style={{ fontWeight: 'bold', color: currentTheme.textPrimary }}>Total: {totalQuestions}</span>
                <span style={{ fontWeight: 'bold', color: 'green' }}>Answered: {answeredQuestions}</span>
                <span style={{ fontWeight: 'bold', color: currentTheme.unattemptedColor }}>Unanswered: {unattemptedQuestions}</span>
                <span style={{ fontWeight: 'bold', color: warningsLeft <= 1 ? currentTheme.buttonSecondary : currentTheme.textPrimary }}>
                  Warnings Left: {renderWarningsLeft()}
                </span>
              </div>
            </div>
          )}

          <div style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            gap: '20px',
            position: 'relative',
          }}>
            <div style={{ flex: 1 }}>
              {mcqs.length > 0 && !submitted && (
                <div
                  style={{
                    marginBottom: '20px',
                    padding: '16px',
                    background: currentTheme.questionBackground,
                    borderRadius: '8px',
                    boxShadow: currentTheme.boxShadow,
                    userSelect: 'none',
                  }}
                >
                  <p style={{ fontWeight: 600, color: currentTheme.textPrimary }} dangerouslySetInnerHTML={{ __html: `${currentQuestionIndex + 1}. ${mcqs[currentQuestionIndex].question}` }} />
                  <div>
                    {mcqs[currentQuestionIndex].options.map((opt, j) => (
                      <label key={j} style={{ display: 'block', margin: '6px 0', userSelect: 'none', color: currentTheme.textPrimary }}>
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
                    <button
                      onClick={() => handleClearOption(currentQuestionIndex)}
                      disabled={submitted || !isFullScreen || !userAnswers[currentQuestionIndex]}
                      style={{
                        marginTop: '12px',
                        padding: '8px 16px',
                        backgroundColor: (submitted || !isFullScreen || !userAnswers[currentQuestionIndex]) ? currentTheme.buttonDisabled : currentTheme.buttonSecondary,
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: (submitted || !isFullScreen || !userAnswers[currentQuestionIndex]) ? 'not-allowed' : 'pointer',
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}
              {submitted && showFeedback && (
                <div>
                  {mcqs.map((mcq, i) => (
                    <div
                      key={mcq.id}
                      style={{
                        marginBottom: '20px',
                        padding: '16px',
                        background: currentTheme.questionBackground,
                        borderRadius: '8px',
                        boxShadow: currentTheme.boxShadow,
                      }}
                    >
                      <p style={{ fontWeight: 600, color: currentTheme.textPrimary }} dangerouslySetInnerHTML={{ __html: `${i + 1}. ${mcq.question}` }} />
                      <div>
                        {mcq.options.map((opt, j) => (
                          <label key={j} style={{ display: 'block', margin: '6px 0', color: currentTheme.textPrimary }}>
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
                                : currentTheme.buttonSecondary,
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
                            color: currentTheme.buttonSecondary,
                            fontWeight: 500,
                            marginTop: '6px',
                          }}
                        >
                          ❌ Not Answered (Correct answer: {mcq.answer})
                        </p>
                      )}
                    </div>
                  ))}
                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button
                      onClick={() => setShowFeedback(false)}
                      style={{
                        padding: '12px 20px',
                        backgroundColor: currentTheme.buttonSecondary,
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
              {submitted && !showFeedback && (
                <div style={{ marginTop: '20px' }}>
                  <h2 style={{
                    textAlign: 'center',
                    fontSize: '28px',
                    marginBottom: '30px',
                    color: currentTheme.resultsHeading,
                    fontWeight: 'bold',
                  }}>
                    Quiz Results for {topic}
                  </h2>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                    <svg
                      width="150"
                      height="150"
                      viewBox="0 0 150 150"
                      style={{
                        transition: 'transform 0.2s ease-in-out',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <circle
                        cx="75"
                        cy="75"
                        r={radius}
                        fill="none"
                        stroke={currentTheme.progressRingBackground}
                        strokeWidth="10"
                      />
                      <circle
                        cx="75"
                        cy="75"
                        r={radius}
                        fill="none"
                        stroke={currentTheme[`progressRing${getPerformanceLabel()}`]}
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform="rotate(-90 75 75)"
                      />
                      <text
                        x="75"
                        y="70"
                        textAnchor="middle"
                        fontSize="24"
                        fontWeight="bold"
                        fill={currentTheme[`progressRing${getPerformanceLabel()}`]}
                      >
                        {getScorePercentage().toFixed(2)}%
                      </text>
                      <text
                        x="75"
                        y="90"
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight="bold"
                        fill={currentTheme.textPrimary}
                      >
                        {getPerformanceLabel()}
                      </text>
                    </svg>
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                      gap: '20px',
                      marginBottom: '20px',
                    }}
                  >
                    <div
                      style={{
                        padding: '20px',
                        background: currentTheme.boxGradientNeutral,
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: currentTheme.boxShadow,
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadowHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadow;
                      }}
                    >
                      <p style={{ fontWeight: 'bold', color: currentTheme.textPrimary, fontSize: '16px', marginBottom: '8px' }}>📝 Attempted</p>
                      <p style={{ fontSize: '24px', fontWeight: 'bold', color: currentTheme.buttonPrimary }}>{answeredQuestions}</p>
                    </div>
                    <div
                      style={{
                        padding: '20px',
                        background: currentTheme.boxGradientNeutral,
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: currentTheme.boxShadow,
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadowHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadow;
                      }}
                    >
                      <p style={{ fontWeight: 'bold', color: currentTheme.textPrimary, fontSize: '16px', marginBottom: '8px' }}>🚫 Unattempted</p>
                      <p style={{ fontSize: '24px', fontWeight: 'bold', color: currentTheme.unattemptedColor }}>{unattemptedQuestions}</p>
                    </div>
                    <div
                      style={{
                        padding: '20px',
                        background: currentTheme.boxGradientCorrect,
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: currentTheme.boxShadow,
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadowHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadow;
                      }}
                    >
                      <p style={{ fontWeight: 'bold', color: currentTheme.textPrimary, fontSize: '16px', marginBottom: '8px' }}>✅ Correct</p>
                      <p style={{ fontSize: '24px', fontWeight: 'bold', color: currentTheme.buttonSuccess }}>{correctAnswers}</p>
                    </div>
                    <div
                      style={{
                        padding: '20px',
                        background: currentTheme.boxGradientIncorrect,
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: currentTheme.boxShadow,
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadowHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadow;
                      }}
                    >
                      <p style={{ fontWeight: 'bold', color: currentTheme.textPrimary, fontSize: '16px', marginBottom: '8px' }}>❌ Incorrect</p>
                      <p style={{ fontSize: '24px', fontWeight: 'bold', color: currentTheme.buttonSecondary }}>{incorrectAnswers}</p>
                    </div>
                    <div
                      style={{
                        padding: '20px',
                        background: currentTheme.boxGradientNeutral,
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: currentTheme.boxShadow,
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadowHover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadow;
                      }}
                    >
                      <p style={{ fontWeight: 'bold', color: currentTheme.textPrimary, fontSize: '16px', marginBottom: '8px' }}>⏳ Time Spent</p>
                      <p style={{ fontSize: '24px', fontWeight: 'bold', color: currentTheme.buttonPrimary }}>{formatTime(timeSpent)}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => setShowFeedback(true)}
                      style={{
                        padding: '12px 20px',
                        background: currentTheme.buttonPrimaryGradient,
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        marginRight: '10px',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = currentTheme.boxShadow;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      Review Questions
                    </button>
                    {quizPassed && learningPath && (
                      <button
                        onClick={() => setShowLearningPathPage(true)}
                        style={{
                          padding: '12px 20px',
                          background: currentTheme.buttonSuccess,
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '16px',
                          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = currentTheme.boxShadow;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        View Learning Path
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {!submitted && isFullScreen && (
              <button
                onClick={() => setShowNavigationPane(!showNavigationPane)}
                title={showNavigationPane ? 'Collapse Navigation' : 'Expand Navigation'}
                style={{
                  position: 'absolute',
                  right: showNavigationPane ? '210px' : '0px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: currentTheme.buttonPrimary,
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  boxShadow: currentTheme.boxShadow,
                  zIndex: 999,
                  transition: 'right 0.3s ease-in-out',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                {showNavigationPane ? '»' : '«'}
              </button>
            )}

            {isFullScreen && !submitted && (
              <div
                style={{
                  width: showNavigationPane ? '200px' : '0',
                  background: currentTheme.navigationBackground,
                  padding: showNavigationPane ? '10px' : '0',
                  borderRadius: '8px',
                  boxShadow: showNavigationPane ? currentTheme.boxShadow : 'none',
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
                    <div style={{ marginBottom: '10px', paddingBottom: '10px', borderBottom: `1px solid ${currentTheme.navigationBorder}` }}>
                      <p style={{ fontWeight: 'bold', color: currentTheme.textPrimary, fontSize: '14px', marginBottom: '5px' }}>
                        🚫 Prohibited Actions:
                      </p>
                      <ul style={{ listStyleType: 'disc', marginLeft: '15px', fontSize: '12px', color: currentTheme.textSecondary }}>
                        <li>Pressing Ctrl, Alt, Meta (Windows key), PrintScreen.</li>
                        <li>Attempting to copy text.</li>
                        <li>Exiting Full-Screen mode (e.g., via Esc key).</li>
                        <li>Switching browser tabs.</li>
                      </ul>
                      <p style={{ fontWeight: 'bold', color: currentTheme.buttonSecondary, fontSize: '12px', marginTop: '5px' }}>
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
                            backgroundColor: userAnswers[index] ? currentTheme.buttonSuccess : (index === currentQuestionIndex ? currentTheme.buttonPrimary : currentTheme.buttonSecondary),
                            color: 'white',
                            border: index === currentQuestionIndex ? '2px solid #000' : 'none',
                            borderRadius: '50%',
                            cursor: submitted || !isFullScreen ? 'not-allowed' : 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            opacity: submitted || !isFullScreen ? 0.5 : 1,
                            pointerEvents: submitted || !isFullScreen ? 'none' : 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
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
                    backgroundColor: currentQuestionIndex === 0 || submitted || !isFullScreen ? currentTheme.buttonDisabled : currentTheme.buttonPrimary,
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
                    backgroundColor: currentQuestionIndex === mcqs.length - 1 || submitted || !isFullScreen ? currentTheme.buttonDisabled : currentTheme.buttonPrimary,
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
                  backgroundColor: currentTheme.buttonSuccess,
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
        </>
      )}
      {submitted && !showLearningPathPage && (
        <div style={{ marginTop: '20px', fontWeight: 'bold', textAlign: 'center' }}>
          {warningsLeft <= 0 && (
            <p style={{ color: currentTheme.buttonSecondary, marginTop: '10px' }}>
              ⚠️ Quiz auto-submitted due to exhausting all warnings (exiting full-screen, switching tabs, pressing Ctrl, Alt, Start (Windows key), PrintScreen, or attempting to copy).
            </p>
          )}

          {quizPassed ? (
            <div style={{
              backgroundColor: currentTheme.passBackground,
              border: `1px solid ${currentTheme.passBorderColor}`,
              color: currentTheme.passTextColor,
              padding: '15px',
              borderRadius: '8px',
              marginTop: '20px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
              <p>🎉 Congratulations! You passed the quiz and can proceed with the specified learning path.</p>
              <p style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'normal' }}>
                No further attempts are allowed since you passed.
              </p>
              {!learningPath && (
                <button
                  onClick={() => setShowLearningPathPage(true)}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: currentTheme.buttonPrimary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '15px',
                    fontSize: '16px',
                  }}
                >
                  Proceed to Learning Path
                </button>
              )}
            </div>
          ) : (
            <div style={{
              backgroundColor: currentTheme.failBackgroundColor,
              border: `1px solid ${currentTheme.failBorderColor}`,
              color: currentTheme.failTextBackgroundColor,
              padding: '15px',
              borderRadius: '8px',
              marginTop: '20px',
              fontSize: '18px',
              fontWeight: 'bold',
            }}>
              <p>😞 You need some learning on these prerequisites. After learning these, come and retake the test.</p>
              {canAttempt && (
                <button
                  onClick={handleRetakeQuiz}
                  style={{
                    padding: '12px 20px',
                    backgroundColor: currentTheme.buttonPrimary,
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '15px',
                    fontSize: '16px',
                  }}
                >
                  Restart Quiz ({3 - attemptsToday} attempt{3 - attemptsToday === 1 ? '' : 's'} left today for {topic})
                </button>
              )}
              {!canAttempt && (
                <p style={{ color: currentTheme.buttonSecondary, marginTop: '10px', fontWeight: 'bold' }}>
                  ⚠️ Maximum attempts reached for {topic} today. Please try again tomorrow.
                </p>
              )}
            </div>
          )}
        </div>
      )}
      <style>{`
        .roadway::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, ${currentTheme.buttonPrimary}, ${currentTheme.buttonSuccess});
          border-radius: 2px;
        }
        .roadway-item::before {
          content: '';
          position: absolute;
          left: -20px;
          top: 20px;
          width: 12px;
          height: 12px;
          background-color: ${currentTheme.buttonSuccess};
          border-radius: 50%;
          border: 2px solid ${currentTheme.learningPathBackground};
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Quiz;
