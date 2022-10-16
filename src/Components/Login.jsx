import React from 'react'
import './Login.css'

const Login = () => {
    
    function login() {
        
    }

    return (
        <>
            <div className="background"></div>
            <div className="login-container">
                    <div className='form'>
                        <button type="submit" onClick={() => { login() }}>Log in</button>
                    </div>
            </div>
        </>
    )
}

export default Login