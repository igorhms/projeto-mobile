import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Card from "../components/card/Card";
import { DATA } from "../util/data";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fefefe" }}>
      <FlatList
        style={styles.list}
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <Card item={item} navigation={navigation} />}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    height: "100%",
    marginTop: "6%",
  },
});

export default Home;
