import React from 'react';
import './searchBox.css'

const SearchBox = ({searchChange,placeholder}) => {

  return (
    <div>
      <input
        aria-label = 'Search Robots'
        className='search'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;