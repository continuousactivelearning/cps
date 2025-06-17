import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  BookOpen,
  Trophy,
  User,
  LogOut,
  AlertTriangle,
  CheckCircle,
  Play,
  PenTool,
} from "lucide-react";
import api from "../services/api";
import ThemeToggle from "../components/ThemeToggle";

const Dashboard: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [missingPrereqs, setMissingPrereqs] = useState<string[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [canProceed, setCanProceed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const headers = { Authorization: `Bearer ${token}` };
        const res = await api.get("/api/user/passed", { headers });
        setUserEmail(res.data.email || null);
      } catch (err) {
        console.error("Error fetching user email:", err);
      }
    };

    fetchUserEmail();
  }, []);

  const handleTopicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMissingPrereqs([]);
    setCanProceed(false);

    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };

      const prereqRes = await api.get(`/api/prerequisite/${topic}`, {
        headers,
      });
      const prereqs: string[] = prereqRes.data.prerequisites || [];

      const userRes = await api.get(`/api/user/passed`, { headers });
      const passed: string[] = userRes.data.passed || [];

      const missing = prereqs.filter((pr) => !passed.includes(pr));

      if (missing.length === 0) {
        setCanProceed(true);
      } else {
        setMissingPrereqs(missing);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while processing your request.");
    }

    setLoading(false);
  };

  const handleProceedToLearn = () => {
    // Navigate to learning page for the topic
    navigate(`/learn/${encodeURIComponent(topic)}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    {/* Header */}
    <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">PreAsses</h1>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {userEmail && (
              <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg">
                <User className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {userEmail}
                </span>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          <h1 className="text-4xl md:text-5xl font-bold">What's Next on Your</h1>
          <h1 className="text-4xl md:text-5xl font-bold">Learning Journey?</h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Enter any topic you'd like to learn. Our AI system will check if you have the prerequisites and guide you on the optimal path forward.
        </p>
      </div>

      {/* Search Form */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-gray-800">
        <form onSubmit={handleTopicSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="topic"
              className="block text-lg font-semibold text-gray-900 dark:text-white mb-3"
            >
              What would you like to learn today?
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                id="topic"
                type="text"
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="e.g., Binary Trees, Machine Learning, React Hooks..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl text-lg"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing Prerequisites...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Check Learning Path</span>
              </div>
            )}
          </button>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-400 p-6 rounded-xl mb-8">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-red-400 mr-3" />
            <p className="text-red-700 dark:text-red-300 font-medium">{error}</p>
          </div>
        </div>
      )}

      {/* Ready to Learn */}
      {canProceed && (
        <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-400 rounded-xl overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-200">
                Ready to Learn!
              </h3>
            </div>
            <p className="text-green-800 dark:text-green-300 mb-6">
              Excellent! You have all the prerequisites needed to learn{" "}
              <strong>{topic}</strong>. You can now proceed to the learning material.
            </p>

            <button
              onClick={handleProceedToLearn}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Start Learning {topic}</span>
            </button>
          </div>
        </div>
      )}

      {/* Prerequisites Required */}
      {missingPrereqs.length > 0 && (
        <div className="bg-amber-50 dark:bg-amber-900 border-l-4 border-amber-400 rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
              <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-200">
                Prerequisites Required
              </h3>
            </div>
            <p className="text-amber-800 dark:text-amber-100 mb-6">
              To master <strong>{topic}</strong>, you'll need to complete these prerequisite topics first. This ensures you have the foundation needed for success.
            </p>

            <div className="space-y-4">
              {missingPrereqs.map((prereq, index) => (
                <div
                  key={prereq}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-amber-200 dark:border-amber-700 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-100 dark:bg-amber-800 text-amber-600 dark:text-amber-300 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {prereq}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Complete this topic to unlock your next step
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() =>
                          navigate(`/quiz/${encodeURIComponent(prereq)}`)
                        }
                        className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                      >
                        <PenTool className="h-4 w-4" />
                        <span>Take Quiz</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-100 dark:bg-amber-800 rounded-lg">
              <div className="flex items-center">
                <Trophy className="h-5 w-5 text-amber-600 mr-2" />
                <p className="text-amber-800 dark:text-amber-100 text-sm font-medium">
                  Complete all prerequisites to unlock <strong>{topic}</strong> and continue your learning journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);
};

export default Dashboard;
