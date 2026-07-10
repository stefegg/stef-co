import type { Metadata } from "next";
import ExperiencePane from "../../_components/ExperiencePane";
import { experiences } from "../../_utils/constants";
import SkillPane from "@/app/_components/SkillPane";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Stephen Egbert's skills and professional experience building production React, TypeScript, and Next.js applications across fintech, real estate, and startups.",
};

const Experience = () => {
  return (
    <div className="md:mt-10 flex flex-col gap-10">
      <h1 className="sr-only">Experience &amp; Skills</h1>
      <SkillPane />
      {experiences.map((exp, idx) => (
        <div key={`${idx}-${exp.title}`}>
          <ExperiencePane experience={exp} />
        </div>
      ))}
    </div>
  );
};

export default Experience;
