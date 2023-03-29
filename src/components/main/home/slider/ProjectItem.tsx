import React, { createContext, useState } from "react";
import { IProjects, projects } from "../../../../models/IProject";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiFillGithub } from "react-icons/ai";
import "./Slider.scss";
import { motion } from "framer-motion";

export const ProjectItem = () => {
  const ProjectContext = createContext(projects);

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
            <img
              className="project__imgcontainer__img"
              src={project.img}
              alt={project.title}
            />
          </div>
          <div>
            <p className="project__description">{project.description}</p>
            <a href={project.href} target="_blank" className="project__link">
              <AiFillGithub></AiFillGithub>
            </a>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <Carousel showArrows={true}>{projectHtml}</Carousel>
    </>
  );
};
