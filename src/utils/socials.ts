import {
  BehanceLogo,
  Browser,
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
} from "@phosphor-icons/react";

export const links = {
  website: "http://ultimatemercer.com",
  email: "mailto:ultimatemercer.blklight+blog@gmail.com",
  github: "https://github.com/UltimateMercer",
  linkedin: "https://www.linkedin.com/in/ultimatemercer/",
  behance: "https://www.behance.net/ultimatemercer",
  medium: "https://medium.com/@ultimatemercer",
  instagram: "",
};

export const IconSocials = [
  {
    name: "Website",
    link: links.website,
    icon: Browser,
  },
  {
    name: "Email",
    link: links.email,
    icon: Envelope,
  },
  {
    name: "Github",
    link: links.github,
    icon: GithubLogo,
  },
  {
    name: "Linkedin",
    link: links.linkedin,
    icon: LinkedinLogo,
  },
  {
    name: "Behance",
    link: links.behance,
    icon: BehanceLogo,
  },
  {
    name: "Medium",
    link: links.medium,
    icon: MediumLogo,
  },
  {
    name: "Instagram",
    link: links.instagram,
    icon: InstagramLogo,
  },
];

export const ariaLabel = (
  language: "pt-br" | "en-us",
  text: string
): string => {
  return language === "en-us" ? `Access ${text}` : `Acessar ${text}`;
};
