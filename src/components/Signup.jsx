import { useState } from 'react'
import './Signup.css'
import { createUser } from '../api/Users.api'

const Signup = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChangeHandler = (e) => {
        setEmail(e.target.value);
    } 

    const handlePasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createUser(username, email, password);
        setUsername('')
        setPassword('')
        setEmail('')
    }

    return (
        <div className='login-container'>
            <div className={`signup-card-container ${props.theme}-card`}>
                <h3 className='login-title'>Create an account</h3>
                <p>Daily Quiet Time</p>

                <form className='login-form' action="">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleUsernameChangeHandler} value={username} 
                            id='username' className={`${props.theme}-input`} 
                            type="text" placeholder='Username' required/>

                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmailChangeHandler} value={email} 
                            id='email' className={`${props.theme}-input`} 
                            type="email" required placeholder='Email'/>

                    <label htmlFor="password">Password</label>
                    <input onChange={handlePasswordChangeHandler} value={password} 
                            id='password' className={`${props.theme}-input`} 
                            type="password" placeholder='Password' required />
                            
                    <button onClick={handleOnSubmit} className='button signup-button'>Sign up</button>
                </form>

                <div className='login-segment'>
                    <span className='line'></span>
                    <p className='login-or-text'>or</p>
                    <span className='line'></span>
                </div>
                <p className='small-font'>Already have an account?</p>
                <button className='create-new-account-button'
                onClick={props.switchToLogin}>Sign in</button>    
            </div>
        </div>
    )
}

export default Signup;