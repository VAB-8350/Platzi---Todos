import React, { useState } from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import './App.css';

const AppUI = ({
    todos,
    completedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    searchedTodos,
    addTodo,
}) => {
    return (
    <div className="container">
        <header>
        <div className="header-filtro">
            <TodoCounter total={todos.length} completed={completedTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        </header>
        <TodoList>
        {searchedTodos.map(todo => (
            <TodoItem key={todo.text} todo={todo} onComplete={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        </TodoList>
        <CreateTodoButton addTodo={addTodo}/>
    </div>
    )
}

export default AppUI;