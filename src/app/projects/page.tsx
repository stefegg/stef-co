"use client";
import ProjectPane from "../_components/ProjectPane";
import { projects } from "../_utils/constants";

const Projects = () => {
  return (
    <div className="px-4 md:px-16 pt-4">
      <div className="md:mt-10">
        {projects.map((project, idx) => (
          <>
            <ProjectPane project={project} key={idx} />
            <div className="mt-10"></div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
