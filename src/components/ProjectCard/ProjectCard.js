import React from 'react'
import './ProjectCardStyle.css' ;
import {RiHtml5Fill,RiCss3Fill} from "react-icons/ri" ;
import {SiJavascript,SiReact,SiMongodb,SiExpress} from "react-icons/si" ;
import {FaNodeJs} from "react-icons/fa" ;

const ProjectCard = (props) => {
  return (
    <div className='mycard'>
        <div className='project-card-image'>
        </div>
        <div className='project-card-content'>
            <h3 className="project-name">My Card No. {props.cardno}</h3>
            <p className='project-desc'>Note that the development build is not optimized.To create a production build, use npm run build.</p>
            <div className='project-skills-used'>
            <RiHtml5Fill className='html'/>
            <RiCss3Fill className='css'/>
            <SiJavascript className='javascript'/>
            <SiMongodb className='mongodb'/>
            <SiExpress className='express'/>
            <SiReact className='react'/>
            <FaNodeJs className='nodejs'/>
            </div>
        </div>
        
    </div>
  )
}

export default ProjectCard