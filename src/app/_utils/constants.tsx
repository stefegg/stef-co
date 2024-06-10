import { ProjectsData } from "../_types";
import {
  javascript,
  nextjs,
  postgresql,
  react,
  sass,
  storybook,
  typescript,
  nodeJs,
  jest,
  html5,
  css3,
  prismaIcon,
  recoilIcon,
  tailwind,
  vercelIcon,
  styledIcon,
  rubyIcon,
  railsIcon,
} from "../../../public/icons";

export const stateAbbrev = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

export const shipMethods = ["Ground - 9.99", "Air - 12.99", "Space - 19.99"];

export const projectsData: ProjectsData[] = [
  {
    title: "StefCo.",
    linkTitle: "Live Project",
    link: "www.stef-co.com",
    bodyOne:
      "StefCo. is not just the landing page you're looking at now. I started this procjet as a full stack faux e commerce site.  Shortly after leaving my last job, I wanted to get back to coding again, and StefCo. is how I started.  The plan was to build a fullstack application with some tech that I felt potential employers would love to see.  As you can see from the stack below - I have used Next.js Tailwind and Typescript on the frontend, and a PostgresQL database on the back end, which I connect to using Prisma ORM.  It's all hosted on Vercel, which I have found to be very robust and easy to understand for deployment and analytics.",
    bodyTwo:
      "StefCo. has been a job to work on, from designing the UI to putting together the relational database.  I've enjoyed pathing out which features I'm going to be working on next myself.  It's been challenging as a piece of solo work at time, but has taught me a lot.  To visit the store itself, get started by opening the sidebar using the hamburger in the top left hand corner.  You can place an order whether or not you're a registered user, obviously this is all just for fun and nothing on here is actually for sale.  The products and categories were inspired by things that either I or my puppy Hopper enjoys.  There's still a lot to be done, and I have many features planned for the future.  Right now I'm working on building out admin tools - a sales dashboard, and the ability to add / update products.",
    badgeData: [
      { src: react, title: "React" },
      { src: typescript, title: "Typescript" },
      { src: tailwind, title: "Tailwind" },
      { src: postgresql, title: "PostgresQL" },
      { src: prismaIcon, title: "Prisma" },
      { src: nextjs, title: "Next.js" },
      { src: vercelIcon, title: "Vercel" },
    ],
  },
  {
    title: "Bluebeam Cloud",
    linkTitle: "Live Project",
    link: "https://app.bluebeam.com/",
    bodyOne:
      "I spent the bulk of my time at Bluebeam working on Bluebeam Cloud.  The main project I worked on was called Punch 2.0 - it was a reimagining of their punch list table.  A punch list is a list of things that need to be corrected toward the end of a construction project.  When I joined development had been stalled on this, due to the current devs inability to leverage the Adobe Spectrum library to get the results product and design wanted.  My team had to figure out where to pick up and go from here, but to make things even more challenging, the two more senior devs on the team quit shortly after I joined.",
    bodyTwo:
      "This quickly thrust me into leading front end development for this feature for my team.  I worked with product, design and other engineers to determine which tools to use moving forward, identifying a new graph library that would do more of what we all wanted. I used their feedback, customer feedback, and my own experience to build this feature out to completion over the next year.  I had to communicate cross team and discipline to meet important deadlines, and decide which features were the most important to prioritize at any one time. As I found success on this feature, I was able to work with other teams to help with their development, bringing my experience from Punch 2.0 to help them get past areas where they were stalled, help delivering more features, and helping to secure customer confidence in our product and drive subscription numbers.",
    badgeData: [
      { src: react, title: "React" },
      { src: typescript, title: "Typescript" },
      { src: tailwind, title: "Tailwind" },
      { src: sass, title: "Sass" },
      { src: jest, title: "Jest" },
      { src: storybook, title: "Storybook" },
    ],
  },
  {
    title: "LookSee",
    linkTitle: "Live Project",
    link: "https://www.looksee.co.za/",
    bodyOne:
      "Looksee was a project that my team built toward the end of my time at Jigsaw XYZ, Inc.  It is a property solutions app for South Africans who face regular power and water outages as part of load shedding efforts in the places that they live.  The goal was to help communicate information about upcoming outagess, and also offer solutions through a marketplace to help these folks deal with this every day problem.  I found this project to be really inspiring, and it helped shape my mission as a Software Engineer - to help people with real everyday problems. ",
    bodyTwo:
      "I worked predominantly on the marketplace.  As it was a small team, I owned many of the pieces of features I built myself.  I really honed my skill for componentization and reusability, deadlines were often tight and the project was very fast moving, so being able to reuse code and share it with teammates was important.  I really grew as a developer on this project, as it was the first project where I took ownership of so many large parts of the code base.  As my coding skill grew, so did my confidence, and I was glad whenever a teammate would pick up a component I'd built and reuse it for something they were working on.  Some of the original vision for Looksee has changed since we launched it, but I'm proud that much of my code for the marketplace is still being used to this day.",
    badgeData: [
      { src: react, title: "React" },
      { src: typescript, title: "Typescript" },
      { src: styledIcon, title: "Styled Components" },
      { src: storybook, title: "Storybook" },
    ],
  },

  {
    title: "Stripe Hotel",
    linkTitle: "Github Repo",
    link: "https://github.com/stefegg/stripe-hotel",
    bodyOne: "",
    bodyTwo: "",
    badgeData: [
      { src: react, title: "React" },
      { src: recoilIcon, title: "Recoil" },
      { src: nodeJs, title: "Node.js" },
      { src: storybook, title: "Storybook" },
    ],
  },
  {
    title: "VFZ",
    linkTitle: "Github Repo",
    link: "https://github.com/stefegg/vfz",
    bodyOne: "",
    bodyTwo: "",
    badgeData: [
      { src: javascript, title: "Javascript" },
      { src: html5, title: "HTML" },
    ],
  },
  {
    title: "Persephone",
    linkTitle: "Github Repo",
    link: "https://github.com/stefegg/persephone",
    bodyOne: "",
    bodyTwo: "",
    badgeData: [
      { src: javascript, title: "Javascript" },
      { src: rubyIcon, title: "Ruby" },
      { src: railsIcon, title: "Rails" },
      { src: html5, title: "HTML" },
      { src: css3, title: "CSS" },
    ],
  },
  {
    title: "Postboy Driving",
    linkTitle: "Github Repo",
    link: "https://github.com/stefegg/postboy-driving-school",
    bodyOne: "",
    bodyTwo: "",
    badgeData: [
      { src: javascript, title: "Javascript" },
      { src: rubyIcon, title: "Ruby" },
      { src: railsIcon, title: "Rails" },
      { src: html5, title: "HTML" },
      { src: css3, title: "CSS" },
    ],
  },
  {
    title: "Personal Pokedex",
    linkTitle: "Live Project",
    link: "https://stefegg.github.io/pokedex/",
    bodyOne: "",
    bodyTwo: "",
    badgeData: [
      { src: javascript, title: "Javascript" },
      { src: html5, title: "HTML" },
      { src: css3, title: "CSS" },
    ],
  },
];
