import React from 'react'

function ServicesBox(props) {
  return (
    <div id="sbox">
        <img src={props.image} alt="sboximg" />
        <h2>{props.heading}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, nesciunt?</p>
    </div>
  )
}

export default ServicesBox;