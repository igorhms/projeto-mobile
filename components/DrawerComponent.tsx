import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import HomeScreen from "../screens/Home";
import Comportamentos from "../screens/Comportamentos";
import TiposDiabetes from "../screens/TiposDiabetes";
import SosHiper from "../screens/SosHiper";
import SosHipo from "../screens/SosHipo";
import Videos from "../screens/Videos";
import { View } from "react-native";
import colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { color } from "react-native-reanimated";
import DrawerDetails from "./drawer/DrawerDetails";

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerDetails></DrawerDetails>}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blueGlico,
          height: 80,
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
