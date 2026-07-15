export const experiences = [
  {
    title: "Senior Frontend Engineer",
    dates: "Sept 2025 - May 2026",
    company: "Palla Financial",
    location: "Remote",
    duties: [
      "Engineered the migration of a multi-currency peer to peer transfer hub from server driven, route based rendering to a client side state machine model using XState, React, TypeScript, and Next.js (App Router), and TanStack query for server state management alongside state machines. Owning system level decisions and architecture around state ownership, cross session persistence and auth protection including typed localStorage utilities, hydration patterns and hook based route protection",
      "Architected and drove development of several key customer facing payment features, including Enhanced Due Diligence to bolster customer KYC, and Cash Deposit to allow for new revenue flows, contributing to design discussions, building out frontend architecture and participating in A/B testing to find the best ways that users interacted with features during existing payment flows",
      "Contributed to an internal React/TypeScript component library built around a layered feature view architecture, where stateless UI components composed with XState machines and custom hooks into self contained, portable feature views consumed across multiple applications ",
      "Designed a tiered testing strategy for a React/XState/Storybook codebase; Jest unit tests for utilities and pure components, graph based behavioral tests for state machines, visual regression testing via Storybook, and Playwright E2E tests validating feature view components within their consuming applications",
      "Enforced architectural consistency across the codebase through code reviews, ensuring changes respected the feature view boundary, were properly scoped, and aligned with hook and machine patterns",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    dates: "Sept 2024 - July 2025",
    company: "Greystar Real Estate",
    location: "Fully Remote",
    duties: [
      "Diagnosed and resolved a critical over-fetching bottleneck by collaborating with a backend engineer to redesign API endpoints around view-specific data shapes, serving lightweight records on list views and full attribute payloads on detail views, using GraphQL with Apollo Client for field-level query control and normalizing caching, reducing average page load time from 5-10 minutes to under 3 seconds.",
      "Led modernization of a property management application using React, TypeScript, TailwindCSS, and Redux, implementing server-side rendering and dynamic code-splitting with Next.js to accelerate Time-to-Interactive across a mobile-first interface",
      "Developed WCAG AA-compliant React/TypeScript components that standardized accessible UI patterns across the application, increasing front-end reuse and reducing new feature implementation time",
      "Automated CI/CD pipelines in Azure DevOps, halving release lead time and increasing deployment frequency, while expanding Jest and Playwright test coverage to reduce production defects",
    ],
  },
  {
    title: "Freelance Frontend Engineer",
    dates: "July - August 2025",
    company: "Contract",
    location: "Remote",
    duties: [
      "Designed and developed a POC invoice deduplication platform for a real estate management client, building the UI independently from concept to prototype to surface potential duplicate property invoices and queue them for human review",
      "Delivered the complete frontend in 6 weeks using React, TypeScript, Tailwind CSS, Next.js, and Vercel with no design handoff, owning both visual design and implementation end to end",
    ],
  },
  {
    title: "Founding Software Engineer/React Developer",
    dates: "Apr 2024 - Apr 2025 (full time through Sep 2024)",
    company: "VARIANT",
    location: "Red Bank, NJ / Remote",
    duties: [
      "Built the frontend MVP for an AI-powered narrative editing platform enabling writers to work across multiple levels of story granularity, from world building down to individual characters, querying structured story content via Sanity's GraphQL API, with the UI architected to support real-time AI driven consistency validation",
      "Architected and documented a mobile first React/TypeScript component library using shadcn and Tailwind CSS, built to present story data coherently across radically different editorial zoom levels within a single unified interface",
      "Established SDLC guidelines and code review standards as a founding engineer, enabling consistent delivery of production ready code across a small, fast moving team",
      "Integrated AI-assisted development tooling throughout the build cycle using Claude and Cursor to accelerate prototyping and iterate rapidly on a complex, multi-layer editorial interface",
    ],
  },
  {
    title: "Software Engineer II",
    dates: "Dec 2021 - Feb 2024",
    company: "Bluebeam Inc.",
    location: "Fully Remote",
    duties: [
      "Led front end development of core cloud service features using React, Typescript, Tailwind CSS and Next.js, including a project analytics dashboard built on GraphQL for structured data queries, and a project selection and table tooling suite using Tanstack Query for client side caching, background refetching and request deduplication, taking a mobile first approach and improving trial to paid conversion through targeted A/B testing and UX improvements",
      "Built and scaled a reusable React/TypeScript component library adopted across multiple internal teams, accelerating feature delivery and reducing development cycle time across the organization",
      "Refactored legacy React modules to modern ES6 standards driven by direct customer feedback and usage metrics, reducing CSS payload and improving Lighthouse performance scores across core application surfaces",
      "Mentored and coached interns in React/TypeScript front end development and best practices, two of whom delivered key product features and transitioned to full time engineering roles",
    ],
  },
  {
    title: "Software Engineer",
    dates: "Oct 2018 - Oct 2021",
    company: "Jigsaw XYZ, Inc.",
    location: "New York, NY",
    duties: [
      "Engineered the LookSee SaaS platform using React and TypeScript, with Sanity powering structured content management, supporting 100k+ monthly active users at 99.9% uptime and optimizing performance for enterprise clients",
      "Collaborated on React/TypeScript/Node.js POCs for clients including NCR and Motive Partners, contributing to several fintech contract wins through rapid prototyping of payment and order processing and management systems",
      "Converted Figma prototypes into responsive React and React Native applications and micro frontends, consistently delivering POCs on tight deadlines to meet client business goals",
      "Published and maintained NPM packages for shared React/TypeScript UI components and utility functions, reducing new project bootstrap time across the team",
    ],
  },
  {
    title: "Property Manager",
    dates: "Oct 2011 - February 2018",
    company: "Goldin Management",
    location: "Brooklyn, NY",
    duties: [
      "The go to technical resource at every organization I was a part of since 2008, maintaining websites, email campaigns, and managing servers, before formalizing that foundation through a software engineering bootcamp in 2018 and transitioning fully into engineering",
      "Managed ~15-unit portfolio of residential buildings in the NYC area, overseeing day to day operations, maintenance, and large scale renovation projects",
      "Maintained board level stakeholder relationships across multiple condo and coop properties, preparing and presenting budgets and aligning diverse owner priorities to keep buildings running smoothly",
      "Coordinated cross functional teams of vendors, contractors, and building staff across all properties, managing competing priorities, timelines, and personalities to deliver on maintenance and improvement projects",
    ],
  },
];

export const projects = [
  {
    title: "MODEL VS. CONTROLLER 2: NEW AGE OF ZEROES AND ONES",
    link: "https://mvc2.vercel.app/",
    description:
      "Won a hackathon challenge with this battle simulator, built entirely within an 8-hour time limit. Made deliberate decisions under pressure to prioritize visual design and thematic cohesion, using AI-generated fighter imagery to deliver a polished, on-theme product in a fraction of normal development time.",
    techStack: ["React", "Typescript", "Tailwind CSS", "Next.js", "Vercel"],
  },
  {
    title: "Realms Spend Demo",
    link: "https://realms-spend-demo.vercel.app/",
    description:
      "A B2B invoice deduplication platform built for a real estate management client, designed and developed end to end with no design handoff. Built to surface potential duplicate property invoices and queue them for human review. The UI was designed entirely from scratch, owning both the visual design and frontend implementation.",
    techStack: ["React", "Typescript", "Tailwind CSS", "Next.js", "Vercel"],
  },
  {
    title: "Learnwell Video Suite",
    link: "https://www.loom.com/share/13d5481b64044b3a921f47951faff919",
    description:
      "A fully self-designed educational video platform featuring vibrant animations and real-time video comments. The color scheme was pulled directly from a potential client's brand identity, designing the entire UI around their existing visual language. Showcased via a fully voiced video walkthrough.",
    techStack: ["React", "Typescript", "Tailwind CSS"],
  },
  {
    title: "StefCo. Store",
    link: "https://github.com/stefegg/stef-co-store",
    description:
      "A full stack ecommerce site built as a personal project, featuring a Next.js frontend and PostgreSQL backend. Includes wishlist functionality and differentiated experiences for authenticated and unauthenticated visitors.",
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
      "Led the Punch 2.0 feature redesign at Bluebeam Inc., coordinating across disciplines and integrating direct customer feedback into the final product. Reusable components built for this project were adopted across many internal teams.",
    techStack: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Next.js",
      "Styled-Components",
      "Sass",
      "Jest",
      "Storybook",
      "AG Grid",
      "GraphQL",
      "Tanstack Query",
    ],
  },
  {
    title: "LookSee",
    link: "https://www.looksee.co.za",
    description:
      "Looksee was a project that my team built toward the end of my time at Jigsaw XYZ, Inc.  It is a property solutions app for South Africans who face regular power and water outages as part of load shedding efforts in the places that they live.  The goal was to help communicate information about upcoming outagess, and also offer solutions through a marketplace to help these folks deal with this every day problem.  I found this project to be really inspiring, and it helped shape my mission as a Software Engineer - to help people with real everyday problems.  I worked predominantly on the marketplace.  As it was a small team, I owned many of the pieces of features I built myself.  I really honed my skill for componentization and reusability, deadlines were often tight and the project was very fast moving, so being able to reuse code and share it with teammates was important.  I really grew as a developer on this project, as it was the first project where I took ownership of so many large parts of the code base.  As my coding skill grew, so did my confidence, and I was glad whenever a teammate would pick up a component I'd built and reuse it for something they were working on.  Some of the original vision for Looksee has changed since we launched it, but I'm proud that much of my code for the marketplace is still being used to this day.",
    techStack: [
      "React",
      "Typescript",
      "Sanity",
      "Node.js",
      "Styled-Components",
      "Storybook",
    ],
  },
  {
    title: "Stripe Hotel",
    link: "https://github.com/stefegg/stripe-hotel",
    description:
      "A single-page hotel booking application integrating Stripe payments, entirely self-designed and self-built. A showcase of clean UI design and full frontend implementation from concept to deployment.",
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
    description:
      "A sidescroller built entirely in JavaScript, set in the Warcraft universe. Features custom level design, sprite modifications, and hand-tuned physics. A passion project that shows where it all started.",
    techStack: ["Javascript", "HTML"],
  },
];

export const skills = [
  {
    category: "Core Frontend",
    items: [
      "React",
      "Next.js (App Router, SSR/SSG)",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "React Router",
      "Vite",
      "HTML",
    ],
  },
  {
    category: "State Management",
    items: [
      "XState",
      "Redux",
      "Redux Sagas",
      "Zustand",
      "React Context",
      "React/TanStack Query",
    ],
  },
  {
    category: "Styling & UI",
    items: [
      "Tailwind CSS",
      "SCSS",
      "CSS",
      "Grid",
      "Flexbox",
      "Storybook",
      "AG-Grid",
      "Mobile First Development",
    ],
  },
  {
    category: "Backend & API Integration",
    items: ["GraphQL", "Prisma ORM", "PostgreSQL", "Node.js", "Sanity"],
  },
  {
    category: "Quality & Testing",
    items: [
      "Jest",
      "Vitest",
      "RTL",
      "Playwright",
      "Lighthouse audits",
      "WCAG AA accessibility compliance",
    ],
  },
  {
    category: "Tooling & Deployment",
    items: ["Vercel", "GitHub Actions", "Azure DevOps Pipelines", "Docker"],
  },
  {
    category: "AI-Assisted Development",
    items: ["Claude Code", "GitHub Copilot", "Cursor"],
  },
  {
    category: "Collaboration & Workflow",
    items: ["Agile/Scrum", "Jira", "Figma handoff", "Git"],
  },
];

export const aboutMe = [
  "I've been building things on the internet since the days of dial up.",
  "In the late 90s that meant HTML fan sites for my favorite shows from Toonami and Adult Swim, paired with a love for building custom Starcraft campaign maps. Nobody told me that was programming, hell I'd have told you that it wasn't. I just saw a world where I could build things.",
  " That same curiosity and drive is what gets me out of bed and onto my laptop everyday.",
  "I'm a Senior Frontend Engineer with 7+ years of professional experience and an obsession with two things: complex UIs that actually work for the user, and state systems that don't fall apart when you push on them. I've spent a significant part of my career on two connected problems: building state systems that are predictable, testable, and maintainable using XState, Redux, and React Context, and architecting component libraries that other engineers can build on top of with confidence. I love helping others with my work. Not because it's impressive, but because getting it right for each new situation is a fresh new challenge and deeply satisfying.",
  "          On the UI side I sweat the details: performance, accessibility, the pixel-perfect implementation that respects both the design and the person using it. I'm the kind of engineer who notices when something is slightly off and can't leave it alone.",
  "          I became a professional engineer in 2018 after spending my earlier career in real estate, but I was always the tech person at every job, maintaining websites and servers since 2008. The career change wasn't really a change so much as finally making official what I'd been doing anyway.",
  " I also care deeply about giving back. I've mentored engineers who went on to ship real features and build real careers, and that means as much, if not more to me than any technical problem I've tackled.",
];
