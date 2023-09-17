import React from 'react'
import './BlogStyle.css' ;
import BlogCard from '../../components/Blogs/BlogCard';
import Heading from '../../components/Heading/Heading';
const Blog = () => {
  return (
    <div className='blog-page-container'>
      <Heading heading="Blogs"/>
      <div className='blog-card'>
        <BlogCard bgUrl="https://miro.medium.com/v2/resize:fit:1400/0*O-clVZGF0-A1gyFz" title="What is an Event Loop in JavaScript ?" desc="JavaScript says I am a single-threaded non-blocking asynchronous concurrent language. Hmm. What does this mean? Let’s understand this in layman’s terms." blogLink="https://medium.com/@anuragpandey192002/what-is-an-event-loop-in-javascript-7355360d6037"/>
        <BlogCard bgUrl="https://miro.medium.com/v2/resize:fit:1100/0*EMopes6wb7pWVGqI" title="What is User Authentication and JSON Web Token?" desc="Authentication is verifying application users who they say they are. From an application point of view, all users seem identical and we don’t know who is using our application." blogLink="https://medium.com/@anuragpandey192002/what-is-user-authentication-e8e7ac2d6865"/>
      </div>
    </div>
  )
}

export default Blog