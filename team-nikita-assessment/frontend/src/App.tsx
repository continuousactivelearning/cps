/* AUTHOR - SHREYAS MENE (CREATED ON 11/06/2025) */
import { useState } from 'react';
import './App.css'
import Chatbot from './components/Chatbot'
import TopicSelector from './components/TopicSelector'
import AssessmentDisplay from './components/AssessmentDisplay'

interface Topic {
  id: number;
  name: string;
  category: string;
}

function App() {
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
  const [shouldGenerateAssessment, setShouldGenerateAssessment] = useState(false);

  const handleTopicSelect = (topics: Topic[]) => {
    setSelectedTopics(topics);
    setShouldGenerateAssessment(false); // Reset assessment when topics change
  };

  const handleGenerateAssessment = (topics: Topic[]) => {
    setShouldGenerateAssessment(true);
  };

  const handleAssessmentGenerated = () => {
    setShouldGenerateAssessment(false);
  };

  return (
    <div className="app-container">
      <header>
        <h1>
          <img src="/graduation-cap.svg" alt="Graduation Cap" className="header-icon" />
          EduAssess
        </h1>
      </header>
      
      <main>
        <div className="content-container">
          <TopicSelector 
            onTopicSelect={handleTopicSelect}
            onGenerateAssessment={handleGenerateAssessment}
          />
          <AssessmentDisplay 
            selectedTopics={selectedTopics}
            shouldGenerateAssessment={shouldGenerateAssessment}
            onAssessmentGenerated={handleAssessmentGenerated}
          />
        </div>
      </main>

      <Chatbot />
    </div>
  )
}

export default App
