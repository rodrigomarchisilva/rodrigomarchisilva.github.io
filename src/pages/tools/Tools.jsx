import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
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

const iconStyle = { fontSize: '8rem', fill: "url(#blue-gradient)" };

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

const createCard = ({ name, icon }) => (
  <Col xs={ 2 }>
    <Card key={ name } className="m-3 text-center">
      <Card.Body className="">
        { icon }
        <Card.Title className="">
          { name }
        </Card.Title>
      </Card.Body>
    </Card>
  </Col>
);

export default function Tools() {
  return (
    <Container>
      <svg width="0" height="0" display="block">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#00ffff" offset="0%" />
          <stop stopColor="#00b0ff" offset="100%" />
        </linearGradient>
      </svg>

      <section className="mt-3 title">
        <h1>Ferramentas</h1>
      </section>

      <section>
        <Row>
          { tools.map(createCard) }
        </Row>
      </section>
    </Container>
  );
}
