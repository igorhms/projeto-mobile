import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import VideoList from "../components/videoComponent/VideoList";
import colors from "../constants/Colors";
import HomeScreen from "../screens/Home";
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
      <Drawer.Screen name="SOS Hipo" component={VideoList} />
      <Drawer.Screen name="SOS Hiper" component={VideoList} />
      <Drawer.Screen name="7 Comportamentos" component={VideoList} />
      <Drawer.Screen name="Tipos de diabetes" component={VideoList} />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
