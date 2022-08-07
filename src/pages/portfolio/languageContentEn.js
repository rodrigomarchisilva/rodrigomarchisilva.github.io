import personalWebsite from '../../images/personal-website.png';
import lessonsLearned from '../../images/lessons-learned.png';

const mainTitle = 'Portfolio';

const projects = [
  {
    name: 'Rodrigo Marchi Silva',
    image: personalWebsite,
    description: `It's this website you are navigating on now! My personal website. It is a simple website that I 
    developed with React to show my background, skills and projects.`,
    technologiesTitle: 'Technologies',
    technologies: ['React', 'Context API', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/',
    appLinkTitle: 'View app',
    codeLink: 'https://github.com/rodrigomarchisilva/rodrigomarchisilva.github.io',
    codeLinkTitle: 'Access source code',
  },
  {
    name: 'Lessons Learned',
    image: lessonsLearned,
    description: `The first website I ever developed. It is completely basic, consisting of only one page, HTML + CSS. 
    I used Bootstrap to make it responsible, but I kept the style as it was on the original, only replacing the old photo.`,
    technologiesTitle: 'Technologies',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/trybe-lessons-learned/',
    appLinkTitle: 'View app',
    codeLink: 'https://github.com/rodrigomarchisilva/trybe-lessons-learned',
    codeLinkTitle: 'Access source code',
  },
];

const languageContent = {
  mainTitle,
  projects,
};

export default languageContent;