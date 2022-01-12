import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import LinearGradient from "react-native-linear-gradient";
import colors from "../constants/Colors";

const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizzes and more",
    // image: require('../assets/images/splash.png'),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    // image: require('../assets/images/splash.png'),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    // image: require('../assets/images/splash.png'),
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: "center",
    // fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
    // fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 60,
    marginTop: 20,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
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
    color: colors.blue,
    fontSize: 14,
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
    color: colors.blue,
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    textAlign: "center",
    color: colors.white,
  },
});

export default IntroScreen;
