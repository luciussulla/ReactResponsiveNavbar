import React from 'react'
import {FaBars} from 'react-icons/fa'

const Navbar = ({isMenuVisible, toggleMenu})=> {
  console.log("Menu toggle in vavbar is: "+isMenuVisible)
  return (
  <nav>
    <div className="nav-center">
      <div className="nav-header">
        <p>This is logo</p>
        <button className="nav-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
      <div className={`links-container ${isMenuVisible && 'show-container'}`}>
        <ul className="links">
          <li><a href="#">Link one</a></li>
          <li><a href="#">Link two</a></li>
          <li><a href="#">Link three</a></li>
        </ul>
      </div>
      <ul className="social-icons">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
      </div>
  </nav>
  )
}

export default Navbar 