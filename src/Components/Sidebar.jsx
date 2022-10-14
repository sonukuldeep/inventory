import './Sidebar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGripVertical, faArrowRightFromBracket, faTriangleExclamation, faBottleDroplet } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'


const Sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <ul className="list-head" style={{ userSelect: 'none' }}>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faGripVertical}/><Link to="/">Dashboard</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faBook}/><Link to="/billing">Order Book</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faBottleDroplet}/><Link to="/products">Products</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faTriangleExclamation}/><Link to="/critical">Critical</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faSquareCaretDown}/><Link to="/customers">Customers</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faArrowRightFromBracket}/><Link to="/logout">Log out</Link></li>
                    {/* <li>Log out</li> */}
                </ul>
            </div>
        </>
    )
}

export default Sidebar