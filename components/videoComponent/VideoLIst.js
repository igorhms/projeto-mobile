import React, { useState, useEffect, useRef } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import YoutubeVideoPlayer from '../videoComponent/YoutubeVideoPlayer'
import PlayListCards from '../videoComponent/PlayListCards'

const VideoList = () => {


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [videoId, setId] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDescription, setVideoDescription] = useState("");
    const [selectedIndex, setIndex] = useState(0);
    const ref = useRef(null);

    useEffect(() => {

        fetch("http://192.168.100.10:8080/fetch-playlist-videos?id=PLF5dIrODfCgVNGtUdnGwBhJ-huT52vS08")
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setVideoTitle(json[0].snippet.title)
                setVideoDescription(json[0].snippet.description)
                setId(json[0].id)
                setIndex(0)

            })
            .catch((error) => console.error(error))
            .finally(setLoading(false))

    }, []);

    const setVideoMetadata = (currentVideoIndex, currentVideoId, currentVideoTitle, currentVideoDescription) => {
        setId(currentVideoId)
        setVideoTitle(currentVideoTitle)
        setVideoDescription(currentVideoDescription)
        setIndex(currentVideoIndex)
    }

    useEffect(() => {
        ref.current?.scrollToIndex({
            selectedIndex,
            animated: true
        });
    }, [selectedIndex])

    const nextBtn = () => {
        if (selectedIndex == data.length - 1) {
            return;
        }
        setVideoMetadata(selectedIndex + 1, data[selectedIndex + 1].id, data[selectedIndex + 1].snippet.title, data[selectedIndex + 1].snippet.description)
    }

    const previusBtn = () => {
        if (selectedIndex == 0) {
            return;
        }

        setVideoMetadata(selectedIndex - 1, data[selectedIndex - 1].id, data[selectedIndex - 1].snippet.title, data[selectedIndex - 1].snippet.description)
    }

    const PreviusAndNextButtom = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => { previusBtn() }}>
                    <Text>{"<<voltar"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { nextBtn() }}>
                    <Text>{"proximo>>"}</Text>
                </TouchableOpacity>
            </View>
        )

    }


    return (
        <View>
            <YoutubeVideoPlayer
                videoId={videoId}
            />
            <Text>{videoTitle}</Text>
            <Text >{videoDescription}</Text>
            <PreviusAndNextButtom />

            {isLoading ? (
                <ActivityIndicator size={"large"} color={"red"}
                    style={styles.outra} />
            ) : (

                <FlatList
                    initialScrollIndex={selectedIndex}
                    extraData={selectedIndex}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setVideoMetadata(index, item.id, item.snippet.title, item.snippet.description)
                            }}
                        >
                            <PlayListCards
                                style={index === selectedIndex ? styles.itemActive : styles.item}
                                imageUrl={item.snippet.thumbnails.high.url}
                                title={item.snippet.title}
                            />
                        </TouchableOpacity>

                    )}
                />
            )}

        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 50,
    },
    itemActive: {
        backgroundColor: "red",
        marginTop: 20
    },

    item: {
        marginTop: 20,

    },
    outra: {
        marginTop: 80
    },
    tinyLogo: {
        width: 50,
        height: 50,
    }

})
export default VideoList;