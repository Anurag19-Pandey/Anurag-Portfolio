import React,{useEffect} from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import './ImageCarouselStyle.css' ;
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const ImageCarousel = () => {

    let box ;

    useEffect(() =>{
         box = document.querySelector('.product-container') ;
    },[])

    const Previous = () =>{
        console.log(box) ;  
        console.log(box.clientWidth) ;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width ;
        console.log(width) ;
    }

    const Next = () =>{
        console.log("Called") ;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width ;
        console.log(width) ;
    }



  return (
    <Fade direction="left">
    <div className='product-carousel'>
        <button className="pre-btn" onClick={Previous}><p className='icon'><AiOutlineArrowLeft/></p></button>
        <button className='next-btn' onClick={Next}><p className='icon'><AiOutlineArrowRight/></p></button>

        <div className="product-container">
             <ProjectCard cardno="1"/>
             <ProjectCard cardno="2"/>
             <ProjectCard cardno="3"/> 
             <ProjectCard cardno="4"/> 
             <ProjectCard cardno="5"/> 
             <ProjectCard cardno="6"/> 
             <ProjectCard cardno="7"/> 
             <ProjectCard cardno="8"/> 
             <ProjectCard cardno="9"/> 
             <ProjectCard cardno="10"/> 
             <ProjectCard cardno="11"/> 
             <ProjectCard cardno="12"/>
             <ProjectCard cardno="13"/>
             <ProjectCard cardno="14"/>
             <ProjectCard cardno="15"/> 
             <ProjectCard cardno="16"/> 
             <ProjectCard cardno="17"/> 
             <ProjectCard cardno="18"/> 
             <ProjectCard cardno="19"/> 
             <ProjectCard cardno="20"/> 
             <ProjectCard cardno="21"/> 
             <ProjectCard cardno="22"/> 
             <ProjectCard cardno="23"/> 
             <ProjectCard cardno="24"/>
        </div>
    </div>
    </Fade>
  )
}

export default ImageCarousel