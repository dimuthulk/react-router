import React from 'react'
import logo from '../assets/ecsc_logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <img src={logo} alt="ecsc_logo" width="150px"/>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
      <button onClick={()=> navigate('/about',{replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar