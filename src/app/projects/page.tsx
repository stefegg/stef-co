"use client";
import ProjectPane from "../_components/ProjectPane";
import PageWrapper from "../_components/PageWrapper";
import { projects } from "../_utils/constants";

const Projects = () => {
  return (
    <PageWrapper>
      <div className="md:mt-10">
        {projects.map((project, idx) => (
          <div key={`${idx}-${project.title}`}>
            <ProjectPane project={project} />
            <div className="mt-10"></div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Projects;
