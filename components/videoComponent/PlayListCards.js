import React from "react"
import { View, Image, Text, StyleSheet} from 'react-native';
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

const PlayListCard = (props) => {
    return (
        <View style={[props.style, styles.container]}>
            <Image style={styles.thumbnail} source={{ uri: props.imageUrl }} />
            <Text style = {[styles.textTitle, props.style]}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        marginTop:16,
        paddingHorizontal:20,        
    },

    thumbnail: {
        width: 75,
        height: 60,
    },

    textTitle:{
        fontFamily: Fonts.fonts.ligthText,
        color: Colors.normalTextColor,
        fontSize: 12,
        marginLeft:10
    }
});

export default PlayListCard;