import React,{ useState } from "react";
import Home from "./screens/Home";
import IntroScreen from "./screens/IntroScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Teste from "./components/Teste";
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
import AppLoading from 'expo-app-loading';

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
