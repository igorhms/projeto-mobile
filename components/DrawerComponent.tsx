import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Teste from "../components/Teste";
import colors from "../constants/Colors";
import HomeScreen from "../screens/Home";


const Drawer = createDrawerNavigator();

const DrawerComponent = (navigation) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blueGlico,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="7 Comportamentos" component={Teste} />
      <Drawer.Screen name="Tipos de diabetes" component={Teste} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
