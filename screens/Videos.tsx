import React from 'react';
import VideoList from '../components/videoComponent/VideoList';

const Videos = ({route}) =>{
    return(
        
        <VideoList playListId ={route.params.item.playListId}/>
    );   
}
export default Videos;