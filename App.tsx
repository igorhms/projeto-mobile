import { useState } from "react";
import React from "react";
import Home from "./screens/Home";
import IntroScreen from "./screens/IntroScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Teste from "./components/Teste";

const Stack = createNativeStackNavigator();

const App = () => {
  const [showIntroscreen, setShowIntroScreen] = useState(true);
  const handleIntroScreen = () => {
    setShowIntroScreen(false);
  };

  return (
    <>
    {showIntroscreen && <IntroScreen handleDone={handleIntroScreen} />}
    {!showIntroscreen &&
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Teste" component={Teste} />
      </Stack.Navigator>
    </NavigationContainer>}
    </>
  );
};

export default App;
