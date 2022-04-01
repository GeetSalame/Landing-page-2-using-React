import React from 'react'

function Navbar() {
  return (
    <div id="navbar">
        <nav>
            <div id="logo">Plasma</div>
            <ul id="hlinks">
                <li><a href="#header">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#connect">Contact</a></li>
                <li><a href="#" className='btn-theme'>SignUp</a></li> 
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;