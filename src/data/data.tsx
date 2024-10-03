import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  CalendarIcon,
  // FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import PdfIcon from '../components/Icon/PdfIcon';
import UrlIcon from '../components/Icon/UrlIcon';
import YoutubeIcon from '../components/Icon/YoutubeIcon';
import detailBG from '../images/2.png';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/bg2.jpg';
import testimonialImage from '../images/bg3.png';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/career_photo.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import androidIcon from '../images/techIcon/android.png';
import angularIcon from '../images/techIcon/angular.png';
import appleIcon from '../images/techIcon/apple.png';
import azureIcon from '../images/techIcon/azure.png';
import bootstrapIcon from '../images/techIcon/bootstrap.png';
import cssIcon from '../images/techIcon/css.png';
import defaultIcon from '../images/techIcon/default.png';
import dockerIcon from '../images/techIcon/docker.png';
import figmaIcon from '../images/techIcon/figma.png';
import firebaseIcon from '../images/techIcon/firebase.png';
import flaskIcon from '../images/techIcon/flask.png';
import gcpIcon from '../images/techIcon/gcp.png';
import htmlIcon from '../images/techIcon/html.png';
import javafxIcon from '../images/techIcon/javafx.png';
import mongodbIcon from '../images/techIcon/mongodb.png';
import mysqlIcon from '../images/techIcon/mysql.png';
import nodeIcon from '../images/techIcon/node.png';
import openaiIcon from '../images/techIcon/openai.png';
import postmanIcon from '../images/techIcon/postman.png';
import reactIcon from '../images/techIcon/react.png';
import reactNativeIcon from '../images/techIcon/reactNative.png';
import socketioIcon from '../images/techIcon/socketio.png';
import tailwindIcon from '../images/techIcon/tailwind.png';
import viteIcon from '../images/techIcon/vite.png';
import vueIcon from '../images/techIcon/vue.png';
import webpackIcon from '../images/techIcon/webpack.png';
import wechatminiIcon from '../images/techIcon/wechatmini.png';
import yarnIcon from '../images/techIcon/yarn.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

export const detailBg = detailBG;

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Muyang Portfolio',
  description: "Muyang Li's portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'Projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'Contact',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Muyang Li`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        BCIT Computer Systems Technology Student with
        <strong className="text-stone-100"> one year of hands-on experience as a Frontend Developer </strong>. and three
        years of experience in software development. Skilled in planning, designing, and developing applications that
        adhere to industry standards using agile methodologies. I am also a collaborative team player with strong
        communication skills, effectively engaging with both colleagues and clients to ensure seamless project
        execution.
        <br />
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a BCIT student, I'm passionate about creating beautiful and functional user interfaces. 
  Proficient in planning, designing, and developing applications that meet industrial standards using agile methodology. I am comfortable working with both frontend and backend technologies.`,
  aboutItems: [
    {label: 'Location', text: 'Richmond, BC', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Interests', text: 'Hiking, Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'British Columbia Institute of Technology', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML5 & CSS3',
        level: 8,
      },
      {
        name: 'UI/UX Mockups',
        level: 5,
      },
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Vue',
        level: 6,
      },
      {
        name: 'Tailwind / Bootstrap',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'MySQL & SQLite',
        level: 6,
      },
      {
        name: 'Laravel',
        level: 6,
      },
      {
        name: 'Flask',
        level: 6,
      },
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'Cloud Platforms',
        level: 5,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'JavaScript',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'PHP',
        level: 5,
      },
      {
        name: 'SQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Mandarin',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Japanese',
        level: 5,
      },
    ],
  },
];

export const techIcons: {[key: string]: string} = {
  android: androidIcon,
  angular: angularIcon,
  apple: appleIcon,
  azure: azureIcon,
  bootstrap: bootstrapIcon,
  css: cssIcon,
  docker: dockerIcon,
  figma: figmaIcon,
  firebase: firebaseIcon,
  flask: flaskIcon,
  gcp: gcpIcon,
  html: htmlIcon,
  javafx: javafxIcon,
  mongodb: mongodbIcon,
  mysql: mysqlIcon,
  openai: openaiIcon,
  postman: postmanIcon,
  react: reactIcon,
  reactNative: reactNativeIcon,
  socketio: socketioIcon,
  tailwind: tailwindIcon,
  vite: viteIcon,
  vue: vueIcon,
  webpack: webpackIcon,
  wechatmini: wechatminiIcon,
  yarn: yarnIcon,
  node: nodeIcon,
  default: defaultIcon,
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'MealPlanIQ',
    description:
      'The team updated and enhanced an existing app, adding features such as user subscriptions, payment processing, and HTML email (with PDF attachment) generations.',
    url: '/detail/0',
    image: porfolioImage1,
    content: [
      'Collaborated in a team of five to enhance an existing app into a responsive web application.',
      'Consulted with the client in weekly scrum meetings, planned, designed and contributed to frontend development and Backend REST API development.',
      'Key contributions as a full-stack developer included developing real-time HTML email generation with PDF attachments, converting legacy CSS to responsive CSS, designing and developing nutritional table and shopping list, updating meal plan APIs to incorporate new features.',
      'Technologies: Angular, Flask, Firebase Auth, Tailwind, Maizzle, Figma, Docker, MySQL, GCP.',
    ],
    tech: ['angular', 'flask', 'firebase', 'tailwind', 'maizzle', 'figma', 'docker', 'mysql', 'gcp'],
    time: ['April 2024', 'May 2024'],
    socials: [{label: 'Pdf', Icon: PdfIcon, href: '/assets/recommendation.pdf'}],
  },
  {
    title: 'Vacapal',
    description:
      'VacaPal, is a travel planning and coordination app to help friends create travel itineraries and make informed decisions, with the help of sentiment analysis in chat rooms. The team designed and developed the app followed agile.',
    url: '/detail/1',
    image: porfolioImage2,
    content: [
      'Collaborated in a team of four to develop a mobile-first web application powered by OpenAI API that helps users develop travel itineraries and chat with travel group members.',
      'Brainstormed, planned, designed, developed, and tested the application from inception using agile methodologies.',
      'Key contributions as a full-stack developer included designing and implementing real-time chat rooms and APIs, designing and developing the itinerary generations, maintaining the application by updating dependencies and resolving conflicts post-development, dockerizing and deploying the project to Google Cloud.',
      'Technologies: Node.js, Express.js, Bootstrap, EJS, OpenAI, MongoDB, Socket.IO, Jest, Docker, GCP.',
    ],
    tech: ['node', 'express', 'bootstrap', 'ejs', 'openai', 'mongodb', 'socketio', 'jest', 'docker', 'gcp'],
    time: ['April 2023', 'May 2023'],
    socials: [
      {label: 'hosted Link', Icon: UrlIcon, href: 'https://vacapal-dkv72v2xfa-uc.a.run.app'},
      {label: 'Youtube', Icon: YoutubeIcon, href: 'https://www.youtube.com/watch?v=f8QPXhOJlO0'},
      {label: 'Github', Icon: GithubIcon, href: 'https://github.com/iwen-sue/2800-202310-DTC01'},
    ],
  },

  {
    title: 'Physical Test Assistance',
    description: 'A wechat mini program that helps users to prepare for physical tests. ',
    url: '/detail/2',
    image: porfolioImage3,
    content: [
      'Developed a Wechat Mini Program that helps users prepare for physical tests by providing training plans, tracking progress, and offering tips.',
      'Worked in the development team of New Oriental Education & Technology Group company as a Frontend Developer.',
    ],
    time: ['May 2021', 'September 2021'],
    tech: ['wechatmini', 'html', 'css'],
    socials: [],
  },
  {
    title: 'Office Management System',
    description: 'A office management system that helps the company to manage their employees, projects, and tasks. ',
    url: '/detail/3',
    image: porfolioImage4,
    content: [
      'Developed a web application that helps the company manage their employees, projects, and tasks.',
      'Worked in the development team of Magic Creativity Co LTD company as a Frontend Developer.',
    ],
    time: ['October 2021', 'January 2022'],
    tech: ['vue', 'css', 'html'],
    socials: [],
  },
  {
    title: 'Project Portfolio',
    description:
      'A responsive web application designed to showcase projects, built with modern web technologies, and deployed to Google Cloud using Docker. The project highlights a clean, intuitive UI with excellent performance and scalability.',
    url: '/detail/4',
    image: porfolioImage5,
    content: [
      'Planned, designed, and developed a responsive web application to showcase various projects using modern web development technologies.',
      'Integrated Docker to containerize the application, ensuring seamless deployment to Google Cloud Platform (GCP).',
      'Utilized TypeScript, React.js, Next.js, and Tailwind CSS for a fast, responsive, and scalable front-end.',
      'Ensured that the application is fully responsive and optimized for different devices and screen sizes.',
      'Leveraged agile methodologies for efficient project planning, development, and iteration.',
      'Deployed the application to Google Cloud using a Dockerized environment to ensure reliability and scalability.',
    ],
    tech: ['docker', 'typescript', 'reactjs', 'tailwind', 'yarn', 'gcp', 'nextjs'],
    time: ['August 2024', 'Present'],
    socials: [{label: 'hosted Link', Icon: UrlIcon, href: 'https://muyangdev.com/'}],
  },
  {
    title: 'EcoStack',
    description:
      'EcoStack is a puzzle game developed with an environmental theme, aimed at raising awareness about recycling and waste management. The game challenges players to manage waste by recycling and composting, with automatic saving, level upgrades, and a scoring system to enhance gameplay.',
    url: '/detail/5',
    image: porfolioImage6,
    content: [
      'Developed EcoStack in a team of two, focusing on environmental education through gameplay.',
      'The player’s goal is to manage waste by recycling and composting, aligning with ecological themes and promoting awareness about proper waste management.',
      'Implemented features such as automatic saving, level upgrades, and a scoring system to create an engaging user experience.',
      'The game was built using JavaFX and Java, leveraging these technologies for smooth gameplay and interface design.',
    ],
    tech: ['javafx', 'java'],
    time: ['October 2023', 'December 2023'],
    socials: [],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Jan 2023 – Current',
    location: 'British Columbia Institute of Technology ',
    title: 'Computer Systems Technology Diploma',
    content: <p></p>,
  },
  {
    date: 'Jan 2024',
    location: 'Microsoft Learn',
    title: 'Microsoft Trainings',
    content: (
      <p>
        Obtained Microsoft Certifications: AZ900: Azure Fundamentals, SC900: Security, Compliance, and Identity
        Fundamentals
      </p>
    ),
  },
  {
    date: '2016-2018',
    location: 'University of Melbourne',
    title: 'Bachelor of Arts',
    content: <p>Majors in Asian Studies and Japanese.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Oct 2021 – Jan 2022',
    location: 'Magic Creativity Co LTD, Tianjin, China',
    title: 'Frontend Developer',
    content: <p>Developed responsive websites collaboratively with the other members in the technology team.</p>,
  },
  {
    date: 'Mar 2021 – Sep 2021',
    location: 'New Oriental Education & Technology Group, Tianjin, China',
    title: 'Frontend Developer',
    content: (
      <p>
        Developed 50+ web pages under the supervision of a Senior Developer
        <br />
        Performed independent problem-solving skills & research skills. Diagnosed & solved bugs, made sure projects are
        running with a high-standard user-experience.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Julie Oh, Software Developer - Vacapal and MealPlanIQ Team',
      text: 'Muyang is an incredibly hard-working and responsible software engineer who always goes above and beyond. She has been an invaluable member who commits to deliver high-quality work on time.',
      image: '/avatar.png',
    },
    {
      name: 'Warren Todd, Galapagos Technologies Incorporated CEO',
      text: 'Muyang consistently brings a positive attitude to the workplace, which fosters a collaborative and productive environment. She is not only a strong communicator but also a proactive problem solver who is always eager to take on new challenges.',
      image: '/avatar.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Please don't hesitate to reach out to me with any inquiries!",
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'globalyy2020@gmail.com',
      href: 'mailto:globalyy2020@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Richmond BC, Canada',
      href: 'https://www.google.ca/maps/place/Richmond,+BC/@49.1784071,-123.2185721,12z/data=!3m1!4b1!4m6!3m5!1s0x54867599f4ef4d3d:0x6a5024adba02fab5!8m2!3d49.1665898!4d-123.133569!16zL20vMDE3OXEw?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: '@GlobalYZ',
      href: 'https://github.com/GlobalYZ',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/GlobalYZ'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/muyangli1996/'},
  {label: 'pdf', Icon: PdfIcon, href: '/assets/recommendation.pdf'},
];
