// Importing React library for building UI components
import React from "react";
// Importing the dark mode icon from the react-icons library
import { CgDarkMode } from "react-icons/cg";

// Functional component for the "How to Play" section
const HowToPlay = ({ onBackClick, darkMode, toggleDarkMode }) => {
  // Returning the JSX structure for the component
  return (
    // Main container with dynamic styling based on darkMode
    <div
      className={`text-center flex flex-col items-center justify-center min-h-screen transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Section heading with dynamic styling */}
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 border-b-8 border-gray-800 ">
        How to Play
      </div>

      {/* List of instructions with dynamic styling */}
      <ul className="text-xl md:text-2xl mb-6">
        <li className="mb-2">
          Revamp of Simple and Direct Game: Make the Right Picks
        </li>
        <li className="mb-2">Zero lives granted</li>
        <li className="mb-2">A total of 5 questions await</li>
        <li className="mb-2">
          Your outcome hinges on your accurate selections.
        </li>
      </ul>

      {/* Back button with dynamic styling */}
      <button
        className={`px-4 md:px-6 py-3 font-bold rounded-md transition-all duration-300 ${
          darkMode
            ? "bg-blue-700 hover:bg-blue-800 active:bg-blue-900"
            : "bg-blue-500 hover:bg-blue-600 active:bg-blue-800"
        } focus:outline-none focus:shadow-outline-blue text-xl md:text-3xl lg:text-4xl`}
        onClick={onBackClick}
      >
        Back
      </button>

      {/* Dark mode toggle button with dynamic styling */}
      <button
        className={`px-4 md:px-6 py-3 font-bold rounded-full text-lg md:text-2xl lg:text-3xl transition-all duration-300 ${
          darkMode
            ? "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
            : "bg-gray-400 hover:bg-gray-600 active:bg-gray-800"
        } focus:outline-none absolute right-4 md:right-8 bottom-4 md:bottom-5 ${
          darkMode ? "text-white" : "text-black"
        }`}
        onClick={() => {
          // Toggling dark mode and logging the mode status
          toggleDarkMode();
          if (!darkMode) {
            console.log("Dark Mode On");
          } else {
            console.log("Dark Mode Off");
          }
        }}
      >
        {/* Dark mode icon */}
        <CgDarkMode />
      </button>
    </div>
  );
};

// Exporting the HowToPlay component as the default export
export default HowToPlay;
