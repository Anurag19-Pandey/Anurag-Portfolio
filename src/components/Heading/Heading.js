import React from 'react'
import "./HeadingStyle.css";

const Heading = (props) => {
  return (
    <div className='heading-container'>
        <h2 className="heading">{props.heading}</h2>
    </div>
  )
}

export default Heading