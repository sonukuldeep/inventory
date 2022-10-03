import './Navbar.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faLink, faBook } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="list-head">
          <li>Shop <span>X</span> </li>
          <li>
            <div className="more">
                <div>Home</div>
                <div>Links</div>
                <div>History</div>
            </div>
          </li>
          <li><div className="search">
            <input type="text" placeholder='search' />
            <button type='button' className='btn btn-outline-primary'>Search</button>
          </div></li>
        </ul>
      </div>

    </>
  )
}

export default Navbar