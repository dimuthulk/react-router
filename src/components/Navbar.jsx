import React from 'react'
import logo from '../assets/ecsc_logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="ecsc_logo" width="150px"/>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Products</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar