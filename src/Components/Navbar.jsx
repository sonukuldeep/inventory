import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLink, faBookmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
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