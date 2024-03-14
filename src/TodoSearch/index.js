import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);


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