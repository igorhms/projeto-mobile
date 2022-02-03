import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

const YoutubeVideoPlayer = (props) => {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    });
    return (
        <View style= {styles.container}>
            <View style= {styles.teste}>
                <YoutubePlayer 
                    height={200}
                    play={playing}
                    videoId={props.videoId}
                    onChangeState={onStateChange}
                />
                <Text style = {styles.titleText}>     
                    {props.title}
                </Text> 
            </View>   
            
        </View>
    );


}


const styles = StyleSheet.create({

    container: {
       marginTop:20,
       width:"100%",
       height:200, 
    },
 
    titleText:{ 
        fontFamily: Fonts.fonts.boldText,
        fontSize:14,
        color: Colors.darkBlue,
        paddingHorizontal:20
    },
});

export default YoutubeVideoPlayer;