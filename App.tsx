import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import "react-native-gesture-handler";
import DrawerComponent from "./components/DrawerComponent";
import IntroScreen from "./screens/IntroScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [showIntroscreen, setShowIntroScreen] = useState(true);
  const handleIntroScreen = () => {
    setShowIntroScreen(false);
  };

  return (
    <>
      {showIntroscreen && <IntroScreen handleDone={handleIntroScreen} />}
      {!showIntroscreen && (
        <NavigationContainer>
          <DrawerComponent />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
