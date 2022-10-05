import './Sidebar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faFolderOpen, faGripVertical, faPerson, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'



const Sidebar = ({setTrigger,trigger,initialState}) => {
    const triggerBtn = (btn) => {
        setTrigger({...initialState, ...btn})
        // console.log(btn)
    }

    return (
        <>
        <div className="sidebar">
            <ul className="list-head" style={{userSelect: 'none'}}>
                <li onClick={()=>{triggerBtn({'dashboard' :true})}}>Dashboard</li>
                <li onClick={()=>{triggerBtn({'products' :true})}}>Products</li>
                <li onClick={()=>{triggerBtn({'critical' :true})}}>Critical</li>
                <li onClick={()=>{triggerBtn({'customers' :true})}}>Customers</li>
                <li>Log out</li>
            </ul>
        </div>
        {/* <p style={{marginLeft:'200px'}}>hello</p> */}
        </>
    )
}

export default Sidebar