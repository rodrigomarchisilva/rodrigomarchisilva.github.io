import personalWebsite from '../../images/personal-website.png';

const mainTitle = 'Portfolio';

const projects = [
  {
    name: 'Rodrigo Marchi Silva',
    image: personalWebsite,
    description: 'My personal website. It is a simple website that I developed with React to show my background, skills and projects.',
    technologiesTitle: 'Technologies',
    technologies: ['React', 'Context API', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/',
    appLinkTitle: 'View app',
    codeLink: 'https://github.com/rodrigomarchisilva/rodrigomarchisilva.github.io',
    codeLinkTitle: 'Access source code',
  },
];

const languageContent = {
  mainTitle,
  projects,
};

export default languageContent;