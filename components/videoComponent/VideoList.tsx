import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import TextGradient from "../textGradient/TextGradient";
import PlayListCards from "./PlayListCards";
import YoutubeVideoPlayer from "./YoutubeVideoPlayer";

const VideoList = (props) => {
  0;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  const [videoId, setId] = useState<string>("");
  const [videoTitle, setVideoTitle] = useState<string>("");
  const [videoDescription, setVideoDescription] = useState<string>("");
  const [selectedIndex, setIndex] = useState<number>(0);
  const [flatListRef, setFlatListRef] = useState<FlatList>();

  useEffect(() => {
    fetch(
      `https://joslin-insitute.herokuapp.com/fetch-playlist-videos?id=PLF5dIrODfCgWDr48uqmGuG27VzjabzmpS`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setVideoTitle(json[0].snippet.title);
        setVideoDescription(json[0].snippet.description);
        setId(json[0].id);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const setVideoMetadata = (
    currentVideoIndex,
    currentVideoId,
    currentVideoTitle,
    currentVideoDescription
  ) => {
    setIndex(currentVideoIndex);
    setId(currentVideoId);
    setVideoTitle(currentVideoTitle);
    setVideoDescription(currentVideoDescription);
  };

  const nextBtn = () => {
    if (selectedIndex == data.length - 1) {
      return;
    }
    setVideoMetadata(
      selectedIndex + 1,
      data[selectedIndex + 1].id,
      data[selectedIndex + 1].snippet.title,
      data[selectedIndex + 1].snippet.description
    );
  };

  const previusBtn = () => {
    if (selectedIndex == 0) {
      return;
    }

    setVideoMetadata(
      selectedIndex - 1,
      data[selectedIndex - 1].id,
      data[selectedIndex - 1].snippet.title,
      data[selectedIndex - 1].snippet.description
    );
  };

  const onScrollToindex = (setOffset) => {
    flatListRef.scrollToIndex({
      index: selectedIndex,
      animated: true,
      viewOffset: setOffset,
    });
  };

  const getItemLayout = (data, index) => {
    return { length: 76, offset: 76 * selectedIndex, index };
  };
  const PreviusAndNextButtom = () => {
    return (
      <View style={styles.prevAndNextBtn}>
        <TouchableOpacity
          onPress={() => {
            previusBtn(), onScrollToindex(60);
          }}
        >
          <Text
            style={[
              selectedIndex == 0 ? { opacity: 0 } : { opacity: 1 },
              styles.prevAndNextBtnText,
            ]}
          >
            <Icon size={45} color="black" name="skip-previous" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            nextBtn(), onScrollToindex(-80);
          }}
        >
          <Text
            style={[
              selectedIndex == data.length - 1
                ? { opacity: 0 }
                : { opacity: 1 },
              styles.prevAndNextBtnText,
            ]}
          >
            <Icon size={45} color="black" name="skip-next" />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <YoutubeVideoPlayer videoId={videoId} title={videoTitle} />
      {isLoading ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.darkBlue}
          style={styles.activityIndicator}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <View>
            <PreviusAndNextButtom />
          </View>

          <ScrollView style={{ flex: 1 }}>
            <View style={styles.descriptionBox}>
              <View>
                <TextGradient style={styles.subTitleText}>Descrição</TextGradient>
              </View>
              <ScrollView>
                <View>
                  <Text style={styles.descriptionText}>{videoDescription}</Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.videosRelacionados}>
              <TextGradient style={styles.subTitleText}>
                Vídeos Relacionados
              </TextGradient>
            </View>

            <FlatList
              style={{ marginBottom: 20 }}
              ref={(ref) => setFlatListRef(ref)}
              data={data}
              initialNumToRender={5}
              keyExtractor={(item) => item.id}
              getItemLayout={getItemLayout}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    setVideoMetadata(
                      index,
                      item.id,
                      item.snippet.title,
                      item.snippet.description
                    );
                  }}
                >
                  <PlayListCards
                    style={
                      index === selectedIndex
                        ? { backgroundColor: Colors.blueGlico, color: "#ffff" }
                        : { backgroundColor: Colors.white }
                    }
                    imageUrl={item.snippet.thumbnails.high.url}
                    title={item.snippet.title}
                  />
                </TouchableOpacity>
              )}
            />
          </ScrollView>

        </View>
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    justifyContent: "center",
    alignItems: "center",
  },
  prevAndNextBtn: {
    backgroundColor: "#fdfdfd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    elevation: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  prevAndNextBtnText: {
    fontFamily: Fonts.fonts.boldText,
    color: Colors.grayTextColor,
  },
  descriptionBox: {
    backgroundColor: "#fdfdfd",
    minHeight: 90,
    marginHorizontal: 4,
    marginTop: 25,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 20,
    elevation: 3,
  },
  descriptionText: {
    fontFamily: Fonts.fonts.ligthText,
    fontSize: 13,
    letterSpacing: 0.5,
    textAlign: "justify",
  },
  subTitleText: {
    fontFamily: Fonts.fonts.boldText,
    fontSize: 15,
  },

  videosRelacionados: {
    backgroundColor: "#fdfdfd",
    minHeight: 120,
    marginHorizontal: 4,
    marginTop: 25,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 20,
    elevation: 3,
  },
});

export default VideoList;
