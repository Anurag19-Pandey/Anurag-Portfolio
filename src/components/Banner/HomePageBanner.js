import React from 'react'
import "./HomePageBannerStyle.css";
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import Navbar from '../Navbar/Navbar';

const HomePageBanner = () => {
  
  let desc = ["Web Developer.", "Quick Learner", "Enthusiastic Coder"] ;

  return (
    <div className='home-page-banner-container'>
      <Navbar/>
      <div className='section-container'>
        <div className='right-side-inset-container'>
          <h2 className='hi-container-left-section'>Hi, I am </h2>
          <h1 className='name-left-section'>Anurag Pandey</h1>
          <div className='outer-heading'>
          <h1>
            <div className='inner-heading'>
            <span>
            Full-Stack Developer <br/> 
            Front-End Developer <br/>
            Back-End Developer <br/>
            </span>
            </div>
          </h1>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default HomePageBanner 