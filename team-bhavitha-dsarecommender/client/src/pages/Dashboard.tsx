import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useUserStore } from "../store/userStore";
import LearnedConceptCard from "../components/LearnedConceptCard";
import QuizCard from "../components/QuizCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface QuizHistoryEntry {
  topic: string;
  score: number;
  mastery: number;
  createdAt: string;
}

const Dashboard = () => {
  const logout = useAuthStore((state) => state.logout);
  const clearProfile = useUserStore((state) => state.clearProfile);
  const username = useUserStore((state) => state.username);
  const mastery = useUserStore((state) => state.mastery);
  const progress = useUserStore((state) => state.progress);
  const recommendations = useUserStore((state) => state.recommendations);

  const navigate = useNavigate();

  const [quizHistory, setQuizHistory] = useState<QuizHistoryEntry[]>([]);
  const [startConcept, setStartConcept] = useState("");
  const [endConcept, setEndConcept] = useState("");
  const [recommendedPath, setRecommendedPath] = useState<string[]>([]);
  const [pathError, setPathError] = useState<string | null>(null);

  // Logout - this function is now unused on the Dashboard itself, but kept for clarity if needed elsewhere
  const handleLogout = () => {
    logout();
    clearProfile();
    navigate("/");
  };

  // Navigate to quiz page
  const handleTakeQuiz = (selectedTopic: string) => {
    navigate(`/quiz/${encodeURIComponent(selectedTopic)}`);
  };

  // Fetch quiz history
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(`/api/quiz-history/${username}`);
        setQuizHistory(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Failed to fetch quiz history", err);
        setQuizHistory([]);
      }
    };

    if (username) fetchHistory();
  }, [username]);

  // Get recommendation path
  const handleGetPath = async () => {
    setPathError(null);
    if (!startConcept.trim() || !endConcept.trim()) {
      setPathError("Please enter both start and target concepts.");
      setRecommendedPath([]);
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/recommendation", {
        start: startConcept.trim(),
        end: endConcept.trim(),
        username: username
      });
      setRecommendedPath(res.data.path || []);
      if (res.data.path && res.data.path.length === 0) {
        setPathError("No path found between the specified concepts.");
      }
    } catch (err: any) {
      console.error("Failed to get recommendation path", err);
      setPathError(err.response?.data?.error || "Failed to get recommendation path.");
      setRecommendedPath([]);
    }
  };

  // Prepare chart data
  const chartData = quizHistory.map((entry) => ({
    topic: entry.topic,
    mastery: (1 - entry.mastery) * 100, // Convert to percentage for display
    date: new Date(entry.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="container py-4 bg-dark text-white rounded shadow-lg">
      <h2 className="text-center mb-4 text-purple">Welcome, {username}!</h2>
      <p className="text-center text-white mb-5">This is your personalized dashboard.</p>

      <hr className="my-5 border-secondary border-dashed" />
      {/* Mastery Progress Line Chart */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Mastery Over Time</h3>
        {chartData.length === 0 ? (
          <p className="text-center text-white mt-3">No data available yet to show mastery progression.</p>
        ) : (
          <div className="chart-container bg-dark-subtle p-3 rounded shadow">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={chartData}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
                <XAxis dataKey="topic" interval={0} angle={-30} textAnchor="end" stroke="#b0b0b0" />
                <YAxis domain={[0, 100]} label={{ value: 'Confidence (%)', angle: -90, position: 'insideLeft', fill: '#b0b0b0' }} stroke="#b0b0b0" />
                <Tooltip contentStyle={{ backgroundColor: '#333333', border: '1px solid #555555', color: '#e0e0e0' }} itemStyle={{ color: '#e0e0e0' }} />
                <Line type="monotone" dataKey="mastery" stroke="#a872e6" strokeWidth={3} dot={{ r: 5, fill: '#a872e6' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <hr className="my-5 border-secondary border-dashed" />
      {/* Current Mastery Levels */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Current Mastery Levels</h3>
        {Object.keys(mastery).length === 0 ? (
          <p className="text-center text-white mt-3">No mastery data available. Take some quizzes to get started!</p>
        ) : (
          <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: '800px' }}>
            {Object.entries(mastery).map(([topic, score]) => (
              <li key={topic} className="list-group-item bg-secondary-subtle border-start border-5 border-success rounded mb-3 shadow-sm d-flex justify-content-between align-items-center text-dark">
                <strong>{topic}</strong> <span className="badge bg-primary text-white fs-6">{(1 - score).toFixed(2)} Confidence</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="my-5 border-secondary border-dashed" />
      {/* Topics Learned */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Topics Learned</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {progress.length === 0 ? (
            <p className="text-center text-white mt-3 col-12">No topics marked as completed yet. Keep learning!</p>
          ) : (
            progress.map((topic) => (
              <div className="col" key={topic}>
                <LearnedConceptCard title={topic} />
              </div>
            ))
          )}
        </div>
      </div>

      <hr className="my-5 border-secondary border-dashed" />
      {/* Recommended Topics */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Recommended Next Topics</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {recommendations.length === 0 ? (
            <p className="text-center text-white mt-3 col-12">No current recommendations. Explore new topics!</p>
          ) : (
            recommendations.map((topic) => (
              <div className="col" key={topic}>
                <QuizCard
                  topic={topic}
                  onTakeQuiz={handleTakeQuiz}
                />
              </div>
            ))
          )}
        </div>
      </div>

      <hr className="my-5 border-secondary border-dashed" />
      {/* Get Learning Path Recommendation */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Get Learning Path Recommendation</h3>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4 align-items-center">
          <input
            type="text"
            placeholder="Start Concept (e.g., Variables)"
            value={startConcept}
            onChange={(e) => setStartConcept(e.target.value)}
            className="form-control form-control-lg bg-dark-subtle text-dark-contrast border-secondary"
            style={{ maxWidth: '300px' }}
          />
          <input
            type="text"
            placeholder="Target Concept (e.g., Recursion)"
            value={endConcept}
            onChange={(e) => setEndConcept(e.target.value)}
            className="form-control form-control-lg bg-dark-subtle text-dark-contrast border-secondary"
            style={{ maxWidth: '300px' }}
          />
          <button onClick={handleGetPath} className="btn btn-primary btn-lg flex-shrink-0">
            Get Path
          </button>
        </div>

        {pathError && <div className="alert alert-danger text-center mt-3">{pathError}</div>}

        {recommendedPath.length > 0 && (
          <div className="recommended-path-section bg-secondary-subtle p-4 rounded shadow mt-4 text-dark-contrast"> {/* Changed text-dark to text-dark-contrast for entire section */}
            <h4 className="text-center mb-4 text-info">Recommended Path:</h4>
            <ul className="list-group list-group-flush">
              {recommendedPath.map((topic, idx) => (
                <li key={idx} className="list-group-item bg-dark-subtle border-secondary rounded mb-3 shadow-sm d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 py-3 text-dark-contrast"> {/* Changed text-white to text-dark-contrast */}
                  <span className="fs-5 text-dark-contrast"> {/* Changed text-white to text-dark-contrast */}
                    {idx + 1}. <strong>{topic}</strong>
                  </span>
                  <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-md-end">
                    <button onClick={() => handleTakeQuiz(topic)} className="btn btn-success btn-sm">
                      Take Quiz
                    </button>
                    <button onClick={() => navigate(`/explore/${topic}`)} className="btn btn-info btn-sm">
                      Explore
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <hr className="my-5 border-secondary border-dashed" />
      {/* Quiz History */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Quiz History</h3>
        {quizHistory.length === 0 ? (
          <p className="text-center text-white mt-3">No quiz attempts recorded yet.</p>
        ) : (
          <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: '800px' }}>
            {quizHistory.map((entry, i) => (
              <li key={i} className="list-group-item bg-secondary-subtle border-start border-5 border-primary rounded mb-3 shadow-sm text-start text-dark-contrast"> {/* Changed text-dark to text-dark-contrast */}
                <strong>{entry.topic}</strong> — Score: {entry.score}% — Mastery Weight: {entry.mastery}
                <br />
                <small className="text-muted">{new Date(entry.createdAt).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Removed Actions Section with Logout and Choose Your Own Quiz Topic buttons */}
    </div>
  );
};

export default Dashboard;