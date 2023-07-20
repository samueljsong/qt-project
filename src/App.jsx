import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'

function App() {

  /* STATES */
  const [mode, setMode] = useState("light")
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
      <Navbar theme={mode} changeTheme={themeHandler}></Navbar>
      <LoginPage theme={mode}></LoginPage>
    </div>
  )
}

export default App
