import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import colors from "../constants/Colors";


const AppBar = ({title, navigation }) => {
    
    return (
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content style={styles.title} color = '#ffffff' title={title} />
        <Appbar.Action style={styles.icon} size={55} icon="menu" onPress={() => navigation.navigate('Teste')} />
      </Appbar.Header>
    );
  };

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: colors.LightBlue,
        width: "100%",
        height: "18%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: '#ffffff',
        marginTop: "-3%",
    },
    icon: {
        marginTop: "0%",
    }
});

export default AppBar;