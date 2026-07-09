import profilePic from "./profile.jpeg";
import Image from "next/image";
import { skills } from "../../_utils/constants";
const AboutPane = () => {
  return (
    <div className="grid grid-cols-5 md:mt-10">
      <div className="grid col-span-5 place-content-center md:place-content-start md:col-span-1">
        <div className="flex-non place-content-center">
          <Image src={profilePic} alt="profile" className="rounded-full" />
        </div>
        <div className="text-center break-normal mt-2">
          <p className="text-primary">Stephen Egbert</p>
          <p className="text-link">Software Engineer</p>
        </div>
      </div>
      <div className="col-span-5 text-white md:col-span-4 md:px-10">
        <div className="mt-4 text-secondary flex flex-col gap-4">
          <p>I&apos;ve been building things on the internet since the days of dial up.</p>
          <p>In the late 90s that meant HTML fan sites for my favorite shows from Toonami and Adult Swim, paired with a love for building custom Starcraft campaign maps. Nobody told me that was programming, hell I&apos;d have told you that it wasn&apos;t. I just saw a world where I could build things.</p>
          <p>That same curiosity and drive is what gets me out of bed and onto my laptop everyday.</p>
          <p>I&apos;m a Senior Frontend Engineer with 7+ years of professional experience and an obsession with two things: complex UIs that actually work for the user, and state systems that don&apos;t fall apart when you push on them. I&apos;ve spent a significant part of my career on two connected problems: building state systems that are predictable, testable, and maintainable using XState, Redux, and React Context, and architecting component libraries that other engineers can build on top of with confidence. I love helping others with my work. Not because it&apos;s impressive, but because getting it right for each new situation is a fresh new challenge and deeply satisfying.</p>
          <p>On the UI side I sweat the details: performance, accessibility, the pixel-perfect implementation that respects both the design and the person using it. I&apos;m the kind of engineer who notices when something is slightly off and can&apos;t leave it alone.</p>
          <p>I became a professional engineer in 2018 after spending my earlier career in real estate, but I was always the tech person at every job, maintaining websites and servers since 2008. The career change wasn&apos;t really a change so much as finally making official what I&apos;d been doing anyway.</p>
          <p>I also care deeply about giving back. I&apos;ve mentored engineers who went on to ship real features and build real careers, and that means as much, if not more to me than any technical problem I&apos;ve tackled.</p>
        </div>
      </div>
      <div className="col-span-5 md:col-span-4 md:col-start-2 md:px-10 text-white mt-10 pt-6">
        <p className="text-primary text-xl mb-4">Technical Skills</p>
        <div className="flex flex-col gap-4">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col md:flex-row md:gap-4">
              <p className="text-link min-w-[220px]">{group.category}</p>
              <ul className="flex flex-wrap gap-y-1 text-tertiary">
                {group.items.map((item, idx) => (
                  <li
                    key={`${item}-${idx}`}
                    className="[&:not(:last-child)]:after:content-['·'] [&:not(:last-child)]:after:mx-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPane;
