import React from 'react';
import { View } from 'react-native';
import VideoList from '../components/videoComponent/VideoList';
import PlayListsIds from '../constants/PlayListsIds';

const SosHipo = () => {
    return (
        <VideoList playListId={PlayListsIds.playListsIds.sosHipo} />
    )
}
export default SosHipo;