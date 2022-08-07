import personalWebsite from '../../images/personal-website.png';
import lessonsLearned from '../../images/lessons-learned.png';

const mainTitle = 'Portfólio';

const projects = [
  {
    name: 'Rodrigo Marchi Silva',
    image: personalWebsite,
    description: `É esse site em que você está agora! Meu site pessoal. É um site simples que eu desenvolvi com 
    React para contar sobre mim e mostrar habilidades e projetos.`,
    technologiesTitle: 'Tecnologias',
    technologies: ['React', 'Context API', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/',
    appLinkTitle: 'Ver aplicativo',
    codeLink: 'https://github.com/rodrigomarchisilva/rodrigomarchisilva.github.io',
    codeLinkTitle: 'Acessar código fonte',
  },
  {
    name: 'Lições Aprendidas',
    image: lessonsLearned,
    description: `O primeiro site que eu desenvolvi. É completamente básico, consistindo apenas de uma página, HTML + CSS.
    Usei Bootstrap para torná-lo responsivo, mas mantive o estilo como era no original, apenas substituindo a foto.`,
    technologiesTitle: 'Tecnologias',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/trybe-lessons-learned/',
    appLinkTitle: 'Ver aplicativo',
    codeLink: 'https://github.com/rodrigomarchisilva/trybe-lessons-learned',
    codeLinkTitle: 'Acessar código fonte',
  },
];

const languageContent = {
  mainTitle,
  projects,
};

export default languageContent;