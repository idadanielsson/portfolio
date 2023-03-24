import { IProjects, projects } from "../../../../models/IProject";
import { createContext, useState } from "react";
import { ProjectItem } from "./ProjectItem";

export const ProjectContext = createContext(projects);

export const ShowProjects = () => {
  const [myProjects, setMyProjects] = useState<IProjects>(projects);

  return (
    <>
      <ProjectContext.Provider value={myProjects}>
        <ProjectItem />
      </ProjectContext.Provider>
    </>
  );
};
