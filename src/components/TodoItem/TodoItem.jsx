import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoItem.css'

const TodoItem = ({todo}) => {
  const {completeTodo, deleteTodo} = useContext(TodoContext);


  return (
    <li className='todo-item'>
      <div className='todo-card'>
        <p className={todo.completed && 'tachar'}>{todo.text}</p>
        <div className='todo-card-buttons'>
          <span onClick={() => completeTodo(todo.text)} className={'complete-' + todo.completed}></span>
          <img  onClick={() => deleteTodo(todo.text)} alt='delete' className='delete' src="https://img.icons8.com/dotty/80/000000/filled-trash.png"/>
        </div>
      </div>
    </li>
  )
}

export { TodoItem };