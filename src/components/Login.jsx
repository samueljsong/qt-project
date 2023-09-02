import { useContext, useState } from 'react';
import './Login.css';
import { loginUser } from '../api/Users.api';
import { ThemeContext } from '../context/ThemeContext';

const Login = (props) => {
    const {mode, setMode} = useContext(ThemeContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault()
        loginUser(email, password)
        setEmail('')
        setPassword('')
    }

    const onEmailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value)
    };

    return (
        <div className='login-container'>
            <div className={`login-card-container ${mode}-card`}>
                <h3 className='login-title'>Sign in to your account</h3>
                <p>Daily Quiet Time</p>
                <form className='login-form' action="/landing" method='get'>
                    <input className={`${mode}-input`} value={email} 
                            onChange={onEmailChangeHandler} type="email" required placeholder='Email'/>
                    <input className={`${mode}-input`} value={password}
                            onChange={onPasswordChangeHandler} type="password" placeholder='Password' required />
                    <button onClick={onSubmitHandler} className='login-button'>Log in</button>
                </form>
                <div className='login-segment'>
                    <span className='line'></span>
                    <p className='login-or-text'>or</p>
                    <span className='line'></span>
                </div>
                <p className='small-font'>Don't have an account?</p>
                <button className='create-new-account-button'
                onClick={props.switchToSignup}>Create new account</button>
            </div>
        </div>
    )
}

export default Login;