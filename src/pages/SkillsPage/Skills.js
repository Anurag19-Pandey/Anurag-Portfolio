import React from 'react'
import "./Skills.css";
import {DiGit, DiMysql, DiJava , DiBootstrap , DiCss3 , DiMongodb, DiNpm , DiBitbucket , DiJavascript1 , DiNodejs, DiReact} from 'react-icons/di' ;
import {SiExpress , SiJsonwebtokens , SiSocketdotio} from 'react-icons/si' ;
import {MdHtml} from 'react-icons/md' ;
import {TbBrandVscode} from 'react-icons/tb' ;

const Skills = () => {

  return (
    <div className='skills-container'>
      <h1 className="my-best-skill-heading">My Best Skills </h1>
      <div className='frontend-technologies'>
        <div className='logos'>
          <div className='logos-slide'>
            <MdHtml className='skills-images' style={{ color : 'orange'}}/>
            <DiCss3 className='skills-images' style={{ color : '#299CF8' }}/>
            <DiJavascript1 className='skills-images' style={{ color : '#F0DC55' }}/>
            <DiReact className='skills-images' style={{ color : '#08D9FF' }}/>
            <DiBootstrap className='skills-images' style={{ color : 'purple'}}/>
            <MdHtml className='skills-images' style={{ color : 'orange'}}/>
            <DiCss3 className='skills-images' style={{ color : '#299CF8' }}/>
            <DiJavascript1 className='skills-images' style={{ color : '#F0DC55' }}/>
            <DiReact className='skills-images' style={{ color : '#08D9FF' }}/>
            <DiBootstrap className='skills-images' style={{ color : 'purple'}}/>
          </div>
        </div>
      </div>
      <div className='backend-technologies'>
      <div className='logos'>
          <div className='logos-slide-2'>
            <DiJava className='skills-images' style={{ color : '#F89B24'}}/>
            <DiNodejs className='skills-images' style={{ color : '#87CF30'}}/>
            <SiExpress className='skills-images'/>
            <DiMongodb className='skills-images' style={{ color : '#47A340'}}/>
            <DiMysql className='skills-images' style={{ color : '#779BB3'}}/>
            <DiJava className='skills-images' style={{ color : '#F89B24'}}/>
            <DiNodejs className='skills-images' style={{ color : '#87CF30'}}/>
            <SiExpress className='skills-images'/>
            <DiMongodb className='skills-images' style={{ color : '#47A340'}}/>
            <DiMysql className='skills-images' style={{ color : '#779BB3'}}/>
          </div>
        </div>
      </div>
      <div className='other-skills'>
      <div className='logos'>
          <div className='logos-slide'>
            <TbBrandVscode className='skills-images' style={{ color : '#0881CF'}}/>
            <DiGit className='skills-images' style={{ color : '#F0563A'}}/>
            <DiBitbucket className='skills-images' style={{ color : '#2D88FF'}}/>
            <SiSocketdotio className='skills-images' />
            <DiNpm className='skills-images' style={{ color : '#CD3E3D'}}/>
            <SiJsonwebtokens className='skills-images' style={{ color : '#8E28A3'}}/>
            <TbBrandVscode className='skills-images' style={{ color : '#0881CF'}}/>
            <DiGit className='skills-images' style={{ color : '#F0563A'}}/>
            <DiBitbucket className='skills-images' style={{ color : '#2D88FF'}}/>
            <SiSocketdotio className='skills-images' />
            <DiNpm className='skills-images' style={{ color : '#CD3E3D'}}/>
            <SiJsonwebtokens className='skills-images' style={{ color : '#8E28A3'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
