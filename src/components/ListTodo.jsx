import React from 'react'
import {useContext} from 'react';

// components
import ItemTodo from './ItemTodo'
import StatusTask from './StatusTask'

// context
import { TodosContext } from '../contexts/TodoContext';

export default function ListTodo() {

  const {listTodos} = useContext(TodosContext);

  return (
    <div className="list-todo">
      {/* <ItemTodo /> */}
      {listTodos.map((toDo) => (
        <ItemTodo key={toDo.id} id={toDo.id} moment={toDo.moment} content={toDo.content} />
      ))}
      <StatusTask />
    </div>
  )
} 