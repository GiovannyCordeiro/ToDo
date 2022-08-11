import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DarkThemeContextProvider from './contexts/DarkThemeCtx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkThemeContextProvider>
      <App />
    </DarkThemeContextProvider>
  </React.StrictMode>
)