import flagUS from "../../images/flag-us.png";
import floppyDisk from "../../images/floppy-disk.png";

const languageButton = {
  src: flagUS,
  alt: "Bandeira dos EUA",
  title: "Alterar idioma / Alternate language",
};

const saveButton = {
  src: floppyDisk,
  alt: "Floppy disk",
  title: "Save preferences",
};

const internalLinks = [
  {
    path: 'about',
    icon: 'file-earmark-person-fill',
    name: 'About',
  },
  {
    path: 'tools',
    icon: 'tools',
    name: 'Tools',
  },
  {
    path: 'portfolio',
    icon: 'folder-fill',
    name: 'Portfolio',
  }
];

const externalLinks = [
  {
    path: "https://www.linkedin.com/in/rodrigo-marchi-silva/",
    icon: "linkedin",
    name: "LinkedIn"
  },
];

const logoAlt = 'Rodrigo\'s logotype';

const professionalSkill = 'Web Developer';

const languageContent = {
  languageButton,
  saveButton,
  internalLinks,
  externalLinks,
  logoAlt,
  professionalSkill,
};

export default languageContent;