import React from 'react';
import { connect } from 'react-redux';

const SongList = ({ songs }) => {
    return (
        <div>
            <h2>Songs List</h2>
            {
                songs.map(d =>
                    <div>
                        <p>{d.title}</p><button>SELECT</button>
                    </div>)
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        songs: state.songs
    }
};

export default connect(mapStateToProps)(SongList);
