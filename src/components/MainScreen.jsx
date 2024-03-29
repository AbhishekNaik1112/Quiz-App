// Import necessary components and icons
import React from "react";
import { CgDarkMode } from "react-icons/cg";

// MainScreen component definition
const MainScreen = ({
  onStartClick,
  onHowToPlayClick,
  onCreditsClick,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    // Container for the entire main screen
    <div
      className={`text-center flex flex-col items-center justify-center min-h-screen transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Header displaying the game title */}
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 border-b-8 border-gray-800">
        REACT QUIZ
      </div>

      {/* START button */}
      <div className="mb-4">
        <button
          onClick={onStartClick}
          className={`px-4 md:px-6 py-3 font-bold rounded-md transition-all duration-300 ${
            darkMode
              ? "bg-blue-700 hover:bg-blue-800 active:bg-blue-900"
              : "bg-blue-500 hover:bg-blue-600 active:bg-blue-800"
          } focus:outline-none focus:shadow-outline-blue text-2xl md:text-4xl`}
        >
          START
        </button>
      </div>

      {/* HOW TO PLAY button */}
      <div className="mb-4">
        <button
          className={`px-4 md:px-6 py-3 font-bold rounded-md transition-all duration-300 ${
            darkMode
              ? "bg-green-700 hover:bg-green-800 active:bg-green-900"
              : "bg-green-500 hover:bg-green-600 active:bg-green-800"
          } focus:outline-none focus:shadow-outline-green text-2xl md:text-4xl`}
          onClick={onHowToPlayClick}
        >
          HOW TO PLAY
        </button>
      </div>

      {/* CREDITS button */}
      <div>
        <button
          className={`px-4 md:px-6 py-3 font-bold rounded-md transition-all duration-300 ${
            darkMode
              ? "bg-red-700 hover:bg-red-800 active:bg-red-900"
              : "bg-red-500 hover:bg-red-600 active:bg-red-800"
          } focus:outline-none focus:shadow-outline-red text-2xl md:text-4xl`}
          onClick={onCreditsClick}
        >
          CREDITS
        </button>
      </div>

      {/* Dark Mode toggle button */}
      <div>
        <button
          className={`px-4 md:px-6 py-3 font-bold rounded-full text-xl md:text-3xl transition-all duration-300 ${
            darkMode
              ? "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
              : "bg-gray-400 hover:bg-gray-600 active:bg-gray-800"
          } focus:outline-none absolute right-4 md:right-8 bottom-4 md:bottom-5 ${
            darkMode ? "text-white" : "text-black"
          }`}
          onClick={() => {
            toggleDarkMode();
            // Log whether Dark Mode is On or Off
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
    </div>
  );
};

// Export the MainScreen component
export default MainScreen;
