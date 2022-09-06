import rodrigomarchisilva from '../../images/projects/rodrigomarchisilva.png';
import lessonsLearned from '../../images/projects/trybe-lessons-learned.png';
import starwarsPlanetsSearch from '../../images/projects/trybe-starwars-planets-search.png';
import art from '../../images/projects/battisti-bootstrap-art.png';
import wallet from '../../images/projects/trybe-wallet.png';

const mainTitle = 'Portfolio';

const standardKeys = {
  technologiesTitle: 'Technologies',
  appLinkTitle: 'View app',
  codeLinkTitle: 'Access source code',
};

const projects = [
  {
    ...standardKeys,
    name: 'Wallet',
    image: wallet,
    description: `Trybe's Frontend project. Uses class components and fetchs updated currencies data from AwesomeAPI. There is a 
    login screen with its own validation logic, and a form, to create and update expenses.`,
    technologies: ['React', 'Redux', 'Material UI'],
    appLink: 'https://rodrigomarchisilva.github.io/trybe-wallet/',
    codeLink: 'https://github.com/rodrigomarchisilva/trybe-wallet',
  },
  {
    ...standardKeys,
    name: 'Starwars Planets Search',
    image: starwarsPlanetsSearch,
    description: `Trybe's Frontend React Context API project. Involves the usage of React Context API + Hooks to manage global state, 
    fetching from SWAPI (Star Wars API) and displaying the results in a table with filtering options. Styled with Bootstrap.`,
    technologies: ['React', 'Context API + Hooks', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/trybe-starwars-planets-search/',
    codeLink: 'https://github.com/rodrigomarchisilva/trybe-starwars-planets-search',
  },
  {
    ...standardKeys,
    name: 'Rodrigo Marchi Silva',
    image: rodrigomarchisilva,
    description: `It's this website you are navigating on now! My personal website. It is a simple website that I 
    developed with React to show my background, skills and projects.`,
    technologies: ['React', 'Context API + Hooks', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/',
    codeLink: 'https://github.com/rodrigomarchisilva/rodrigomarchisilva.github.io',
  },
  {
    ...standardKeys,
    name: 'Lessons Learned',
    image: lessonsLearned,
    description: `The first website I ever developed. It is completely basic, consisting of only one page, HTML + CSS. 
    I used Bootstrap to make it responsible, but I kept the style as it was on the original, only replacing the old photo.`,
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/trybe-lessons-learned/',
    codeLink: 'https://github.com/rodrigomarchisilva/trybe-lessons-learned',
  },
  {
    ...standardKeys,
    name: 'Art',
    image: art,
    description: `Matheus Battisti's Bootstrap course project. A simple art gallery website`,
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/battisti-bootstrap-art/',
    codeLink: 'https://github.com/rodrigomarchisilva/battisti-bootstrap-art',
  },
];

const languageContent = {
  mainTitle,
  projects,
};

export default languageContent;