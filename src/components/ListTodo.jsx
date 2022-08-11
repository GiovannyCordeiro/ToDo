import {useContext} from 'react';

// components
import ItemTodo from './ItemTodo'
import StatusTask from './StatusTask'

// hoooks e contexts
import { TodosContext} from '../contexts/TodoContext';

export default function ListTodo() {

  const {state, renderList} = useContext(TodosContext);

  const {tasks} = state;


  const all = tasks.map((toDo, index) => ( 
    <ItemTodo isCompleted={toDo.isCompleted} index={index} key={toDo.id} id={toDo.id} content={toDo.content} />
  ))

  const completed = tasks.map((toDo, index) => (
    toDo.isCompleted === true && <ItemTodo isCompleted={toDo.isCompleted} index={index} key={toDo.id} id={toDo.id} content={toDo.content} /> 
  ))

  const active = tasks.map((toDo, index) => (
    toDo.isCompleted === false && <ItemTodo isCompleted={toDo.isCompleted} index={index} key={toDo.id} id={toDo.id} content={toDo.content} /> 
  ))

    if(renderList === 'All'){
      return(
        <div className="list-todo">
          {all}
          <StatusTask />
        </div>
      )
    }

    else if(renderList === 'Completed'){
      return(
        <div className="list-todo">
          {completed}
          <StatusTask />
        </div>
      )
    }

    else if(renderList === 'Active'){
      return(
        <div className="list-todo">
          {active}
          <StatusTask />
        </div>
      )
    }
} 