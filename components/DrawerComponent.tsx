import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Comportamentos from "../components/Teste";
import VideoList from "../components/videoComponent/VideoList";
import colors from "../constants/Colors";
import HomeScreen from "../screens/Home";

const Drawer = createDrawerNavigator();

const DrawerComponent = (navigation) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blueGlico,
          height: 90,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SOS Hipo" component={VideoList} />
      <Drawer.Screen name="SOS Hiper" component={VideoList} />
      <Drawer.Screen name="7 Comportamentos" component={VideoList} />
      <Drawer.Screen name="Tipos de diabetes" component={VideoList} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
