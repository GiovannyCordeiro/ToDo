// react
import { useContext, useState } from 'react'
import { TodosContext } from '../contexts/TodoContext'

// icons
import closeIcon from '../images/icon-cross.svg'
import check from '../images/icon-check.svg'

export default function ItemTodo(todo) {

  const {removeItem, setMoment} = useContext(TodosContext);
  const [styleButton, setStyleButton] = useState('button');
  
  const clickButtonFunction = (todo) => {
    if(styleButton === 'button'){
      setStyleButton('button-active');
    }
    else{
      setStyleButton('button');
    }
  }

  return (
    <div className="item-task">
      <div className="wrapper-item">
        <div className={styleButton} onClick={() => {clickButtonFunction(todo)}} > 
          <img src={check} alt='check'/>
        </div>
        <input value={todo.content} type="text" name="text" id="text" readOnly/>
        <img onClick={() => removeItem(todo.id)} id='close-icon' src={closeIcon} />
      </div>
    </div>
  )
}