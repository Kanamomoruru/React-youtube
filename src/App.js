import React from 'react';

import { Grid, Grow } from '@material-ui/core';

import { SearchBar, VideoDetail } from './components'

import youtube from './api/youtube';

class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null
    }

    handleSubmit = async(searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResult: 5,
                key: 'AIzaSyDxdODnp2JpI0tAAWGq-5-1pkfeRUtI5R8',
                q: searchTerm
            }
        });
        
        this.setState({ video: response.data.item, selectedVideo: response.data.items[0] });
    }
    render() {
        const { selectedVideo } = this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={ selectedVideo }/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* video list */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;