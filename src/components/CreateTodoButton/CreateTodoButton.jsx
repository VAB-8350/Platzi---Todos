import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './CreateTodoButton.css'

const CreateTodoButton = () => {
  const { addTodo, openModal } = useContext(TodoContext);

  return (
    <button className={'button-add '+ (openModal && 'button-modal')} onClick={addTodo}></button>
  )
}

export {CreateTodoButton};