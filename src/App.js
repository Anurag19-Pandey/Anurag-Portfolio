import {useState , useEffect} from 'react' ;
import './App.css';
import Blog from './pages/BlogPage/Blog';
import Contact from './pages/ContactPage/Contact';
import Home from './pages/HomePage/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Skills from './pages/SkillsPage/Skills';
import WorkedWith from './components/WorkedWith/WorkedWith';
import About from './pages/AboutPage/About';


function App() {

  const [Loading , setLoading] = useState(true) ;

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false) ;
    } , 4000) ;

  },[]) ;

  return (

    <div>
      {Loading ? 
         <div className="loading-container">
            <div className="loading-image"></div>
            <h1 className='Loading-portfolio-content'>Loading Portfolio...</h1>
         </div>: 
       <div> 
           <Home/>
           <WorkedWith/>
           <About/>
           {/* <Skills/> */}
           {/* <ProjectPage/> */}
           {/* <Blog/> */}
           {/* <Contact/> */}
        </div>
      } 
    
    </div>
  );
}

export default App;
