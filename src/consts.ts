import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Lucas' Portfolio",
  EMAIL: "lucascoppola21@gmail.com",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Lucas Coppola's Portfolio",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/LucasCoppola",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/lucas-coppola",
  },
];
