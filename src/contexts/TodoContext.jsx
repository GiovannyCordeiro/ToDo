import{createContext, useState, useReducer} from 'react';

export const TodosContext = createContext();

const TodoContextProvider = ({children}) => {

  const [darkMode, setDarkMode] = useState(true)

  const reducer = (state, action) => {
    switch(action.type){
      case 'add-task':
        return{
          ...state,
          tasks: [{content: action.payload, id:Math.floor(Math.random() * 1000), isCompleted: false},...state.tasks]
      };
      case 'delete-item':
        return{
          ...state,
          tasks: state.tasks.filter(todos => todos.id !== action.payload)
        };
      case 'toggle-completed':
        return{
          ...state,
          tasks: state.tasks.map((item, index) => index === action.payload ?  {...item, isCompleted: !item.isCompleted} : item)
        }
      case 'clear-completed':
        return{
          ...state,
          tasks: state.tasks.filter(todos => todos.isCompleted !== action.payload)
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  const [renderList, setRenderList] = useState('All')


  return(
    <TodosContext.Provider value={{ dispatch, state, renderList, setRenderList, darkMode, setDarkMode}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodoContextProvider;