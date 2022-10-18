import './Navbar.css';
import React, {useRef, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLink, faBookmark } from '@fortawesome/free-solid-svg-icons'
import DataContext from '../Context/DataContext'

const Navbar = () => {
  const {display} = useContext(DataContext)
  const pathname = window.location.pathname
  const navRef = useRef()
  const navIndexing = {"/sales": 0, "/links" :1, "/history" : 2 }
  const activeIndex = navIndexing[pathname]

  useEffect(()=>{
    navRef.current?.childNodes.forEach((node)=>{
      node.classList.remove("active")
    })
    navRef.current?.childNodes[activeIndex]?.classList.toggle("active")
  },[activeIndex])

  return (
    <>
      {display && <div className="navbar">
        <ul className="list-head">
          <li>Shop<span> X</span> </li>
          <li>
            <div ref={navRef} className="more">
                <div><Link to={"/sales"}><FontAwesomeIcon icon={faHouse}/> <span>Sales</span></Link></div>
                <div><Link to={"/links"}><FontAwesomeIcon icon={faLink}/><span>Links</span></Link></div>
                <div><Link to={"/history"}><FontAwesomeIcon icon={faBookmark} /><span>History</span></Link></div>
            </div>
          </li>
        </ul>
      </div>}
    </>
  )
}

export default Navbar