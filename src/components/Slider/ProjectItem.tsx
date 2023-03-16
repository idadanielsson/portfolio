import React, { createContext, useState } from 'react';
import { IProjects, projects } from '../../models/IProject';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import '../Slider/Slider.scss';
import { motion, useScroll } from 'framer-motion';


export const ProjectItem = () => {
  const ProjectContext = createContext(projects)
  const [slider, setSlider] = useState<IProjects>(projects);
  

    const handleClick = () => {
      

      };


  

  const projectHtml =  projects.projects.map((project) => {
    return(
  
        <div key={project.id} className='project'>
          <h4 className='project__title'>{project.title}</h4>
          <div className='project__imgcontainer'>
            <motion.img animate={{ x: 50 }} transition={{ ease: "easeOut", duration: 0.7 }} initial="hidden" className='project__imgcontainer__img' src={project.imgDesktop} alt={project.title} />
            <motion.img animate={{ x: -50 }} transition={{ ease: "easeOut", duration: 0.7 }}initial="hidden" className='project__imgcontainer__img' src={project.imgMobile} alt={project.title} />
            </div>
          <div>
          <p className='project__description'>{project.description}</p>
          <button className='project__btn'>Read more</button>
        </div>
      
      
      </div>
     
    )
  })
    return (
      <>
      <Carousel showArrows={true} >
        {projectHtml}
        </Carousel>
      </>
    );
  }
  

