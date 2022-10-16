import './Sidebar.css'
import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGripVertical, faArrowRightFromBracket, faTriangleExclamation, faBottleDroplet } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../Context/DataContext'


const Sidebar = () => {
  const display = useContext(DataContext).trigger.navbar
  const initialDisplayState = useContext(DataContext).initialState
  const setDisplay = useContext(DataContext).setTrigger
  const navigate = useNavigate()

  const redirect = () =>{
    setDisplay({...initialDisplayState,'display': !display })

    navigate("/logout")
    setTimeout(()=>{
        navigate("/login")
    },[2000])

  }
    
    return (
        <>
            <div className="sidebar" style={{'display': display ? "block" : "none"}} >
                <ul className="list-head">
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faGripVertical}/><Link to="/">Dashboard</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faBook}/><Link to="/billing">Order Book</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faBottleDroplet}/><Link to="/products">Products</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faTriangleExclamation}/><Link to="/critical">Critical</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faSquareCaretDown}/><Link to="/customers">Customers</Link></li>
                    <li className="custom-btn" onClick={redirect}><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faArrowRightFromBracket}/><span>Log out</span></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar