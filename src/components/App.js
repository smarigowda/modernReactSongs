import React from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';
import { header } from './App.module.scss';

const App = () => {
  return (
    <div>
      <h1 className={header}>A React Songs App !</h1>
      <SongList />
      <SongDetail />
    </div>
  )
}

export default App;