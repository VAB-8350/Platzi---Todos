import React, { useState } from "react";
import { TodoCounter } from './TodoCounter';
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'intro a react', completed: false},
  {text: 'llorar con la llorona', completed: true},
  {text: 'viene cami', completed: false},
  {text: 'algo', completed: false},
  {text: 'hacer cosas de casa', completed: true},
  {text: 'programar react', completed: false},
  {text: 'rap', completed: true},
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;

  let searchedTodos = [];

  if (searchValue.length <= 1) {
    searchedTodos = todos;
  }
  else{
    searchedTodos = todos.filter(todo => {
      const texto = todo.text.toLowerCase()
      return texto.includes(searchValue.toLowerCase())
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

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
      <CreateTodoButton/>
    </div>
  );
}

export default App;
