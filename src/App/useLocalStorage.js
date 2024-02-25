import React from 'react';

function useLocalSotrage(itemName, initialValue) {

    const localStorageItems = localStorage.getItem(itemName);

    let parsedItems;

    if (localStorageItems) {
        parsedItems = JSON.parse(localStorageItems);
    } else {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems = initialValue;
    }

    const [item, setItem] = React.useState(parsedItems);

    const saveItem = (newItem) => {
        const stringifiedItems = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItems);
        setItem(newItem);
    }

    return [item, saveItem];
}

export { useLocalSotrage };