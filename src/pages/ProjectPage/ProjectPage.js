import React from 'react'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import './ProjectPageStyle.css' ;
import Heading from '../../components/Heading/Heading';
import { Fade } from "react-awesome-reveal";
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import {BiRightArrowAlt , BiLeftArrowAlt} from "react-icons/bi" ;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
      <div className='projectSectionInnerContainer'>
    <div className='project-section'>
       <h1 className='project-section-heading'>My Projects</h1>
       <h3 className='project-section-oneliner'>Turning Ideas Into Reality</h3>
    </div>
    <Carousel className='desktopCarousel' showArrows={true} showThumbs={false} >
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                    <ProjectCard cardNo={"2"}/>
                    <ProjectCard cardNo={"3"}/>
                    {/* <img src="https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                    <ProjectCard cardNo={"2"}/>
                    <ProjectCard cardNo={"3"}/>
                    {/* <img src="https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                    <ProjectCard cardNo={"2"}/>
                    <ProjectCard cardNo={"3"}/>
                    {/* <img src="https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
                </div>
    </Carousel>
    <Carousel className='mobileCarousel' showArrows={true} showThumbs={false} >
    <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
                <div className='collection'>
                    <ProjectCard cardNo={"1"}/>
                   
                </div>
    </Carousel>
    </div>
    </div>
  )
}

export default ProjectPage