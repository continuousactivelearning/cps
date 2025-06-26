import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import LanguageSelection from './components/LanguageSelection';
import TopicSelection from './components/TopicSelection';
import DifficultySelection from './components/DifficultySelection';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-language" element={<LanguageSelection />} />
        <Route path="/topic-selection" element={<TopicSelection />} />
        <Route path="/difficulty/:language" element={<DifficultySelection />} />
        <Route path="/questions/:language/:difficulty" element={<Quiz />} />
        <Route path="/review/:language/:difficulty" element={<QuizReview />} />
      </Routes>
    </>
  );
};

export default App;