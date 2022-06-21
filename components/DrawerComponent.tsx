import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import colors from "../constants/Colors";
import HomeScreen from "../screens/Home";
import Comportamentos from "../screens/Comportamentos";
import TiposDiabetes from "../screens/TiposDiabetes";
import SosHiper from "../screens/SosHiper";
import SosHipo from "../screens/SosHipo";
import Videos from "../screens/Videos";

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
      <Drawer.Screen name="SOS Hipo" component={SosHipo} />
      <Drawer.Screen name="SOS Hiper" component={SosHiper} />
      <Drawer.Screen name="7 Comportamentos" component={Comportamentos} />
      <Drawer.Screen name="Tipos de diabetes" component={TiposDiabetes} />
      <Drawer.Screen name="Videos" component={Videos} 
      options={{drawerItemStyle: { height: 0 }}}  
  />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
