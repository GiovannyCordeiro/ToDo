import './Todo.scss'

import HeaderTodo from '../components/HeaderTodo'
import InputTodo from './InputTodo'

import FilterList from '../components/FilterList'
import ListTodo from './ListTodo'

import TodoContextProvider from '../contexts/TodoContext'

export default function Todo(){
  return(
    <div className="Todo">
      <TodoContextProvider>
        <HeaderTodo />
        <InputTodo />
        <ListTodo />
        <FilterList />
      </TodoContextProvider>
    </div>
  )
}