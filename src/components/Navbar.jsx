import { useEffect, useState } from 'react'
import './Navbar.css'

//Image imports
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import b_signout from '../assets/nav-icons/b-signout.svg'
import w_signout from '../assets/nav-icons/w-signout.svg'
import b_friends from '../assets/nav-icons/b-friends.svg'
import w_friends from '../assets/nav-icons/w-friends.svg'
import b_home from '../assets/nav-icons/b-home.svg'
import w_home from '../assets/nav-icons/w-home.svg'
import b_about from '../assets/nav-icons/b-about.svg'
import w_about from '../assets/nav-icons/w-about.svg'
import b_profile from '../assets/nav-icons/b-pro.svg'
import w_profile from '../assets/nav-icons/w-profile.svg'
import { Link } from 'react-router-dom'



const Navbar = (props) => {

    /* States */
    const [currentImage, setCurrentImage] = useState(sun);  // Image for theme
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [hamburgerContainerClass, setHamburgerContainerClass] = useState("hamburger-container");
    const [hamburgerMenuClass, setHamburgerMenuClass] = useState("hamburger-menu")

    /* Hamburger icon states */
    const [signoutSvg, setSignoutSvg] = useState(b_signout);
    const [friendsSvg, setFriendsSvg] = useState(b_friends);
    const [homeSvg, setHomeSvg] = useState(b_home);
    const [aboutSvg, setAboutSvg] = useState(b_about);
    const [profileSvg, setProfileSvg] = useState(b_profile);

    /* Login for changing themes */
    const onChangeThemeHandler = () => {
        if (currentImage === sun){
            setCurrentImage(moon);
            setSignoutSvg(w_signout);
            setFriendsSvg(w_friends);
            setHomeSvg(w_home);
            setAboutSvg(w_about);
            setProfileSvg(w_profile);
        }else{
            setCurrentImage(sun);
            setSignoutSvg(b_signout);
            setFriendsSvg(b_friends);
            setHomeSvg(b_home);
            setAboutSvg(b_about);
            setProfileSvg(b_profile);
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

    //Handlers for Navigation


    return (
        <>
            <div className={`${hamburgerContainerClass}`} onClick={onHamburgerClickHandler}></div>

            <div className={`${hamburgerMenuClass} ${props.theme}`}>
                <div className='hamburger-head'>
                    <h1 className='hamburger-logo'>QuTi</h1>
                </div>
                <div className='flexboxCol hamburger-elements'>
                    <Link className={`${props.theme} small-font test`} to=""><img className='hamburger-theme-icon' src={homeSvg} alt="" /> Home</Link>
                    <Link className={`${props.theme} small-font`} to=""><img className='hamburger-theme-icon' src={friendsSvg} alt="" /> Friends</Link>
                    <Link className={`${props.theme} small-font`} to="/about"><img className='hamburger-theme-icon' src={aboutSvg} alt="" /> About</Link>
                </div>
                <div className='hamburger-line'></div>
                <div className='flexboxCol hamburger-settings'>
                    <Link className={`${props.theme} small-font`} to="/profile"><img className='hamburger-theme-icon' src={profileSvg} alt="" /> Profile</Link>
                    <div className={`${props.theme} small-font`} onClick={onChangeThemeHandler}>
                        <img className='hamburger-theme-icon' src={currentImage} alt='nothing' /> Mode
                    </div>
                    <Link className={`${props.theme} small-font`} to=""><img className='hamburger-theme-icon' src={signoutSvg} alt="" /> Sign out</Link>
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
                    <div className='nav-element-desktop'><Link to=""><p className='small-font'>Home</p></Link></div>
                    <div className='nav-element-desktop'><Link to=""><p className='small-font'>Friends</p></Link></div>
                    <div className='nav-element-desktop'><Link to="/about"><p className='small-font'>About</p></Link></div>
                    <div className='nav-element-desktop'><Link to=""><p className='small-font'>Profile</p></Link></div>
                    <img className='change-theme-icon' onClick={onChangeThemeHandler} src={currentImage} alt="" />
                    <button className='button nav-button'>Sign out</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;