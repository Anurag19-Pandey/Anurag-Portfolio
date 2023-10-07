import React from 'react'
import './BlogStyle.css' ;
import BlogCard from '../../components/Blogs/BlogCard';
import Heading from '../../components/Heading/Heading';
import {BsMedium} from 'react-icons/bs' ;

const Blog = () => {
  return (
    <div className={`blog-page-container`}>
       <div className='blog-content-container'>
          <h1 className='blog-intro-heading'>Welcome to the treasure !</h1>
          <p className='blog-intro-description'>Each blog post is a key to unlocking new realms of knowledge. Let these words be your guide, illuminating the path to mastery in the intricate world of technology.</p>
          <button className='medium-btn'>
            <BsMedium className='blog-page-medium-icon'/>&nbsp; Medium 
          </button>
       </div>
       <div className='blog-container'> 
          <BlogCard class='blog1' title="What is an Event Loop in JavaScript ?" date="31 Aug 2022" imagelink="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" minread="3"/>
          <BlogCard class='blog2' title="What is User Authentication and JSON Web Token?" date="25 Mar 2023" imagelink="https://miro.medium.com/v2/resize:fit:1100/0*EMopes6wb7pWVGqI" minread="4"/>
       </div>
    </div>
  )
}

export default Blog