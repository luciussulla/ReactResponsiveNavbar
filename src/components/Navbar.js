import React, {useRef, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {links} from './data'

const Navbar = ({isMenuVisible, toggleMenu})=> {
  console.log("Menu toggle in vavbar is: "+isMenuVisible)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(()=> {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(isMenuVisible) {
      linksContainerRef.current.style.height = linksHeight + "px";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isMenuVisible])

  return (
  <nav>
    <div className="nav-center">
      <div className="nav-header">
        <p>This is logo</p>
        <button className="nav-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
      <div ref={linksContainerRef} className={`links-container ${isMenuVisible && 'show-container'}`}>
        <ul ref={linksRef} className="links">
          {/* <li><a href="#">Link one</a></li>
          <li><a href="#">Link two</a></li>
          <li><a href="#">Link three</a></li> */
          links.map(link=> {
              return (
                <li key={link.id}><a href="#">{link.text}</a></li>
              )
          })
          }
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