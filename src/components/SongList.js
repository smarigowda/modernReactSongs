import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'; 
import { container } from './SongList.module.scss';

const SongList = ({ songs, selectSong }) => {
    return (
        <div className={container}>
            {
                songs.map(d =>
                    <div key={d.title}>
                        <p>{d.title}</p>
                        <button onClick={() => selectSong(d.title) }>Select</button>
                    </div>)
            }
        </div>
    )
};

const msp = state => {
    console.log(state);
    return {
        songs: state.songs
    }
};

const mdp = dispatch => {
    return {
        selectSong: title => dispatch(selectSong(title))
    }
}

export default connect(msp, { selectSong })(SongList);
