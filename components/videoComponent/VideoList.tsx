import React, { useState, useEffect, useRef } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
    ScrollView
} from 'react-native';
import YoutubeVideoPlayer from './YoutubeVideoPlayer';
import PlayListCards from './PlayListCards';
import TextGradient from '../textGradient/TextGradient';
import Fonts from "../../constants/Fonts";
import Colors from '../../constants/Colors';

const VideoList = (props) => {
0
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState([]);
    const [videoId, setId] = useState<string>("");
    const [videoTitle, setVideoTitle] = useState<string>("");
    const [videoDescription, setVideoDescription] = useState<string>("");
    const [selectedIndex, setIndex] = useState<number>(0);
    const [flatListRef, setFlatListRef] = useState<FlatList>();

    useEffect(() => {

        fetch(`https://joslin-insitute.herokuapp.com/fetch-playlist-videos?id=PLF5dIrODfCgWDr48uqmGuG27VzjabzmpS`)
            .then((response) => response.json())
            .then((json) => {
                setData(json)
                setVideoTitle(json[0].snippet.title)
                setVideoDescription(json[0].snippet.description)
                setId(json[0].id)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, []);

    const setVideoMetadata = (currentVideoIndex, currentVideoId, currentVideoTitle, currentVideoDescription) => {
        setIndex(currentVideoIndex)
        setId(currentVideoId)
        setVideoTitle(currentVideoTitle)
        setVideoDescription(currentVideoDescription)
        
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
    
    const onScrollToindex = (setOffset) => {
        flatListRef.scrollToIndex({
            index: selectedIndex,
            animated:true,
            viewOffset:setOffset
        });
     }

    const getItemLayout = (data, index) =>{
        return{length:76, offset: 76*selectedIndex, index}
    }
    const PreviusAndNextButtom = () => {
        return (
            <View style={styles.prevAndNextBtn}>
                <TouchableOpacity onPress={() => { previusBtn() , onScrollToindex(60)}} 
                >
                    <Text style={[selectedIndex == 0 ? { opacity: 0 } : { opacity: 1 },
                          styles.prevAndNextBtnText]}
                          >
                              {"<<Voltar"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { nextBtn(),onScrollToindex(-80) }}>
                    <Text style={[selectedIndex == data.length - 1 ? { opacity: 0 } : { opacity: 1 },
                         styles.prevAndNextBtnText]}
                         >
                             {"Proximo>>"}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <YoutubeVideoPlayer
                videoId={videoId}
                title={videoTitle}
            />
            {isLoading ? (
                <ActivityIndicator size={"large"} color={Colors.darkBlue}
                    style={styles.activityIndicator} />
            ) : (
                <View style = {{flex:1}}>

                    <View style={styles.nextButtom}>
                        <PreviusAndNextButtom />
                    </View>
                    <View style ={{paddingLeft:20, marginTop:10}}>
                        <TextGradient style={styles.subTitleText}>
                                    Descrição
                        </TextGradient>
                    </View>
                    <ScrollView style={styles.descripitionContainer} >
                        <View >
                            <Text style={styles.descriptionText}>{videoDescription}</Text>
                        </View>
                    </ScrollView>
                    <View style={styles.videosRelacionados}>
                        <TextGradient style={styles.subTitleText}>
                            Videos Relacionados
                        </TextGradient>
                    </View>

                    <FlatList
                        style={{marginBottom:20}}
                        ref={(ref)=> setFlatListRef(ref)}
                        data={data}
                        initialNumToRender={5}
                        keyExtractor={(item) => item.id}
                        getItemLayout = {getItemLayout}
                        showsVerticalScrollIndicator = {false}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity
                                onPress={() => {
                                    setVideoMetadata(index, item.id, item.snippet.title, item.snippet.description)
                                }}
                            >
                                <PlayListCards
                                    style={index === selectedIndex ? { backgroundColor: Colors.darkBlue, color:"#ffff"} : { backgroundColor: Colors.white }}
                                    imageUrl={item.snippet.thumbnails.high.url}
                                    title={item.snippet.title}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>
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
        textAlign:'justify',
      
    },
    descripitionContainer: {
        paddingHorizontal: 20,
        height:280,
    },
    videosRelacionados: {
        paddingHorizontal: 20,
        marginTop:20,
    },
    prevAndNextBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 50,
        height:30
    },
    prevAndNextBtnText: {
        fontFamily: Fonts.fonts.boldText,
        fontSize: 14,
        color: Colors.grayTextColor,
        letterSpacing: -0.5
    },
    nextButtom: {
        marginTop: 15
    }
});

export default VideoList;