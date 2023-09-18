import React from 'react'
import './IntroStyles.css' ;

const Intro = () => {
  return (
    <div className='intro-container'>
        <h1 className='hello-heading'>Hello Everyone, </h1>
        <h2 className='looking-heading'>Looking for a story!</h2>
        <hr className="underline-over-text"/>
        <p className='intro-text'>I am Anurag Pandey. I live in Noida, Uttar Pradesh. I have done my primary and secondary education from
          New Delhi.I am currently studying in Bharati Vidyapeeth's College of Engineering pursuing Computer Science and Engineering.
        </p>
        <button className='intro-contact-btn'>Contact</button>
        <button className='intro-resume-btn'>Resume</button>
    </div>
  )
}

export default Intro