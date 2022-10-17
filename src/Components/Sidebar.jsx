import './Sidebar.css'
import React, {useRef, useEffect,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGripVertical, faArrowRightFromBracket, faTriangleExclamation, faBottleDroplet } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import DataContext from '../Context/DataContext'


const Sidebar = () => {
  const navigate = useNavigate()
  const {display, setDisplay} = useContext(DataContext)
  const pathname = window.location.pathname
  const sidebarRef = useRef()
  const navIndexing = {"/": 0, "/billing" :1, "/products" : 2, "/critical": 3, "/customers": 4 }
  const activeIndex = navIndexing[pathname]

  useEffect(()=>{
    sidebarRef.current?.childNodes.forEach((node)=>{
      node.classList.remove("active")
    })
    // console.log(activeIndex)
    sidebarRef.current?.childNodes[activeIndex]?.classList.toggle("active")
  },[activeIndex])

  const redirect = () =>{
    setDisplay(false)
    navigate("/logout")
    setTimeout(()=>{
        navigate("/login")
    },[2000])

  }
    
    return (
        <>
            {display && <div className="sidebar" >
                <ul ref={sidebarRef} className="list-head">
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faGripVertical}/><Link to="/">Dashboard</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faBook}/><Link to="/billing">Order Book</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faBottleDroplet}/><Link to="/products">Products</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faTriangleExclamation}/><Link to="/critical">Critical</Link></li>
                    <li><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faSquareCaretDown}/><Link to="/customers">Customers</Link></li>
                    <li className="custom-btn" onClick={redirect}><FontAwesomeIcon style={{paddingLeft: '10px', 'alignSelf': 'center'}} icon={faArrowRightFromBracket}/><span>Log out</span></li>
                </ul>
            </div>}
        </>
    )
}

export default Sidebar