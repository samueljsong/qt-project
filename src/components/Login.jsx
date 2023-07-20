import './Login.css';

const Login = (props) => {

    const onClickAnimationHandler = (e) => {
        console.log()
    }


    return (
        <div className='login-container'>
            {/* <div className='square'></div>
            <div className='circle'></div>
            <div className="triangle"></div> */}
            <div className={`login-card-container ${props.theme}-card`}>
                <h3 className='login-title'>Sign in to your account</h3>
                <p>Daily Quit Time</p>
                <form className='login-form' action="">
                    <input className={`${props.theme}-input`} type="email" required placeholder='Email'/>
                    <input className={`${props.theme}-input`} type="password" placeholder='Password' required />
                    <button onClick={onClickAnimationHandler} className='login-button'>Log in</button>
                </form>
                <div className='login-segment'>
                    <span className='line'></span>
                    <p className='login-or-text'>or</p>
                    <span className='line'></span>
                </div>
                <button className='create-new-account-button'>Create new account</button>
            </div>
        </div>
    )
}

export default Login;