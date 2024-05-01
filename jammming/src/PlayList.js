import React from 'react';
import SearchResults from './Searchresults';

function PlayList({ playlist }) {
    return (
        <div>
            <h1>Playlist</h1>
            <ul>
                {playlist.map((item, index) => (<li key={index}>{item}</li> ))}
            </ul>
        </div>
    );
}

export default PlayList;