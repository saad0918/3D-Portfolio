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
  python,
  langchain,
  googleGemini,
  openai,
  travel,
  smartAc,
  ESG,
  blogAi,
  documentResearch,
  weather,
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
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
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
  {
    name: "Python",
    icon: python,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "OpenAI",
    icon: openai,
  },
  {
    name: "Google Gemini",
    icon: googleGemini,
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
    name: "Document Research Agent",
    description:
    "Agentic RAG application that allows users to upload PDF documents and ask questions using retrieval-augmented generation. The system retrieves relevant document context and uses an AI model to generate grounded answers.",
    tags: [
    {
      name: "Python",
      color: "blue-text-gradient",
    },
    {
      name: "LangChain",
      color: "green-text-gradient",
    },
    {
      name: "RAG",
      color: "pink-text-gradient",
    },
    {
      name: "FastAPI",
      color: "orange-text-gradient",
    },
  ],
  image: documentResearch,
  source_code_link: "https://github.com/saad0918/document-research-agent",
  live_link: "https://documind-ai-agent.streamlit.app/",
},

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
    source_code_link: "https://github.com/saad0918/Trip-booking-web-Application-",
  },
  {
  name: "AI Blog Generator",
  description:
    "Full-stack AI-powered blogging platform that enables users to create, publish, and manage blogs with AI-assisted content generation, along with authentication, comments, bookmarks, and subscriptions.",
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
      name: "Gemini",
      color: "orange-text-gradient",
    },
  ],
  image: blogAi,
  source_code_link: "https://github.com/saad0918/BlogAI",
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
    source_code_link: "https://github.com/saad0918/Esg-Monitoring-",
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
  name: "Weather Application",
  description:
    "Responsive weather application built with React.js that allows users to search for cities and view real-time weather information including temperature, humidity, wind speed, visibility, and atmospheric pressure.",
  tags: [
    {
      name: "React",
      color: "blue-text-gradient",
    },
    {
      name: "JavaScript",
      color: "green-text-gradient",
    },
    {
      name: "Weather API",
      color: "pink-text-gradient",
    },
    {
      name: "Tailwind CSS",
      color: "orange-text-gradient",
    },
  ],
  image: weather,
  source_code_link: "https://github.com/saad0918/weather-app",live_link: "https://weather-app-nine-pink-42.vercel.app/",
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

