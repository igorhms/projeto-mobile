import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import colors from "../constants/Colors";


const AppBar = ({title, navigation }) => {
    
    return (
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action style={styles.icon} size={50} icon="arrow-left-circle" onPress={() => navigation.navigate('Home')} />
        <Appbar.Content style={styles.title} color = '#ffffff' title={title} />
        <Appbar.Action style={styles.iconHome} size={50} icon="home-circle" onPress={() => navigation.navigate('Home')} />
      </Appbar.Header>
    );
  };

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: colors.blueGlico,
        width: "100%",
        flexDirection: 'row',
        marginTop: "3%",
        marginBottom: 5,
        justifyContent: 'space-between',
        borderBottomColor: 'black',
        height: 55
    },
    title: {
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -20,
        marginRight: -20

    },
    icon: {
        alignItems: 'flex-start',
    },
    iconHome: {
      alignItems: 'flex-end',
  },
});

export default AppBar;