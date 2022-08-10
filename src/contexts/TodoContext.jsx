import{createContext, useState, useReducer} from 'react';

export const TodosContext = createContext();

const TodoContextProvider = ({children}) => {

  const [listTodos, setListsTodos] = useState([]);

  const addNewTask = (contentTodo) => {
    if(contentTodo === ''){
      return;
    }
    const newTodo = {
      id:Math.floor(Math.random() * 1000),
      content: contentTodo}
    setListsTodos([newTodo,...listTodos])
  }
  
  const removeItem = (id) => {
      const newArray = [...listTodos].filter(todos => todos.id !== id);
      setListsTodos(newArray)
  }


  const reducer = (state, action) => {
    switch(action.type){
      case 'add-task':
      return{
        tasks: [...state.tasks, {name: action.inputValue, isCompleted: false}]
      }
      default:
        return state
    }
  }


  const [state, dispatch] = useReducer(reducer, { tasks: [] });



  return(
    <TodosContext.Provider value={{listTodos, setListsTodos, addNewTask, removeItem}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodoContextProvider;