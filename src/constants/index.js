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
  peoplelab,
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
    title: "Front-End Engineer Consultant",
    company_name: "People Lab Srl",
    icon: peoplelab,
    iconBg: "#383E56",
    date: "June 2023 - present",
    projects: [
      {
        title: "React Developer @ IrisCube Reply",
        icon: illimity,
        iconBg: "#383E56",
        date: "June 2023 - present",
        project: "Project: UniCredit Customer Experience",
        points: [
          "Acquiring Solutions: Development of web pages for sales and after-sales products: inApp POS, Pay by Link and Recurring Payments.",
          "Advisor & Capital Market: development of a prototype web portal as a service for corporate trading, including a global/national market section, insights section with charts and recent transactions section.",
          "Card Issuing: Development and maintenance in production of the sales and after-sales flow of cards."
        ],
      },
    ],
  },
  {
    title: "Front-End Engineer Consultant",
    company_name: "Aesys Tech",
    icon: aesys,
    iconBg: "#383E56",
    date: "June 2021 - June 2023",
    projects: [
      {
        title: "React Developer @ Illimity Bank",
        icon: illimity,
        iconBg: "#383E56",
        date: "September 2021 - June 2022",
        project: "Project: COMS | Credit Origination & Management System",
        points: [
          "Development and implementation of new functionalities such as, for example, the creation of a newc dashboard for invoice management, which was previously carried out externally, thus improving the speed of invoicing.",
          "Implementation through plug-ins of Google's Blockly library to improve the user experience.",
          "Creation of new permissions to improve data security within."
        ],
      },
      {
        title: "React Developer @ Be Shaping the Future",
        icon: be,
        iconBg: "#383E56",
        date: "June 2022 - October 2022",
        project: "Project: New Design System COMS | Credit Origination & Management System",
        points: [
          "Refactor of the code using the components of the New System Design for more maintainability and customisation of the code.",
          "Research and bug fixing.",
          "Study and practice with Next.js and Express.js."
        ]
      },
      {
        title: "React Developer @ Metisoft",
        company_name: "",
        icon: metisoft,
        iconBg: "#383E56",
        date: "November 2022 - March 2023",
        project: "Project: React Webpart Sharepoint Framework (SPFX) ",
        points: [
          "Webpart SharePoint (SPFX): De-linking by the client of Google Workspaces sheets to a System developed on SharePoint Online by creating a webpart in React for the management of appraisals by the company based on the employee's performance throughout the year, improving the user experience of users and the administration of permissions by the owners of the processes."
        ],
      },
      {
        title: "React Developer @ Aesys Internal Project",
        date: " February 2023 - June 2023",
        project: "WikiAesys",
        points: [
          "WikiAesys is an online encyclopaedia like Wikipedia, where users are divided according to their roles and can create articles related to the IT sector. It is possible to comment on articles and like them. There is an internal administration panel for moderators, who will have the task of approving contributors' articles. The project is developed in JavaScript as a programming language and React as a library for the creation of the user interface. The MaterialUI library was used extensively to create the graphical components. The Axios library was used to make the API calls. "
        ]
      }
    ],
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

export { services, technologies, experiences, projects };
