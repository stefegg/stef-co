import type { Metadata } from "next";
import ProjectPane from "@/app/_components/ProjectPane";
import { projects } from "@/app/_utils/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects built by Stephen Egbert using React, TypeScript, Next.js, and more.",
};

const Projects = () => {
  return (
    <div className="md:mt-10">
      {projects.map((project, idx) => (
        <div key={`${idx}-${project.title}`}>
          <ProjectPane project={project} />
          <div className="mt-10"></div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
