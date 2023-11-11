import React from 'react'
import "./HomePageBannerStyle.css";
import Typewriter from 'typewriter-effect';
import { Fade } from "react-awesome-reveal";
import Navbar from '../Navbar/Navbar';
import {FaLocationDot , FaLinkedinIn} from 'react-icons/fa6' ;
import {GiRank3} from 'react-icons/gi' ;
import {FiLinkedin} from 'react-icons/fi' ;
import {AiFillGithub} from 'react-icons/ai' ;
import CountUp from 'react-countup';

const HomePageBanner = (props) => {

  const {loading} = props ;

  return (
    <div className='home-page-banner-container'>
      <Navbar/>
      <div className='homeSectionContainer'>
      <div className='leftSectionHomePageContainer'>
        <h1 className='hi-container-left-section'>Hi, I am</h1>
        <h1 className='name-left-section'>Anurag Pandey</h1>
        <div className='SocialHomeBtnContainer'> 
        <button className='linkedinSocialBtn'><FaLinkedinIn/>&nbsp;Linkedin</button>
        <button className='githubSocialBtn'><AiFillGithub/>&nbsp;Github</button>
        </div>
      </div>
      <div className='rightSectionHomePageContainer'>
       <div className='matrixContainer'>
       <div className='developerRecord'>
        <h1 className='developerRank'><GiRank3 className='rankIcon'/></h1>
        <p className='developerHomeTag'>Software Developer</p>
        </div>
        <div className='projectRecord'>
          <h1 className='liveProjectCount'>{ loading ? 0 : <CountUp end={9} start={1} duration={10}/>}+</h1>
          <p className='projectHomeTag'>Live Projects</p>
        </div>
        <div className='hackathonRecord'>
        <h1 className='hackathonCount'>{loading ? 0 : <CountUp end={12} start={1} duration={10}/>}</h1>
        <p className='hackathonHomeTag'>Hackathons</p>
        </div>
        <div className='locationRecord'>
          <h1 className='locationTo'><FaLocationDot className='locationIcon'/></h1>
        <p className='locationHomeTag'>India</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomePageBanner 