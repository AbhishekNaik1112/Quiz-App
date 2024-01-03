import React from "react";
import { CgDarkMode } from "react-icons/cg";

const Result = ({ score, percentage, darkMode, toggleDarkMode, onPlayAgainClick }) => {
  return (
    <div className={`text-center ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="text-4xl font-bold mb-4">
        Your Score is {score}
      </div>
      <div className="text-2xl">
        and the percentage is {percentage}%
      </div>
      <button
        className={`px-4 md:px-6 py-3 font-bold rounded-full text-xl md:text-3xl ${
          darkMode
            ? "bg-green-500 hover:bg-green-600 active:bg-green-700"
            : "bg-green-300 hover:bg-green-400 active:bg-green-500"
        } focus:outline-none absolute right-4 md:right-8 bottom-16 md:bottom-20 ${
          darkMode ? "text-white" : "text-black"
        }`}
        onClick={onPlayAgainClick}
      >
        Play Again
      </button>
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
  );
};

export default Result;
