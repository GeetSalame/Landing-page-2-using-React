import React from 'react'
import fb from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
function Connect() {
    return (
        <div id="connect">
            <h2>Connect</h2>
            <div className="socialmedia">
                <img src={fb} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    )
}

export default Connect;