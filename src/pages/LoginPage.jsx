import "./LoginPage.css"
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const LoginPage = (props) => {
    const {mode, setMode} = useContext(ThemeContext);
    const [loginPage, setLoginPage] = useState(true);

    const switchLoginSignupHandler = () => {
        setLoginPage(!loginPage)
    }

    return (
        
        <div className={`login-page-container`}>
            {   // Doing a conditional rendering of components.
                loginPage
                ? <Login switchToSignup={switchLoginSignupHandler}></Login> 
                : <Signup switchToLogin={switchLoginSignupHandler}></Signup>
            }
        </div>
        
    )
};

export default LoginPage;