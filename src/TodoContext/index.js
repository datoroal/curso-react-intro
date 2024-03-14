import React from 'react';
import { useLocalSotrage } from '../TodoContext/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: setTodos,
        loading,
        error
    } = useLocalSotrage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        setTodos(newTodos);
    };

    const completedTodos = todos.filter(todo => !!todo.completed)?.length;
    const totalTodos = todos.length;

    // if (totalTodos === completedTodos) {
    //   window.alert('Felicidades, has completado todas tus tareas');
    // }

    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={
            {
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                loading,
                error,
                openModal,
                setOpenModal,
                addTodo,
            }
        }>
            {children}
        </TodoContext.Provider>
    );

}

export { TodoContext, TodoProvider };