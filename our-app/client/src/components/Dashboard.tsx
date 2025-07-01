import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useDashboardData } from "../hooks/useDashboardData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC<{ userId: string }> = ({ userId }) => {
  const {
    loading,
    error,
    user,
    averageScore,
    conceptCoveragePercent,
    conceptsCovered,
    totalConcepts,
    timeline,
    performanceData,
    testHistory,
  } = useDashboardData(userId);

  const circumference = 120 * Math.PI;

  if (loading) return <div className="container py-5 text-center">Loading...</div>;
  if (error) return <div className="container py-5 text-danger">{error}</div>;
  if (!user) return null;

  return (
    <div className="bg-light min-vh-100 font-sans text-dark">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-bold">Progress Dashboard</h1>
        </div>
        <p className="fs-5 mb-4">Welcome back, {user.name}! Track your DSA learning journey.</p>
        {/* Top summary cards */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <SummaryCard title="Average Score" value={`${averageScore}%`} subtitle="Across all tests" color="text-primary" />
          </div>
          <div className="col-12 col-md-6">
            <SummaryCard title="Concept Coverage" value={`${conceptCoveragePercent}%`} subtitle={`Concepts: ${conceptsCovered}/${totalConcepts}`} color="text-success" />
          </div>
        </div>
        {/* Progress Timeline */}
        <div className="card shadow-sm rounded-4 p-4 mb-4">
          <h2 className="h5 fw-semibold mb-4">Progress Timeline</h2>
          <div className="d-flex align-items-center justify-content-between mb-3 px-3 py-2">
            {timeline.map((concept, idx) => (
              <React.Fragment key={concept.quizId}>
                <TimelineDot label={concept.name} date={concept.date || ""} score={concept.score != null ? Math.round((concept.score / (concept.total || 1)) * 100) : 0} covered={concept.covered} locked={idx > 0 && !timeline[idx - 1].covered} />
                {idx < timeline.length - 1 && <TimelineConnector covered={concept.covered && timeline[idx + 1].covered} />}
              </React.Fragment>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-2 gap-4 small">
            <span className="text-success">● Covered</span>
            <span className="text-secondary">● Not Yet Covered</span>
          </div>
        </div>
        {/* Concept Coverage & Performance by Concept */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6 d-flex">
            <div className="card shadow-sm rounded-4 p-4 flex-fill d-flex flex-column align-items-center">
              <h2 className="h5 fw-semibold mb-4">Concept Coverage</h2>
              <div className="position-relative" style={{ width: 144, height: 144 }}>
                <svg width="144" height="144" className="position-absolute top-0 start-0">
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#3b82f6"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - conceptCoveragePercent / 100)}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.6s" }}
                  />
                </svg>
                <span className="position-absolute top-50 start-50 translate-middle fs-2 fw-bold">{conceptCoveragePercent}%</span>
              </div>
              <div className="mt-2 text-secondary">Concepts Covered</div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex">
            <div className="card shadow-sm rounded-4 p-4 flex-fill d-flex flex-column">
              <h2 className="h5 fw-semibold mb-4">Performance by Concept</h2>
              <Bar data={performanceData} options={{
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { x: { grid: { display: false } }, y: { beginAtZero: true, max: 100 } }
              }} />
            </div>
          </div>
        </div>
        {/* Overall Feedback */}
        <div className="card bg-gradient p-4 mb-4 border-0" style={{ background: "linear-gradient(90deg, #e0e7ff 0%, #f3e8ff 100%)" }}>
          <h2 className="h5 fw-semibold mb-2">Overall Feedback</h2>
          <p className="text-primary fw-medium fs-5">💪 Keep learning! Regular practice with fundamentals will build your confidence.</p>
        </div>
        {/* Test History */}
        <div className="card shadow-sm rounded-4 p-4">
          <h2 className="h5 fw-semibold mb-4">Test History</h2>
          {testHistory.map((test, idx) => (
            <TestItem key={test._id?.$oid || idx} name={test.name || test.quizId} date={test.date} score={test.userScore} feedback={test.feedback || ""} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, subtitle, color }: { title: string; value: string; subtitle: string; color: string }) => (
  <div className="card shadow-sm rounded-4 p-4 d-flex flex-column align-items-center">
    <h3 className="text-secondary small mb-2">{title}</h3>
    <p className={`fs-2 fw-bold ${color}`}>{value}</p>
    <p className="small text-secondary">{subtitle}</p>
  </div>
);

const TimelineDot = ({ label, date, score, covered, locked }: { label: string; date: string; score: number; covered: boolean; locked: boolean }) => (
  <div className="d-flex flex-column align-items-center position-relative" style={{ width: 80, opacity: locked ? 0.5 : 1 }}>
    <div
      className={`rounded-circle d-flex align-items-center justify-content-center mb-2 ${covered ? "bg-success bg-opacity-25 text-success" : "bg-secondary bg-opacity-25 text-secondary"}`}
      style={{ width: 40, height: 40, position: "relative", border: locked ? "2px dashed #adb5bd" : undefined }}
    >
      <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1 }}>{score}%</span>
      {locked && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary" style={{ fontSize: 10 }}>Locked</span>}
    </div>
    <div className="small fw-semibold text-truncate text-center">{label}</div>
    <div className="text-secondary" style={{ fontSize: 12 }}>{date}</div>
    <div className={`small mt-1 ${covered ? "text-success" : "text-secondary"}`}>{covered ? "Covered" : locked ? "Locked" : "Not Covered"}</div>
  </div>
);

const TimelineConnector = ({ covered }: { covered: boolean }) => (
  <div className="d-flex align-items-center justify-content-center" style={{ width: 16 }}>
    <div style={{ height: 4, width: 12, background: covered ? "#198754" : "#dee2e6", borderRadius: 2 }} />
  </div>
);

const TestItem = ({ name, date, score, feedback }: { name: string; date: string; score: number; feedback: string }) => (
  <div className="border-top py-3 d-flex justify-content-between align-items-center">
    <div>
      <p className="fw-semibold mb-1">{name}</p>
      <p className="small text-secondary mb-0">{date ? new Date(date).toLocaleDateString() : ""}</p>
    </div>
    <div className="text-end">
      <p className={`fw-bold fs-5 mb-1 ${score >= 80 ? "text-success" : score >= 50 ? "text-warning" : "text-danger"}`}>{score}%</p>
      <p className="small text-secondary mb-0">{feedback}</p>
    </div>
  </div>
);

export default Dashboard;