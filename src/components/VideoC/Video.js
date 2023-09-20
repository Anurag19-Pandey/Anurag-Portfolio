import React from 'react'
import './VideoStyles.css' ;
import VideoSrc from '../../assets/videos/video-background.mp4' ;

const Video = () => {


  return (
    <div className='video-container'>
     <video className="video-design" controls >
        <source src={VideoSrc} type="video/mp4"/>
     </video>
    </div>  
  )
}

export default Video