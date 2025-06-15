import { useState } from 'react';
import axios from 'axios';
import Graph from './components/Graph';
import Quiz from './components/Quiz';

type PrereqData = {
  topic: string;
  prerequisites: string[];
};

type MCQ = {
  topic: string;
  question: string;
  options: string[];
  answer: string;
};

function App() {
  const [topic, setTopic] = useState('');
  const [data, setData] = useState<PrereqData | null>(null);
  const [mcqs, setMcqs] = useState<MCQ[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [isAcknowledged, setIsAcknowledged] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);

  const handleSubmit = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setMcqs(null);
    try {
      const res = await axios.post('http://localhost:5000/api/prerequisites', { topic });
      setData(res.data);
    } catch (err) {
      console.error('Error fetching prerequisites', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMCQs = async () => {
    if (!data || !isAcknowledged) return;
    setQuizLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/prerequisites/mcq', {
        prerequisites: data.prerequisites,
      });
      setMcqs(res.data);
    } catch (err) {
      console.error('Error fetching MCQs', err);
    } finally {
      setQuizLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #f3f4f6, #e0e7ff)',
      padding: '20px',
    }}>
      {/* HEADER */}
      <header style={{
        backgroundColor: '#4f46e5',
        color: '#fff',
        padding: '24px 32px',
        borderRadius: '12px',
        marginBottom: '30px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '32px', margin: 0 }}>📘 Smart Learning Path Recommender</h1>
        <p style={{ marginTop: '8px', fontSize: '16px', opacity: 0.9 }}>
          Get the best prerequisites before diving into any topic.
        </p>
      </header>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        backgroundColor: '#fff',
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}>
        {/* LEFT SIDE */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '20px',
            color: '#1f2937'
          }}>
            Enter a Topic
          </h2>

          {/* SUGGESTIONS */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ marginBottom: '10px', fontWeight: 600 }}>Try one of these:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Machine Learning', 'Data Structures', 'Cloud Computing', 'Blockchain', 'AI Ethics'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#e0e7ff',
                    border: '1px solid #6366f1',
                    color: '#3730a3',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: '0.2s ease-in-out'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT FIELD */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
            <input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Deep Learning"
              style={{
                flexGrow: 1,
                padding: '14px',
                fontSize: '16px',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                outlineColor: '#6366f1'
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                padding: '14px 22px',
                fontSize: '16px',
                backgroundColor: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Generate'}
            </button>
          </div>

          {/* LOADER */}
          {loading && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <div className="loader"></div>
              <p>Generating personalized recommendations...</p>
            </div>
          )}

          {/* PREREQUISITES LIST */}
          {data && (
            <>
              <h3 style={{ marginTop: '24px', marginBottom: '12px', fontSize: '20px', fontWeight: 600 }}>
                Prerequisites for <span style={{ color: '#6366f1' }}>{data.topic}</span>
              </h3>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                {data.prerequisites.map((item, i) => (
                  <li key={i} style={{ color: '#374151' }}>{item}</li>
                ))}
              </ul>

              {/* CHECKBOX AND START QUIZ BUTTON */}
              {!mcqs && (
                <>
                  <label style={{ display: 'flex', alignItems: 'center', marginTop: '20px', color: '#374151' }}>
                    <input
                      type="checkbox"
                      checked={isAcknowledged}
                      onChange={(e) => setIsAcknowledged(e.target.checked)}
                      style={{ marginRight: '8px' }}
                    />
                    I have thoroughly reviewed all prerequisites and am ready for the test
                  </label>
                  <button
                    onClick={fetchMCQs}
                    style={{
                      marginTop: '10px',
                      padding: '12px 20px',
                      backgroundColor: '#10b981',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: isAcknowledged && !quizLoading ? 'pointer' : 'not-allowed',
                      opacity: isAcknowledged && !quizLoading ? 1 : 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                    disabled={!isAcknowledged || quizLoading}
                  >
                    {quizLoading ? (
                      <>
                        <span className="loader" style={{ border: '3px solid #fff', borderTop: '3px solid transparent', width: '16px', height: '16px' }}></span>
                        Starting...
                      </>
                    ) : (
                      'Start Quiz on Prerequisites'
                    )}
                  </button>
                </>
              )}
            </>
          )}
        </div>

        {/* RIGHT SIDE - GRAPH */}
        <div style={{ flex: 1.5, minWidth: '400px', minHeight: '500px' }}>
          {data && (
            <>
              <h2 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 600, marginBottom: '20px' }}>
                Visual Graph of <span style={{ color: '#6366f1' }}>{data.topic}</span>
              </h2>
              <Graph topic={data.topic} prerequisites={data.prerequisites} />
            </>
          )}

          {/* AI Summary */}
          {data && (
            <div style={{
              marginTop: '30px',
              padding: '20px',
              backgroundColor: '#f0fdf4',
              border: '1px solid #10b981',
              borderRadius: '12px'
            }}>
              <h4 style={{ marginBottom: '10px', color: '#047857' }}>
                📌 AI Insight
              </h4>
              <p>
                Based on the topic <strong>{data.topic}</strong>, the above prerequisites are essential for building a solid foundation.
                Start with the basics and build your learning path step-by-step.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* MCQ QUIZ */}
      <div style={{ marginTop: '40px' }}>
        {mcqs && <Quiz mcqs={mcqs} />}
      </div>

      {/* CSS Spinner */}
      <style>{`
        .loader {
          border: 5px solid #e0e7ff;
          border-top: 5px solid #6366f1;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          margin: 0 auto 10px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;