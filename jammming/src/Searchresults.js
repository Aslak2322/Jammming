import React, { useState } from 'react';
import SearchBar from './Searchbar';

function SearchResults() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    return (
        <div>
            <SearchBar onSearchChange={handleSearchChange} />
            {searchTerm && <p>Search Result: {searchTerm}</p>}
        </div>
    )

}

export default SearchResults;