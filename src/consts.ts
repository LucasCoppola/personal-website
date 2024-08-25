import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Lucas's Portfolio",
  EMAIL: "lucascoppola21@gmail.com",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Lucas Coppola's Portfolio",
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
