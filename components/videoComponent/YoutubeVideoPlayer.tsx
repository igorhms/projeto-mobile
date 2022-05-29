import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

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
          webViewStyle={styles.teste}
          onChangeState={onStateChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: "flex",
    elevation: 2
  },
  videoContainer: {
    width: "100%",
    zIndex: 1,
    borderRadius: 10,
    height: 230,
    maxHeight: 300,
  },
  teste: {},
});

export default YoutubeVideoPlayer;
