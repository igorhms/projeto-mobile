import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../../constants/Colors";


const TextGradient = (props) => {
    return (

      <MaskedView maskElement={<Text {...props}/>}>
        <LinearGradient
          colors={[Colors.darkBlue, Colors.lightBlue]}
          start={{x: 0, y: 0.5}} end={{x:0 , y:  0.8}}
        >
          <Text {...props} style={[props.style, { opacity: 0 }]}/> 
        </LinearGradient>
      </MaskedView>
    );
  };
  
  export default TextGradient;