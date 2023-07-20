import { useEffect, useState } from 'react'
import './Navbar.css'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

const Navbar = (props) => {

    /* States */
    const [currentImage, setCurrentImage] = useState(sun);  // Image for theme
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [hamburgerClass, setHamburgerClass] = useState("hamburger-container invisible");

    /* Login for changing themes */
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


    /* Logic for hamburger menu */
    const onHamburgerClickHandler = () => {
        setHamburgerActive(!hamburgerActive)
    }

    useEffect(() => {
        if(hamburgerActive === true){
            setHamburgerClass("hamburger-container")
        }else{
            setHamburgerClass("hamburger-container invisible")
        }
    },[hamburgerActive])


    return (
        <>
            <div className={`${hamburgerClass}`} onClick={onHamburgerClickHandler}>
                <div className={`hamburger-menu ${props.theme}`}></div>
            </div>


            <div className={`nav-container ${props.theme}-nav`}>
                <h1 className='logo'>QuTi</h1>
                <div className='nav-hamburger' onClick={onHamburgerClickHandler}>
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
        </>
    )
}

export default Navbar;