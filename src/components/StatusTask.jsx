import { useContext, useState } from "react"
import { TodosContext } from "../contexts/TodoContext"

export default function StatusTask() {

  const {listTodos} = useContext(TodosContext);

  return (
    <div className="status-tasks">
      <span>{`${listTodos.length} items left`}</span>
      <span id='clear-completed'>Clear Completed</span>
    </div>
  )
}