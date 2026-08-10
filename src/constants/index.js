import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  express,
  git,
  travel,
  smartAc,
  ESG,
  prodigy,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
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
  name: "Express JS",
  icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Prodigy Infotech",
    icon: prodigy,
    iconBg: "#383E56",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Built responsive web applications using HTML, CSS, JavaScript, and React.js.",
      "Developed reusable components and implemented responsive user interfaces.",
      "Worked with APIs and handled application data using modern JavaScript practices.",
      "Improved UI functionality through debugging, testing, and code optimization.",
    ],
  },
];


const projects = [
  {
    name: "AI-Powered Travel Booking Website",
    description:
      "AI-driven travel platform that enables users to search, compare, and book hotels seamlessly, featuring an OpenAI-powered assistant for personalized recommendations and enhanced trip planning.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/",
  },

  {
    name: "Smart AC Monitoring System",
    description:
      "IoT-based smart AC monitoring system using ESP32 and multiple sensors to monitor temperature, humidity, air quality, motion, and obstacle detection in real time. A React dashboard displays live sensor data and analytics, supported by a Node.js, Express.js, and MongoDB backend.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "IoT",
        color: "orange-text-gradient",
      },
    ],
    image: smartAc,
    source_code_link: "https://github.com/saad0918/smart-ac-monitoring",
  },

  {
    name: "ESG Monitoring with AI Chatbot",
    description:
      "AI-powered ESG monitoring platform that tracks sustainability metrics and provides an AI chatbot for generating insights and personalized environmental recommendations.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "orange-text-gradient",
      },
    ],
    image: ESG,
    source_code_link: "https://github.com/",
  },
];
const education = [
  {
    degree: "B.Tech",
    branch: "Computer Science and Engineering",
    college: "CMR University",
    cgpa: "8.02 / 10",
    date: "2022 - 2026",
    description:
      "Focused on software development, programming fundamentals, databases, web technologies, and problem-solving.",
  },
];
export {
  services,
  technologies,
  experiences,
  education,
  projects,
};

