import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import VideoList from "../components/videoComponent/VideoList";
import colors from "../constants/Colors";
import HomeScreen from "../screens/Home";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View>
          <View style={{ height: 150 }}>
            <LinearGradient
              colors={[colors.LightBlue, colors.blueGlico, colors.blue]}
              style={{ flex: 1, opacity: 1, borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}
            ></LinearGradient>
          </View>
          <DrawerItem
            label={"Home"}
            onPress={() => navigation.navigate("Home")}
          ></DrawerItem>
          <DrawerItem label={"SOS Hipo"} onPress={() => null} {...props} />
          <DrawerItem label={"SOS Hiper"} onPress={() => null} {...props} />
          <DrawerItem
            label={"7 comportamentos"}
            onPress={() => null}
            {...props}
          />
          <DrawerItem
            label={"Tipos de diabetes"}
            onPress={() => null}
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
