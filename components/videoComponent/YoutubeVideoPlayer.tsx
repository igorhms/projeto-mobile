import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Colors from "../../constants/Colors";

const YoutubeVideoPlayer = (props) => {
  const [playing, setPlaying] = useState<boolean>(false);

  const onStateChange = useCallback(
    (state: any): void => (state === "false" ? setPlaying(false) : null),
    [setPlaying]
  );

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={styles.videoContainer.height}
          play={playing}
          videoId={props.videoId}
          onChangeState={onStateChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    maxHeight: 300,
    marginTop: 5,
    alignItems: "center",
  },
  videoContainer: {
    width: "100%",
    height: 230,
    maxHeight: 300,
  },
});

export default YoutubeVideoPlayer;
