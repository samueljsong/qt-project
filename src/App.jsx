import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'

function App() {

  /* STATES */
  const [mode, setMode] = useState("dark")
  const [isDark, setDarkMode] = useState(true);


  /* onClick Handlers */
  const themeHandler = () => {
    if(isDark){
      setMode("light");
      setDarkMode(false);
    }else{
      setMode("dark");
      setDarkMode("true");
    }
  };

  return (
    <div className={`container ${mode}`}>
      <div className="square"></div>
      <LoginPage theme={mode}></LoginPage>
    </div>
  )
}

export default App
