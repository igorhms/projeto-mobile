import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Comportamentos from "../components/Teste";
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
      <Drawer.Screen name="SOS Hipo" component={Comportamentos} />
      <Drawer.Screen name="SOS Hiper" component={Comportamentos} />
      <Drawer.Screen name="7 Comportamentos" component={Comportamentos} />
      <Drawer.Screen name="Tipos de diabetes" component={Comportamentos} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
