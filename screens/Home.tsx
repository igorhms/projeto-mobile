import React from 'react';
import {StyleSheet, SafeAreaView, Text, View } from 'react-native';
import AppBar from '../components/AppBar';

// import { Container } from './styles';

const Home= ({navigation}) => {
  return (
    <SafeAreaView>
      <AppBar title='SOS Diabetes' navigation={navigation}/>
      <Text>Welcome to the Home</Text>
    </SafeAreaView>
  );
}

export default Home;