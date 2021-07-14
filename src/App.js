import React from 'react'
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'


function App() {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu  = ()=> {
    console.log(`menu toggle in APP is ${isMenuVisible}`)
    setMenuVisible(prevState => !prevState)
  }

  return (
    <div className="App">
      <Navbar isMenuVisible={isMenuVisible} toggleMenu={toggleMenu}/>
    </div>
  );
}

export default App;
