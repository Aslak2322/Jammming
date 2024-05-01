import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Searchbar from './Searchbar';
import SearchResults from './Searchresults';
import PlayList from './PlayList';

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

  return (
    <div className="App">
      <SearchResults addToPlaylist={addToPlaylist} searchTerm={searchTerm} handleSearchChange={handleSearchChange} 
      clearPlaylist={clearPlaylist} />
      <PlayList playlist={playList} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
