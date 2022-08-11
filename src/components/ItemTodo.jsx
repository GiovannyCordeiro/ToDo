// react
import { useContext, useState } from 'react'
import { TodosContext } from '../contexts/TodoContext'

// icons
import closeIcon from '../images/icon-cross.svg'
import check from '../images/icon-check.svg'

export default function ItemTodo(todo) {

  const {dispatch,darkMode} = useContext(TodosContext);

  const clickButtonFunction = (todo) => {
    dispatch({ type: 'toggle-completed', payload: todo.index })
  };

  return (
    <div className={darkMode ? 'item-task-dark' : 'item-task-light'}>
      <div className="wrapper-item">
        <div className={todo.isCompleted ?  'button-active' : 'button' } onClick={() => {clickButtonFunction(todo)}} > 
          <img src={check} alt='check'/>
        </div> 
        <input 
          value={todo.content} 
          type="text" 
          name="text" 
          id="text" 
          readOnly 
          style={{textDecoration: todo.isCompleted ? 'line-through' : 'none',
                  color: todo.isCompleted ? '#4d5066' : ''}}/>
        <img onClick={() => dispatch({type: 'delete-item', payload: todo.id})} id='close-icon' src={closeIcon} />
      </div>
    </div>
  )
}