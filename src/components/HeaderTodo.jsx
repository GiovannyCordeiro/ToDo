import iconLight from '../images/icon-moon.svg'
import iconSun from '../images/icon-sun.svg'

import { useContext } from 'react'
import { TodosContext } from '../contexts/TodoContext'

export default function HeaderTodo() {

  const {darkMode, setDarkMode} = useContext(TodosContext)

  return (
    <header className='header-todo'>
      <h2>TODO</h2>
      <img onClick={() => setDarkMode(!darkMode)} src={darkMode === true ? iconSun : iconLight} alt="icon" />
    </header>
  )
}