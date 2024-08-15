"use client";
import ExperiencePane from "../_components/ExperiencePane";
import { experiences } from "../_utils/constants";

const Experience = () => {
  return (
    <div className="px-4 md:px-16 pt-12">
      {experiences.map((exp, idx) => (
        <ExperiencePane key={idx} experience={exp} />
      ))}
    </div>
  );
};

export default Experience;
