import avatarImg from "../../public/avatar.png";

// SUMMARY SECTION HOME PAGE
const socials = [
  {
    name: "GitHub",
    href: "https://github.com/gertie-sheshe",
    description: "GitHub Portfolio",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/gertiesheshe",
    description: "Twitter Account",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gertrudenyenyeshi",
    description: "LinkedIn Profile",
  },
];

const avatar = {
  src: avatarImg,
  alt: "A portrait of Gertrude",
};

export const summarySectionProps = {
  title: "Work and Profile Summary",
  description:
    "I am an Experienced Software Engineer with a specialization in Frontend. I possess expertise in architecting and maintaining scalable applications with a strong focus on performance, usability and accessibility. As an Accessibility Advocate, I founded Accessibility Africa to raise awareness and promote training and conversations around accessibility. I have a proven track record of building and managing developer communities, and I take pride in providing mentorship and guidance to junior engineers.",
  socials,
  avatar,
};

// WORK EXPERIENCE SECTION
export const workExperienceSectionProps = {
  experienceData: [
    {
      title: "Founder",
      company: "Accessibility Africa",
      location: "Africa",
      duration: "2022 - Present",
      description:
        "Provider of accessibility services, specializing in audits, training, workshops to help teams build a more accessible web.",
    },
    {
      title: "Senior Frontend Engineer",
      company: "Civic Tech Company",
      location: "Cape Town, South Africa",
      duration: "2020 - 2022",
      description:
        "Africa’s largest network of indigenous civic technology and open data laboratories.",
    },
    {
      title: "Software Consultant (Frontend)",
      company: "Anapanda",
      duration: "2020",
      location: "Nairobi",
      description:
        "Anapanda is a growth-centric company that helps professionals and organizations reach new levels of alignment, awareness and performance.",
    },
    {
      title: "Web Engineer",
      company: "BBC",
      duration: "2018 - 2019",
      location: "London, UK",
      description:
        "The BBC is the world leader in global breaking news, providing trusted, accurate, impartial and independent news ",
    },
    {
      title: "Software Engineer",
      company: "ShopKeep",
      duration: "2017",
      location: "New York",
      description:
        "Shopkeep is a cloud-based iPad point of sale featuring inventory management, detailed reporting and 25/7 support.",
    },
    {
      title: "Software Engineer",
      company: "Urbanstems",
      location: "Washington D.C",
      duration: "2016 - 2017",
      description:
        "Urbanstems is a flower delivery company based in Washington DC with offices in New York and Austin. ",
    },
  ],
};

// PROJECTS PAGE
export const projects = [
  {
    title: "Frontend Principles",
    description:
      "A central referencing place for principles, practices and information related to frontend engineering",
    href: "https://github.com/gertie-sheshe/frontend-principles",
  },
  {
    title: "Accessible Components",
    description:
      "An accessible component library that showcases examples of accessible components in various languages such as React, VueJS, Angular and plain HTML/CSS. This open source project aims to provide developers with easily accessible and understandable code snippets to create accessible components",
    href: "",
  },
  {
    title: "Images Microservice",
    description:
      "Image upload and filtering cloud application consisting of the following microservices: API Feed, API user, Reverse Proxy and Frontend App. Technologies: Kubernetes, Docker, Amazon S3, Amazon RDS, Node/Express, Sequelize",
    href: "https://github.com/gertie-sheshe/images-microservice",
  },
  {
    title: "Serverless TODO",
    description:
      "A TODO application using AWS Lambda and the Serverless framework. Technologies: DynamoDB, Lambda, Serverless, Amazon S3",
    href: "https://github.com/gertie-sheshe/serverless-todo-app",
  },

  {
    title: "RepoScan",
    description:
      "Application that utilizes the GitHub API to fetch and display the most starred repositories based on various filter options such as language and time range. It also features user authentication to enable the favoriting of repositories, as well as a side-by-side repository comparison tool for streamlined analysis",
    href: "https://github.com/gertie-sheshe/trend-repo",
  },
  {
    title: "Technical Blog",
    description:
      "Technical Blog built with NextJS, Sanity CMS, Sanity API, @portable/react-to-text, styled-components and deployed to Netlify",
    href: "https://github.com/gertie-sheshe/nyenyeshi-dev",
  },
  {
    title: "Feedback Hub",
    description:
      "A feedback application built with MaterialUI, React Router, React and Redux. This application allows registered users to give feedback to a list of other users while also providing visibility to feedback given to them.",
    href: "https://github.com/gertie-sheshe/your-feedback",
  },
  {
    title: "Spotify Clone",
    description:
      "Spotify Clone. Built with NextJS (React), Spotify API, Tailwind, Next Middleware, Recoil, Next Auth",
    href: "https://github.com/gertie-sheshe/spotify",
  },
  {
    title: "Markdown Preview",
    description:
      "In-browser markdown editor. Built with HTML/CSS/Javascript + Regular Expressions",
    href: "https://github.com/gertie-sheshe/markdown-preview",
  },
  {
    title: "Document Management System",
    description:
      "Document Management System using React/Flux on Front-End. Back end built with NodeJS, Express + MongoDB. Tests written with Mocha, Sinon, Enzyme and Chai",
    href: "https://github.com/gertie-sheshe/doc4",
  },

  {
    title: "Inverted Index",
    description:
      "Generates an Inverted Index object that takes a JSON array of text objects. The index allows a user to search for text blocks in the array that contain a specified collection of words.",
    href: "https://github.com/gertie-sheshe/inverted-index",
  },
  {
    title: "String Class",
    description:
      "JavaScript project that extends the String prototype with custom functions such as hasVowel, wordCurrency, toCurrency, and toLowercase. These functions provide enhanced string manipulation capabilities to developers with minimal code overhead",
    href: "https://github.com/gertie-sheshe/stringclass",
  },
  {
    title: "GitHub Timeline App",
    description:
      "See a user's GitHub timeline. This was also an app I built while writing how to build and test for Accessibility. Built using React/Redux and GitHub API.",
    href: "https://github.com/gertie-sheshe/timeline-github",
  },
  {
    title: "Africa Data",
    description:
      "Data Visualization of the African Continent. View visualized data of different countries in Africa. Built using React/ChartJS",
    href: "https://github.com/gertie-sheshe/africa-data",
  },
  {
    title: "Agile Books",
    description:
      "Trello-like drag and drop design of books. Hold stand up sessions but with books to boost reading productivity. React/Redux on FEND and Node/Express/Mongo on BEND",
    href: "https://github.com/gertie-sheshe/agile-books",
  },
  {
    title: "Library App",
    description:
      "A  library app built with React, MaterialUI, and React Testing Library for tests. This application provides a comprehensive solution for tracking books borrowed by users from a library.",
    href: "https://github.com/gertie-sheshe/resource-fend",
  },
  {
    title: "Job Listing App",
    description:
      "Job Listing App. From Front End Mentor. Technologies/Languages: React. Context API. Typescript. Sass.",
    href: "https://github.com/gertie-sheshe/job-listing-app",
  },
  {
    title: "CSS Art Fun",
    description:
      "Learning how to manipulate HTML elements(mostly divs) with styles to create CSS Art. Building everyday things using CSS/HTML",
    href: "https://github.com/gertie-sheshe/css-art",
  },
  {
    title: "Popular Apps UI",
    description:
      "Popular apps UIs with HTML and CSS only (Spotify, Twitter etc). This was a project for fun and learning.",
    href: "https://github.com/gertie-sheshe/design-and-design",
  },
  {
    title: "TechnInPink Registration App",
    description:
      "A registration application built with Node/Express and HTML/CSS/JS for registering users for an event.",
    href: "https://github.com/gertie-sheshe/techinpink",
  },
  {
    title: "Quiz Application",
    description:
      "A quiz application built with JavaScript, HTML, and CSS. This application features a set of multiple-choice questions with an accompanying score system to provide feedback to users.",
    href: "https://github.com/gertie-sheshe/bc2-quiz-application",
  },
];
