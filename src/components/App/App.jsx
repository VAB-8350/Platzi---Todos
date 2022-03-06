import React, { useState } from "react";
import AppUI from './AppUI';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'intro a react', completed: false},
//   {text: 'llorar con la llorona', completed: true},
//   {text: 'viene cami', completed: false},
//   {text: 'algo', completed: false},
//   {text: 'hacer cosas de casa', completed: true},
//   {text: 'programar react', completed: false},
//   {text: 'rap', completed: true},
// ]

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem);
  };
  return [item, saveItem]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const addTodo = () => {
    const newTask = {
      text: 'nuevo',
      completed: false
    }
    const newTodos = [...todos];
    newTodos.push(newTask)
    saveTodos(newTodos);
    console.log('addTodo')
  }

  return (
    <AppUI 
    todos={todos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    searchedTodos={searchedTodos}
    addTodo={addTodo}
    />
  );
}

export default App;
