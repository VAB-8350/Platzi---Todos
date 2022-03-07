import React, { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoForm.css'

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const { addTodo, setOpenModal, searchedTodos} = useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const exist = searchedTodos.find(todo => todo.text === newTodoValue);
        if (!!exist) {
            alert('Esta tarea ya existe');
        }
        else{
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    }

    const onWrite = (event) => {
        setNewTodoValue(event.target.value)
    }

  return (
    <form onSubmit={onSubmit}>
        <label className='form-label'>Escriba nueva Tarea</label>
        <textarea className='form-textarea' value={newTodoValue} onChange={onWrite} placeholder='Escribir todo' name="text-tarea" cols="30" rows="10"></textarea>
        <div className='form-buttons'>
            <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
            <button className='button-submit' type='submit'>Guardar</button>
        </div>
    </form>
  )
}

export {TodoForm};