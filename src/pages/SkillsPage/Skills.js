import React from 'react'
import "./Skills.css";
import {DiGit, DiMysql, DiJava , DiBootstrap , DiCss3 , DiMongodb, DiNpm , DiBitbucket , DiJavascript1 , DiNodejs, DiReact} from 'react-icons/di' ;
import {SiExpress , SiJsonwebtokens , SiSocketdotio} from 'react-icons/si' ;
import {MdHtml} from 'react-icons/md' ;
import {TbBrandVscode} from 'react-icons/tb' ;

const Skills = () => {

  return (
    <div className='skillOuterContainer'>
    <div className='skills-container'>
    <div className='skillHeadingAndCaptionOuterCont'>
     <div className='skillHeadingAndCaptionCont'>
      <h1 className="my-best-skill-heading">My Best Skills </h1>
      <p className='skillCaption'>Mastering the Craft</p>
    </div>
      </div>
      <div className='innerSkillsContainer'>
      <div className='newSkillContainer newSkill'>
        <p className='newLearningHeading'>New Learning</p>
        <div className='newSkillNameCont'>
            <p className='newSkillName'> <DiMysql className='skills-images' style={{ color : '#779BB3'}}/>&nbsp;MySql</p>
            <p className='newSkillName'><SiSocketdotio className='skills-images' />&nbsp; Socket.io</p>
        </div>
      </div>
      <div className='newSkillContainer' >
        <p className='newLearningHeading'>Frontend Technology</p>
        <div className='newSkillNameCont'>
           <p className='newSkillName'> 
           <MdHtml className='skills-images' style={{ color : 'orange'}}/>
           &nbsp; Html
            </p> 
            <p className='newSkillName'>
            <DiCss3 className='skills-images' style={{ color : '#299CF8' }}/>
            &nbsp;CSS
            </p>
            <p className='newSkillName'>
            <DiJavascript1 className='skills-images' style={{ color : '#F0DC55' }}/>
            &nbsp;Javascript
            </p>
            <p className='newSkillName'>
            <DiReact className='skills-images' style={{ color : '#08D9FF' }}/>
            &nbsp;React
            </p>
            <p className='newSkillName'>
            <DiBootstrap className='skills-images' style={{ color : 'purple'}}/>
            &nbsp;Bootstrap
            </p>
        </div>
      </div>
      <div className='newSkillContainer'>
        <p className='newLearningHeading'>Backend & Database Technology</p>
        <div className='newSkillNameCont'>
            <p className='newSkillName'>
            <DiJava className='skills-images' style={{ color : '#F89B24'}}/>
            &nbsp; Java
            </p>
            <p className='newSkillName'>
            <DiNodejs className='skills-images' style={{ color : '#87CF30'}}/>
            &nbsp; Node.js
            </p>
            <p className='newSkillName'>
            <SiExpress className='skills-images'/>
              &nbsp; Express.js
            </p>
            <p className='newSkillName'>
            <DiMongodb className='skills-images' style={{ color : '#47A340'}}/>
          &nbsp; MongoDb
            </p>
            <p className='newSkillName'>
            <DiMysql className='skills-images' style={{ color : '#779BB3'}}/>
            &nbsp; MySQL
            </p>
        </div>
      </div>
      <div className='newSkillContainer'>
        <p className='newLearningHeading'>Tools and Libraries</p>
        <div className='newSkillNameCont'>
            <p className='newSkillName'>
            <TbBrandVscode className='skills-images' style={{ color : '#0881CF'}}/>
            &nbsp; VS Code
            </p>
            <p className='newSkillName'>
            <DiGit className='skills-images' style={{ color : '#F0563A'}}/>
            &nbsp; Git
            </p>
            <p className='newSkillName'>
            <DiBitbucket className='skills-images' style={{ color : '#2D88FF'}}/>
              &nbsp; Bit Bucket
            </p>
            <p className='newSkillName' >
            <SiSocketdotio className='skills-images' style={{ color : '#47A340'}}/>
          &nbsp; Socket.io
            </p>
            <p className='newSkillName'>
            <DiNpm className='skills-images' style={{ color : '#CD3E3D'}}/>
            &nbsp; NPM
            </p>
            <p className='newSkillName'>
            <SiJsonwebtokens className='skills-images' style={{ color : '#8E28A3'}}/>
            &nbsp; JWT
            </p>
        </div>
      </div>
      </div>
    </div>
   </div>
  )
}

export default Skills
