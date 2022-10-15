import React from 'react'
import './Login.css'

const Login = () => {
    function login(e) {
        e.preventDefault()
        console.log(e.target.name)
    }

    return (
        <>
            <div className="background"></div>
            <div className="login-container">
                <div className="container">
                    <div className="color-Container">
                        <form action="#" onSubmit={() => { login() }}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                            <button className="btn btn-success" type="submit">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login