import {
  reactNative,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  nextjs,
  docker,
  threejs,
  aesys,
  illimity,
  be,
  metisoft,
  spotify,
  threeJs,
  twitch,
  quiz,
  todolist
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: reactNative,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Consultant",
    company_name: "Aesys Tech",
    icon: aesys,
    iconBg: "#383E56",
    date: "June 2021 - Present",
    project: "Projects: Illimity Bank, Be Shaping the Future, Internal Sharepoint Framework React Project",
    points: [
      "Documentation and application of Front End technologies.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Mobile Development - React Native (Android Studio).",
      "Follow-up projects.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Illimity Bank",
    icon: illimity,
    iconBg: "#383E56",
    date: "September 2021 - June 2022",
    project: "Project: COMS | Credit Origination & Management System",
    points: [
      "Developing and maintaining web application using React.js and TypeScript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Development of new customer management dashboards.",
      "Bug fixes.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Be Shaping the Future",
    icon: be,
    iconBg: "#383E56",
    date: "June 2022 - October 2022",
    project: "Project: New Design System COMS | Credit Origination & Management System",
    points: [
      "Development and implementation of new Design System components.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Bug search and resolution.",
      "Study and exercises with Next.js and Nest.js.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Metisoft",
    icon: metisoft,
    iconBg: "#383E56",
    date: "November 2022 - March 2023",
    project: "Project: React Webpart Sharepoint Framework (SPFX) ",
    points: [
      "Worked closely with the Microsoft business unit of my company (Aesys tech) to take care of the development part in React",
      "Development and implementation of a Sharepoint webpart.",
      "Research and bug fixing.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Spotify Clone",
    description:
      "In this project I recreated the Spotify login and main dashboard using their API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/thom99/Spotify-clone",
  },
  {
    name: "Universe threeJS",
    description:
      "In this project I recreated a small part of the universe with the 3D library Three.js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-three/fiber",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: threeJs,
    source_code_link: "https://github.com/thom99/UniverseThreeJs",
  },
  {
    name: "Twitch clone",
    description:
      "In this project I recreated the Twitch login and home page using their API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "yup-validation",
        color: "pink-text-gradient",
      },
    ],
    image: twitch,
    source_code_link: "https://github.com/thom99/Twitch-clone",
  },
  {
    name: "Quiz app",
    description:
      "In this project I created a quiz app using Trivia API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/thom99/React-Typescript-QuizGame",
  },
  {
    name: "Todo list app",
    description:
      "In this project I created a todo list app using Redux.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/thom99/Todolist-React-Redux",
  },
];

export { services, technologies, experiences, testimonials, projects };
