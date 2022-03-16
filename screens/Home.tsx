import React from 'react';
import {StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';
import HomeAppBar from '../components/homeAppBar/HomeAppBar';
import Card from '../components/card/Card';
import { DATA } from "../util/data";



const Home= ({navigation}) => {
  return (
    <SafeAreaView>
      <HomeAppBar title='SOS Diabetes' navigation={navigation}/>
      <FlatList
      style={styles.list}
                data={DATA}
                numColumns={2}
                renderItem={({ item }) =>
                    <Card item={item} navigation={navigation} />}
                keyExtractor={item => item.id}
            />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: "10%",
  }
});

export default Home;