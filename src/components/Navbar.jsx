import React from 'react'

function Navbar() {
  return (
    <div id="navbar">
        <nav>
            <div id="logo">Plasma</div>
            <ul id="hlinks">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#" className='btn-theme'>SignUp</a></li> 
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;