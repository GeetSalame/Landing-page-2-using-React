import React from 'react'
import ServicesBox from './ServicesBox';
import entertainment from "../images/entertainment.png";
import management from "../images/management.png";
import marketing from "../images/marketing.png";
import references from "../images/references.png";

function Services() {
  return (
    <div id="services">
        <div className="services-boxes">
            <ServicesBox image={entertainment} heading="Entertainment"/>
            <ServicesBox image={marketing} heading="Marketing"/>
            <ServicesBox image={management} heading="Management"/>
            <ServicesBox image={references} heading="References"/>
        </div>
        <div className="services-text">
            <h1>The quickest way to create modern presentation</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere amet nulla molestias! Cumque, quia perspiciatis.</p>
            <a href="" className="btn-theme">Explore More</a>
        </div>
    </div>
  )
}

export default Services;