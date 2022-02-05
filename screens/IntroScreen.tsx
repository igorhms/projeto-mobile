import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { Button } from "react-native-elements";
import AppIntroSlider from "react-native-app-intro-slider";
import colors from "../constants/Colors";

const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizzes and more",
    image: require("../assets/images/intro1.png"),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    image: require("../assets/images/intro2.png"),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("../assets/images/intro3.png"),
  },
];

const IntroScreen = (props) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Próximo</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Concluir</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Anterior</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Button
        onPress={handleDone}
        title={"Pular"}
        titleStyle={{ fontWeight: "bold", fontSize: 14 }}
        buttonStyle={{
          borderWidth: 0,
          borderColor: "transparent",
          borderRadius: 20,
          backgroundColor: colors.blueGlico,
        }}
        containerStyle={{
          width: 100,
          height: 35,
          marginVertical: 38,
          marginRight: 20,
          alignSelf: "flex-end",
        }}
        icon={{
          name: "arrow-right",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
      />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    marginTop: -120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 50,
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.blueGlico,
    textAlign: "center",
    marginHorizontal: 50,
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
    marginHorizontal: 60,
    marginTop: 15,
  },
  dotStyle: {
    backgroundColor: colors.gray,
  },
  activeDotStyle: {
    backgroundColor: colors.blueGlico,
  },
  rightTextWrapper: {
    width: 60,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  rightText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "bold",
  },
  leftTextWrapper: {
    width: 70,
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  leftText: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: 14,
  },
  doneButtonWrapper: {
    height: 28,
    marginTop: 35,
    fontSize: 4,
    borderRadius: 20,
    alignSelf: "flex-end",
    marginRight: 20,
    backgroundColor: "grey",
    borderBottomWidth: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  doneButtonText: {
    fontSize: 12,
    padding: 0,
    flexWrap: "nowrap",
    color: colors.white,
  },
});

export default IntroScreen;