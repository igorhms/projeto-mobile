import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const Card = ({ item, navigation }) => (
  <TouchableOpacity
    style={[styles.containerItem, styles.shadows]}
    onPress={() => navigation.navigate("SOS Hiper", { item })}
  >
    <Text style={styles.titleText}>{item.title}</Text>

    <Image source={item.img} style={styles.imageStyles} resizeMode="contain" />

    <Text style={styles.descriptionText}>{item.descricao}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  containerItem: {
    height: 188,
    width: 168,
    flex: 1,
    backgroundColor: "#ffff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 6,
  },
  imageStyles: {
    width: "100%",
    height: 100,
  },
  descriptionText: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 13,
    lineHeight: 14,
    paddingTop: 10,
    fontWeight: '500',
    textAlign: "center",
  },
  titleText: {
    flex: 1,
    flexWrap: "wrap",
    fontFamily: Fonts.fonts.extraBoldText,
    fontSize: 15,
    color: Colors.blueGlico,
    textAlign: "center",
  },
  shadows: {
    elevation: 4,
  },
});

export default Card;
