import React from "react";
import { CgDarkMode } from "react-icons/cg";

const Credits = ({ onBackClick, darkMode, toggleDarkMode }) => {
  return (
    <div
      className={`text-center flex flex-col items-center justify-center h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 border-b-8 border-gray-800">
        Quiz App
      </div>

      <div className="text-xl md:text-2xl lg:text-3xl mb-4">
        Made by Abhishek
        <div>Tech used: ReactJS and Tailwind CSS</div>
      </div>

      <button
        className={`px-4 md:px-6 py-3 font-bold rounded-md ${
          darkMode
            ? "bg-blue-700 hover:bg-blue-800 active:bg-blue-900"
            : "bg-blue-500 hover:bg-blue-600 active:bg-blue-800"
        } focus:outline-none focus:shadow-outline-blue text-2xl md:text-4xl`}
        onClick={onBackClick}
      >
        Back
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
        }
      }
      >
        <CgDarkMode />
      </button>
    </div>
  );
};

export default Credits;
