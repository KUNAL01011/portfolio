import { paraseek, techwithjoshi } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
  LMS,
  chat,
  socialMedia,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Web Developer intern",
    company_name: "TechWithJoshi",
    icon: techwithjoshi,
    iconBg: "#0ac6fa",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Developing and maintaining full-stack web applications using React.js for the frontend and Node.js/Express.js for the backend at TechWithJoshi.",
      "Collaborating with cross-functional teams, including designers and fellow developers, to build and enhance user-centric features.",
      "Contributing to backend APIs, integrating with databases, and ensuring secure and scalable application logic.",
      "Participating in code reviews and sharing feedback to maintain code quality and team learning.",
    ],
  },
  {
    title: "Freelance",
    company_name: "ParaSeek",
    icon: paraseek,
    iconBg: "#fff200",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Designing and developing the backend architecture of ParaSeek, a comprehensive employment portal, using Node.js, Express.js, and MongoDB.",
      "Collaborating with frontend developers to integrate RESTful APIs and ensure smooth data flow across the platform.",
      "Implementing features such as job posting, applications, user authentication, and notification systems.",
      "Participating in code reviews and debugging, maintaining clean and efficient backend code.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/KUNAL01011",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kunal003/",
  },
];

export const projects = [
  {
    iconUrl: LMS,
    theme: "btn-back-red",
    name: "Learning Management Systems",
    description:
      "The Web Learning Platform is a dynamic and intuitive e-learning application built with Next.js. It allows administrators to create and manage courses effortlessly using YouTube links, enabling learners to access structured video content for various topics.",
    link: "https://weblearning-phi.vercel.app/",
  },
  {
    iconUrl: socialMedia,
    theme: "btn-back-green",
    name: "Web Media",
    description:
      "Web Media is a MERN stack-based social platform for real-time posts, likes, comments, and profile updates. It offers secure authentication and a smooth user experience with a modern, scalable design.",
    link: "https://web-media.onrender.com/",
  },
  {
    iconUrl: chat,
    theme: "btn-back-blue",
    name: "Random Chat",
    description:
      "Random Chat Application is a real-time anonymous chat platform built with the MERN stack and Socket.io. It allows users to connect, chat, and skip to new conversations instantly, with real-time messaging and typing indicators.",
    link: "https://web-chat-94zg.onrender.com/",
  },
];
