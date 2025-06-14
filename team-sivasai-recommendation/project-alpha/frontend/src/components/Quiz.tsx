// Total code developed by sahithya and meghana - team4
// from here developed by sahithya
import { useState, useEffect, useRef } from 'react';

type MCQ = {
  topic: string;
  question: string;
  options: string[];
  answer: string;
};

type Props = {
  mcqs: MCQ[];
};

const Quiz: React.FC<Props> = ({ mcqs }) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(mcqs.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);

  const handleOptionChange = (index: number, value: string) => {
    if (!submitted && isFullScreen) {
      const newAnswers = [...userAnswers];
      newAnswers[index] = value;
      setUserAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    if (isFullScreen) {
      setSubmitted(true);
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

  const enterFullScreen = () => {
    if (quizRef.current) {
      quizRef.current.requestFullscreen().then(() => {
        setIsFullScreen(true);
        setShowWarning(false);
      }).catch((err) => {
        console.error('Error entering full-screen mode:', err);
        setShowWarning(true);
      });
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        setIsFullScreen(false);
      }).catch((err) => {
        console.error('Error exiting full-screen mode:', err);
      });
    }
  };

  useEffect(() => {
    enterFullScreen();

    const handleFullScreenChange = () => {
      const isCurrentlyFullScreen = !!document.fullscreenElement;
      setIsFullScreen(isCurrentlyFullScreen);
      if (!isCurrentlyFullScreen && !submitted) {
        setShowWarning(true);
        console.log('Warning: User exited full-screen mode during the quiz. Possible tab-switching detected.');
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };
  }, [submitted]);

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
    >
    {/* from this part developed by meghana */}
      {/* Warning Modal */}
      {showWarning && !isFullScreen && (
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
              This quiz must be taken in full-screen mode to simulate a monitored exam environment. Exiting full-screen mode has been flagged. Please re-enter full-screen mode to continue.
            </p>
            <button
              onClick={enterFullScreen}
              style={{
                padding: '12px 20px',
                backgroundColor: '#6366f1',
                color: '#fff',
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

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ marginBottom: '20px', fontSize: '22px', fontWeight: 'bold' }}>
          MCQ Test
        </h2>
        {isFullScreen && !submitted && (
          <button
            onClick={() => {
              exitFullScreen();
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: '#ef4444',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Exit Full Screen
          </button>
        )}
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {mcqs.map((mcq, i) => (
          <div
            key={i}
            style={{
              marginBottom: '20px',
              padding: '16px',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <p style={{ fontWeight: 600 }}>{i + 1}. {mcq.question}</p>
            <div>
              {mcq.options.map((opt, j) => (
                <label key={j} style={{ display: 'block', margin: '6px 0' }}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={opt}
                    checked={userAnswers[i] === opt}
                    onChange={() => handleOptionChange(i, opt)}
                    disabled={submitted || !isFullScreen}
                    style={{ marginRight: '8px' }}
                  />
                  {opt}
                </label>
              ))}
            </div>
            {submitted && userAnswers[i] && (
              <p
                style={{
                  color: userAnswers[i].trim().toLowerCase() === mcq.answer.trim().toLowerCase() ? 'green' : 'red',
                  fontWeight: 500,
                  marginTop: '6px',
                }}
              >
                {userAnswers[i].trim().toLowerCase() === mcq.answer.trim().toLowerCase()
                  ? '✅ Correct'
                  : `❌ Incorrect (Correct answer: ${mcq.answer})`}
              </p>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          style={{
            marginTop: '20px',
            padding: '12px 20px',
            backgroundColor: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: isFullScreen ? 'pointer' : 'not-allowed',
            opacity: isFullScreen ? 1 : 0.5,
          }}
          disabled={userAnswers.every(answer => !answer) || !isFullScreen}
        >
          Submit Quiz
        </button>
      ) : (
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          🏁 Your Score: {getScore()} / {mcqs.length}
        </div>
      )}
    </div>
  );
};

export default Quiz;
