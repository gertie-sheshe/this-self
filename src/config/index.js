import avatarImg from "../../public/avatar.png";

// NAVIGATION
export const navLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Writing",
    href: "/writing",
  },
  {
    name: "Speaking",
    href: "/speaking",
  },
  {
    name: "Accessibility",
    href: "/accessibility",
  },
  {
    name: "Achievements",
    href: "/achievements",
  },
];

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

// ACHIEVEMENTS PAGE
export const achievements = [
  {
    title: "Spotlighted by Nation Media Group",
    description: "Tech disruptors bridging the digital divide across sectors",
    href: "https://nation.africa/kenya/news/gender/meet-tech-disruptors-bridging-the-digital-divide-across-sectors-4151200",
  },
  {
    title:
      "Accepted into Aaron Gustafson 2023 Mentorship for Web Professionals",
    description:
      "This year-long mentorship offers the opportunity to learn from Aaron Gustafson, a highly experienced Principal Accessibility Innovation Strategist and leader at Microsoft's AI for Accessibility Initiative",
  },
  {
    title: "Spotlighted as an Accessibility Champion by The A11y Project",
    href: "https://www.a11yproject.com/spotlight/gertrude-nyenyeshi/",
    description:
      "I am proud to be recognized as an accessibility champion. This distinction highlights my commitment and efforts towards promoting accessibility in the digital space",
  },
  {
    title: "Accepted into Microsoft LEAP, Senior Software Engineer Cohort",
    description:
      "A program designed to provide Senior Engineers with the skills, knowledge and experience they need to take their careers to the next level.",
  },
  {
    title: "Finished AWS Cloud Engineer Nanodegree",
    description:
      "Successfully completed and graduated from the AWS Cloud Engineer Nanodegree program offered by Udacity",
  },
  {
    title: "6 Month Mentorship with Gertrude",
    description:
      "I guided six exceptional women across Africa (Kenya, Nigeria and South Africa) in the field of software engineering with a focus on frontend development. This was an opportunity to share my expertise and experience with the next generation of tech leaders.",
  },
];

// SPEAKING PAGE
export const talks = [
  {
    title: "Overcoming Career Challenges",
    host: "Eldoret Women Techmakers, 2023",
    date: "2023",
    location: "Eldoret, Kenya",
    description:
      "Empowering individuals to navigate their professional journey with resilience and confidence, through practical guidance on overcoming career challenges",
  },
  {
    title: "Building Accessible Web Apps: A Technical Deep Dive",
    host: "LuxTech - Industry Experts, 2023",
    date: "2023",
    location: "Nairobi, Kenya",
    description:
      "A deep dive into the technical aspects of designing and building web apps that are inclusive and accessible.",
  },
  {
    title: "She Talks Tech Podcast",
    host: "She Talks Tech, 2023",
    location: "South Africa",
    description:
      "Sharing insights and experiences from my personal career journey in the tech industry,",
    date: "2023",
  },
  {
    title: "Building the Web with Empathy",
    host: "Women in Technology Network, 2022",
    location: "Zambia",
    description:
      "Delving into the critical importance of accessibility in web development and design, and how empathy can be a driving force in building inclusive digital experiences",
    date: "2022",
  },
  {
    title: "Web Accessibility for Developers",
    host: "Accessibility Africa, 2022",
    location: "Africa",
    description:
      "Equipping developers with practical tools and processes to enhance web accessibility",
    date: "2022",
  },
  {
    title: "Testing for Web Accessibility",
    host: "DeveloperISH, 2022",
    location: "Nairobi, Kenya",
    description:
      "Sharing insights and practical techniques for both manual and automated testing of web accessibility",
    date: "2022",
  },
  {
    title: "Frontend Documentation",
    host: "Meta Developer Circles - Lusaka, 2021",
    description:
      "Highlighting the importance of documenting the frontend of web applications and providing guidance on which areas to focus on",
    location: "Lusaka, Zambia",
    date: "2021",
  },
  {
    title: "Accessibility in Civic Tech",
    host: "Code for Africa, 2021",
    description:
      "Contributing to a panel discussion on the vital role of accessibility in civic tech, with insights and perspectives on building inclusive and accessible digital products for all users.",
    location: "Africa",
    date: "2021",
  },
  {
    title: "Performant Javascript",
    host: "Meta Developer Circles - Rwanda, 2020",
    location: "Kigali, Rwanda",
    description:
      "practical tips on writing performant algorithms in Javascript",
    date: "2020",
  },
  {
    title: "Taking Accessibility with You",
    host: "Indoni Conf, 2020",
    location: "Cape Town, South Africa",
    description:
      "Sharing practical guidance and strategies on integrating accessibility into all phases of digital product development, from UX to Testing,",
    date: "2020",
  },
  {
    title: "Mentorship Panel",
    host: "African Women in Technology, 2018",
    location: "Nairobi, Kenya",
    description:
      "Contributing experiences to a mentorship panel at an event, exploring the significant benefits and value that mentorship can offer in one's career journey.",
    date: "2018",
  },
  {
    title: "Accessibility and You",
    host: "DevCraft Kenya, 2018",
    location: "Nairobi, Kenya",
    description:
      "Sharing actionable tips on how to effectively incorporate accessibility into every stage of digital product development",
    date: "2018",
  },
  {
    title: "Introduction to React and React Native",
    host: "Meta Developer Circles - Nairobi, 2018",
    location: "Nairobi",
    description:
      "Providing an introductory overview of React and React Native, in an informative talk geared towards developers interested in learning more about these Javascript libraries.",
    date: "2018",
  },
  {
    title: "Javascript Workshop",
    host: "Riara University, 2018",
    location: "Nairobi, Kenya",
    description:
      "Workshop for beginner-level learners on the fundamentals of Javascript for web development.",
    date: "2018",
  },
  {
    title: "Start from Scratch",
    host: "TechInPink, 2017",
    location: "Nairobi, Kenya",
    description:
      "A one-day workshop for beginners to learn about web development, covering the basics of HTML, CSS, and Javascript and equipping participants with the foundational skills to build their own websites.",
    date: "2017",
  },
  {
    title: "Panel at Google DevFest",
    location: "Nairobi, Kenya",
    host: "Google Developer Group - Nairobi, 2017",
    description:
      "Sharing experiences and insights on a career in tech as a panelist in an interactive Q&A session",
    date: "2017",
  },
];

// WRITING PAGE
export const articles = [
  {
    title: "Strategies for a Resilient Frontend",
    published: "December 2022",
    description:
      "Considering the resilience of your frontend is an essential part of modern web development. It involves implementing and designing strategies that ensure the frontend remains stable, responsive and usable, especially in the face of failures and challenges. In this article, I will explore strategies and techniques you can explore in order to build frontend applications that are robust and reliable.",
    href: "https://www.nyenyeshi.dev/frontend/strategies-for-a-resilient-frontend",
  },
  {
    title: "Request Retries on the Frontend: What to Think About",
    published: "December 2022",
    description:
      "When thinking about resilience while building frontend applications, implementing retries for slow or failed network requests is a possible solution to be explored. This approach allows the frontend to automatically retry requests, which can improve stability and reliability of the application.   However, it is important to think about how to carefully implement them in order not to run into problems like data duplication, performance problems and masking of underlying issues.",
    href: "https://www.nyenyeshi.dev/frontend/request-retries-on-the-frontend-what-to-think-about",
  },
  {
    title: "Part 1: Out of The Tar Pit - Complexity and Causes",
    published: "November 2022",
    description:
      "One of the main challenges in maintaining enterprise software is having to deal with system complexity. Out of The Tar Pit, a paper written by Ben Mosely and Peter Marks aims to identify main reasons behind complexity and how to go about eliminating or reducing it. This is a summary of my understanding of the paper.",
    href: "https://www.nyenyeshi.dev/other/part-1-out-of-the-tar-pit-complexity-and-causes",
  },
  {
    title: "Testing for Web Accessibility",
    published: "September 2022",
    description:
      "Understanding how different users use and navigate the web informs us on the best way to test our products to ensure they are meeting everyone’s needs.",
    href: "https://www.nyenyeshi.dev/accessibility/testing-for-web-accessibility",
  },
  {
    title: "Web Accessibility for Developers",
    published: "September 2022",
    description:
      "Developers spend a good part of their time learning how to build better. How to improve the Performance, Scalability, Security, Usability, Resilience etc of their applications and systems. Accessibility is no different and effort should be spent on improving it.",
    href: "https://www.nyenyeshi.dev/accessibility/web-accessibility-for-developers",
  },
  {
    title: "What is Web Accessibility and Why it Matters.",
    published: "September 2022",
    description:
      "Millions of diverse users browse the web daily and these users navigate and interact with the web differently. Building a more accessible web ensures a good user experience for all users on the web. Originally written for Accessibility Africa",
    href: "https://www.nyenyeshi.dev/accessibility/what-is-web-accessibility-and-why-it-matters",
  },
  {
    title: "Chaos Engineering on the Front End: Building Resilient UIs",
    published: "August 2022",
    description:
      "Chaos engineering is basically building the resilience of your systems by deliberately introducing faults, errors and failures at random. By doing this, your team is then able to build robust systems able to handle different failure scenarios.",
    href: "https://www.nyenyeshi.dev/frontend/chaos-engineering-on-the-front-end-building-resilient-uis",
  },
  {
    title: "Understanding Chaos Engineering",
    published: "August 2022",
    description:
      "I came across the term Chaos Engineering while reading Fundamentals of Software Architecture by Mark Richards and Neal Ford a few weeks ago. I may have heard the term before - but I did not approach it with the same amount of interest that I have now.",
    href: "https://www.nyenyeshi.dev/other/understanding-chaos-engineering",
  },
  {
    title:
      "Building my Technical Blog with NextJS, SanityCMS, Sanity Portable/Text-To-React, Styled-Components + Netlify",
    published: "July 2022",
    description:
      "Early July 2022, I moved my blog from Medium. This article entails the process and the technologies that I used.",
    href: "https://www.nyenyeshi.dev/frontend/building-my-technical-blog-with-nextjs-sanitycms-sanity-portable-text-to-react-styled-components",
  },
  {
    title: "Clean Code: Writing Readable Reducers.",
    published: "July 2022",
    description:
      "As I was reading the definitions of what different people think of as clean code in the book Clean Code by Robert Martin, my favorites were:  “Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer’s intent but rather is full of crisp abstractions and straightforward lines of control. - Grady Booch, author of Object Oriented Analysis and Design with Applications”",
    href: "https://www.nyenyeshi.dev/frontend/clean-code-writing-readable-reducers",
  },
  {
    title:
      "State Management (and normalization?): React Hooks, React Query, RTK createEntityAdapter",
    published: "July 2022",
    description:
      "This article is simply written as a review of tools and not in any way recommending how things should be done. Data fetching is quite an important task on the frontend, and how you structure it determines how easy things are for developers and users. Effective data fetching improves performance and usability of your application, if well implemented, it reduces the hoops developers have to jump just to deliver a smooth experience.",
    href: "https://www.nyenyeshi.dev/frontend/state-management-and-normalization-react-hooks-react-query-rtk-createentityadapter",
  },
  {
    title: "Frontend Complexity: Data + State Management",
    published: "July 2022",
    description:
      "Over the years, frontend development has grown in complexity and it is no longer about writing simple pages with HTML/CSS/Javascript. Much more skill and a lot more effort is now needed in order to deliver smooth user experiences.  Gone are the days when most of the web pages on the internet consisted of static sites with little to no interactivity. ",
    href: "https://www.nyenyeshi.dev/frontend/frontend-complexity-data-state-management",
  },
  {
    title:
      "Javascript Arrays: From Quadratic O(n^2) to Linear O(n) — Code Examples",
    published: "July 2020",
    description:
      "This article aims to show how to improve the performance of solutions implemented using Javascript arrays.    In my last article, I gave a brief of time complexities of some popular Javascript array methods. In this article, I will give three code examples of how to improve the performance in array solutions.",
    href: "https://www.nyenyeshi.dev/other/javascript-arrays-from-quadratic-o-n-2-to-linear-o-n-code-examples",
  },
  {
    title: "Functional JavaScript: Pure functions",
    published: "September 2017",
    href: "https://www.nyenyeshi.dev/other/functional-javascript-pure-functions",
  },
  {
    title: "Functional Programming and Function Chaining in JavaScript",
    published: "August 2017",
    description:
      "In my previous article, I talked about what functional programming is and a simple example of how to write non-functional code to functional. I did give a brief description of what a pure function is but I will dig deeper in this article",
    href: "https://www.nyenyeshi.dev/other/functional-programming-and-function-chaining-in-javascript",
  },
  {
    title: "Sitting down with Kent Beck",
    published: "December 2016",
    description:
      "Last week on Wednesday, I had the opportunity to sit down and have a conversation with Kent Beck for over an hour. Kent Beck is an American software developer, the creator of extreme programming, the author of books like Test Driven Development By Example, and is currently a Technical Coach at Facebook.",
    href: "https://www.nyenyeshi.dev/other/sitting-down-with-kent-beck",
  },
];

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
    href: "/",
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
