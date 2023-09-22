import React from 'react'
import "./Skills.css";

const Skills = () => {

  return (
    <div className='skills-container'>
      <div className='frontend-technologies'>
        <div className='frontend-heading'>
          <h2>Frontend Technologies & Framework</h2>
        </div>
        <div className='marquee-frontend-container'>
        <marquee className="skills-section-1" direction="right" scrollamount="5" >
        <img className='html' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"/>
        <img className='html' src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'/>
        <img className='html' src="https://www.code2inspire.com/icons/jsIcon.png"/>
        <img className='html' src='https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg'/>
      </marquee>
        </div>
      </div>
      <div className='backend-technologies'>
        <div className='marquee-backend-container'>
          <marquee className="skills-section-1" direction="left" scrollamount="5" >
            <img className='html' src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"/>
            <img className='html' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'/>
            <img className='html' src="https://geekflare.com/wp-content/uploads/2023/01/expressjs.png"/>
            <img className='html' src='https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png'/>
            <img className='html' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png'/>
          </marquee>
        </div>
       <div className='backend-heading'>
          <h2>Backend Technologies & Databases</h2>
        </div>
        </div>

      {/* <marquee className="skills-section-2" width="100%" direction="right" scrollamount="5" height="30%">
        <p>Example for HTML Marquee Tag...</p>
      </marquee>
      <marquee className="skills-section-3" width="100%" direction="right" scrollamount="5" height="30%">
        <p>Example for HTML Marquee Tag...</p>
      </marquee> */}
    </div>
  )
}

export default Skills
