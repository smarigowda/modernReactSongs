import React from 'react';
import { connect } from 'react-redux';

import { songDetailsContainer } from './SongDetails.module.scss';

const SongDetail = ({ songDetails }) => {
    console.log(songDetails);
    return (
        <div className={songDetailsContainer}>
            {songDetails.length === 0 ? <h1>Select A Song...</h1> : ''}

            {
                songDetails.map(song => {
                    return (<><h1>{song.title}</h1><p>{song.duration}</p></>)
                })
            }
        </div>
    )
}

const mapStateToProps = ({ songs, selectedSong }) => {
    const songDetails = songs.filter(d => selectedSong && d.title === selectedSong.title);
    return {
        songDetails,
    }
}
export default connect(mapStateToProps)(SongDetail);