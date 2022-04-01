import React from 'react';
import management from "../images/management.png";
import microsoft from "../images/microsoft.png";
import google from "../images/google.png";
import infosys from "../images/infosys.png";
import uber from "../images/uber.png";
import visa from "../images/visa.png";

function Projects() {
  return (
    <div id="projects">
        <div id="head">
            <div id="left">
                <h2><span>"</span>Make more time for the work that matters the most.<span>"</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veritatis.</p>
            </div>
            <div id="right">
                <img src={management} alt="management" />
            </div>
        </div>
        <div id="bottom">
            <img src={microsoft} alt="" />
            <img src={google} alt="" />
            <img src={uber} alt="" />
            <img src={infosys} alt="" />
            <img src={visa} alt="" />
        </div>
    </div>
  )
}

export default Projects;