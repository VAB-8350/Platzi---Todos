import React from 'react';
import './TodoList.css';

const TodoList = ({children}) => {
  return (
    <ul className='todo-list'>
      {children}
    </ul>
  )
}

export {TodoList};