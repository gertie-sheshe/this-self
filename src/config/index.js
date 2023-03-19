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
