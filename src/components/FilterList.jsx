import React, { useContext, useRef} from 'react'
import { TodosContext } from '../contexts/TodoContext'

export default function FilterList() {

  const { setRenderList, darkMode } = useContext(TodosContext);

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
    <div className={darkMode === true? 'filter-list-dark' : 'filter-list-light'}>
      <span onClick={modeAll}>All</span>
      <span onClick={modeActive}>Active</span>
      <span onClick={modeCompleted}>Completed</span>
    </div>
  )
}