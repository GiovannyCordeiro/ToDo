import{createContext, useState} from 'react';

const TodosContext = createContext();

const TodoContextProvider = ({children}) => {
  const [listTodos, setListsTodos] = useState([])
  return(
    <TodosContext.Provider>
      {children}
    </TodosContext.Provider>
  )
}

export default TodoContextProvider;