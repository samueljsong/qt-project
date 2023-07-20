import "./LoginPage.css"
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useState } from "react";

const LoginPage = (props) => {

    const [loginPage, setLoginPage] = useState(true)

    const switchLoginSignupHandler = () => {
        setLoginPage(!loginPage)
    }

    return (
        
        <div className={`login-page-container`}>
            {   // Doing a conditional rendering of components.
                loginPage
                ? <Login theme={props.theme} switchToSignup={switchLoginSignupHandler}></Login> 
                : <Signup theme={props.theme} switchToLogin={switchLoginSignupHandler}></Signup>
            }
        </div>
        
    )
};

export default LoginPage;