import React from 'react';
import './CreateTodoButton.css'

const CreateTodoButton = ({ addTodo }) => {

  return (
    <button className='button-add' onClick={addTodo}></button>
  )
}

export {CreateTodoButton};