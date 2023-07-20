import { useEffect, useState } from 'react'
import './Navbar.css'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

const Navbar = (props) => {

    /* Login for changing themes */
    const [currentImage, setCurrentImage] = useState(sun);
    const onChangeThemeHandler = () => {
        if (currentImage === sun){
            setCurrentImage(moon);
        }else{
            setCurrentImage(sun);
        };

    }

    useEffect(() => {           // Using use effect to render whenever there is a change.
        props.changeTheme();
    },[currentImage])


    return (
        <div className={`nav-container ${props.theme}-nav`}>
            <h1 className='logo'>QT</h1>
            <div className='nav-hamburger'>
                <span className='nav-line'></span>
                <span className='nav-line'></span>
                <span className='nav-line'></span>
            </div>
            <div className='nav-elements'>
                <a href="">About</a>
                <a href="">Sign-in</a>
                
                <img className='change-theme-icon' onClick={onChangeThemeHandler} src={currentImage} alt="" />
                
                <button className='button nav-button'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar;