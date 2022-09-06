import rodrigomarchisilva from '../../images/projects/rodrigomarchisilva.png';
import lessonsLearned from '../../images/projects/trybe-lessons-learned.png';
import starwarsPlanetsSearch from '../../images/projects/trybe-starwars-planets-search.png';
import art from '../../images/projects/battisti-bootstrap-art.png';
import wallet from '../../images/projects/trybe-wallet.png';

const mainTitle = 'Portfólio';

const standardKeys = {
  technologiesTitle: 'Tecnologias',
  appLinkTitle: 'Ver aplicativo',
  codeLinkTitle: 'Acessar código fonte',
};

const projects = [
  {
    ...standardKeys,
    name: 'Wallet',
    image: wallet,
    description: `Projeto de Frontend da Trybe. Utiliza componentes de classe e faz requisições na AwesomeAPI, para obter valores atualizados das moedas. 
    Tem uma página de login com esquema próprio de validação e um formulário para criar, atualizar e remover despesas.`,
    technologies: ['React', 'Redux', 'Material UI'],
    appLink: 'https://rodrigomarchisilva.github.io/trybe-wallet/',
    codeLink: 'https://github.com/rodrigomarchisilva/trybe-wallet',
  },
  {
    ...standardKeys,
    name: 'Starwars Planets Search',
    image: starwarsPlanetsSearch,
    description: `Projeto de Frontend, React Context API, do curso da Trybe. Envolve o uso de React Context API + Hooks para gerenciar o estado global, 
    fazendo requisições na SWAPI (Star Wars API) e exibindo os resultados em uma tabela com opções de filtragem. Estilizado com Bootstrap.`,
    technologies: ['React', 'Context API', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/trybe-starwars-planets-search/',
    codeLink: 'https://github.com/rodrigomarchisilva/trybe-starwars-planets-search',
  },
  {
    ...standardKeys,
    name: 'Rodrigo Marchi Silva',
    image: rodrigomarchisilva,
    description: `É esse site em que você está agora! Meu site pessoal. É um site simples que eu desenvolvi com 
    React para contar sobre mim e mostrar habilidades e projetos.`,
    technologies: ['React', 'Context API', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/',
    codeLink: 'https://github.com/rodrigomarchisilva/rodrigomarchisilva.github.io',
  },
  {
    ...standardKeys,
    name: 'Lições Aprendidas',
    image: lessonsLearned,
    description: `O primeiro site que eu desenvolvi. É completamente básico, consistindo apenas de uma página, HTML + CSS.
    Usei Bootstrap para torná-lo responsivo, mas mantive o estilo como era no original, apenas substituindo a foto.`,
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    appLink: 'https://rodrigomarchisilva.github.io/trybe-lessons-learned/',
    codeLink: 'https://github.com/rodrigomarchisilva/trybe-lessons-learned',
  },
  {
    ...standardKeys,
    name: 'Art',
    image: art,
    description: `Projeto do curso de Bootstrap do Matheus Battisti. Uma galeria de arte simples.`,
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