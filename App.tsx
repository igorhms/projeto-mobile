import { useState } from "react";
import React from "react";
import Home from "./screens/Home";
import IntroScreen from "./screens/IntroScreen";

const App = () => {
  const [showIntroscreen, setShowIntroScreen] = useState(true);
  const handleIntroScreen = () => {
    setShowIntroScreen(false);
  };

  return (
    <>
      {showIntroscreen && <IntroScreen handleDone={handleIntroScreen} />}
      {!showIntroscreen && <Home />}
    </>
  );
};

export default App;
