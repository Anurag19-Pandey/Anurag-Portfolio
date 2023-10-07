import React from 'react'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import './ProjectPageStyle.css' ;
import Heading from '../../components/Heading/Heading';
import { Fade } from "react-awesome-reveal";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import {BiRightArrowAlt , BiLeftArrowAlt} from "react-icons/bi" ;

const ProjectPage = () => {

  const moveLeftSide = () =>{
    let box = document.querySelector(".project-card-container") ;
    let width = box.clientWidth ;
    box.scrollLeft = box.scrollLeft - 380; 
  }

  const moveRightSide = () =>{ 
    let box = document.querySelector(".project-card-container") ;
    let width = box.clientWidth ;
    box.scrollLeft = box.scrollLeft + 380; 
  }

  return (
    <div className='project-container'>
      <div className='project-section'>
       <h1 className='project-section-heading'>My Projects, </h1>
       <h3 className='project-section-oneliner'>Turning Ideas Into Impact !</h3>
      </div>
    <div className='project-card-container'>
      <ProjectCard cardNo="1"/>
      <ProjectCard cardNo="2"/>
      <ProjectCard cardNo="3"/>
      <ProjectCard cardNo="4"/>
      <ProjectCard cardNo="5"/>
      <ProjectCard cardNo="6"/>
      <ProjectCard cardNo="7"/>
      <ProjectCard cardNo="8"/>
      <ProjectCard cardNo="9"/>
    </div>
    <div className='slider-arrow-container'>
        <BiLeftArrowAlt className='left-side-btn' onClick={()=> moveLeftSide()}/>
        <BiRightArrowAlt className='right-side-btn' onClick={() => moveRightSide()}/>
    </div>
    </div>
  )
}

export default ProjectPage