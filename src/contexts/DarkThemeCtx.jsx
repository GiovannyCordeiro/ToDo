import { createContext, useState } from "react";

export const DarkThemeContext =  createContext();

const DarkThemeContextProvider = ({children}) => {

  const [dkApp, setDkApp] = useState(true);

  return (
    <DarkThemeContext.Provider value={{ dkApp, setDkApp }}>
      {children}
    </DarkThemeContext.Provider>
  )
}

export default DarkThemeContextProvider;