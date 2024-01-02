import React, { useState } from "react";
import MainScreen from "./components/MainScreen";
import HowToPlay from "./components/HowToPlay";
import Credits from "./components/Credits";
import QuestionBox from "./components/QuestionBox";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("main");

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const showMainScreen = () => {
    setCurrentScreen("main");
  };

  const showHowToPlayScreen = () => {
    setCurrentScreen("howToPlay");
  };

  const showCreditsScreen = () => {
    setCurrentScreen("credits");
  };

  const startQuiz = () => {
    setCurrentScreen("quiz");
  };

  return (
    <>
      {currentScreen === "main" && (
        <MainScreen
          onHowToPlayClick={showHowToPlayScreen}
          onCreditsClick={showCreditsScreen}
          onStartClick={startQuiz}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
      {currentScreen === "howToPlay" && (
        <HowToPlay
          onBackClick={showMainScreen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
      {currentScreen === "credits" && (
        <Credits
          onBackClick={showMainScreen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
      {currentScreen === "quiz" && (
        <QuestionBox
          onBackClick={showMainScreen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      )}
    </>
  );
};

export default App;
