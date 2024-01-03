// Importing necessary components from React library
import React from "react";
// Importing the Dark Mode icon from the React Icons library
import { CgDarkMode } from "react-icons/cg";

// Functional component for the Credits section
const Credits = ({ onBackClick, darkMode, toggleDarkMode }) => {
  return (
    // Main container with conditional styling based on darkMode
    <div
      className={`text-center flex flex-col items-center justify-center min-h-screen transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading for the Quiz App */}
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 border-b-8 border-gray-800 ">
        Quiz App
      </div>

      {/* Information about the app creator and technologies used */}
      <div className="text-xl md:text-2xl lg:text-3xl mb-4">
        Made by Abhishek Naik
        <div>Tech used: ReactJS and Tailwind CSS</div>
      </div>

      {/* Button to go back, with dynamic styling based on darkMode */}
      <button
        className={`px-4 md:px-6 py-3 font-bold rounded-md transition-all duration-300 ${
          darkMode
            ? "bg-blue-700 hover:bg-blue-800 active:bg-blue-900"
            : "bg-blue-500 hover:bg-blue-600 active:bg-blue-800"
        } focus:outline-none text-xl md:text-4xl `}
        onClick={onBackClick}
      >
        Back
      </button>

      {/* Button to toggle Dark Mode, with dynamic styling based on darkMode */}
      <button
        className={`px-4 md:px-6 py-3 font-bold rounded-full text-xl md:text-3xl transition-all duration-300 ${
          darkMode
            ? "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
            : "bg-gray-400 hover:bg-gray-600 active:bg-gray-800"
        } focus:outline-none absolute right-4 md:right-8 bottom-4 md:bottom-5 ${
          darkMode ? "text-white" : "text-black"
        }`}
        onClick={() => {
          // Toggle Dark Mode and log the current mode to the console
          toggleDarkMode();
          if (!darkMode) {
            console.log("Dark Mode On");
          } else {
            console.log("Dark Mode Off");
          }
        }}
      >
        {/* Dark Mode icon */}
        <CgDarkMode />
      </button>
    </div>
  );
};

// Exporting the Credits component as the default export
export default Credits;
