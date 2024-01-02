import React from "react";
import { CgDarkMode } from "react-icons/cg";

const MainScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-black mb-8">REACT QUIZ</div>

      <div className="mb-4">
        <button className="px-4 md:px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 text-2xl md:text-4xl">
          START
        </button>
      </div>

      <div className="mb-4">
        <button className="px-4 md:px-6 py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800 text-2xl md:text-4xl">
          HOW TO PLAY
        </button>
      </div>

      <div>
        <button className="px-4 md:px-6 py-3 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800 text-2xl md:text-4xl">
          CREDITS
        </button>
      </div>
      <div>
        <button className="px-4 md:px-6 py-3 bg-gray-400 font-bold rounded-full text-xl md:text-3xl hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray active:bg-gray-800 absolute right-4 md:right-8 bottom-4 md:bottom-5 text-black">
          <CgDarkMode />
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
