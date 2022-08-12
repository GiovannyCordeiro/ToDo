import { useContext, useState} from "react"
import { DarkThemeContext } from "../contexts/DarkThemeCtx";
import { TodosContext } from "../contexts/TodoContext"

export default function InputTodo() {

  const {dispatch} = useContext(TodosContext);
  const {dkApp} = useContext(DarkThemeContext);
  const [newContent, setNewContent] = useState('');

  const captureValue = (e) => {
    setNewContent(e.target.value)
  }
  
  const sendTask = (e) => {
    e.preventDefault();
    if(newContent === ''){
      return 
    }
    dispatch({type: 'add-task', payload: newContent})
    setNewContent('')
  }
  
  return (
    <div className={dkApp ? 'input-todo-dark' : 'input-todo-light'}>
      <form onSubmit={sendTask} className="wrapper-input">
        <button type="submit" className={dkApp ? "button-dark" : "button"}></button>
        <input className={dkApp ? 'input-dark': 'input-light'} type="text" value={newContent} onChange={captureValue} placeholder='Digite sua task aqui...'/>
      </form>
    </div>
  )
}