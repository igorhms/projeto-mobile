import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../../constants/Colors";


const TextGradient = (props) => {
    return (
      <MaskedView maskElement={<Text {...props}/>}>
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={[Colors.darkBLue, Colors.lightBlue]}
        >
          <Text {...props} style={[props.style, { opacity: 0 }]}/> 
        </LinearGradient>
      </MaskedView>
    );
  };
  
  export default TextGradient;