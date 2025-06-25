import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

interface Concept {
  name: string;
  description: string;
  spotlight_fact: string;
  lecture: string;
  examples?: string[];
  related_topics?: string[];
  quiz_available?: boolean;
}

const ExploreTopicPage = () => {
  const { topic } = useParams<{ topic: string }>();
  const [concept, setConcept] = useState<Concept | null>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (!topic) {
      setError("No topic specified for exploration.");
      return;
    }

    axios
      .get(`/api/explore/${encodeURIComponent(topic)}`)
      .then((res) => {
        setConcept(res.data);
        setError("");
      })
      .catch((err) => {
        console.error("Error fetching concept:", err);
        setError("Couldn't load concept information. Please try again later.");
        setConcept(null);
      });
  }, [topic]);

  const handleTakeQuiz = (selectedTopic: string) => {
    navigate(`/quiz/${encodeURIComponent(selectedTopic)}`);
  };

  if (error) {
    return (
      <div className="container py-5 bg-dark text-white rounded shadow-lg text-center">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <button onClick={() => navigate('/dashboard')} className="btn btn-secondary mt-3">
          Back to Dashboard
        </button>
      </div>
    );
  }

  if (!concept) {
    return (
      <div className="container py-5 bg-dark text-white rounded shadow-lg text-center">
        <p className="text-white fs-5">Loading concept information...</p>
        <button onClick={() => navigate('/dashboard')} className="btn btn-secondary mt-3">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4 bg-dark text-white rounded shadow-lg">
      <h2 className="text-center mb-4 text-primary fs-2">Exploring: {concept.name}</h2>

      <div className="card bg-dark-subtle text-dark-contrast p-4 mb-4 shadow-sm">
        <p className="mb-2"><strong>Description:</strong> {concept.description}</p>
        <p className="mb-2"><strong>Spotlight Fact:</strong> {concept.spotlight_fact}</p>
        <p className="mb-0"><strong>Appears in Lecture:</strong> {concept.lecture}</p>
      </div>

      {concept.examples && concept.examples.length > 0 && (
        <div className="card bg-dark-subtle text-dark-contrast p-4 mb-4 shadow-sm">
          <h5 className="card-title text-info mb-3">
            <i className="bi bi-lightbulb-fill me-2"></i> Examples: {/* Icon added */}
          </h5>
          <ul className="list-group list-group-flush bg-dark-subtle">
            {concept.examples.map((ex, i) => (
              <li key={i} className="list-group-item bg-dark-subtle text-dark-contrast border-0 py-1">
                {ex}
              </li>
            ))}
          </ul>
        </div>
      )}

      {concept.related_topics && concept.related_topics.length > 0 && (
        <div className="card bg-dark-subtle text-dark-contrast p-4 mb-4 shadow-sm">
          <h5 className="card-title text-info mb-3">
            <i className="bi bi-link-45deg me-2"></i> Related Topics: {/* Icon added */}
          </h5>
          <ul className="list-group list-group-flush bg-dark-subtle">
            {concept.related_topics.map((related, i) => (
              <li key={i} className="list-group-item bg-dark-subtle text-dark-contrast border-0 py-1">
                {related}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="card bg-dark-subtle p-4 mb-4 d-flex justify-content-between align-items-center flex-wrap shadow-sm"> {/* Added flex utilities */}
        <p className="mb-0 fs-5 text-dark-contrast"> {/* Increased font size */}
          <strong>Quiz Available:</strong>{" "}
          <span className={concept.quiz_available ? "text-success fw-bold" : "text-danger fw-bold"}>
            {concept.quiz_available ? "Yes!" : "No."} {/* More emphatic text */}
          </span>
        </p>
        {concept.quiz_available && (
          <button
            onClick={() => handleTakeQuiz(concept.name)}
            className="btn btn-primary btn-lg mt-3 mt-md-0" // Added margin top for small screens
          >
            Take Quiz Now <i className="bi bi-arrow-right-circle-fill ms-2"></i> {/* Icon added */}
          </button>
        )}
      </div>

      <div className="text-center mt-4">
        <button onClick={() => navigate('/dashboard')} className="btn btn-secondary btn-lg">
          <i className="bi bi-arrow-left-circle-fill me-2"></i> Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ExploreTopicPage;