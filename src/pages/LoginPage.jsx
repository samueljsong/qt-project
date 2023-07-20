import "./LoginPage.css"
import Login from "../components/Login";

const LoginPage = (props) => {

    return (
        
        <div className={`login-page-container`}>
            <Login theme={props.theme}></Login>
        </div>
        
    )
};

export default LoginPage;