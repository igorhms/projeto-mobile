import React, { useState, useCallback } from "react"
import { View, StyleSheet } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubeVideoPlayer = (props) => {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    });


    return (
        <View  style = {styles.container}>
            <View style = {styles.videoPlayer}> 
            <YoutubePlayer
                height={190}
                play={playing}
                videoId={props.videoId}
                onChangeState={onStateChange}
            />
            </View>
           

        </View>
    );


}


const styles = StyleSheet.create({

    container: {
       marginTop:20,
       width:"100%",
       height:200,
       alignItems:"center",
    },

    videoPlayer:{
        width:"90%",
    }
    
});

export default YoutubeVideoPlayer;