import React,{useState , useEffect} from 'react'
import "./NavbarStyle.css" ;
import {HiDownload} from "react-icons/hi";
import {CgMenu,CgClose} from "react-icons/cg";
import {AiOutlineClose} from 'react-icons/ai' ;

const Navbar = () => {

    const [menuIcon,setMenuIcon] = useState("block") ;
    const [closeIcon,setCloseIcon] = useState("none") ;
    const [menu,setMenu] = useState("none") ;

    const handleClose = ()=>{
        setMenuIcon("none") ;
        setCloseIcon("block") ;
        setMenu("flex") ;
        console.log("handleClose") ;
    }

    const handleMenu = ()=>{
        setMenuIcon("block") ;
        setCloseIcon("none") ;
        setMenu("none") ;
        console.log("handleMenu") ;

    }

  return (
    <>
    
    <div className='navbar-container'>
        <div className='navbar-name-container'>
            <div className='image-round-circle'>
            <div className='image-container'></div>
            </div>
            <div className='navbar-name'>
            <p className='portfolio-name'>Anurag.</p>
            </div>
        </div>
        <div className='navbar-menu-container'>
            <div className='menu'>
                <p className='menu-name'>Skills</p>
            </div>
            <div className='menu'>
                <p className='menu-name'>Projects</p>
            </div>
            <div className='menu'>
                <p className='menu-name'>Blogs</p>
            </div>
            <div className='menu'>
                <p className='menu-name'>Contact</p>
            </div>
            <div>   
            </div>
        </div>
        <div className='navbar-resume-container'>
            <div className="resume-btn-container">
                <div className='download-icon-container'>
                    <HiDownload className='download-icon'/>
                </div>
                <div className='resume-title-container'>
                  <p className='resume-btn'>Resume</p>
                </div>
            </div>
        </div>
        <div className='menu-icon-container'>
            <CgMenu className='menu-icon' onClick={handleClose} style={{display:menuIcon}}/>
            
        </div>
    </div>
    <div className='navbar-menu-container2' style={{display:menu}}>
    <div className='menu2 closeBtn'>
    <AiOutlineClose className="close-icon" onClick={handleMenu} style={{color : 'white'}}/>
    </div>
            <div className='menu2'>
                <p className='menu-name2'>Skills</p>
            </div>
            <div className='menu2'>
                <p className='menu-name2'>Projects</p>
            </div>
            <div className='menu2'>
                <p className='menu-name2'>Blogs</p>
            </div>
            <div className='menu2'>
                <p className='menu-name2'>Contact</p>
            </div>
            <div>   
            </div>
        </div>
    </>
  )
}

export default Navbar