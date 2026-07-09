import type { Metadata } from "next";
import AboutPane from "../_components/AboutPane";
import PageWrapper from "../_components/PageWrapper";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Stephen Egbert, a Senior Frontend Engineer specializing in React, TypeScript, Next.js, and scalable state management.",
};

const About = () => {
  return (
    <PageWrapper>
      <AboutPane />
    </PageWrapper>
  );
};

export default About;
