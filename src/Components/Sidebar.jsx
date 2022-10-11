import './Sidebar.css'
import React ,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge, faFolderOpen, faGripVertical, faPerson, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
import DataContext from '../Context/DataContext'


const Sidebar = () => {
    const initialState = useContext(DataContext).initialState
    const setTrigger = useContext(DataContext).setTrigger
    

    const triggerBtn = (btn) => {
        setTrigger({...initialState, ...btn})
        // console.log(data)
    }

    return (
        <>
        <div className="sidebar">
            <ul className="list-head" style={{userSelect: 'none'}}>
                <li onClick={()=>{triggerBtn({'dashboard' :true})}}>Dashboard</li>
                <li onClick={()=>{triggerBtn({'orderBook' :true})}}>Order Book</li>
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