import React, { useContext } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import DataContext from '../Context/DataContext'

const Login = () => {
    
    const {display, setDisplay} = useContext(DataContext)
    const navigateToRoot = useNavigate()

    const login = (()=>{
        setDisplay(true)    
        navigateToRoot("/")
    })

    return (
        <>
            {!display && <div className="background"></div>}
            {!display && <div className="login-container">
                    <div className='form'>
                        <button type="submit" onClick={login}>Log in</button>
                    </div>
            </div>}
        </>
    )
}

export default Login