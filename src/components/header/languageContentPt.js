import flagBR from "../../images/icons/flag-br.png";
import floppyDisk from "../../images/icons/floppy-disk.png";

const languageButton = {
  src: flagBR,
  alt: "Bandeira do Brasil",
  title: "Alterar idioma / Alternate language",
};

const saveButton = {
  src: floppyDisk,
  alt: "Disquete",
  title: "Salvar preferências",
};

const internalLinks = [
  {
    path: 'about',
    icon: 'file-earmark-person-fill',
    name: 'Sobre',
  },
  {
    path: 'tools',
    icon: 'tools',
    name: 'Ferramentas',
  },
  {
    path: 'portfolio',
    icon: 'folder-fill',
    name: 'Portfólio',
  }
];

const externalLinks = [
  {
    path: "https://www.linkedin.com/in/rodrigo-marchi-silva/",
    icon: "linkedin",
    name: "LinkedIn"
  },
];

const logoAlt = 'Logotipo do Rodrigo';

const professionalSkill = 'Desenvolvedor Web';

const languageContent = {
  languageButton,
  saveButton,
  internalLinks,
  externalLinks,
  logoAlt,
  professionalSkill,
};

export default languageContent;