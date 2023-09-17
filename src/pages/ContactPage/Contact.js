import React from 'react'
import './ContactStyle.css';
import Heading from '../../components/Heading/Heading';
import ContactSections from '../../components/Contact/ContactSections';

const Contact = () => {
  return (
    <div className='contact-page-container'>
        <Heading heading="Contact"/>
        <div className='contact-section'>
            <ContactSections/>
        </div>
    </div>
  )
}

export default Contact