import React from 'react'
import Navbar from './Navbar';
import landingpage from "../images/landingpage.png";

function Header() {
  return (
    <div id="header">
        <Navbar/>
        <div className="homepage">
            <div className="hometext">
                <h1>Simply explained with illustration</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi impedit quod vero cupiditate architecto illum modi magni iure quisquam.</p>
                <a href="#" className='btn-theme'>Learn More</a>
            </div>
            <div className="homeimg">
                <img src={landingpage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header;