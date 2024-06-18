import React, {useState} from 'react';

function PlayList({ playlist, setPlaylist }) {

    const [isRenaming, setIsRenaming] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [inputValue, setInputValue] = useState('Playlist');

    const renamePlaylist = () => {
        if (isRenaming === (true)) {
        setIsRenaming(false)
        }
        else {
            setIsRenaming(true)
        }
        setIsDone(false)
    }

    const removeFromPlaylist = (index) => {
        const newPlaylist = [...playlist];
        newPlaylist.splice(index, 1);
        setPlaylist(newPlaylist);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsDone(true)
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div>
            {isRenaming ? (
            <div>
                {!isDone && (<input type='text' defaultValue='Playlist' 
                value={inputValue} onChange={handleChange}
                onKeyDown={handleKeyDown} />)}
                {isDone && <h1>{inputValue}</h1>}
            </div>    
            ) : 
            (<div>
            <h1>Playlist</h1>
            </div>
            )}
            <button onClick={renamePlaylist}>Rename</button>

            <ul>
                {playlist.map((item, index) => (<li key={index}>{item}
                <button onClick={() => removeFromPlaylist(index)}>Remove From Playlist
                </button></li> ))}
            </ul>
        </div>
    );
}

export default PlayList;