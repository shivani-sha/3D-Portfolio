import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

// Tech icons
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import cpp from "../assets/tech/cpp.png";
import java from "../assets/tech/java.png";
import python from "../assets/tech/python.png";
import spring from "../assets/tech/spring.png";
import postgresql from "../assets/tech/postgresql.png";
import socketio from "../assets/tech/socketio.png";



// Company logos
import opsnetic from "../assets/company/opsnetic.jpg";
import cisco from "../assets/company/cisco.jpg";
import coding from "../assets/company/coding.jpg";

// Project images
import quiz from "../assets/quiz.png";
import chatApp from "../assets/chatApp.png";
import ai from "../assets/ai.png";
import bytedefender from "../assets/bytedefender.png";
import amazon from "../assets/amazon.png";
import path from "../assets/path.png";

// Service icons
import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import mern from "../assets/mern.png";
import software  from "../assets/software.png";

export {
  mobile,
  backend,
  mern,
  software,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  postgresql,
  socketio,
  tailwind,
  nodejs,
  mongodb,
  git,
  opsnetic,
  cisco,
  coding,
  quiz,
  chatApp,
  ai,
  bytedefender,
  amazon,
  path,
  cpp,
  java,
  python,
  spring,
};



export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Software Developer",
    icon: software,
  },
  {
    title: "Mern Stack Developer",
    icon: mern,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies: TTechnology[] = [
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql, // make sure you import this
  },
  {
    name: "Socket.IO",
    icon: socketio, // make sure you import this
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Git",
    icon: git,
  }
];


const experiences: TExperience[] = [
  {
    title: "Software Engineering Intern",
    companyName: "Opsnetic Private Limited",
    icon: opsnetic,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Improved application load performance by 20% through optimized code and best practices.",
      "Collaborated with backend teams to debug APIs for smooth data flow.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Trainee",
    companyName: "Cisco",
    icon: cisco,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Developed knowledge in cloud computing, cybersecurity, and networking through practical modules.",
      "Gained hands-on experience by working on project-based learning activities.",
      "Strengthened understanding of security best practices and network fundamentals.",
      "Enhanced communication and teamwork skills through collaborative training sessions.",
    ],
  },
  {
    title: "Teacher Assistant",
    companyName: "Coding Ninjas",
    icon: coding,
    iconBg: "#383E56",
    date: "July 2022 - Dec 2022",
    points: [
      "Resolved 1500+ coding doubts in C++ for the Data Structures and Algorithms curriculum.",
      "Mentored students in problem-solving strategies, time complexity analysis, and debugging.",
      "Assisted in optimizing code logic for efficiency and industry-level best practices.",
      "Supported learners with personalized guidance to strengthen core programming concepts.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Working with Shivani has been a game changer. Their dedication and expertise brought tremendous value to our team.",
    name: "Raj Sharma",
    designation: "Senior Analyst",
    company: "Opsnetic Private Limited",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    testimonial:
      "Shivani's innovative solutions and hard work impressed everyone A true professional and team player.",
    name: "Anuradha Sharma",
    designation: "Software Engineer",
    company: "Coding Ninjas",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    testimonial:
      "I've seen Shivani consistently deliver exceptional results, driving success in our projects.",
    name: "Rishav Maheshwari",
    designation: "Senior Software Engineer",
    company: "Opsnetic Private Limited",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];


const projects: TProject[] = [
  {
    name: "Quiz App",
    description:
      "A Spring Boot-based backend application for dynamic quiz generation, category filtering, and automated score evaluation using PostgreSQL.",
    tags: [
      {
        name: "java 17",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    sourceCodeLink: "https://github.com/shivani-sha/quiz-app",
  },
  {
    name: "Mern Chat App",
    description:
      "A real-time chat application built with the MERN stack and Socket.IO, featuring 1-on-1 and group messaging with JWT authentication.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chatApp,
    sourceCodeLink: "https://github.com/shivani-sha/mern-chat-app",
  },
  {
    name: "Ai Article Summarizer",
    description:
      "A Chrome extension that generates concise article summaries using JavaScript, custom UI, and Chrome Extension APIs.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    sourceCodeLink: "https://github.com/shivani-sha/ai-article-summariser",
  },
  {
    name: "Byte Defender",
    description:
      "A web application that detects malicious behavior in PE files and generates detailed alerts and logs based on the analysis.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "pe file analysis",
        color: "pink-text-gradient",
      },
    ],
    image: bytedefender,
    sourceCodeLink: "https://github.com/shivani-sha/byte-defender",
  },
    {
    name: "Amazon Clone",
    description:
      "An Amazon Clone web app built with Java, React.js, CSS, Context API, and Firebase, featuring user authentication, dynamic cart management, and checkout functionality.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "react context api",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    sourceCodeLink: "https://github.com/shivani-sha/Amazon-Clone",
  },
        {
    name: "Path Visualizer",
    description:
      "A C++ application that visualizes pathfinding algorithms like BFS and DFS, simulating maze traversal with obstacles using graph-based logic.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "graphs",
        color: "green-text-gradient",
      },
      {
        name: "pathfinding algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: path,
    sourceCodeLink: "https://github.com/shivani-sha/Path-Visualizer",
  },

];

export { services, technologies, experiences, testimonials, projects };
