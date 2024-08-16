export const experiences = [
  {
    title: "Software Engineer 2",
    dates: "Dec 2021 - Feb 2024",
    company: "Bluebeam Inc.",
    location: "Remote",
    duties: [
      "Led front end development for one of Bluebeam’s Cloud Initiative agile teams, setting development direction and goals, while building reusable JavaScript components from Figma prototype designs using React/Typescript, Tailwind CSS, Redux, Flexbox and Grid",
      "Worked collaboratively with other frontend and backend teams to integrate UI features and components with their work to help drive subscription rates.",
      "Led efforts to refactor and optimize existing UI elements, driven by customer feedback and usage metrics while maintaining in house design standards and styles.",
      "Built layouts and reusable components using Typescript, React, Next.js, Flexbox, Grid, CSS with accessibility, user interactions and frontend best practices in mind.",
      "Provided mentorship and close guidance to interns, fostering their growth and development as JavaScript, HTML and CSS developers.",
      "Deployed code to testing and production environments using CI/CD pipelines and AWS CloudWatch tools.",
    ],
  },
  {
    title: "Software Engineer",
    dates: "Oct 2018 - Oct 2021",
    company: "Jigsaw XYZ, Inc.",
    location: "New York, NY",
    duties: [
      "Part of an agile team that used React/Typescript and Node to develop and launch the LookSee property solutions app for Standard Bank South Africa at https://www.looksee.co.za/. worked closely with the client to achieve success.",
      "Worked on several fast-paced proof of concept projects helping win contracts for financial and banking clients including NCR, Motive Partners, and Standard Bank.",
      "Converted designs from Figma / Sketch into fully functional UI using Flexbox, Grid, React, React Native, Redux, Typescript, JavaScript HTML and CSS",
      "Learned React fundamentals and best practices such as context, prop usage, state management, and reusable component design.",
      "Used Git repositories and NPM to both install and host libraries.",
      "Honed a deep understanding of frontend UI best practices including layouts, smooth user interactions, and accessibility.",
      "Containerized projects using Docker and deployed / monitored apps with Azure.",
      "Helped design, implement, and retrieve data for UIs from backend RESTful APIs.",
    ],
  },
  {
    title: "Property Manager",
    dates: "Oct 2011 - February 2018",
    company: "Goldin Management",
    location: "Brooklyn, NY",
    duties: [
      "Prior to becoming a software engineer, I worked as a real estate property and construction project manager in Brooklyn for many years.",
      "During this time I honed my skills in leadership, communication, budgeting, and time management.",
      "This was a diverse role where no two days were similar, it involved wearing many hats and being extremely flexible.",
    ],
  },
];

export const projects = [
  {
    title: "StefCo. Store",
    link: "https://github.com/stefegg/stef-co-store",
    description:
      "This project was my first major effort after leaving Bluebeam Inc.  This is a full stack ecommerce site, using Next.js, Tailwind and Typescript on the frontend, and a PostgreSQL database and Prisma ORM on the backend.  I designed it based on my years of experience, building all aspects of the app myself.  I really enjoyed mapping out the relational database, and building features like the wishlist was especially fun and challenging.  It's a generally different experience if a user is logged in or out, with many things working differently.  I've leared a lot while making this project, and still go back to polish and add new features from time to time.",
    techStack: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Next.js",
      "Vercel",
      "Prisma",
      "PostgreSQL",
    ],
  },
  {
    title: "Bluebeam Cloud",
    link: "https://app.bluebeam.com",
    description:
      "I spent the builk of my time at Bluebeam Inc. working on Bluebeam Cloud.  I successfully led development of the Punch 2.0 feature, a reimagining of the original Punch page which added many features that customers had been hungry for for many years.  This was first experience with leading frontend development, and I had to manage a lot more than just my own code.  I was involved in sprint planning, expecation management, and communicating across discipline to manage expectations and help build the best feature possible.  This work also involved getting feedback directly from customers on many occasions. My success with this feature lead to many of the reusable components I built being used across Bluebeam Cloud, I was very happy to help drive success not just on my team, but across the company.  My work helped build customer confidence and drive subscription numbers at a crucial point in Bluebeam Cloud's growth and development.",
    techStack: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Styled-Components",
      "Sass",
      "Jest",
      "Storybook",
      "AG Grid",
    ],
  },
  {
    title: "LookSee",
    link: "https://www.looksee.co.za",
    description:
      "Looksee was a project that my team built toward the end of my time at Jigsaw XYZ, Inc.  It is a property solutions app for South Africans who face regular power and water outages as part of load shedding efforts in the places that they live.  The goal was to help communicate information about upcoming outagess, and also offer solutions through a marketplace to help these folks deal with this every day problem.  I found this project to be really inspiring, and it helped shape my mission as a Software Engineer - to help people with real everyday problems.  I worked predominantly on the marketplace.  As it was a small team, I owned many of the pieces of features I built myself.  I really honed my skill for componentization and reusability, deadlines were often tight and the project was very fast moving, so being able to reuse code and share it with teammates was important.  I really grew as a developer on this project, as it was the first project where I took ownership of so many large parts of the code base.  As my coding skill grew, so did my confidence, and I was glad whenever a teammate would pick up a component I'd built and reuse it for something they were working on.  Some of the original vision for Looksee has changed since we launched it, but I'm proud that much of my code for the marketplace is still being used to this day.",
    techStack: ["React", "Typescript", "Styled-Components", "Storybook"],
  },
  {
    title: "WeatherApp",
    link: "https://github.com/stefegg/weatherapp",
    description:
      "I built this WeatherApp over a weekend, with the goal being to refresh my familiarty with React Native.  I've always found React Native to be far more approachable than even regular React, but hadn't used it directly in some time.  This WeatherApp shows the current weather based on your location, the upcoming forecast for the next 5 days, and some information about the city that you are located in.  I built this project using create-expo-app, and got to play with more recent expo router changes which I had heard of but not directly used.  The navigation is file structure based, which is very similar to how Next.js routing works.",
    techStack: ["React Native", "Expo", "CSS"],
  },
  {
    title: "Calendar App",
    link: "https://github.com/stefegg/calendar-app",
    description:
      "Calendar App was an app with a simple idea - build a calendar that shows the holidays for different countries.  I added some fun twists, like making sure to show the last couple days of the previous month, and the first few days of the next month.  It was one of those things that I was sure I could do, but had never really sat down and tried.  So I did some research, and spent the weekend putting it together for fun.  All in all I enjoyed the challenge of this project, and have ideas about making it into a larger appointment scheduling app one day.",
    techStack: ["React", "Styled-Components", "Typescript"],
  },
  {
    title: "Learnwell Video Suite",
    link: "https://github.com/stefegg/learnwell-vids",
    description:
      "Learnwell Video Suite is a project that allows users to view and upload educational videos to a faux video platform.  I used bright colors and lots of animations to get people excited about learning on the landing page.  I focused on subjects that I know people love to learn about - space, dinosaurs, and ancient history. This was a fun weekend project, I used iframes for the video player, something I'd used on past projects but hadn't built with in a while.  There is also the ability for users to add comments to videos, which update in realtime.  Unfortunately, I was connecting to a third party API to save videos and comments, and this API no longer functions.",
    techStack: ["React", "Typescript", "Tailwind CSS"],
  },
  {
    title: "Stripe Hotel",
    link: "https://github.com/stefegg/stripe-hotel",
    description:
      "Stripe Hotel is a personal project that I used to show off my skills to get a new job after leaving Jigsaw XYZ Inc.  I wanted to take all of the lessons I'd learned at Jigsaw, over many projects, and bring them together in one project.  The goal was to keep everything on one page, and simply show different UI based on state.  I would have needed to bring in proper routing and branch out if I'd taken the project any further.  But I was happy to acheive what I did in such a short amount of time.  I also got to flex my muscles as a designer, as this was one of the first projects since bootcamp that I designed entirely myself.  I also challenged myself to integrate with Stripe for this project, which was much less of a challenge than I thought it would be.  This project was originally deployed on Heroku, but is not deployed today.",
    techStack: [
      "React",
      "Recoil",
      "Node.js",
      "Express",
      "Storybook",
      "Styled-Components",
    ],
  },
  {
    title: "VFZ",
    link: "https://github.com/stefegg/vfz",
    description: `VFZ or "Vengeance for Zul\'jin" was my final passion project while in bootcamp.  It is a sidescroller ala Mario Brothers built entirely in Javascript, but takes place in the Warcraft universe - one of my favorite game franchises since I was a young boy. This project was a ton of fun, I got it done following a tutorial on youtube that I branched off of several times.  I really enjoyed designing levels, sprites, and changing the physics of the classic game.  I got to set traps for players, and enjoyed watching them hit walls and figure out how to get around them when I shared the game with my fellow students during our graduation showcase.  I also learned a lot, bootcamp had opened my eyes to Javascript, but I learned a lot about ES6 changes using features like arrow functions and Promises for the first time while developing this project.`,
    techStack: ["Javascript", "HTML"],
  },
  {
    title: "Persephone",
    link: "https://github.com/stefegg/persephone",
    description:
      "Persephone was an app I built with a team of 3 others at NYCDA.  It was my first time leading a team of developers, as I was elected the leader shortly after our team was put together by our instructor.  The goal was to develop an application that could warn people about the dangers of climate change, and give them information on what to do in case of a natural disaster. The aim was to help people - something that still drives me to this day. ",
    techStack: ["Javascript", "Ruby", "Rails", "HTML", "CSS"],
  },
  {
    title: "Postboy Driving",
    link: "https://github.com/stefegg/postboy-driving-school",
    description:
      "Postboy Driving School was one of the many ruby on rails projects that I built while in bootcamp at NYCDA.  The driving school and theme were inspired by the greatest filler episode of Dragon Ball Z ever, where Goku and Piccolo learn how to drive.  I really got to flex my muscles as a designer on this project, as I felt I really understood Ruby and Rails very well, and challenged myself to build the best looking project I'd built yet. This was one of the projects that really helped me find my voice as a frontend developer, and helped me find my passion for front end development and making spectacular UIs.",

    techStack: ["Javascript", "Ruby", "Rails", "HTML", "CSS"],
  },
  {
    title: "Personal Pokedex",
    link: "https://stefegg.github.io/pokedex/",
    description:
      "My personal pokedex was one of the firssst major projects that I developed while in bootcamp.  It involved integrating with an API for the first time, looping through an API response with hundreds of pokemon, and trimming it down to a team of 6.  I remember how difficult these concepts were to understand at first, and how great it felt once they finally clicked.  To this day I really enjoy consuming data from APIs on a frontend, and feel like a project only truly comes to life once that connection is made.  While it's very basic, I'm still very proud of this project.  I think it still looks great, and am still happy with many of the design decisions I made.  For example - the border around the individual pokemon display is not a border, but just a larger container div.  The animations are also still smooth, and I think fit the personalities of the individual pokemon very well.",
    techStack: ["Javascript", "HTML", "CSS"],
  },
];
