import './App.scss'
import Todo from './components/Todo'

import { useContext } from 'react';
import { DarkThemeContext } from './contexts/DarkThemeCtx';

export default function App() {

  const {dkApp} = useContext(DarkThemeContext);

  return (
    
    <div className={dkApp ? "dark App" : "light App"}>
      <header id={dkApp ? 'header-dark' : 'header-light'}></header>
      <Todo/>
    </div>
  )
}