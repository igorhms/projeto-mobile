import {
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
  useFonts
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { default as React, useState } from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import DrawerComponent from "./components/DrawerComponent";
import IntroScreen from "./screens/IntroScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  //carregando as fontes
  const [fontsLoaded, error] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  // verificando se as fontes carregaram, se não o app mostra o icone de carregamento
  if (!fontsLoaded) {
    <AppLoading />;
  }

  const [showIntroscreen, setShowIntroScreen] = useState(true);
  const handleIntroScreen = () => {
    setShowIntroScreen(false);
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
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
