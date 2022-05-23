import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Card from "../components/card/Card";
import { DATA } from "../util/data";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/* <HomeAppBar title='SOS Diabetes' navigation={navigation}/> */}
      <FlatList
        style={styles.list}
        data={DATA}
        keyExtractor={(item) => item.title}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Card item={item} navigation={navigation} />
            </View>
          )
        }}

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    height: '100%',
    marginTop: "7%",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center'
  }
});

export default Home;
