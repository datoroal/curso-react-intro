import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    return (
        <React.Fragment>

            <TodoCounter />
            <TodoSearch />

            {/* Render function */}
            <TodoContext.Consumer>
                {
                    ({
                        searchedTodos,
                        completeTodo,
                        deleteTodo,
                        loading,
                        error,
                        openModal,
                    }) => (
                        <>
                            <TodoList>
                                {loading &&
                                    <>
                                        <TodosLoading />
                                        <TodosLoading />
                                        <TodosLoading />
                                    </>}
                                {error && <TodosError />}
                                {(!loading && searchedTodos.length <= 1)
                                    && <EmptyTodos />}


                                {searchedTodos.map(todo => (
                                    <TodoItem
                                        key={todo.text}
                                        text={todo.text}
                                        completed={todo.completed}
                                        onCompleted={() => completeTodo(todo.text)}
                                        onDelete={() => deleteTodo(todo.text)} />
                                ))}
                            </TodoList>

                            <CreateTodoButton />


                            {openModal &&
                                <Modal>
                                    <TodoForm />
                                </Modal>
                            }
                        </>
                    )
                }
            </TodoContext.Consumer>


        </React.Fragment>
    );
}

export { AppUI };