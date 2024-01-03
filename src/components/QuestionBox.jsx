// Import necessary components and icons from external libraries
import React, { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaHighlighter } from "react-icons/fa";
import Questions from "../Questions";
import Result from "./Results";

// Functional component for rendering the quiz questions
const QuestionBox = ({ darkMode, toggleDarkMode }) => {
  // State variables for managing the quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [highlighterActive, setHighlighterActive] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Handler for clicking on quiz options
  const handleOptionClick = (optionId) => {
    const isCorrect = Questions[currentQuestion].options.find(
      (option) => option.id === optionId && option.isCorrect
    );

    // Update score if the selected option is correct
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question or show the result if all questions are answered
    if (currentQuestion + 1 < Questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // Handler for clicking on "Play Again" button
  const handlePlayAgainClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  // Render quiz options dynamically based on the current question
  const renderOptions = () => {
    return Questions[currentQuestion].options.map((option) => (
      <button
        key={option.id}
        onClick={() => handleOptionClick(option.id)}
        className={`mb-2 px-4 py-2 text-lg font-semibold rounded-full transition-all duration-500 ${
          darkMode
            ? "bg-gray-800 hover:bg-gray-700 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-black"
        } focus:outline-none`}
      >
        {option.text}
      </button>
    ));
  };

  // Main rendering logic for the QuestionBox component
  return (
    <div
      className={`text-center flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {showResult ? (
        // Render the Result component if showResult is true
        <Result
          score={score}
          percentage={(score / Questions.length) * 100}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          onPlayAgainClick={handlePlayAgainClick}
        />
      ) : (
        // Render quiz questions, options, and buttons
        <>
          <div className="mb-8 text-2xl md:text-3xl">
            Question {currentQuestion + 1} of {Questions.length}
          </div>
          <div
            className={`mb-8 text-xl md:text-3xl font-bold transition-all duration-500 ${
              highlighterActive ? "text-red-600" : "text-blue-600"
            }`}
          >
            {Questions[currentQuestion].text}
          </div>
          <div className="mb-8 grid gap-4 grid-cols-1 md:grid-cols-2 transition-all duration-300">
            {renderOptions()}
          </div>
          {/* Dark Mode toggle button */}
          <div className="mb-4 md:absolute md:right-8 md:bottom-5 transition-all duration-300">
            <button
              className={`px-4 md:px-6 py-3 font-bold rounded-full text-xl md:text-3xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-600 active:bg-gray-800"
              } focus:outline-none`}
              onClick={() => {
                toggleDarkMode();
                if (!darkMode) {
                  console.log("Dark Mode On");
                } else {
                  console.log("Dark Mode Off");
                }
              }}
            >
              <CgDarkMode />
            </button>
          </div>
          {/* Highlighter toggle button */}
          <div className="mb-4 md:absolute md:right-32 md:bottom-5 transition-all duration-300">
            <button
              className={`px-4 md:px-6 py-3 font-bold rounded-full text-xl md:text-3xl transition-all duration-500 ${
                highlighterActive
                  ? "bg-red-500 hover:bg-red-600 active:bg-red-700"
                  : "bg-blue-300 hover:bg-blue-400 active:bg-blue-500"
              } focus:outline-none`}
              onClick={() => {
                setHighlighterActive(!highlighterActive);
                console.log("Highlighter clicked");
              }}
            >
              <FaHighlighter />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// Export the QuestionBox component as the default export
export default QuestionBox;
