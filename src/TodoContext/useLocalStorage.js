import React from 'react';

function useLocalSotrage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItems = localStorage.getItem(itemName);
                let parsedItems;

                if (localStorageItems) {
                    parsedItems = JSON.parse(localStorageItems);
                    setItem(parsedItems);
                } else {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItems = initialValue;
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 1000);

    }, []);

    const saveItem = (newItem) => {
        const stringifiedItems = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItems);
        setItem(newItem);
    }

    console.log(item);

    return { item, saveItem, loading, error };
}

export { useLocalSotrage };


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Introducción a React.js', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'bla bla bla', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.clear();