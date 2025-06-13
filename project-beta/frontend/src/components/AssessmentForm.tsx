import axios from 'axios';
import React, { useState } from 'react';

type QuestionType = 'single-correct-mcq' | 'multiple-correct-mcq' | 'one-word' | 'numerical';

interface Question {
  question: string;
  options?: string[];
  correct_answer: string | string[] | number;
  type: QuestionType;
  topic_tested: string;
  concept_area: string;
  difficulty: string;
  insight_if_wrong: string;
  estimated_time_min: number;
}

interface AssessmentResponse {
  _id: string;
  targetTopic: string;
  prerequisites: string[];
  questions: Question[];
}

interface AnalysisResponse {
  message: string;
  weakTopics: string[];
  recommendations: string;
}

export default function AssessmentForm() {
  const [topic, setTopic] = useState('');
  const [userId, setUserId] = useState('');
  const [result, setResult] = useState<AssessmentResponse | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleSubmitTopic = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/assessment/generate', { target: topic });
      setResult(res.data);
      setAnswers({});
      setAnalysis(null);
      setScore(null);
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to generate assessment');
    }
  };

  const handleAnswerChange = (idx: number, value: any) => {
    setAnswers((prev) => ({ ...prev, [idx]: value }));
  };

  const handleMultiSelectChange = (idx: number, option: string) => {
    const prev = answers[idx] || [];
    if (prev.includes(option)) {
      handleAnswerChange(idx, prev.filter((o: string) => o !== option));
    } else {
      handleAnswerChange(idx, [...prev, option]);
    }
  };

  const handleSubmitAssessment = async () => {
    if (!result || !userId.trim()) {
      alert('Please provide a User ID and generate the assessment first.');
      return;
    }

    try {
      const payload = {
        assessmentId: result._id,
        userId,
        answers: result.questions.map((_, idx) => ({
          userAnswer: answers[idx] || [],
        })),
      };

      const submitRes = await axios.post('http://localhost:5000/api/response/submit', payload);
      const responses = submitRes.data.result.responses;

      // Calculate score (optional enhancement)
      const correctCount = responses.filter((r: any) => r.isCorrect).length;
      const total = responses.length;
      setScore(correctCount);

      const analysisRes = await axios.get(
        `http://localhost:5000/api/response/analysis/${userId}/${result._id}`
      );
      setAnalysis(analysisRes.data);
    } catch (err) {
      console.error(err);
      alert('Failed to submit or fetch analysis.');
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-4 flex gap-4 items-center">
        <input
          className="border p-2"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
        />
        <input
          className="border p-2 flex-1"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter Target Topic"
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSubmitTopic}>
          Generate Assessment
        </button>
      </div>

      {result && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Assessment for {result.targetTopic}</h2>
          {result.prerequisites?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">Prerequisite Topics:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {result.prerequisites.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          )}
          <form>
            {result.questions.map((q, idx) => (
              <div key={idx} className="mb-6 border-b pb-4">
                <p className="font-semibold">Q{idx + 1}. {q.question}</p>

                {q.type === 'single-correct-mcq' && q.options && (
                  <div className="mt-2">
                    {q.options.map((opt, optIdx) => (
                      <label key={optIdx} className="block">
                        <input
                          type="radio"
                          name={`q-${idx}`}
                          value={opt}
                          checked={answers[idx] === opt}
                          onChange={() => handleAnswerChange(idx, opt)}
                          className="mr-2"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}

                {q.type === 'multiple-correct-mcq' && q.options && (
                  <div className="mt-2">
                    {q.options.map((opt, optIdx) => (
                      <label key={optIdx} className="block">
                        <input
                          type="checkbox"
                          value={opt}
                          checked={answers[idx]?.includes(opt)}
                          onChange={() => handleMultiSelectChange(idx, opt)}
                          className="mr-2"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}

                {(q.type === 'one-word' || q.type === 'numerical') && (
                  <input
                    type="text"
                    className="border mt-2 p-1 w-full max-w-md"
                    placeholder="Your answer"
                    value={answers[idx] || ''}
                    onChange={(e) => handleAnswerChange(idx, e.target.value)}
                  />
                )}
              </div>
            ))}

            {result.questions.length > 0 && (
              <button
                type="button"
                onClick={handleSubmitAssessment}
                className="bg-green-600 text-white px-6 py-2 rounded mt-4"
              >
                Submit Assessment
              </button>
            )}
          </form>
        </div>
      )}

      {analysis && (
        <div className="mt-8 bg-gray-100 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">📊 Performance Report</h2>
          {score !== null && (
            <p className="mb-2 text-lg">✅ Score: {score}/{result?.questions.length}</p>
          )}
          <p className="mb-2 text-blue-700">{analysis.message}</p>

          {analysis.weakTopics.length > 0 && (
            <>
              <h3 className="font-semibold mt-4">Topics to Revisit:</h3>
              <ul className="list-disc list-inside text-red-600">
                {analysis.weakTopics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </>
          )}

          <p className="mt-4 text-green-700 whitespace-pre-line">{analysis.recommendations}</p>
        </div>
      )}
    </div>
  );
}
