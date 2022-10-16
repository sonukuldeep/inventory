import './Navbar.css';
import React, {useContext } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLink, faBookmark } from '@fortawesome/free-solid-svg-icons'
import DataContext from '../Context/DataContext'

const Navbar = () => {
  const display = useContext(DataContext).trigger.navbar

  
  return (
    <>
      <div className="navbar" style={{'display': display ? "flex" : "none"}}>
        <ul className="list-head">
          <li>Shop<span> X</span> </li>
          <li>
            <div className="more">
                <div><Link to={"/"}><FontAwesomeIcon icon={faHouse}/> <span>Home</span></Link></div>
                <div><Link to={"/links"}><FontAwesomeIcon icon={faLink}/><span>Links</span></Link></div>
                <div><Link to={"/history"}><FontAwesomeIcon icon={faBookmark} /><span>History</span></Link></div>
            </div>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Navbar