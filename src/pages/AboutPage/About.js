import React from 'react'
import Intro from '../../components/Intro/Intro'
import Video from '../../components/VideoC/Video'
import './AboutStyles.css' ;

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-left-section'>
            <Intro/>
        </div>
        <div className='about-right-section'>
            <Video/>
        </div>
    </div>
  )
}

export default About