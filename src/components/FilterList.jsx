import React, { useContext } from 'react'
import { TodosContext } from '../contexts/TodoContext'

export default function FilterList() {

  const {modesTasks} = useContext(TodosContext);

  const modeAll = () => {
    // setModesTasks('All')
  }

  const modeActive = () => {
    // setModesTasks('Active')
  }

  const modeCompleted = () => {
    // setModesTasks('Completed')
  }

  return (
    <div className="filter-list">
      <span onClick={() => {modeAll()}}>All</span>
      <span onClick={modeActive}>Active</span>
      <span onClick={modeCompleted}>Completed</span>
    </div>
  )
}