import React from 'react'
import './IntroStyles.css' ;
import {BsFileText} from 'react-icons/bs' ;

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='IntroHeading'>
        <h1 className='hello-heading'>Hello Everyone, </h1>
        <h2 className='looking-heading'>Looking for a story!</h2>
      </div>
       <div className='introTextInIntro'>
        <p className='intro-text'>I am Anurag Pandey. I live in Noida, Uttar Pradesh. I have done my primary and secondary education from
          New Delhi.I am currently studying in Bharati Vidyapeeth's College of Engineering pursuing Computer Science and Engineering.
        </p>
       </div>
        <div className='introBtnContainer'> 
        <button className='intro-contact-btn'>Contact</button>
        <button className='intro-resume-btn'><BsFileText/>&nbsp; View Resume</button>
        </div>
    </div>
  )
}

export default Intro