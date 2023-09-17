import React from 'react';
import './BlogCardStyle.css';
import {BsMedium} from "react-icons/bs" ;

const BlogCard = ({bgUrl,title,desc,blogLink}) => {
  return (
    <div className="blog-card-container">
        <div className='blog-card-image' style={{backgroundImage:`url(${bgUrl})`}}></div>
        <div className="blog-card-title-container">
           <h3 className="blog-card-title">{title}</h3>
        </div>
        <div className='blog-card-content'>
           <p className='blog-card-desc'>{desc}...</p>
           <a href={blogLink} target='_blank' className='link-to-blog'>
           <div className="medium-icon">
           <BsMedium className="blog-medium-icon"/>
           </div>
           <small className='read-more-text'>Read More</small>
           </a>
        </div>
    </div>
  
  )
}

export default BlogCard