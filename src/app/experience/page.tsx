"use client";
import ExperiencePane from "../_components/ExperiencePane";
import { experiences } from "../_utils/constants";
import PageWrapper from "../_components/PageWrapper";

const Experience = () => {
  return (
    <PageWrapper>
      <div className="md:mt-10">
        {experiences.map((exp, idx) => (
          <div key={`${idx}-${exp.title}`}>
            <ExperiencePane experience={exp} />
            <div className="mt-10" />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Experience;
