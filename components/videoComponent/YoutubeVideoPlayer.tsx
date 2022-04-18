import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

const YoutubeVideoPlayer = (props) => {

    const [playing, setPlaying] = useState<boolean>(false);

    const onStateChange = useCallback((state:any): void => 
            state==="false"?setPlaying(false):null,
            [setPlaying]
    );
    
    return (
        <View style= {styles.container}>
            <View style= {styles.videoContainer}>
                <YoutubePlayer 
                    height={styles.videoContainer.height}
                    play={playing}
                    videoId={props.videoId}
                    onChangeState={onStateChange}
                />
            </View> 
                <Text style = {styles.titleText}>     
                    {props.title}
                </Text> 
        </View>
    );


}


const styles = StyleSheet.create({

    container: {
       width:"100%",
       height:200,
       maxHeight:300,
       alignItems: "center",
    },
    videoContainer:{
        width:"100%",
        height:230,
        maxHeight:300
    },
    titleText:{ 
        fontFamily: Fonts.fonts.boldText,
        fontSize:14,
        color: Colors.darkBlue,
        paddingHorizontal:20,
        alignSelf:"flex-start"
    },
});

export default YoutubeVideoPlayer;