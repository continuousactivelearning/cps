import { useNavigate } from "react-router-dom";

interface QuizCardProps {
  topic: string;
  onTakeQuiz: (selectedTopic: string) => void; // Keeping this prop for consistency, though direct navigate is used
}

const QuizCard = ({ topic }: QuizCardProps) => {
  const navigate = useNavigate();

  const handleTakeQuiz = () => {
    navigate(`/quiz/${encodeURIComponent(topic)}`);
  };

  return (
    <div className="card text-center bg-secondary-subtle text-white h-100 shadow-sm border border-warning">
      <div className="card-body d-flex flex-column justify-content-between align-items-center">
        <h4 className="card-title text-warning mb-3">{topic}</h4>
        <button
          onClick={handleTakeQuiz}
          className="btn btn-warning mt-auto"
        >
          Take Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCard;