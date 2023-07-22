import { useEffect, useState } from 'react'
import './Navbar.css'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

const Navbar = (props) => {

    /* States */
    const [currentImage, setCurrentImage] = useState(sun);  // Image for theme
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [hamburgerContainerClass, setHamburgerContainerClass] = useState("hamburger-container");
    const [hamburgerMenuClass, setHamburgerMenuClass] = useState("hamburger-menu")

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
            setHamburgerContainerClass("hamburger-container")
            setHamburgerMenuClass("hamburger-menu")
        }else{
            setHamburgerContainerClass("invisible")
            setHamburgerMenuClass("invisible")
        }
    },[hamburgerActive])


    return (
        <>
            <div className={`${hamburgerContainerClass}`} onClick={onHamburgerClickHandler}>
                
            </div>

            <div className={`${hamburgerMenuClass} ${props.theme}`}>
                    <div className='hamburger-head'>
                        <h1 className='hamburger-logo'>QuTi</h1>
                    </div>
                    <div className='flexboxCol hamburger-elements'>
                        <a className={`${props.theme}`} href="">Home</a>
                        <a className={`${props.theme}`} href="">Friends</a>
                        <a className={`${props.theme}`} href="">About</a>
                    </div>
                    <div className='hamburger-line'></div>
                    <div className='flexboxCol hamburger-settings'>
                        <a className={`${props.theme}`} href="">Get started</a>
                        <div className={`${props.theme}`} onClick={onChangeThemeHandler}><img className='hamburger-theme-icon' src={currentImage} alt='nothing' /> Mode</div>
                        <a className={`${props.theme}`} href="">Sign out</a>
                    </div>
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