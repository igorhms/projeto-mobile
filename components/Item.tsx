import React  from "react";
import {Text} from "react-native";
import AppBar from "./AppBar";

const Item = ({route, navigation}) => {
    return (
      <AppBar title={route.params.item.title} navigation={navigation}/>
    )
  }

  export default Item;