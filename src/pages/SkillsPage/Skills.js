import React from 'react'
import "./Skills.css";
import SkillCard from '../../components/Skill/SkillCard';
import Heading from '../../components/Heading/Heading';
import { Fade } from "react-awesome-reveal";

const Skills = () => {

  return (
    <div className='outer-skills-container'>
      <Fade direction="top">
        <Heading heading="What I Know ?"/>
      </Fade>
      <Fade direction="left">
    <div className='skills-container'>
        <SkillCard bgColor="orange" bgUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png?f=webp" skillPerc="90" skillName="HTML 5"/>
        <SkillCard bgColor="#2A9DF4" bgUrl="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" skillPerc="80" skillName="CSS"/>
        <SkillCard bgColor="#FCCB06" bgUrl="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2752148-2284965.png" skillPerc="80" skillName="Javascript"/>
        <SkillCard bgColor="black" bgUrl="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" skillPerc="80" skillName="React JS"/>
        <SkillCard bgColor="lightgreen" bgUrl="https://w7.pngwing.com/pngs/232/470/png-transparent-circle-js-node-node-js-programming-round-icon-popular-services-brands-vol-icon.png" skillPerc="70" skillName="Node JS"/>
        <SkillCard bgColor="darkgreen" bgUrl="https://www.svgrepo.com/show/331488/mongodb.svg" skillPerc="70" skillName="Mongo DB"/>
        <SkillCard bgColor="orange" bgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoqyEZ4W4BYQQA6xehm-qqVDKIlFUiukFOOZuy6_Rtes86Jpz2t0SwGtJi0hBD2_TNxU&usqp=CAU" skillPerc="70" skillName="Java"/>
        <SkillCard bgColor="#2A9DF4" bgUrl="https://res.cloudinary.com/teepublic/image/private/s--aDiI5IeA--/c_crop,x_10,y_10/c_fit,h_830/c_crop,g_north_west,h_1038,w_1038,x_-150,y_-104/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-261,y_-215/b_rgb:262c3a/c_limit,f_jpg,h_630,q_90,w_630/v1594833833/production/designs/12232409_0.jpg" skillPerc="70" skillName="C++"/>
    </div>
    </Fade>
    </div>
  )
}

export default Skills
