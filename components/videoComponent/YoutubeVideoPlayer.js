import React, { useState, useCallback } from "react"
import { View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubeVideoPlayer = (props) => {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    });


    return (
        <View  >
            <YoutubePlayer
                height={200}
                play={playing}
                videoId={props.videoId}
                onChangeState={onStateChange}
            />

        </View>
    );


}
export default YoutubeVideoPlayer;