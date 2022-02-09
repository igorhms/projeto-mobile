import React from 'react';
import VideoList from '../components/videoComponent/VideoList';

const Videos = (props) =>{
    return(
        <VideoList playListId ={props.playListId}/>
    );   
}
export default Videos;