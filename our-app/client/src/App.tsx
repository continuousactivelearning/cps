import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import LanguageSelection from "./components/LanguageSelection";
import 'bootstrap/dist/css/bootstrap.min.css';
import DifficultySelection from './components/DifficultySelection'; 
import Quiz from './components/Quiz'; 
import QuizReview from './components/QuizReview';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/select-language" element={<LanguageSelection />} />
        <Route path="/difficulty/:language" element={<DifficultySelection />} /> 
        <Route path="/questions/:language/:difficulty" element={<Quiz />} />
        <Route path="/review/:language/:difficulty" element={<QuizReview />} />
      </Routes>
    </>
  );
};

export default App;