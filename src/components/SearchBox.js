import React from 'react';


const SearchBox = ({search}) =>{
    return (
        <div className="pa2">
        <input 
            className="br2 pa2 ba b--green bg-lightest-blue"
            type='search' 
            placeholder='Search Cats' 
            onChange={search}
        />

        </div>
    )
}

export default SearchBox;