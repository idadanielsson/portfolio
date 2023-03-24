import React, { createContext, useState } from "react";
import { IProjects, projects } from "../../../../models/IProject";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Slider.scss";
import { motion } from "framer-motion";

export const ProjectItem = () => {
  const ProjectContext = createContext(projects);
  const [slider, setSlider] = useState<IProjects>(projects);

  const projectHtml = projects.projects.map((project) => {
    return (
      <>
        <div key={project.id} className="project">
          <div className="headingcontainer">
            <div className="vl"></div>
            <h4 className="headingcontainer__heading">
              Portfolio - {project.title}
            </h4>
          </div>

          <div className="project__imgcontainer">
            {/* <motion.img
              className="project__imgcontainer__img"
              src={project.imgDesktop}
              alt={project.title}
            /> */}
            <motion.img
              className="project__imgcontainer__img"
              src={project.imgMobile}
              alt={project.title}
            />
          </div>
          <div>
            <p className="project__description">{project.description}</p>
            <button className="project__btn">Read more</button>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <Carousel showArrows={true}>{projectHtml}</Carousel>
      <div className="wave-bottom"></div>
    </>
  );
};
