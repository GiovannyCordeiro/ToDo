import { useContext, useState} from "react"
import { TodosContext } from "../contexts/TodoContext"

export default function InputTodo() {

  const {dispatch, darkMode} = useContext(TodosContext);
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
    <div className={darkMode === true ? 'input-todo-dark' : 'input-todo-light'}>
      <form onSubmit={sendTask} className="wrapper-input">
        <button type="submit" className={darkMode === true ? "button-dark" : "button"}></button>
        <input className={darkMode === true? 'input-dark': 'input-light'} type="text" value={newContent} onChange={captureValue} placeholder='Digite sua task aqui...'/>
      </form>
    </div>
  )
}