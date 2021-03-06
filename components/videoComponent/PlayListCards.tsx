import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import TextGradient from "../textGradient/TextGradient";

const PlayListCard = (props) => {
  return (
      <View style={[props.style, styles.container]}>
        <Image style={styles.thumbnail} source={{ uri: props.imageUrl }} />
        <Text style={[styles.textTitle, props.style]}>{props.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    paddingHorizontal: 20,
  },

  gradient: {
    flex: 1,
  },

  thumbnail: {
    width: 75,
    height: 60,
    zIndex: 1,
  },

  textTitle: {
    fontFamily: Fonts.fonts.ligthText,
    color: Colors.normalTextColor,
    fontSize: 12,
    paddingLeft: 8,
    flex: 1,
    flexWrap: "wrap",
  },
});

export default PlayListCard;
