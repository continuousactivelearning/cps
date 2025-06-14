import { useNavigate } from "react-router-dom";

interface QuizCardProps {
  topic: string;
  onTakeQuiz: (selectedTopic: string) => void;
}

const QuizCard = ({ topic }: QuizCardProps) => {
  const navigate = useNavigate();

  const handleTakeQuiz = () => {
    navigate(`/quiz/${encodeURIComponent(topic)}`);
  };

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      margin: "0.5rem",
      backgroundColor: "#fff3e0"
    }}>
      <h4>{topic}</h4>
      <button
        onClick={handleTakeQuiz}
        style={{
          marginTop: "0.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#ff9800",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Take Quiz
      </button>
    </div>
  );
};

export default QuizCard;
