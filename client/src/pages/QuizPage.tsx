import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserStore } from "../store/userStore";

interface MCQQuestion {
  question: string;
  options: string[];
}

interface QuizSummary {
  topic: string;
  score: number;
  masteryUpdate: Record<string, number>;
  correctAnswers?: string[];
  userAnswers?: string[];
}

const QuizPage = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const username = useUserStore((state) => state.username);
  const updateProfile = useUserStore((state) => state.setProfile);
  const currentMastery = useUserStore((state) => state.mastery);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MCQQuestion[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState<QuizSummary | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);

  // Fetch MCQ questions
  useEffect(() => {
    const fetchQuiz = async () => {
      if (!topic) {
        setError("No topic specified");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(`/api/quiz/${encodeURIComponent(topic)}`);

        if (!res.data) {
          throw new Error("No data received from server");
        }

        const fetchedQuestions = res.data.questions;

        if (!Array.isArray(fetchedQuestions)) {
          throw new Error("Invalid questions format received from server");
        }

        setQuestions(fetchedQuestions);
        setAnswers(new Array(fetchedQuestions.length).fill(""));
        setCorrectAnswers(res.data._correctAnswers || []);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to load quiz questions";
        console.error("Quiz loading error:", err);
        setError(errorMessage);
        setQuestions([]);
        setAnswers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [topic]);

  const handleOptionSelect = (qIndex: number, selected: string) => {
    if (submitted) return;

    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[qIndex] = selected;
      return newAnswers;
    });
  };

  const handleSubmit = async () => {
    if (questions.length === 0 || answers.some((a) => !a)) return;

    try {
      setSubmitted(true);

      const res = await axios.post("/api/quiz/submit", {
        topic,
        answers,
        username,
        _correctAnswers: correctAnswers,
      });

      setSummary(res.data);

      if (res.data?.masteryUpdate) {
        updateProfile({
          mastery: {
            ...currentMastery,
            ...res.data.masteryUpdate,
          },
        });
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to submit quiz";
      console.error("Quiz submission error:", err);
      setError(errorMessage);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg text-gray-600">Loading quiz questions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-red-600">Error</h2>
        <p className="mt-4 text-red-500">{error}</p>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Quiz on: {topic}</h2>

      {questions.length === 0 ? (
        <p className="text-gray-600">No questions available for this topic.</p>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {questions.map((q, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow">
              <p className="font-semibold mb-3">
                {i + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={`question-${i}`}
                      value={option}
                      checked={answers[i] === option}
                      onChange={() => handleOptionSelect(i, option)}
                      disabled={submitted}
                      className="text-blue-600"
                    />
                    <span
                      className={
                        submitted && summary
                          ? summary.correctAnswers?.[i] === option
                            ? "text-green-600 font-semibold"
                            : summary.userAnswers?.[i] === option
                            ? "text-red-600"
                            : "text-gray-600"
                          : "text-gray-700"
                      }
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {!submitted && (
            <button
              onClick={handleSubmit}
              disabled={answers.some((a) => !a)}
              className="w-full mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                       disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Submit Quiz
            </button>
          )}
        </form>
      )}

      {/* Quiz Results */}
      {summary && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Quiz Results</h3>
          <p className="text-lg">
            <span className="font-semibold">Score:</span> {summary.score.toFixed(1)}%
          </p>
          {summary.masteryUpdate && topic && (
            <p className="text-lg">
              <span className="font-semibold">Mastery Level:</span>{" "}
              {((1 - (summary.masteryUpdate[topic] || 0)) * 100).toFixed(1)}%
            </p>
          )}
          <button
            onClick={() => navigate("/dashboard")}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Return to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
