import { projectsLocales } from "../../sections/Projects/locales";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const projectTabs = [
  ...new Set(
    projectsLocales.projects.map((project) => project.category)
  ),
];

export const navbarLocales = {
  logo: "FA",
  name: "Faiz Adhytia",
  logoHref: "#",
  mobileMenuAriaLabel: "Toggle menu",

  links: [
    {
      label: "Projects",
      dropdown: projectTabs.map((tab) => ({
        label: tab,
        href: `#projects-${slugify(tab)}`,
      })),
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],

  cta: {
    label: "Let's talk",
    href: "#contact",
  },
};