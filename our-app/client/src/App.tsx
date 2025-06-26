/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import InitialSetup from "./pages/InitialSetup";
import CustomQuiz from "./components/CustomQuiz";
import BasicQuiz from "./components/BasicQuiz";

const App: React.FC = () => {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/initial-setup" element={<InitialSetup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/users/:userId/quiz" element={<CustomQuiz />} />
        <Route path="/users/:userId/:language/:quizLevel/:topic" element={<BasicQuiz />} />
      </Routes>
  </>
  );
};

export default App;*/

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import LanguageSelection from "./components/LanguageSelection";
// import DifficultyPage from "./components/DifficultyPage"; // Uncomment if you have this
// import Dashboard from "./components/Dashboard"; // Uncomment if implemented
// import InitialSetup from "./components/InitialSetup"; // Uncomment if implemented

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select-language" element={<LanguageSelection />} />
        {/* <Route path="/difficulty/:language" element={<DifficultyPage />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/initial-setup" element={<InitialSetup />} /> */}
      </Routes>
    </>
  );
};

export default App;
