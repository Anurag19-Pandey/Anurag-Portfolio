import React from 'react'
import './ProjectCardStyle.css' ;
import {RiHtml5Fill,RiCss3Fill} from "react-icons/ri" ;
import {SiJavascript,SiReact,SiMongodb,SiExpress} from "react-icons/si" ;
import {FaNodeJs} from "react-icons/fa" ;
import {BiCodeAlt} from "react-icons/bi" ;
import {BsArrowRightCircle} from "react-icons/bs" ;

const ProjectCard = (props) => {
  return (
    <div className='mycard-container'>
      <div className='card-image-container'>
        <img className='card-image' src="https://images.unsplash.com/photo-1695805868055-636315fcd124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"/>
        <div className='image-background-change'></div>
      </div>
      <div className='card-content-container'>
        <h4 className='project-name'>Project Name {props.cardNo}</h4>
        <p className='project-description'>Here is a nice rainbow animation as a shadow for a div content. When you hover over it the div...</p>
        <p className='code-preview'>
          <span className='check-code'><BiCodeAlt className='code-icon'/> &nbsp;code</span>&nbsp;&nbsp;
          <span className='check-preview'>preview&nbsp;<BsArrowRightCircle className='preview-icon'/></span>
        </p>
    </div>
    </div>
  )
}

export default ProjectCard