import React from 'react';
import {StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';
import AppBar from '../components/appBar/AppBar';
import Card from '../components/card/Card';
import { DATA } from "../util/data";



const Home= ({navigation}) => {
  return (
    <SafeAreaView>
      <AppBar title='SOS Diabetes' navigation={navigation}/>
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