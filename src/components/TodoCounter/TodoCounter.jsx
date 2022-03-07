import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';


const TodoCounter = () => {
  const {completedTodos, allTodos} = useContext(TodoContext);

  return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {allTodos} tareas</h2>
  )
}

export {TodoCounter};