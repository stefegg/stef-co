import profilePic from "./profile.jpeg";
import Image from "next/image";
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
        <div className="mt-4 text-secondary">
          <p>
            Software engineer located in New Jersey with 5+ years of experience
            building data driven user interfaces. I am a self taught programmer
            with a predominatly Javascript based stack. My specialties include
            React, React Native, Typescript and Next.js and GraphQL. I am fluent
            in many types of CSS, including Sass, Tailwind CSS and Emotion /
            Styled-Comoponents. I am always eager to learn new front end tech,
            and as a result have proficiency in Vue and Angular as well. I truly
            enjoy building quick, responsive UI with smooth thoughtful
            interactions that keep users engaged and meets their needs and
            expectations.
            <br />
            <br />I started my career as a Software Engineer about 6 years ago,
            being unsatisfied after working in the Real Estate industry after
            many years. I had coded for fun since the late 90s, getting started
            with HTML and inline CSS fansites for television shows, and writing
            logic for Starcraft custom campaign maps. I have strong leadership
            and communicaton skills, and enjoy mentoring and helping other
            developers whenever I can. I am a big, positive personality on any
            team that I am a part of, and love working with others to accomplish
            our goals.
            <br />
            <br />
            Beyond my work as a frontend developer, I also have full stack
            experience. I have used Node.js, Express, PostgreSQL and MongoDB on
            both a personal and professional level. I am very skilled at
            building data models, connecting front ends back end data sources,
            as well as helping to design and build APIs. I am familiar with
            using Docker for containerization, and using deployment environments
            like Azure, AWS, and Vercel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPane;
