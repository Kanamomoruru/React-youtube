import React from 'react';

import { Grid, Grow } from '@material-ui/core';

import { SearchBar, VideoDetail } from './components'

import youtube from './api/youtube';

class App extends React.Component {
    render() {
        return(
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
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