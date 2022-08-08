import { useContext, useState} from "react"
import { TodosContext } from "../contexts/TodoContext"

export default function InputTodo() {

  const {addNewTask} = useContext(TodosContext);
  const [newContent, setNewContent] = useState('');

  const captureValue = (e) => {
    setNewContent(e.target.value)
  }

  const sendTask = (e) => {
    e.preventDefault();
    addNewTask(newContent);
    setNewContent('')
  }
  
  return (
    <div className="input-todo">
      <form onSubmit={sendTask} className="wrapper-input">
        <button type="submit" className="button"></button>
        <input type="text" value={newContent} onChange={captureValue} placeholder='Digite sua task aqui...'/>
      </form>
    </div>
  )
}