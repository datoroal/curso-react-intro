import React from 'react';
import './TodoSearch.css';

function TodoSearch(
    { searchValue,
        setSearchValue,
    }) {


    console.log('Los usuarios buscan TODOS de 0', searchValue);

    return (
        <input className='TodoSearch' placeholder="Cortar cebolla"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }
            } />
    );
}

export { TodoSearch };