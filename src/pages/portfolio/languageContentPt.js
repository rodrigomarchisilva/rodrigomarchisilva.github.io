import personalWebsite from '../../images/personal-website.png';

const mainTitle = 'Portfólio';

const projects = [
  {
    name: 'Rodrigo Marchi Silva',
    image: personalWebsite,
    description: 'Meu site pessoal. É um site simples que eu desenvolvi com React para contar sobre mim e mostrar habilidades e projetos.',
    technologiesTitle: 'Tecnologias',
    technologies: ['React', 'Context API', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/',
    appLinkTitle: 'Ver aplicativo',
    codeLink: 'https://github.com/rodrigomarchisilva/rodrigomarchisilva.github.io',
    codeLinkTitle: 'Acessar código fonte',
  },
];

const languageContent = {
  mainTitle,
  projects,
};

export default languageContent;