import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";



const Card = () => {

    return (

        <TouchableOpacity style ={[styles.container, styles.shadows]} >
            <Text style={styles.TitleText}>SOS DIABETES</Text>
            <Image
                style={styles.imageProps}
                source={require("../../assets/images/7comportamentos/COMPORTAMENTO1.png")}
                resizeMode = "center"
            />   
            <Text style= {styles.descriptionText}>Descriçãoaaaooooo sdasdasdasd</Text>
        </TouchableOpacity>
    )

}
export default Card;

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        height: 188,
        width: 168,
        marginLeft:20,
        backgroundColor: "#ffff",
        borderRadius:10,
        alignItems:"center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical:10
    },
    shadows:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.55,
        shadowRadius: 18,
        
        elevation: 16,
    },

    imageProps:{
        width:"100%",
        height:100,
    },

    descriptionText:{
        flex: 1,
        flexWrap:"wrap",
        fontFamily: Fonts.fonts.ligthText,
        fontSize:11,
        lineHeight:12,
        marginTop:10,
        textAlign: "center",
    },
    TitleText:{
        flex: 1,
        flexWrap:"wrap",
        fontFamily: Fonts.fonts.boldText,
        fontSize:13,
        color: Colors.darkBlue,
        textAlign: "center",
    }
})