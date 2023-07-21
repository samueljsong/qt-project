import './Signup.css'

const Signup = (props) => {

    return (
        <div className='login-container'>
            <div className={`signup-card-container ${props.theme}-card`}>
                <h3 className='login-title'>Create an account</h3>
                <p>Daily Quiet Time</p>
                <form className='login-form' action="">
                    <label htmlFor="username">Username</label>
                    <input id='username' className={`${props.theme}-input`} type="text" placeholder='Username' required/>
                    <label htmlFor="email">Email</label>
                    <input id='email' className={`${props.theme}-input`} type="email" required placeholder='Email'/>
                    <label htmlFor="password">Password</label>
                    <input id='password' className={`${props.theme}-input`} type="password" placeholder='Password' required />
                    <button className='button signup-button'>Sign up</button>
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