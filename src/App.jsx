import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Navbar from './components/Navbar'
import { getBible } from './api/Bible'

function App() {

  /* STATES */
  const [mode, setMode] = useState("light");
  const [isDark, setDarkMode] = useState(true);
  const [passage, setPassage] = useState("");
  const [passageVerse, setPassageVerse] = useState([]);

  /* Makes sure that background is always there */
  const changeBodyBackground = () => {
    if (isDark){
      document.body.style = "background-color: #f3f1f1;"
    }else{
      document.body.style = "background-color: #313338;"
    }
  }


  /* onClick Handlers */
  const themeHandler = () => {
    changeBodyBackground();
    if(isDark){
      setMode("light");
      setDarkMode(false);
    }else{
      setMode("dark");
      setDarkMode(true);
    }
  };


  /* Get Bible Data and Passage */
  useEffect(() => {
    getBible(setPassage, setPassageVerse)
  },[])

  return (
    <>
      <div className={`container ${mode}`}>
        <Navbar theme={mode} changeTheme={themeHandler}></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage theme={mode}/>}/>
            <Route path='/landing' element={<LandingPage theme={mode} passage={passage} passageVerse={passageVerse}/>}/>
            <Route path='/about' element={<About theme={mode}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
