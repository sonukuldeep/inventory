import './Navbar.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLink, faBookmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="list-head">
          <li>Shop <span>X</span> </li>
          <li>
            <div className="more">
                <div><FontAwesomeIcon icon={faHouse}/> <span className='px-1'>Home</span></div>
                <div><FontAwesomeIcon icon={faLink}/> <span className='px-1'>Links</span></div>
                <div><FontAwesomeIcon icon={faBookmark} /> <span className='px-1'>History</span></div>
            </div>
          </li>
          <li><div className="search">
            <input type="text" placeholder='search' />
            <button type='button' className='btn btn-primary'>Search</button>
          </div></li>
        </ul>
      </div>

    </>
  )
}

export default Navbar