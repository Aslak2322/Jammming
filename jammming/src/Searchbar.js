import React, { useState } from 'react';

function Searchbar({ onSearchChange }) {
    const [searchTerminology, setSearchTerminology] = useState('');

    const handleInputChange = (e) => {
        setSearchTerminology(e.target.value)
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearchChange(searchTerminology)
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