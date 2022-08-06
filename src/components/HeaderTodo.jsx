import iconLight from '../images/icon-moon.svg'
import iconSun from '../images/icon-sun.svg'

export default function HeaderTodo() {
  return (
    <header className='header-todo'>
      <h2>TODO</h2>
      <img src={iconLight} alt="icon" />
    </header>
  )
}