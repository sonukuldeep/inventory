import React, { useContext } from 'react'
import './Login.css'
import DataContext from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const setDisplay = useContext(DataContext).setTrigger
    const display = useContext(DataContext).trigger.navbar
    const initialDisplayState = useContext(DataContext).initialState
    const navigateToRoot = useNavigate();

    function login() {
        localStorage.setItem("user", "pass")
        setDisplay({...initialDisplayState, 'sidebar': true, 'navbar': true})
        navigateToRoot("/");
    }

    return (
        <>
            <div className="background" style={{'display': display ? "none" : "block"}}></div>
            <div className="login-container" style={{'display': display ? "none" : "block"}}>
                    <div className='form'>
                        <button type="submit" onClick={() => { login() }}>Log in</button>
                    </div>
            </div>
        </>
    )
}

export default Login