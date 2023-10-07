import React from 'react';
import './BlogCardStyle.css';
import {AiOutlineRead , AiOutlineFieldTime} from "react-icons/ai" ;

const BlogCard = (props) => {
  return (
    <div className={`blog-card-container ${props.class}`}>
        <div className='blog-card-image-container'>
            <img className='blog-card-image' src={props.imagelink}/>
            <div className='blog-card-date-year'>
            <p className='blog-card-date'>{props.date}</p>
            </div>
        </div>
        <div className='blog-card-content'>
          <p className="blog-title">{props.title}</p>
          <div className='blog-read-time-container'>
            <a className='blog-read-link' href="https://medium.com/@anuragpandey192002/what-is-user-authentication-e8e7ac2d6865" target='_blank' ><AiOutlineRead className='blog-read-icon'/> &nbsp; Read... </a>
            <p className='blog-time-to-read'><AiOutlineFieldTime className='blog-read-time'/> &nbsp;{props.minread} min</p>
          </div>
        </div>
    </div>
  
  )
}

export default BlogCard