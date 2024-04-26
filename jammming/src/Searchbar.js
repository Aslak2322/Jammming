import React, { useState } from 'react';

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    };


    return (
        <div>
            <label htmlFor="searchInput">Searchbar</label>
            <input
              type='text'
              id='searchInput'
              value={searchTerm}
              onChange={handleInputChange}
            />
        </div>
    )
}

export default Searchbar;