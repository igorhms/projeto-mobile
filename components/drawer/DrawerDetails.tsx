import { DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const DrawerDetails = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.drawer}>
      <View>
        <DrawerItem
          labelStyle={styles.item}
          label={"Home"}
          icon={() => <Icon size={30} color={Colors.blueGlico} name="home" />}
          onPress={() => navigation.navigate("Home")}
        ></DrawerItem>
        <DrawerItem
          labelStyle={styles.item}
          label={"SOS Hipo"}
          icon={() => (
            <Icon
              size={30}
              color={Colors.blueGlico}
              name="play-circle-filled"
            />
          )}
          onPress={() => navigation.navigate("SOS Hiper")}
        />
        <DrawerItem
          labelStyle={styles.item}
          label={"SOS Hiper"}
          icon={() => (
            <Icon
              size={30}
              color={Colors.blueGlico}
              name="play-circle-filled"
            />
          )}
          onPress={() => navigation.navigate("SOS Hiper")}
        />
        <DrawerItem
          labelStyle={styles.item}
          label={"Tipos de diabetes"}
          icon={() => (
            <Icon
              size={30}
              color={Colors.blueGlico}
              name="play-circle-filled"
            />
          )}
          onPress={() => navigation.navigate("SOS Hiper")}
        />
        <DrawerItem
          labelStyle={styles.item}
          label={"7 comportamentos"}
          icon={() => <Icon size={30} color={Colors.blueGlico} name="info" />}
          onPress={() => navigation.navigate("SOS Hiper")}
        />
      </View>
      <DrawerItem
        labelStyle={styles.lastItem}
        label={"Sobre"}
        icon={() => <Icon size={30} color={Colors.blueGlico} name="help" />}
        onPress={() => navigation.navigate("SOS Hiper")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    paddingVertical: 12,
    height: "100%",
    justifyContent: "space-between",
  },
  item: {
    fontSize: 16,
    fontWeight: "700",
  },
  lastItem: {
    fontSize: 16,
    fontWeight: "700",
    justifyContent: "flex-end",
  },
});

export default DrawerDetails;
