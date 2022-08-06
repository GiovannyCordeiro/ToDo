import './Todo.scss'

import HeaderTodo from './HeaderTodo'
import InputTodo from './InputTodo'

import FilterList from './FilterList'
import ListTodo from './ListTodo'

export default function Todo(){
  return(
    <div className="Todo">
      <HeaderTodo />
      <InputTodo />
      <ListTodo />
      <FilterList />
    </div>
  )
}