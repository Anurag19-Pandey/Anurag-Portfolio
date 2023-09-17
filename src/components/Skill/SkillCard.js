import React from 'react'
import "./SkillCardStyle.css";

const SkillCard = ({bgColor , bgUrl, skillPerc,skillName}) => {
  return (
<div className="card-container" style={{ borderBottom:`4px solid ${bgColor}`}}>
        <div className='card-image-container'>
           <div className='skill-image-back' style={{backgroundImage:`linear-gradient(to bottom , white, ${bgColor})`}}>
           </div>
           <div className='skill-image' alt="Skill Image" style={{backgroundImage:`url(${bgUrl})`}}>
           </div>
           <div className="card-content-container">
           <h4 className='skill-name'>{skillName}</h4>
            <small className='skill-percentage'>{skillPerc}%</small>
            <progress className="skill-progress-bar" value={skillPerc} max="100"></progress>
           </div>
        </div>
    </div>
  )
}

export default SkillCard