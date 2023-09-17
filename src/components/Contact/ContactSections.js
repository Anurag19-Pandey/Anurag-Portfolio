import React from 'react'
import  './ContactSectionStyle.css' ;
import {FaLinkedinIn , FaGithub} from 'react-icons/fa' ;

const ContactSections = () => {
  return (
    <div className='contact-container'>
      <div className='contact-left-right-container'>
        <div className='contact-left-section'>
            <h1 className='lets-connect'>Let's Connect !</h1>
            <p className='contact-desc'>Feel free to engage with me on LinkedIn. We can also work hand in hand on GitHub, pushing and pulling code to create something extraordinary.</p>
           <div className='contact-icons'>
            <a className="linkedin-link" href="https://www.linkedin.com/in/anuragpandey02" target="_blank">
            <div className='linkedin-contact-icon-container'>
             <FaLinkedinIn className='linkedin-icon'/>
            </div>
            </a>
            <a className="github-link" href="https://github.com/Anurag19-Pandey" target="_blank">
             <div className='github-contact-icon-container'>
                <FaGithub className='github-icon'/>
             </div>
             </a>
            </div>
        </div>
        <div className='contact-right-section'>
            <div className="username-container">
                <input className="username" type="text" placeholder="Name"/>
            </div>
            <div className="email-container">
                <input className="email" type='email' placeholder='Email Address'/>
             </div>
             <div className="query-container">
                <textarea className="query" placeholder="Write your query" cols={10} rows={10}/>
             </div>
             <div className='send-btn-container'>
             <button className='send-btn'>Send</button>
             </div>

        </div>    
      </div>
    </div>
  )
}

export default ContactSections