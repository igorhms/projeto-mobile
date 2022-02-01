import React, { useState, useEffect, useRef } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import YoutubeVideoPlayer from './YoutubeVideoPlayer';
import PlayListCards from './PlayListCards';
import TextGradient from '../textGradient/Textgradient';
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const VideoList = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [videoId, setId] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDescription, setVideoDescription] = useState("");
    const [selectedIndex, setIndex] = useState(0);
    const ref = useRef(null);

    useEffect(() => {

        fetch(`https://joslin-insitute.herokuapp.com/fetch-playlist-videos?id=${props.playListId}`)
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setVideoTitle(json[0].snippet.title)
                setVideoDescription(json[0].snippet.description)
                setId(json[0].id)
                setIndex(0)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, []);

    const setVideoMetadata = (currentVideoIndex, currentVideoId, currentVideoTitle, currentVideoDescription) => {
        setId(currentVideoId)
        setVideoTitle(currentVideoTitle)
        setVideoDescription(currentVideoDescription)
        setIndex(currentVideoIndex)
    }

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

    useEffect(() => {
        ref.current?.scrollToIndex({
            selectedIndex,
            animated: true
        });
    }, [selectedIndex])

    const PreviusAndNextButtom = () => {
        return (
            <View style={styles.prevAndNextBtn}>
                <TouchableOpacity onPress={() => { previusBtn() }}>
                    <Text style={[selectedIndex == 0 ? { opacity: 0 } : { opacity: 1 }, styles.prevAndNextBtnText]}>{"<<Voltar"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { nextBtn() }}>
                    <Text style={[selectedIndex == data.length - 1 ? { opacity: 0 } : { opacity: 1 }, styles.prevAndNextBtnText]}>{"Proximo>>"}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    
    return (
        <View style = {styles.container}>
             <YoutubeVideoPlayer
                        videoId={videoId}
                        title={videoTitle}
                    />
            {isLoading ? (
                <ActivityIndicator size={"large"} color={Colors.darkBlue}
                    style={styles.activityIndicator} />
            ) : (
                <View>   
                    <PreviusAndNextButtom />
                    <View style={styles.descricao}>
                        <TextGradient style={styles.subTitleText}>
                            Descrição
                        </TextGradient>
                        <Text style={styles.descriptionText}>{videoDescription}</Text>
                    </View>
                    <View style={styles.videosRelacionados}>
                        <TextGradient style={styles.subTitleText}>
                            Videos Relacionados
                        </TextGradient>
                    </View>

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
                                    style={index === selectedIndex ? { backgroundColor: Colors.darkBlue, color: "#FFFFFF" } : { backgroundColor: Colors.white }}
                                    imageUrl={item.snippet.thumbnails.high.url}
                                    title={item.snippet.title}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    activityIndicator: {
        justifyContent: "center",
        alignItems: "center",
       },
    subTitleText: {
        fontFamily: Fonts.fonts.boldText,
        fontSize: 14,
    },
    descriptionText: {
        fontFamily: Fonts.fonts.ligthText,
        fontSize: 13,
        letterSpacing: 0.5,
    },
    descricao: {
        paddingHorizontal: 20,
        marginTop: 16,
    },
    videosRelacionados: {
        paddingHorizontal: 20,
        marginTop: 24,
    },
    prevAndNextBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 37,
    },
    prevAndNextBtnText: {
        fontFamily: Fonts.fonts.boldText,
        fontSize: 14,
        color: Colors.grayTextColor,
        letterSpacing: -0.5
    }
});

export default VideoList;