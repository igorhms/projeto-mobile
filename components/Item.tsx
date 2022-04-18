import React  from "react";
import {Text, StyleSheet, SafeAreaView, View} from "react-native";
import Videos from "../screens/Videos";
import AppBar from "./AppBar";
import PlayListsIds from "../constants/PlayListsIds";


const Item = ({route, navigation}) => {
    return (
      <>
         <AppBar title={route.params.item.title} navigation={navigation}/>
         <Videos playListId={PlayListsIds.playListsIds.sosHipo}/>
      </>
    )
  }

  const styles = StyleSheet.create({
    container: {

    },
  });

  export default Item;