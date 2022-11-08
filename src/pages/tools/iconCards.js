import {
  FaReact,
  FaGithubSquare,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaNpm,
  FaDocker,
  FaGitAlt,
  FaBootstrap,
  FaSlack,
  FaPython
} from 'react-icons/fa';
import {
  SiMysql,
  SiRedux,
  SiExpress,
  SiSequelize,
  SiZoom,
  SiUbuntu,
  SiGnubash,
  SiHeroku,
  SiMaterialui,
  SiVisualstudiocode,
  SiWindows,
  SiPowershell,
  SiTypescript,
  SiPostman,
  SiInsomnia,
  SiJest,
  SiMocha,
  SiChai,
  SiTestinglibrary,
  SiPytest,
  SiTrello,
  SiMongodb } from 'react-icons/si';
import { GiBeard } from 'react-icons/gi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { BsKanban } from 'react-icons/bs';
import { DiScrum } from 'react-icons/di';

const iconStyle = { fontSize: '4rem', fill: "url(#blue-gradient)" };

const iconCards = {
  environment: [
    { name: 'Ubuntu', icon: <SiUbuntu style={ iconStyle }/>, link: 'https://ubuntu.com/' },
    { name: 'Windows', icon: <SiWindows style={ iconStyle }/>, link: 'https://www.microsoft.com/en-us/windows' },
    { name: 'BASH', icon: <SiGnubash style={ iconStyle }/>, link: 'https://www.gnu.org/software/bash/' },
    { name: 'PowerShell', icon: <SiPowershell style={ iconStyle }/>, link: 'https://docs.microsoft.com/en-us/powershell/' },
    { name: 'NPM', icon: <FaNpm style={ iconStyle }/>, link: 'https://www.npmjs.com/' },
    { name: 'Git', icon: <FaGitAlt style={ iconStyle }/>, link: 'https://git-scm.com/' },
    { name: 'GitHub', icon: <FaGithubSquare style={ iconStyle }/>, link: 'https://github.com' },
    { name: 'VSCode', icon: <SiVisualstudiocode style={ iconStyle }/>, link: 'https://code.visualstudio.com/' },
  ],
  base: [
    { name: 'HTML', icon: <FaHtml5 style={ iconStyle }/>, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: <FaCss3Alt style={ iconStyle }/>, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: <FaJs style={ iconStyle }/>, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: <SiTypescript style={ iconStyle }/>, link: 'https://www.typescriptlang.org/' },
    { name: 'Python', icon: <FaPython style={ iconStyle }/>, link: 'https://www.python.org/' },
  ],
  frontend: [
    { name: 'React', icon: <FaReact style={ iconStyle }/>, link: 'https://reactjs.org/' },
    { name: 'Redux', icon: <SiRedux style={ iconStyle }/>, link: 'https://redux.js.org/' },
    { name: 'Bootstrap', icon: <FaBootstrap style={ iconStyle }/>, link: 'https://getbootstrap.com/' },
    { name: 'Material UI', icon: <SiMaterialui style={ iconStyle }/>, link: 'https://material-ui.com/' },
  ],
  database: [
    { name: 'MySQL', icon: <SiMysql style={ iconStyle }/>, link: 'https://www.mysql.com/' },
    { name: 'MongoDB', icon: <SiMongodb style={ iconStyle }/>, link: 'https://www.mongodb.com/' },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNode style={ iconStyle }/>, link: 'https://nodejs.org/en/' },
    { name: 'Express', icon: <SiExpress style={ iconStyle }/>, link: 'https://expressjs.com/' },
    { name: 'Sequelize', icon: <SiSequelize style={ iconStyle }/>, link: 'https://sequelize.org/' },
    { name: 'Mongoose', icon: <SiMongodb style={ iconStyle }/>, link: 'https://mongoosejs.com/' },
    { name: 'ThunderClient', icon: <AiFillThunderbolt style={ iconStyle }/>, link: 'https://www.thunderclient.io/' },
    { name: 'Insomnia', icon: <SiInsomnia style={ iconStyle }/>, link: 'https://insomnia.rest/' },
    { name: 'Postman', icon: <SiPostman style={ iconStyle }/>, link: 'https://www.postman.com/' },
  ],
  devops: [
    { name: 'Docker', icon: <FaDocker style={ iconStyle }/>, link: 'https://www.docker.com/' },
    { name: 'Heroku', icon: <SiHeroku style={ iconStyle }/>, link: 'https://www.heroku.com/' },
  ],
  tests: [
    { name: 'Jest', icon: <SiJest style={ iconStyle }/>, link: 'https://jestjs.io/' },
    { name: 'Mocha', icon: <SiMocha style={ iconStyle }/>, link: 'https://mochajs.org/' },
    { name: 'Chai', icon: <SiChai style={ iconStyle }/>, link: 'https://www.chaijs.com/' },
    { name: 'Sinon', icon: <GiBeard style={ iconStyle }/>, link: 'https://sinonjs.org/' },
    { name: 'RTL', icon: <SiTestinglibrary style={ iconStyle }/>, link: 'https://testing-library.com/docs/react-testing-library/intro/' },
    { name: 'Pytest', icon: <SiPytest style={ iconStyle }/>, link: 'https://docs.pytest.org/en/stable/' },
  ],
  teamwork: [
    { name: 'Slack', icon: <FaSlack style={ iconStyle }/>, link: 'https://slack.com/intl/en-br/' },
    { name: 'Zoom', icon: <SiZoom style={ iconStyle }/>, link: 'https://zoom.us/' },
    { name: 'Kanban', icon: <BsKanban style={ iconStyle }/>, link: 'https://www.atlassian.com/agile/kanban' },
    { name: 'SCRUM', icon: <DiScrum style={ iconStyle }/>, link: 'https://www.scrum.org/' },
    { name: 'Trello', icon: <SiTrello style={ iconStyle }/>, link: 'https://trello.com/' },
  ],
};

export default iconCards;