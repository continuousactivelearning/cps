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

import * as bootstrap from 'bootstrap';


interface QuizHistoryEntry {
  topic: string;
  score: number;
  mastery: number; // 0 to 1, where 0 is mastered and 1 is no mastery
  createdAt: string;
}

// Define MasteryLevels interface for clarity
interface MasteryLevels {
  "Needs Review": string[];
  "Developing": string[];
  "Proficient": string[];
  "Mastered": string[];
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
  // --- New state for loading screen ---
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);


  // --- Tooltip Initialization Effect ---
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    return () => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  }, []);


  // --- Data Fetching and Handlers ---

  // Handle taking a quiz (now with loading screen and correct delay)
  const handleTakeQuiz = (selectedTopic: string) => {
    setIsLoadingQuiz(true); // Show loading screen
    // Simulate a brief delay for fetching or processing data
    // Changed from 50000ms to 5000ms (5 seconds) for clear visibility
    setTimeout(() => {
      navigate(`/quiz/${encodeURIComponent(selectedTopic)}`);
      // The loading screen will hide as the component unmounts for navigation.
    }, 750); // Set to 5000ms (5 seconds) for demonstration
  };

  // Handle exploring a topic
  const handleExploreTopic = (topicName: string) => {
    navigate(`/explore/${encodeURIComponent(topicName)}`);
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

  // --- Data Transformation for UI ---

  // Prepare chart data (mastery score is 0 to 1, convert to confidence 0-100)
  const chartData = quizHistory.map((entry) => ({
    topic: entry.topic,
    mastery: (1 - entry.mastery) * 100, // Convert to percentage confidence for display
    date: new Date(entry.createdAt).toLocaleDateString(),
  }));

  // Group mastery by level for visual representation (0-1 score, 0=mastered, 1=not mastered)
  const masteryLevels: MasteryLevels = {
    "Needs Review": [],
    "Developing": [],
    "Proficient": [],
    "Mastered": [],
  };

  Object.entries(mastery).forEach(([topic, score]) => {
    const confidence = (1 - score) * 100; // Calculate confidence percentage
    if (confidence < 40) {
      masteryLevels["Needs Review"].push(topic);
    } else if (confidence < 70) {
      masteryLevels["Developing"].push(topic);
    } else if (confidence < 90) {
      masteryLevels["Proficient"].push(topic);
    } else {
      masteryLevels["Mastered"].push(topic);
    }
  });

  // --- Component Render ---

  return (
    <div className="container py-4 bg-dark text-white rounded shadow-lg">
      {/* --- Loading Overlay --- */}
      {isLoadingQuiz && (
        <div className="loading-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading Quiz...</p>
        </div>
      )}

      {/* Welcome Section */}
      <div className="text-center mb-5 p-4 bg-gradient rounded">
        <h2 className="text-white mb-2 display-4">Welcome, <span className="text-purple fw-bold">{username}!</span></h2>
        <p className="text-white-50 lead">Your personalized learning journey starts here.</p>
      </div>

      <hr className="my-5 border-secondary border-dashed" />
      {/* Overall Progress Snapshot */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Your Learning Snapshot</h3>
        <div className="row text-center">
          <div className="col-md-6 mb-3">
            <div className="card bg-secondary-subtle text-dark-contrast p-3 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center justify-content-center mb-3">
                  <i className="bi bi-book-fill fs-1 text-primary me-2"></i>
                  Topics Learned
                  <i
                    className="bi bi-info-circle ms-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Concepts you have successfully completed or marked as learned."
                    style={{ cursor: 'help' }}
                  ></i>
                </h5>
                <p className="card-text fs-3 fw-bold">{progress.length}</p>
                <p className="card-text text-muted">Concepts marked as completed</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card bg-secondary-subtle text-dark-contrast p-3 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title d-flex align-items-center justify-content-center mb-3">
                  <i className="bi bi-patch-check-fill fs-1 text-success me-2"></i>
                  Topics Mastered
                  <i
                    className="bi bi-info-circle ms-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Concepts where your confidence score is 90% or higher based on quiz performance."
                    style={{ cursor: 'help' }}
                  ></i>
                </h5>
                <p className="card-text fs-3 fw-bold">{masteryLevels["Mastered"].length}</p>
                <p className="card-text text-muted">Concepts with high confidence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-5 border-secondary border-dashed" />
      {/* Mastery Progress Line Chart */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Mastery Over Time</h3>
        {chartData.length === 0 ? (
          <p className="text-center text-white mt-3">No data available yet to show mastery progression. Take some quizzes!</p>
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
      {/* Mastery Levels Breakdown */}
      <div className="dashboard-section mb-5 pt-3">
        <h3 className="text-center mb-4 text-info">Current Mastery Levels Breakdown</h3>
        {Object.keys(mastery).length === 0 ? (
           <p className="text-center text-white mt-3">No mastery data available yet. Take some quizzes to see your progress here!</p>
        ) : (
          <div className="row g-3 justify-content-center">
            {Object.entries(masteryLevels).map(([level, topicsArray]) => (
              <div key={level} className="col-sm-6 col-md-4 col-lg-3">
                <div className={`card h-100 p-3 shadow-sm ${
                  level === "Needs Review" ? "bg-danger-subtle text-danger" :
                  level === "Developing" ? "bg-warning-subtle text-warning" :
                  level === "Proficient" ? "bg-info-subtle text-info" :
                  "bg-success-subtle text-success"
                }`}>
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title mb-2">{level}</h5>
                    <p className="card-text fs-4 fw-bold flex-grow-1">{topicsArray.length}</p>
                    {topicsArray.length > 0 ? (
                      <div className="d-flex flex-wrap justify-content-center gap-1">
                        {topicsArray.map((topic, i) => (
                          <span
                            key={i}
                            className="badge bg-dark-contrast text-white px-2 py-1 clickable-badge"
                            onClick={() => handleExploreTopic(topic)}
                            title={`Click to explore ${topic}`}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted small mt-auto">No topics here!</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                  title={`Recommended because it's a natural next step in ${topic} or a prerequisite for topics you're exploring.`}
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
          <div className="recommended-path-section bg-secondary-subtle p-4 rounded shadow mt-4 text-dark-contrast">
            <h4 className="text-center mb-4 text-info">Recommended Path:</h4>
            <ul className="list-group list-group-flush">
              {recommendedPath.map((topic, idx) => (
                <li key={idx} className="list-group-item bg-dark-subtle border-secondary rounded mb-3 shadow-sm d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 py-3 text-dark-contrast">
                  <span className="fs-5 text-dark-contrast">
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
          <p className="text-center text-white mt-3">No quiz attempts recorded yet. Take a quiz to see your history!</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 g-3 justify-content-center">
            {quizHistory.map((entry, i) => (
              <div className="col" key={i}>
                <div className="card bg-secondary-subtle border-start border-5 border-primary rounded shadow-sm text-start text-dark-contrast h-100 p-3 d-flex flex-column">
                  <div>
                    <h5 className="card-title text-primary mb-1">{entry.topic}</h5>
                    <p className="mb-1">Score: <span className="fw-bold">{entry.score}%</span></p>
                    <p className="mb-0"><small className="text-muted">Mastery Weight: {entry.mastery.toFixed(2)}</small></p>
                  </div>
                  <div className="mt-auto d-flex justify-content-between align-items-end pt-2">
                    <small className="text-muted fst-italic">{new Date(entry.createdAt).toLocaleString()}</small>
                    <button
                      onClick={() => handleTakeQuiz(entry.topic)}
                      className="btn btn-outline-primary btn-sm ms-2"
                      title={`Re-take quiz on ${entry.topic}`}
                    >
                      Re-take <i className="bi bi-arrow-clockwise ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;