import React from 'react';
import './TodoItem.css'

const TodoItem = ({todo, onComplete, deleteTodo}) => {
  return (
    <li className='todo-item'>
      <div className='todo-card'>
        <p className={todo.completed && 'tachar'}>{todo.text}</p>
        <div className='todo-card-buttons'>
          <span onClick={() => onComplete(todo.text)} className={'complete-' + todo.completed}></span>
          <img  onClick={() => deleteTodo(todo.text)} className='delete' src="https://img.icons8.com/dotty/80/000000/filled-trash.png"/>
        </div>
      </div>
    </li>
  )
}

export { TodoItem };