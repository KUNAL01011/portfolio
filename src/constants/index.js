import { freelance, paraseek, techwithjoshi } from "../assets/images";
import {
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
  Npm,
  AlgoArena,
  twitter,
  instagram
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
    company_name: "Web Application",
    icon: freelance,
    iconBg: "#fff200",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Built both frontend and backend for a full-stack web application using React.js, Node.js, Express.js, and MongoDB.",
      "Collaborated on UI/UX design and integrated RESTful APIs to deliver seamless user experiences across devices.",
      "Developed core modules like job posting, user onboarding, authentication, and notification features.",
      "Ensured clean, modular code through debugging, code reviews, and consistent development practices.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://x.com/Kunal_098",
  },
  {
    name: "instagram",
    iconUrl: instagram,
    link: "https://www.instagram.com/kunal011010/",
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
    iconUrl: AlgoArena,
    theme: "btn-back-green",
    name: "Algo Arena",
    description:
      "Algo Arena is a competitive programming platform designed to enhance coding skills through real-time contests and challenges. It features a user-friendly interface for problem-solving, code submission, and leaderboard tracking, making it ideal for both beginners and experienced coders.",
    link: "https://algoarenaa.netlify.app/",
    videoUrl: {
      url: "https://jqj85xu4kj.ufs.sh/f/ebjSeZwBViRsWQvQw5U9fzQu06PF54EMAcsthVNerLyjSGaD",
      title: "Algo Arena Platform Demo",
    },
  },
  {
    iconUrl: LMS,
    theme: "btn-back-red",
    name: "Learning Management Systems",
    description:
      "The Web Learning Platform is a dynamic and intuitive e-learning application built with Next.js. It allows administrators to create and manage courses effortlessly using YouTube links, enabling learners to access structured video content for various topics.",
    link: "https://weblearning-phi.vercel.app/",
    videoUrl: {
      url: "https://jqj85xu4kj.ufs.sh/f/ebjSeZwBViRszqSXpXdUmsY3HDtl5TiCoWrbwVXvByq2Pgf7",
      title: "Web Learning Platform Demo",
    },
  },
  {
    iconUrl: socialMedia,
    theme: "btn-back-green",
    name: "Web Media",
    description:
      "Web Media is a MERN stack-based social platform for real-time posts, likes, comments, and profile updates. It offers secure authentication and a smooth user experience with a modern, scalable design.",
    link: "https://web-media.onrender.com/",
    videoUrl: {
      url: "https://jqj85xu4kj.ufs.sh/f/ebjSeZwBViRsMECieAN1L7kc0EQ6S93V5IoYWDZ4hNCPqGni",
      title: "Web Media Platform Demo",
    },
  },
  {
    iconUrl: chat,
    theme: "btn-back-blue",
    name: "Random Chat",
    description:
      "Random Chat Application is a real-time anonymous chat platform built with the MERN stack and Socket.io. It allows users to connect, chat, and skip to new conversations instantly, with real-time messaging and typing indicators.",
    link: "https://web-chat-94zg.onrender.com/",
    videoUrl: {
      url: "https://jqj85xu4kj.ufs.sh/f/ebjSeZwBViRsl3dXsnZza20wh4rynRvVOgGDEu15TdjQMoUx",
      title: "Random Chat Platform Demo",
    },
  },
  {
    iconUrl: Npm,
    theme: "btn-back-red",
    name: "Mail Sender npm pkg",
    description:
      "Mail Sender is a simple Node.js utility built with Nodemailer to send emails effortlessly. Ideal for password resets, verifications, and notifications with support for dynamic templates.",
    link: "https://www.npmjs.com/package/@kunal_kumar/mail-sender-sdk",
    videoUrl: null,
  },
  {
    iconUrl: paraseek, // You can add a relevant icon if available
    theme: "btn-back-yellow",
    name: "ParaSeek",
    description:
      "ParaSeek is a job and skill discovery platform built to simplify career planning through personalized training paths. It offers features like job listings, skill gap analysis, resume builder, and community support to assist users in preparing for the modern job market.",
    link: "https://paraseek.devxmanan.com/",
    videoUrl: null,
  },
];

export const blogs = [
  {
    name: "What is WSL ?",
    description:
      "WSL is like a magical box that appears only when you need it, and disappears when you’re done.Imagine you’re using Windows but suddenly need a Linux system for a specific task — maybe you want to run Judge0, which only works in a Linux environment",
    link: "https://medium.com/@kunal34255/what-is-wsl-ae410d3106f1",
  },
  {
    name: "The Power of Promises in JavaScript with Real-Life Examples",
    description:
      "Promises in JavaScript are like a promise you make to a friend. When you promise to do something, you might not be able to do it right away, but you will do it eventually. In JavaScript, promises help us handle tasks that take time, like fetching data from a server.",
    link: "https://medium.com/@kunal34255/the-power-of-promises-in-javascript-with-real-life-examples-860dea435a34",
  },
  {
    name: "Write Once, Run Everywhere: A Guide to Polyfills in JavaScript",
    description:
      "Polyfills are like magic spells that make old browsers understand new JavaScript features. They allow developers to use the latest features without worrying about compatibility issues, ensuring a consistent experience across different browsers.",
    link: "https://medium.com/@kunal34255/write-once-run-everywhere-a-guide-to-polyfills-in-javascript-93b80c679bf9",
  },
];
