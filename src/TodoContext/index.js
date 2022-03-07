import React, { useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos, 
        saveItems: saveTodo, 
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const allTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;


    let searchedTodos = [];

    if (searchValue.length < 0) {
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
    saveTodo(newTodos);
    }



    const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
    }


    const openForm = () => {
        setOpenModal(!openModal);
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: text
        })
        saveTodo(newTodos);
    }

    return(
        <TodoContext.Provider 
        value={{
            loading,
            error,
            allTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            deleteTodo,
            searchedTodos,
            openForm,
            addTodo,
            openModal,
            setOpenModal,
            saveTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider};