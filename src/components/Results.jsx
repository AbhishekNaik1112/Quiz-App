import React, { useRef, useEffect } from "react";
import { CgDarkMode } from "react-icons/cg";
import Money from "../assets/7C.mp3";

const Result = ({
  score,
  percentage,
  darkMode,
  toggleDarkMode,
  onPlayAgainClick,
}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio && score === 5) {
      if (audio.paused) {
        audio
          .play()
          .catch((error) => console.error("Error playing audio:", error));
      }
    }
  }, [score]);

  return (
    <div
      className={`text-center ${
        darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      } min-h-screen w-full flex flex-col justify-center items-center transition-all duration-500`}
    >
      <div className="text-4xl font-bold mb-4">Your Score is {score}</div>
      <div className="text-2xl">and the percentage is {percentage}%</div>

      <audio ref={audioRef} src={Money} />

      <button
        className={`px-4 md:px-6 py-3 font-bold rounded-full text-xl md:text-3xl mt-8 md:mt-12 ${
          darkMode
            ? "bg-green-500 hover:bg-green-600 active:bg-green-700"
            : "bg-green-300 hover:bg-green-400 active:bg-green-500"
        } focus:outline-none transition-all duration-300`}
        onClick={onPlayAgainClick}
      >
        Play Again
      </button>

      <button
        className={`px-4 md:px-6 py-3 font-bold rounded-full text-xl md:text-3xl mt-4 md:mt-6 ${
          darkMode
            ? "bg-gray-600 hover:bg-gray-700 active:bg-gray-800"
            : "bg-gray-400 hover:bg-gray-600 active:bg-gray-800"
        } focus:outline-none transition-all duration-300`}
        onClick={() => {
          toggleDarkMode();
          console.log(`Dark Mode ${darkMode ? "Off" : "On"}`);
        }}
      >
        <CgDarkMode />
      </button>
    </div>
  );
};

export default Result;
