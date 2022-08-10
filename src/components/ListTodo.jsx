import React, { useState } from 'react'
import {useContext} from 'react';

// components
import ItemTodo from './ItemTodo'
import StatusTask from './StatusTask'

// hoooks e contexts
import { TodosContext } from '../contexts/TodoContext';

export default function ListTodo() {

  const {listTodos} = useContext(TodosContext);


  const renderList = listTodos.map((toDo) => ( 
  <ItemTodo key={toDo.id} id={toDo.id} content={toDo.content} />
  ))

  return (
    <div className="list-todo">
      {renderList}
      <StatusTask />
    </div>
  )
} 