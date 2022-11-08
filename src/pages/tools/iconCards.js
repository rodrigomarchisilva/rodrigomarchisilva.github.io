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
  workEnvironment: [
    { name: 'Ubuntu', icon: <SiUbuntu style={ iconStyle }/> },
    { name: 'Windows', icon: <SiWindows style={ iconStyle }/> },
    { name: 'BASH', icon: <SiGnubash style={ iconStyle }/> },
    { name: 'PowerShell', icon: <SiPowershell style={ iconStyle }/> },
    { name: 'NPM', icon: <FaNpm style={ iconStyle }/> },
    { name: 'Git', icon: <FaGitAlt style={ iconStyle }/> },
    { name: 'GitHub', icon: <FaGithubSquare style={ iconStyle }/> },
    { name: 'VSCode', icon: <SiVisualstudiocode style={ iconStyle }/> },
  ],
  base: [
    { name: 'HTML', icon: <FaHtml5 style={ iconStyle }/> },
    { name: 'CSS', icon: <FaCss3Alt style={ iconStyle }/> },
    { name: 'JavaScript', icon: <FaJs style={ iconStyle }/> },
    { name: 'TypeScript', icon: <SiTypescript style={ iconStyle }/> },
    { name: 'Python', icon: <FaPython style={ iconStyle }/> },
  ],
  frontend: [
    { name: 'React JS', icon: <FaReact style={ iconStyle }/> },
    { name: 'Redux', icon: <SiRedux style={ iconStyle }/> },
    { name: 'Bootstrap', icon: <FaBootstrap style={ iconStyle }/> },
    { name: 'Material UI', icon: <SiMaterialui style={ iconStyle }/> },
  ],
  database: [
    { name: 'MySQL', icon: <SiMysql style={ iconStyle }/> },
    { name: 'MongoDB', icon: <SiMongodb style={ iconStyle }/> },
  ],
  backend: [
    { name: 'Node JS', icon: <FaNode style={ iconStyle }/> },
    { name: 'Express JS', icon: <SiExpress style={ iconStyle }/> },
    { name: 'Sequelize', icon: <SiSequelize style={ iconStyle }/> },
    { name: 'Mongoose', icon: <SiMongodb style={ iconStyle }/> },
    { name: 'ThunderClient', icon: <AiFillThunderbolt style={ iconStyle }/> },
    { name: 'Insomnia', icon: <SiInsomnia style={ iconStyle }/> },
    { name: 'Postman', icon: <SiPostman style={ iconStyle }/> },
  ],
  containers: [
    { name: 'Docker', icon: <FaDocker style={ iconStyle }/> },
  ],
  deployment: [
    { name: 'Heroku', icon: <SiHeroku style={ iconStyle }/> },
  ],
  tests: [
    { name: 'Jest', icon: <SiJest style={ iconStyle }/> },
    { name: 'Mocha', icon: <SiMocha style={ iconStyle }/> },
    { name: 'Chai', icon: <SiChai style={ iconStyle }/> },
    { name: 'Sinon', icon: <GiBeard style={ iconStyle }/> },
    { name: 'RTL', icon: <SiTestinglibrary style={ iconStyle }/> },
    { name: 'Pytest', icon: <SiPytest style={ iconStyle }/> },
  ],
  communication: [
    { name: 'Slack', icon: <FaSlack style={ iconStyle }/> },
    { name: 'Zoom', icon: <SiZoom style={ iconStyle }/> },
  ],
  agile: [
    { name: 'Kanban', icon: <BsKanban style={ iconStyle }/> },
    { name: 'SCRUM', icon: <DiScrum style={ iconStyle }/> },
    { name: 'Trello', icon: <SiTrello style={ iconStyle }/> },
  ],
};

export default iconCards;