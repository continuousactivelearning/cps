import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validTopics } from "../data/validTopic";

const QuizSelectPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedTopic.trim()) {
      navigate(`/quiz/${encodeURIComponent(selectedTopic.trim())}`);
    }
  };

  return (
    <div className="container py-5 bg-dark text-white rounded shadow-lg text-center" style={{ maxWidth: '650px' }}>
      <h2 className="mb-4 text-primary fs-2">Select a Topic for Quiz</h2>
      <div className="input-group mb-3">
        <input
          list="topics"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
          placeholder="Start typing a topic..."
          className="form-control form-control-lg bg-dark-subtle text-dark-contrast border-secondary" // Ensure form-control is here
        />
        <datalist id="topics">
          {validTopics.map((topic: string, i: number) => (
            <option key={i} value={topic} />
          ))}
        </datalist>
      </div>
      <button onClick={handleSubmit} className="btn btn-primary btn-lg w-100">Take Quiz</button>
    </div>
  );
};

export default QuizSelectPage;