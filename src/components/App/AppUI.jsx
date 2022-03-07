import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../../Modal";
import './App.css';

const AppUI = () => {
    const {error, loading, searchedTodos, openModal} = useContext(TodoContext);

    return (
    <div className="container">
        <header>
        <div className="header-filtro">
            <TodoCounter />
            <TodoSearch />
        </div>
        </header>
        <React.Fragment>
            {error && <p className="info-state-page">Ups, hay un error</p>}
            {loading && <p className="info-state-page">Cargando todos...</p>}
            {(!loading && searchedTodos.length) && <p className="info-state-page">Administra tus todos!</p>}
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} todo={todo}/>
                ))}
            </TodoList>
        </React.Fragment>
        {openModal && 
        <Modal>
            <p>{searchedTodos[0]?.text}</p>
        </Modal>}
        <CreateTodoButton />
    </div>
    )
}

export default AppUI;