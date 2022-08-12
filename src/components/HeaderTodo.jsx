import iconLight from '../images/icon-moon.svg'
import iconSun from '../images/icon-sun.svg'

// hooks
import { useContext } from 'react'
import { DarkThemeContext } from '../contexts/DarkThemeCtx'

export default function HeaderTodo() {

  const {dkApp, setDkApp} = useContext(DarkThemeContext);

  const handleDarkMode = () => {
    setDkApp(!dkApp);
  };

  return (
    <header className='header-todo'>
      <h2>TODO</h2>
      <img onClick={handleDarkMode} src={dkApp ? iconSun : iconLight} alt="icon" />
    </header>
  )
}