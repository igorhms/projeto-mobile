import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import colors from "../constants/Colors";


const AppBar = ({title, navigation }) => {
    
    return (
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content style={styles.title} color = '#ffffff' title={title} />
        <Appbar.Action style={styles.icon} size={60} icon="menu" onPress={() => navigation.navigate('Teste')} />
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

    },
    icon: {
        marginTop: "0%",
        alignItems: 'flex-end',
    }
});

export default AppBar;