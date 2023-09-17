import React from 'react'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import './ProjectPageStyle.css' ;
import Heading from '../../components/Heading/Heading';
import { Fade } from "react-awesome-reveal";

const ProjectPage = () => {
  return (
    <div className='project-container'>
        <Fade direction="top">
        <Heading heading="My Projects"/>
        </Fade>
        <ImageCarousel/>
    </div>
  )
}

export default ProjectPage