import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

const Card = ({ item, navigation }) => (
    <TouchableOpacity style={estilos.containerItem}
        onPress={() =>
            navigation.navigate('Telas', { item })
        }>
        <Text>{item.nome}</Text>
        <Image source={item.img} style={estilos.imagem} resizeMode='contain' />
        <Text>{item.descricao}</Text>
    </TouchableOpacity>


);

const estilos = StyleSheet.create({
    containerItem: {
        height: 200,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        textAlign: 'center'
    },
    imagem: {
        height: 100
    }
})

export default Card;