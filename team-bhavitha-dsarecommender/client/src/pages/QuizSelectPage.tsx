import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validTopics } from "../data/validTopic";

const QuizSelectPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false); // New state for loading
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedTopic.trim()) {
      setIsLoadingQuiz(true); // Show loading screen
      setTimeout(() => {
        navigate(`/quiz/${encodeURIComponent(selectedTopic.trim())}`);
        // The loading screen will hide as the component unmounts for navigation.
      }, 750); // Set to 750ms for consistent delay as in Dashboard
    }
  };

  return (
    <div className="container py-5 bg-dark text-white rounded shadow-lg text-center" style={{ maxWidth: '650px' }}>
      {/* --- Loading Overlay --- */}
      {isLoadingQuiz && (
        <div className="loading-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading Quiz...</p>
        </div>
      )}

      <h2 className="mb-4 text-primary fs-2">Select a Topic for Quiz</h2>
      <div className="input-group mb-3">
        <input
          list="topics"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          placeholder="Start typing a topic..."
          className="form-control form-control-lg bg-dark-subtle text-dark-contrast border-secondary"
          disabled={isLoadingQuiz} // Disable input while loading
        />
        <datalist id="topics">
          {validTopics.map((topic: string, i: number) => (
            <option key={i} value={topic} />
          ))}
        </datalist>
      </div>
      <button
        onClick={handleSubmit}
        className="btn btn-primary btn-lg w-100"
        disabled={isLoadingQuiz || !selectedTopic.trim()} // Disable button while loading or if no topic selected
      >
        Take Quiz
      </button>
    </div>
  );
};

export default QuizSelectPage;