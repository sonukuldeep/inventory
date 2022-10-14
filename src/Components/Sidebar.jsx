import './Sidebar.css'
import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faFolderOpen, faGripVertical, faPerson, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
import DataContext from '../Context/DataContext'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const initialState = useContext(DataContext).initialState
    const setTrigger = useContext(DataContext).setTrigger


    const triggerBtn = (btn) => {
        setTrigger({ ...initialState, ...btn })
        // console.log(data)
    }

    return (
        <>
            <div className="sidebar">
                <ul className="list-head" style={{ userSelect: 'none' }}>
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/billing">Order Book</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/critical">Critical</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                    <li><Link to="/logout">Log out</Link></li>
                    {/* <li>Log out</li> */}
                </ul>
            </div>
            {/* <p style={{marginLeft:'200px'}}>hello</p> */}
        </>
    )
}

export default Sidebar