import React from 'react'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import './ProjectPageStyle.css' ;
import Heading from '../../components/Heading/Heading';
import { Fade } from "react-awesome-reveal";
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const ProjectPage = () => {
  return (
    <div className='project-container'>
      <h1 className='project-section-heading'>My Projects, </h1>
      <hr className='project-heading-horizontal-line'/>
      <h3 className='project-section-oneliner'>Turning Ideas Into Impact !</h3>
    <div className='project-card-container'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
    </div>
  )
}

export default ProjectPage