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
  SiMongodb } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { BsKanban } from 'react-icons/bs';
import { DiScrum } from 'react-icons/di';

const iconStyle = { fontSize: '4rem', fill: "url(#blue-gradient)" };

const tools = [
  { name: 'HTML5', icon: <FaHtml5 style={ iconStyle }/> },
  { name: 'CSS3', icon: <FaCss3Alt style={ iconStyle }/> },
  { name: 'JavaScript', icon: <FaJs style={ iconStyle }/> },
  { name: 'Git', icon: <FaGitAlt style={ iconStyle }/> },
  { name: 'GitHub', icon: <FaGithubSquare style={ iconStyle }/> },
  { name: 'NPM', icon: <FaNpm style={ iconStyle }/> },
  { name: 'Ubuntu', icon: <SiUbuntu style={ iconStyle }/> },
  { name: 'BASH', icon: <SiGnubash style={ iconStyle }/> },
  { name: 'Slack', icon: <FaSlack style={ iconStyle }/> },
  { name: 'Zoom', icon: <SiZoom style={ iconStyle }/> },
  { name: 'SCRUM', icon: <DiScrum style={ iconStyle }/> },
  { name: 'Kanban', icon: <BsKanban style={ iconStyle }/> },
  { name: 'React JS', icon: <FaReact style={ iconStyle }/> },
  { name: 'Redux', icon: <SiRedux style={ iconStyle }/> },
  { name: 'Bootstrap 5', icon: <FaBootstrap style={ iconStyle }/> },
  { name: 'SQL', icon: <AiOutlineConsoleSql style={ iconStyle }/> },
  { name: 'MySQL', icon: <SiMysql style={ iconStyle }/> },
  { name: 'MongoDB', icon: <SiMongodb style={ iconStyle }/> },
  { name: 'Node JS', icon: <FaNode style={ iconStyle }/> },
  { name: 'Express JS', icon: <SiExpress style={ iconStyle }/> },
  { name: 'Sequelize', icon: <SiSequelize style={ iconStyle }/> },
  { name: 'Docker', icon: <FaDocker style={ iconStyle }/> },
  { name: 'Heroku', icon: <SiHeroku style={ iconStyle }/> },
  { name: 'Python', icon: <FaPython style={ iconStyle }/> },
];

export default tools;