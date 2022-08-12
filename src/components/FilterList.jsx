import React, { useContext, useRef} from 'react'
import { DarkThemeContext } from '../contexts/DarkThemeCtx';
import { TodosContext } from '../contexts/TodoContext'

export default function FilterList() {

  const { setRenderList } = useContext(TodosContext);
  const { dkApp } = useContext(DarkThemeContext)

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
    <div className={dkApp ? 'filter-list-dark' : 'filter-list-light'}>
      <span onClick={modeAll}>All</span>
      <span onClick={modeActive}>Active</span>
      <span onClick={modeCompleted}>Completed</span>
    </div>
  )
}