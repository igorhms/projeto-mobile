import React from "react"
import { View, Image, Text } from 'react-native'

const PlayListCard = (props) => {
    return (
        <View style={props.style}>
            <Image style={styles.tinyLogo} source={{ uri: props.imageUrl }} />
            <Text>{props.title}</Text>
        </View>

    )
}
export default PlayListCard;