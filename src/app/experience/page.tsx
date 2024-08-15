"use client";
import ExperiencePane from "../_components/ExperiencePane";
import { experiences } from "../_utils/constants";

const Experience = () => {
  return (
    <div className="px-4 md:px-16 pt-12">
      {experiences.map((exp, idx) => (
        <div key={`${idx}-${exp.title}`}>
          <ExperiencePane experience={exp} />
          <div className="mt-10" />
        </div>
      ))}
    </div>
  );
};

export default Experience;
