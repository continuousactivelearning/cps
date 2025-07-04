/* AUTHOR - SHREYAS MENE (CREATED ON 12/06/2025) */
/*AUTHOR - NIKITA S RAJ KAPINI (UPDATED ON 16/06/2025)*/
/*AUTHOR - NIKITA S RAJ KAPINI (UPDATED ON 25/06/2025)*/

import React, { useState } from 'react';
import './TopicSelector.css';
import conceptGraph from '../conceptGraph.json';

interface TopicSelectorProps {
  onTopicSelect: (topic: string | null) => void;
  onGenerateAssessment: (topic: string | null) => void;
  warningMessage?: string | null;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ onTopicSelect, onGenerateAssessment,warningMessage }) => {
  const allTopics = Object.keys(conceptGraph);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [allPrerequisites, setAllPrerequisites] = useState<string[]>([]);

  const getAllPrerequisites = (topic: string, visited = new Set<string>()): string[] => {
    if (visited.has(topic)) return [];
    visited.add(topic);

    const directPrereqs = conceptGraph[topic]?.prereqs || [];
    const allDeps = new Set<string>(directPrereqs);

    for (const prereq of directPrereqs) {
      const deeper = getAllPrerequisites(prereq, visited);
      deeper.forEach(dep => allDeps.add(dep));
    }

    return Array.from(allDeps);
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setSearchTerm('');
    setIsDropdownOpen(false);
    const prerequisites = getAllPrerequisites(topic);
    setAllPrerequisites(prerequisites);
    onTopicSelect(topic);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsDropdownOpen(true);
  };

  const handleInputFocus = () => {
    if (searchTerm.trim() || allTopics.length > 0) {
      setIsDropdownOpen(true);
    }
  };

  const handleGenerateClick = () => {
    onGenerateAssessment(null); // always call it
  };

  const handleClearSelection = () => {
    setSelectedTopic(null);
    setAllPrerequisites([]);
    setSearchTerm('');
    onTopicSelect(null);
  };

  const filteredTopics = allTopics.filter(
    topic => topic.toLowerCase().includes(searchTerm.toLowerCase()) && topic !== selectedTopic
  );

  return (
    <div className="topic-selector-container">
      <h2>What's your target topic?</h2>
      <p className="description">
        I'm your learning assistant. Select a topic you've studied or want to be assessed on, and I’ll generate an intelligent assessment for you.
      </p>

      <div className="input-section">
        <label>Target Topic</label>

        {!selectedTopic ? (
          <div className="dropdown-container">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Search for a topic..."
              className="topic-input"
            />
            {isDropdownOpen && (
                  <ul className="dropdown-list">
                    {filteredTopics.length > 0 ? (
                      filteredTopics.map(topic => (
                        <li
                          key={topic}
                          onClick={() => handleTopicSelect(topic)}
                          className="dropdown-item"
                        >
                          {topic}
                        </li>
                      ))
                    ) : (
                      <li className="dropdown-item no-match">No matches found</li>
                    )}
                  </ul>
                )}
          </div>
        ) : (
          <div className="selected-topic-display">
            <span className="selected-topic-text">{selectedTopic}</span>
            <button className="change-topic-btn" onClick={handleClearSelection}>
              Change Topic
            </button>
          </div>
        )}
      </div>

      {warningMessage && (
          <p className="warning-text" style={{ color: 'red', marginTop: '0.5rem' }}>
            {warningMessage}
          </p>
        )}

      {selectedTopic && (
        <div className="prerequisites-section">
          <h3>All Prerequisites</h3>
          <div className="prerequisites-tags">
            {allPrerequisites.length > 0 ? (
              allPrerequisites.map(pr => (
                <span key={pr} className="prerequisite-tag">
                  {pr}
                </span>
              ))
            ) : (
              <span className="prerequisite-tag">None</span>
            )}
          </div>
        </div>
      )}   

  
      <button
        className="generate-btn"
        onClick={handleGenerateClick}
      >
        Generate Assessment
      </button>
    </div>
  );
};

export default TopicSelector;
