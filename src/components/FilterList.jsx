import React, { useContext, useRef} from 'react'
import { TodosContext } from '../contexts/TodoContext'

export default function FilterList() {

  const {modesTasks, setRenderList} = useContext(TodosContext);

  const modeAll = () => {
    setRenderList('All');
  }

  const modeActive = () => {
    setRenderList('Active')
  }

  const modeCompleted = () => {
    setRenderList('Completed')
  }

  return (
    <div className="filter-list">
      <span onClick={() => {modeAll()}}>All</span>
      <span onClick={modeActive}>Active</span>
      <span onClick={modeCompleted}>Completed</span>
    </div>
  )
}