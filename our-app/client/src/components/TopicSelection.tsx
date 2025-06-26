/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../styles/card';
import { Button } from '../styles/button';

const topics = ['Arrays', 'Stacks', 'Queues', 'Linked List', 'Recursion', 'Sorting'];

const TopicSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const language = 'Python'; // You can make this dynamic if needed

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const handleNext = () => {
    if (selectedTopics.length > 0) {
      navigate('/assessment-difficulty', {
        state: {
          knownTopics: selectedTopics,
          targetTopic: selectedTopics[0], // pick first for tracking
          language,
        },
      });
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light p-4">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-primary">Select Topics You Know</h1>
        <p className="text-muted">Pick 1 or more topics for assessment</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {topics.map((topic) => (
          <Button
            key={topic}
            variant={selectedTopics.includes(topic) ? 'primary' : 'outline'}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
          </Button>
        ))}
      </div>
      <Button disabled={selectedTopics.length === 0} onClick={handleNext}>
        Proceed to Difficulty
      </Button>
    </div>
  );
};

export default TopicSelection;
*/



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../styles/button';
import { Card, CardContent } from '../styles/card';

const allTopics = [
  'Arrays', 'Strings', 'Linked List', 'Stack', 'Trees', 'Binary Search', 'Dynamic Programming'
];

const TopicSelection: React.FC = () => {
  const [knownTopics, setKnownTopics] = useState<string[]>([]);
  const [targetTopic, setTargetTopic] = useState('Arrays');
  const navigate = useNavigate();

  const handleCheckboxChange = (topic: string) => {
    setKnownTopics(prev =>
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const start = () => {
    navigate('/assessment-difficulty', { state: { knownTopics, targetTopic } });
  };

  return (
    <div className="container py-5">
  <h1 className="text-center fw-bold mb-5 text-primary">Assessment</h1>
      <h2 className="text-center mb-4">Select Your Topics</h2>

      <div className="mb-4">
        <h5 className="mb-3">What topics do you already know?</h5>
        <div className="row">
          {allTopics.map(topic => {
            const isSelected = knownTopics.includes(topic);
            return (
              <div key={topic} className="col-md-4 mb-3">
                <Card
                  className={`p-3 text-center cursor-pointer ${
                    isSelected ? 'bg-primary text-white' : 'bg-white'
                  }`}
                  onClick={() => handleCheckboxChange(topic)}
                >
                  <CardContent>
                    <div className="form-check d-flex justify-content-center align-items-center gap-2">
                      <input
                        type="checkbox"
                        id={topic}
                        className="form-check-input"
                        checked={isSelected}
                        onChange={() => handleCheckboxChange(topic)}
                      />
                      <label
                        className="form-check-label fw-semibold fs-5"
                        htmlFor={topic}
                      >
                        {topic}
                      </label>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-4">
        <h5 className="mb-2">Select Target Topic</h5>
        <select
          className="form-select form-select-lg"
          value={targetTopic}
          onChange={e => setTargetTopic(e.target.value)}
        >
          {allTopics.map(topic => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </div>

      <div className="text-end mt-4">
        <Button className="px-4 py-2 fs-5" onClick={start}>
          Next: Choose Difficulty
        </Button>
      </div>
    </div>
  );
};

export default TopicSelection;
