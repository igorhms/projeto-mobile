import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Card from "../components/card/Card";
import { DATA } from "../util/data";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/* <HomeAppBar title='SOS Diabetes' navigation={navigation}/> */}
      <FlatList
        style={styles.list}
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    height: "100%",
    marginTop: "7%",
  },
});

export default Home;
