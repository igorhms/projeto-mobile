import { useState } from "react";
import React from "react";
import Home from "./screens/Home";
import Videos from "./screens/Videos";
import IntroScreen from "./screens/IntroScreen";
import Card  from "./components/cards/Card";

import { 
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'
import PlayListsIds from "./constants/PlayListsIds";

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
    Poppins_900Black
});  

// verificando se as fontes carregaram, se não o app mostra o icone de carregamento
 if(!fontsLoaded){ 
   <AppLoading/>
 }

  const [showIntroscreen, setShowIntroScreen] = useState(true);
  const handleIntroScreen = () => {
    setShowIntroScreen(false);
  };

  return (
    <>
      {showIntroscreen && <IntroScreen handleDone={handleIntroScreen} />}
      {!showIntroscreen && <Videos playListId = {PlayListsIds.playListsIds.sosHipo}/>}
    </>
  );
};

export default App;
