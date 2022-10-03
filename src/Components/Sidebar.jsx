import './Sidebar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faFolderOpen, faGripVertical, faPerson, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'



const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <ul className="list-head">
                <li>Dashboard</li>
                <li>Products</li>
                <li>Critical</li>
                <li>Customers</li>
                <li>Log out</li>
            </ul>
        </div>
        <p style={{marginLeft:'200px'}}>hello</p>
        </>
    )
}

export default Sidebar