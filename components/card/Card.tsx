import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const Card = ({ item, navigation }) => (
  <TouchableOpacity 
    style={[styles.containerItem, styles.shadows]}
    onPress={() => navigation.navigate(item.navigateTo, { item })}
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
    fontFamily: Fonts.fonts.ligthText,
    fontSize: 11,
    lineHeight: 12,
    marginTop: 10,
    textAlign: "center",
  },
  titleText: {
    flex: 1,
    flexWrap: "wrap",
    fontFamily: Fonts.fonts.boldText,
    fontSize: 12,
    color: Colors.blueGlico,
    textAlign: "center",
  },
  shadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.55,
    shadowRadius: 18,

    elevation: 8,
  },
});

export default Card;
