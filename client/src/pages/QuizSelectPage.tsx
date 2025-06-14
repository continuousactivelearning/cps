// src/pages/QuizSelectPage.tsx
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
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Select a Topic for Quiz</h2>
      <input
        list="topics"
        value={selectedTopic}
        onChange={(e) => setSelectedTopic(e.target.value)}
        placeholder="Start typing a topic..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <datalist id="topics">
        {validTopics.map((topic: string, i: number) => (
          <option key={i} value={topic} />
        ))}
      </datalist>
      <br />
      <button onClick={handleSubmit}>Take Quiz</button>
    </div>
  );
};

export default QuizSelectPage;
