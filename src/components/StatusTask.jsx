import { useContext, useState } from "react"
import { TodosContext } from "../contexts/TodoContext"

export default function StatusTask() {

  const {state, dispatch} = useContext(TodosContext);
  const {tasks} = state;

  const fiteredTasks = tasks.filter(todos => 
    todos.isCompleted !== true
  )
  const pendingTasks = fiteredTasks.length;

  const [taskscompleted]  = tasks.filter(todos => todos.isCompleted === true);


  return (
    <div className="status-tasks">
      <span>{`${pendingTasks} items left`}</span>
      <span onClick={() => {dispatch({type: 'clear-completed', payload: taskscompleted.isCompleted})}} id='clear-completed'>Clear Completed</span>
    </div>
  )
}