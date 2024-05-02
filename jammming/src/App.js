import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Searchbar from './Searchbar';
import SearchResults from './Searchresults';
import PlayList from './PlayList';
import Tracklist from './Tracklist';

function App() {


  const [searchTerm, setSearchTerm] = useState('');
  const [playList, setPlayList] = useState([]);

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const addToPlaylist = () => {
        if (searchTerm.trim !== '') {
          setPlayList([...playList, searchTerm]);
          setSearchTerm('')
        }
    }

    const clearPlaylist = () => {
      setPlayList([])
    }

    const tracks = [
      {id: 1, name: 'Moonlight', artist: 'D1MA', album: 'EV1GT og ALT1D'},
      {id: 2, name: 'Back to Black', artist: 'Amy Winehouse', album: 'Rehab'},
      {id: 3, name: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Smells Like Teen Spirit'},
      {id: 4, name: 'Breed', artist: 'Nirvana', album: 'Smells Like Teen Spirit'},
      {id: 5, name: 'Rape Me', artist: 'Nirvana', album: 'Smells Like Teen Spirit'},
    ];

  return (
    <div className="App">
      <header>
        NavBar
      </header>
      <h1>Jammming App</h1>
      <Tracklist tracks={tracks} />
      <SearchResults addToPlaylist={addToPlaylist} searchTerm={searchTerm} handleSearchChange={handleSearchChange} 
      clearPlaylist={clearPlaylist} />
      <PlayList playlist={playList} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default App;
