import React from 'react'

import ItemTodo from './ItemTodo'
import StatusTask from './StatusTask'

export default function ListTodo() {
  return (
    <div className="list-todo">
      <ItemTodo />
      <StatusTask />
    </div>
  )
} 