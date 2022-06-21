import React from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import Card from "../components/card/Card";
import PlayListsIds from '../constants/PlayListsIds'
import Videos from '../screens/Videos'
import VideoList from '../components/videoComponent/VideoList';


const SosHiper = ({ navigation }) => {
  
    return (
        <VideoList playListId ={PlayListsIds.playListsIds.sosHiper}/>
    )

}

export default SosHiper;