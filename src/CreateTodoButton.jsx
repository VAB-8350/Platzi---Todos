import React from 'react';
import './CreateTodoButton.css'

const CreateTodoButton = () => {

  const addTask = (msg) => {
    alert(msg);
  }

  return (
    <button className='button-add' onClick={() => addTask('add')}></button>
  )
}

export {CreateTodoButton};