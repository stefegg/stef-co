"use client";
import ExperiencePane from "../_components/ExperiencePane";
import { experiences } from "../_utils/constants";
import PageWrapper from "../_components/PageWrapper";

const Experience = () => {
  return (
    <PageWrapper>
      {experiences.map((exp, idx) => (
        <div key={`${idx}-${exp.title}`}>
          <ExperiencePane experience={exp} />
          <div className="mt-10" />
        </div>
      ))}
    </PageWrapper>
  );
};

export default Experience;
