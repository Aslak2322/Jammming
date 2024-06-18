import React, { useState } from 'react';
import Spotify from './Spotify';
import track from './Track';

function Searchbar({ onSearchChange, accessToken, addToPlaylist }) {
    const [searchTerminology, setSearchTerminology] = useState('');

    const handleInputChange = (e) => {
        setSearchTerminology(e.target.value)
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            try {
                const searchTerm = searchTerminology.trim().toLowerCase();
                console.log(accessToken)
                const trackId = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
                    headers: {
                        Authorization : `Bearer ${accessToken}`
                    }}).then(trackId => trackId.json()).then(data => { return (data.tracks.items[0].id)})

                const track = await fetch(`
                https://api.spotify.com/v1/tracks/${trackId}`, {
                    headers: {
                        Authorization : `Bearer ${accessToken}`
                    }
                }).then(track => track.json()).then(data => { addToPlaylist(data.name)})
                if (!trackId.ok) {
                    throw new Error('Network response was not ok');
                }
            }
            catch (error) {
            console.error('Error searching', error.message);
        }
    }
    }


    return (
        <div>
            <label htmlFor="searchInput">Searchbar</label>
            <input
              type='text'
              id='searchInput'
              value={searchTerminology}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default Searchbar;