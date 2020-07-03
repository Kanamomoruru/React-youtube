import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem'

const Videolist = ({ videos, onVideoSelect }) => {
    console.log(videos);
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default Videolist;