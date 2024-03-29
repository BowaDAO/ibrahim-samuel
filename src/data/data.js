import { FaTwitter, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { DiJavascript, DiNodejs } from "react-icons/di";
import { SiTailwindcss, SiHtml5, SiFirebase, SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

export const data = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },

  {
    id: 2,
    name: "Experience",
    url: "./experience",
  },

  {
    id: 3,
    name: "Projects",
    url: "./project",
  },
];

export const icons = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/samuel-ibrahim-84154818b/",
    name: "linkedin",
  },

  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com/Oluwanbowa",
    name: "twitter",
  },

  {
    icon: <FiGithub />,
    url: "https://github.com/BowaDAO",
    name: "github",
  },

  {
    icon: <FaInstagram />,
    url: "https://instagram.com/oluwanbowa_?igshid=YmMyMTA2M2Y=",
    name: "instagram",
  },
];

export const technologies = [
  {
    icon: <DiJavascript />,
    name: "JavaScript (ES6+)",
    color: "js-color",
  },

  {
    icon: <FaReact />,
    name: "React",
    color: "react-color",
  },

  {
    icon: <FaReact />,
    name: "React Native",
    color: "react-color",
  },
  {
    icon: <SiHtml5 />,
    name: "HTML5",
    color: "html-color",
  },

  {
    icon: <SiTailwindcss />,
    name: "TailWind",
    color: "tailwind-color",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
    color: "firebase-color",
  },

  {
    icon: <DiNodejs />,
    name: "Node.js",
    color: "node-color",
  },
  {
    icon: <SiExpress />,
    name: "Express.js",
    color: "lightest-slate",
  },

  {
    icon: <TbBrandRedux />,
    name: "Redux Toolkit",
    color: "redux-color",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Technical Writer",
    company: "Zipscore ",
    location: "Berlin, Germany",
    start: "Dec 2021",
    finish: "Mar 2022",
    duties: [
      "Contributed to customer base growth by developing valuable user guides for targeted ads on popular social platforms using Zip codes (company’s primary product)",
      "Enhanced customers’ user experience by building detailed documentation that serves as a guide to using an AI tool. ",
    ],
  },

  {
    id: 2,
    title: "Content Developer ",
    company: "Mango Capital, Inc. ",
    location: "Minnesota, USA",
    start: "Feb 2021",
    finish: "Dec 2021",
    duties: [
      "Improved technical team’s productivity by 20% through strategic ticket allocation.",
      "Managed a 3-member team to roll out over 20 high-performance static websites for trucking and staffing companies.  ",
    ],
  },
];

export const projects = [
  {
    title: "Text Scrapper",
    description:
      "A simple web application built with React to scrap text from an image. It uses tesseract.js to recognize the text on an image and extract it. Wanted a tool that can help me extract text from screenshots hence I built this.",
    tools: ["React", "JavaScript", "Tesseract.js"],
    siteUrl: "https://text-scrapper.netlify.app",
    gitHubLink: "https://github.com/BowaDAO/text-scrapper",
    image: "https://i.ibb.co/8XYNnvW/text-scrapper-netlify-app-i-Pad.png",
    style: "flex-row",
  },
  {
    title: "Logistics Mobile App (Ongoing Project)",
    description:
      "The front end of a Logistics mobile application built with React Native, modeled to help customers/online shoppers enjoy doorstep delivery. The platform will operate like Bolt for delivering small-size goods/items.",
    tools: [
      "React Native",
      "JavaScript",
      "React Navigation",
      "React Native Map",
    ],
    siteUrl: "www.bowal.com",
    gitHubLink: "https://github.com/BowaDAO/logisticsMobileApp",
    image: "https://i.ibb.co/0KzMtc1/logistics-app.png",
    style: "flex-row-reverse",
  },
  {
    title: "Bowal Web App (Ongoing Project)",
    description:
      "Bowal is a social E-commerce marketplace that leverages geo-location technology to connect online vendors and buyers within every locality in Africa. The platform’s front end is being built on ReactJS and powered by Firebase as a backend service. In this project, I used the react router 6’s loader data API to interact with the backend. This allows the provision of data to each route element before rendering.",
    tools: ["JavaScript", "TailWind", "React.JS", "Firebase"],
    siteUrl: "https://bowalwebapp.netlify.app",
    gitHubLink: "https://github.com/BowaDAO/Bowal-Web-Application",
    image: "https://i.ibb.co/vzR345v/bowal-web-app.png",
    style: "flex-row",
  },

  {
    title: "Samuel's Personal Website",
    description:
      "This is my website. The same site you are interacting with at the moment. I built it on ReactJS, using react router v6 to navigate pages and Tailwind CSS to style them. There was no interaction with API as I prepared all the data internally.",
    tools: ["JavaScript", "TailWind", "React.JS"],
    siteUrl: "https://samuelibrahim.com",
    gitHubLink: "https://www.github.com/BowaDAO/ibrahim-samuel",
    image: "https://i.ibb.co/gzb36v3/samuel-s-personal-website.png",
    style: "flex-row-reverse",
  },

  {
    title: "Landing Page Template",
    description:
      "This is a fully-responsive landing page template I built with React, CSS and JavaScript. It is a simple one-pager with no routing.",
    tools: ["React.JS", "Javascript", "CSS"],
    siteUrl: "https://xamai.netlify.app/",
    gitHubLink: "https://github.com/BowaDAO/ailandingpage",
    image: "https://i.ibb.co/zXpG9W9/ailandingpage.png",
    style: "flex-row",
  },
];
