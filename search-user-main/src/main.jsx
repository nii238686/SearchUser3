import React, { createContext, useState , useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import Home from './Home';

export const ThemeContext = React.createContext();

function Main(){
  const [theme, setTheme] = useState({ backgroundColor: "#16101e", color: "white" });
  return(
    <ThemeContext.Provider value={theme}>
    <Home />
    </ThemeContext.Provider>
  )
}

export default Main

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
 <App />
</>
)
