import React from 'react';

const Tracklist = ({ tracks }) => {
    return (
        <div>
            <h2>Track List</h2>
            <ul>
                {tracks.map(track => (
                    <li key={track.id}>
                        <strong>{track.name}</strong> by {track.artist} - {track.album}
                    </li>
                ))}
            </ul>
        </div>
    )
};


export default Tracklist;