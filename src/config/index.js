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
