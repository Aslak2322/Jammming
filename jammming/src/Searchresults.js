import React, { useState } from 'react';
import SearchBar from './Searchbar';

function SearchResults({ addToPlaylist, searchTerm, handleSearchChange, clearPlaylist }) {
    
    return (
        <div>
            <SearchBar onSearchChange={handleSearchChange} />
            {searchTerm && <p>Search Result: {searchTerm}</p>}
            <button onClick={addToPlaylist}>Add to Playlist</button>
            <button onClick={clearPlaylist}>Clear Playlist</button>
        </div>
    )

}

export default SearchResults;