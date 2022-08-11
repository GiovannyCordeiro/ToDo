import iconLight from '../images/icon-moon.svg'
import iconSun from '../images/icon-sun.svg'

import { useContext } from 'react'
import { TodosContext } from '../contexts/TodoContext'
import { DarkThemeContext } from '../contexts/DarkThemeCtx'

export default function HeaderTodo() {

  const {darkMode, setDarkMode} = useContext(TodosContext)
  const {dkApp, setDkApp} = useContext(DarkThemeContext);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    setDkApp(!dkApp);
  };

  return (
    <header className='header-todo'>
      <h2>TODO</h2>
      <img onClick={handleDarkMode} src={darkMode === true ? iconSun : iconLight} alt="icon" />
    </header>
  )
}