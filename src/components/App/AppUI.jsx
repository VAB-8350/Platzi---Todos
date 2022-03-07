import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoForm } from "../TodoForm/TodoForm";
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
        <main>
            {error && <p className="info-state-page">Ups, hay un error</p>}
            {loading && <img className="changed" alt="changed" src="https://img.icons8.com/plasticine/100/000000/loading-sign.png"/>}
            {(!loading && searchedTodos.length) && <p className="info-state-page">Administra tus todos!</p>}
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} todo={todo}/>
                ))}
            </TodoList>
        </main>
        {openModal && 
        <Modal>
            <TodoForm />
        </Modal>}
        <CreateTodoButton />
    </div>
    )
}

export default AppUI;