import type { Metadata } from "next";
import AboutPane from "../../_components/AboutPane";
import SkillPane from "../../_components/SkillPane";
import ProfileCard from "../../_components/ProfileCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Stephen Egbert, a Senior Frontend Engineer specializing in React, TypeScript, Next.js, and scalable state management.",
};

const About = () => {
  return (
    <div className="grid grid-cols-5 md:mt-10">
      <ProfileCard />
      <AboutPane />
    </div>
  );
};

export default About;
