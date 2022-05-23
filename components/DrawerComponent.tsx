import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import VideoList from "../components/videoComponent/VideoList";
import colors from "../constants/Colors";
import HomeScreen from "../screens/Home";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View>
          <DrawerItem
            label={"Home"}
            icon={() => <Icon size={25} name="home" />}
            onPress={() => navigation.navigate("Home")}
          ></DrawerItem>
          <DrawerItem
            label={"SOS Hipo"}
            icon={() => <Icon size={25} name="play-circle-filled" />}
            onPress={() => navigation.navigate("SOS Hiper")}
            {...props}
          />
          <DrawerItem
            label={"SOS Hiper"}
            icon={() => <Icon size={25} name="play-circle-filled" />}
            onPress={() => navigation.navigate("SOS Hiper")}
            {...props}
          />
          <DrawerItem
            label={"Tipos de diabetes"}
            icon={() => <Icon size={25} name="play-circle-filled" />}
            onPress={() => navigation.navigate("SOS Hiper")}
            {...props}
            />
          <DrawerItem
            label={"7 comportamentos"}
            icon={() => <Icon size={25} name="info" />}
            onPress={() => navigation.navigate("SOS Hiper")}
            {...props}
          />
        </View>
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blueGlico,
          height: 80,
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
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
