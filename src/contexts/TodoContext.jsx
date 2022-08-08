import{createContext, useState, useEffect} from 'react';

export const TodosContext = createContext();

const TodoContextProvider = ({children}) => {
  const [listTodos, setListsTodos] = useState([]);
  const [styleBtn, setStyleBtn] = useState('button')

  const addNewTask = (newTodo) => {
    if(newTodo === ''){
      return;
    }
    else{
      setListsTodos(
        [{id:Math.floor(Math.random() * 1000),
          content: newTodo,
          moment: false},...listTodos]
      )
    }
  }

  const removeItem = (id) => {
      const newArray = [...listTodos].filter(todos => todos.id !== id);
      setListsTodos(newArray)
  }

  const completedTask = (todoIndividual) => {
    setStyleBtn('button-active');
    console.log(todoIndividual)

  }

  return(
    <TodosContext.Provider value={{listTodos, setListsTodos, addNewTask, removeItem, completedTask, styleBtn, setStyleBtn}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodoContextProvider;