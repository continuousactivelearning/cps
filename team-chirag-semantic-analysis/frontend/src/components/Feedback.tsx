import { type ChangeEvent, type FormEvent, useState } from 'react';
import { submitFeedback } from '../services/api';

// Type for each concept
type Concept = {
  name: string;
};

// Props for the Feedback component
type FeedbackProps = {
  queryId: string;
  concepts: Concept[];
};

// Type for feedback state
type FeedbackState = {
  helpfulness: number;
  accuracy: number;
  comments: string;
  conceptsHelpful: string[];
};

const Feedback: React.FC<FeedbackProps> = ({ queryId, concepts }) => {
  const [feedback, setFeedback] = useState<FeedbackState>({
    helpfulness: 0,
    accuracy: 0,
    comments: '',
    conceptsHelpful: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleStarRating = (type: 'helpfulness' | 'accuracy', rating: number) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: rating,
    }));
  };

  const handleConceptFeedback = (conceptName: string, isHelpful: boolean) => {
    setFeedback((prev) => ({
      ...prev,
      conceptsHelpful: isHelpful
        ? [...prev.conceptsHelpful, conceptName]
        : prev.conceptsHelpful.filter((c) => c !== conceptName),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitFeedback({
          query: queryId,
          ...feedback,
          userId: '',
          feedback: ''
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    }
  };

  if (submitted) {
    return (
      <div className="feedback-success">
        <h4>Thank you for your feedback!</h4>
        <p>Your input helps us improve our recommendations.</p>
      </div>
    );
  }

  return (
    <div className="feedback-container">
      <button
        className="feedback-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Hide Feedback' : 'Rate this Recommendation'}
      </button>

      {isExpanded && (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="rating-section">
            <div className="rating-item">
              <label>How helpful was this recommendation?</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarRating('helpfulness', star)}
                    className={`star ${star <= feedback.helpfulness ? 'active' : ''}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="rating-item">
              <label>How accurate was the concept analysis?</label>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarRating('accuracy', star)}
                    className={`star ${star <= feedback.accuracy ? 'active' : ''}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
          </div>

          {concepts && concepts.length > 0 && (
            <div className="concept-feedback">
              <label>Which concepts were correctly identified?</label>
              <div className="concept-checkboxes">
                {concepts.map((concept, index) => (
                  <label key={index} className="checkbox-item">
                    <input
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleConceptFeedback(concept.name, e.target.checked)
                      }
                    />
                    {concept.name}
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="comments-section">
            <label htmlFor="comments">Additional comments:</label>
            <textarea
              id="comments"
              value={feedback.comments}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setFeedback((prev) => ({ ...prev, comments: e.target.value }))
              }
              placeholder="Any suggestions or additional feedback..."
              rows={3}
            />
          </div>

          <button type="submit" className="submit-feedback-btn">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
