import React, { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { FaHighlighter } from "react-icons/fa";
import Questions from "../Questions";

const QuestionBox = ({ darkMode, toggleDarkMode }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (optionId) => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const renderOptions = () => {
    return Questions[currentQuestion].options.map((option) => (
      <button
        key={option.id}
        onClick={() => handleOptionClick(option.id)}
        className={`mb-2 px-4 py-2 text-lg font-semibold rounded-full ${
          darkMode
            ? "bg-gray-800 hover:bg-gray-700 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-black"
        } focus:outline-none`}
      >
        {option.text}
      </button>
    ));
  };

  return (
    <div
      className={`text-center flex flex-col items-center justify-center h-screen transition-all ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="mb-8 text-2xl md:text-3xl">
        Question {currentQuestion + 1} of {Questions.length}
      </div>
      <div className="mb-8 text-xl md:text-3xl font-bold text-blue-600">
        {Questions[currentQuestion].text}
      </div>
      <div className="mb-8 grid gap-4 grid-cols-1 md:grid-cols-2">
        {renderOptions()}
      </div>
      <div>
        <button
          className={`px-4 md:px-6 py-3 font-bold rounded-full text-xl md:text-3xl ${
            darkMode
              ? "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              : "bg-gray-400 hover:bg-gray-600 active:bg-gray-800"
          } focus:outline-none absolute right-4 md:right-8 bottom-4 md:bottom-5 ${
            darkMode ? "text-white" : "text-black"
          }`}
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
      <div>
        <button
          className={`px-4 md:px-6 mr-52 py-3 font-bold rounded-full text-xl md:text-3xl ${
            darkMode
              ? "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700"
              : "bg-yellow-300 hover:bg-yellow-400 active:bg-yellow-500"
          } focus:outline-none absolute right-16 md:right-8 bottom-4 md:bottom-5 ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => {
            console.log("Highlighter clicked");
          }}
        >
          <FaHighlighter />
        </button>
      </div>
    </div>
  );
};

export default QuestionBox;
