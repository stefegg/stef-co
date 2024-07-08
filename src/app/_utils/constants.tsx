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
  expoIcon,
  redux,
  mongodb,
  graphQL,
  docker,
  materialUi,
  bootstrap,
  daisyUi,
  git,
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

export const badges = [
  { title: "React", src: react },
  { title: "Javascript", src: javascript },
  { title: "Typescript", src: typescript },
  { title: "Next.Js", src: nextjs },
  { title: "Redux", src: redux },
  { title: "React Native", src: react },
  { title: "Expo", src: expoIcon },
  { title: "Tailwind CSS", src: tailwind },
  { title: "Sass", src: sass },
  { title: "Styled Components", src: styledIcon },
  { title: "HTML", src: html5 },
  { title: "CSS", src: css3 },
  { title: "Node.js", src: nodeJs },
  { title: "MongoDb", src: mongodb },
  { title: "PostgreSQL", src: postgresql },
  { title: "GraphQL", src: graphQL },
  { title: "Prisma ORM", src: prismaIcon },
  { title: "Vercel", src: vercelIcon },
  { title: "Docker", src: docker },
  { title: "Jest", src: jest },
  { title: "Ruby", src: rubyIcon },
  { title: "Rails", src: railsIcon },
  { title: "Recoil", src: recoilIcon },
  { title: "Storybook", src: storybook },
  { title: "Material UI", src: materialUi },
  { title: "Bootstrap", src: bootstrap },
  { title: "daisy UI", src: daisyUi },
  { title: "Git", src: git },
];

export const projectsData: ProjectsData[] = [
  {
    title: "StefCo.",
    linkTitle: "Live Project",
    link: "www.stef-co.com",
    bodyOne:
      "StefCo. is not just the landing page you're looking at now. I started this procjet as a full stack faux e commerce site.  Shortly after leaving my last job, I wanted to get back to coding again, and StefCo. is how I started.  The plan was to build a fullstack application with some tech that I felt potential employers would love to see.  As you can see from the stack below - I have used Next.js Tailwind and Typescript on the frontend, and a PostgresQL database on the back end, which I connect to using Prisma ORM.  It's all hosted on Vercel, which I have found to be an excellent platform for deployment and analytics.",
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
    title: "WeatherApp",
    linkTitle: "Github Repo",
    link: "https://github.com/stefegg/weatherapp",
    bodyOne:
      "I built this WeatherApp over a weekend, with the goal being to refresh my familiarty with React Native.  I've always found React Native to be far more approachable than even regular React, but hadn't used it directly in some time.  This WeatherApp shows the current weather based on your location, the upcoming forecast for the next 5 days, and some information about the city that you are located in.",
    bodyTwo:
      "I built this project using create-expo-app, and got to play with more recent expo router changes which I had heard of but not directly used.  The navigation is file structure based, which is very similar to how Next.js routing works.  It's very similar to React Navigation, so it wasn't entirely new to me, but it was still good to work directly with something new.",
    badgeData: [
      { src: react, title: "React Native" },
      { src: expoIcon, title: "Expo" },
    ],
  },
  {
    title: "Learnwell Video Suite",
    linkTitle: "Github Repo",
    link: "https://github.com/stefegg/learnwell-vids",
    bodyOne:
      "Learnwell Video Suite is a project that allows users to view and upload educational videos to a faux video platform.  I used bright colors and lots of animations to get people excited about learning on the landing page.  I focused on subjects that I know people love to learn about - space, dinosaurs, and ancient history.",
    bodyTwo:
      "This was a fun weekend project, I used iframes for the video player, something I'd used on past projects but hadn't built with in a while.  There is also the ability for users to add comments to videos, which update in realtime.  Unfortunately, I was connecting to a third party API to save videos and comments, and this API no longer functions.",
    badgeData: [
      { src: react, title: "React" },
      { src: typescript, title: "Typescript" },
      { src: tailwind, title: "Tailwind" },
    ],
  },
  {
    title: "Stripe Hotel",
    linkTitle: "Github Repo",
    link: "https://github.com/stefegg/stripe-hotel",
    bodyOne:
      "Stripe Hotel is a personal project that I used to show off my skills to get a new job after leaving Jigsaw XYZ Inc.  I wanted to take all of the lessons I'd learned at Jigsaw, over many projects, and bring them together in one project.  The goal was to keep everything on one page, and simply show different UI based on state.",
    bodyTwo:
      "I would have needed to bring in proper routing and branch out if I'd taken the project any further.  But I was happy to acheive what I did in such a short amount of time.  I also got to flex my muscles as a designer, as this was one of the first projects since bootcamp that I designed entirely myself.  I also challenged myself to integrate with Stripe for this project, which was much less of a challenge than I thought it would be.  This project was originally deployed on Heroku, but is not deployed today.  At some point, I plan to rebuild a working version of it within StefCo.",
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
    bodyOne:
      'VFZ or "Vengeance for Zul\'jin" was my final passion project while in bootcamp.  It is a sidescroller ala Mario Brothers built entirely in Javascript, but takes place in the Warcraft universe - one of my favorite game franchises since I was a young boy.',
    bodyTwo:
      "This project was a lot of fun, I got it done following a tutorial on youtube that I branched off of several times.  I really enjoyed designing levels, sprites, and changing the physics of the classic game.  I got to set traps for players, and enjoyed watching them hit walls and figure out how to get around them when I shared the game with my fellow students during our graduation showcase.  I also learned a lot, bootcamp had opened my eyes to Javascript, but I learned a lot about ES6 changes using features like arrow functions and Promises for the first time while developing this project.",
    badgeData: [
      { src: javascript, title: "Javascript" },
      { src: html5, title: "HTML" },
    ],
  },
  {
    title: "Persephone",
    linkTitle: "Github Repo",
    link: "https://github.com/stefegg/persephone",
    bodyOne:
      "Persephone was an app I built with a team of 3 others at NYCDA.  It was my first time leading a team of developers, as I was elected the leader shortly after our team was put together by our instructor.  The goal was to develop an application that could warn people about the dangers of climate change, and give them information on what to do in case of a natural disaster. The aim was to help people - something that is still part of my mission to this day. ",
    bodyTwo:
      "Development for the most part went well, I was able to give my team members tasks, having learned their strengths over the preceding months we had spent in a classroom together.  But there was one member of my team who was always slacking off in class, never turned in working projects, and seemed to treat the whole thing as a joke.  Motivating him to be a productive member of the team was a challenge.  He failed to compelete any coding task I asked of him, and I eventually asked him to just gather information about disasters.  He refused to complete that task, I took the other two team members aside and said, we're moving forward without #4. It's going to be more work, but I know you two care a lot about this project and this class, are you okay to take on some extra work to get this done as three?  They both lit up immediately, being glad to do the extra work to succeed, and happy to be free of the other team member. In the end it was one of the best projects in the class, and it taught me a lot about leadership and building a team.",
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
    bodyOne:
      "Postboy Driving School was one of the many ruby on rails projects that I built while in bootcamp at NYCDA.  The driving school and theme were inspired by the greatest filler episode of Dragon Ball Z ever, where Goku and Piccolo learn how to drive.  I really got to flex my muscles as a designer on this project, as I felt I really understood Ruby and Rails very well, and challenged myself to build the best looking project I'd built yet.",
    bodyTwo:
      "This was one of the projects that really helped me find my voice as a frontend developer, and helped me find my passioon for front end development and making UIs that really look incredible.",
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
    bodyOne:
      "My personal pokedex was one of the firssst major projects that I developed while in bootcamp.  It involved integrating with an API for the first time, looping through an API response with hundreds of pokemon, and trimming it down to a team of 6.  I remember how difficult these concepts were to understand at first, and how great it felt once they finally clicked.  To this day I really enjoy consuming data from APIs on a frontend, and feel like a project only truly comes to life once that connection is made.",
    bodyTwo:
      "While it's very basic, I'm still very proud of this project.  I think it still looks great, and am still happy with many of the design decisions I made.  For example - the border around the individual pokemon display is not a border, but just a larger container div.  The animations are also still smooth, and I think fit the personalities of the individual pokemon very well.",
    badgeData: [
      { src: javascript, title: "Javascript" },
      { src: html5, title: "HTML" },
      { src: css3, title: "CSS" },
    ],
  },
];
