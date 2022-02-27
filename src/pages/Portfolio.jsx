import React from "react";
import { Container, Card, Row, Button } from 'react-bootstrap';

const projects = [
  {
    name: 'Google',
    appLink: 'https://www.google.com/',
    codeLink: 'https://www.google.com.br/',
    description: 'Google Website',
    image: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    technologies: ['React', 'Redux', 'Bootstrap', 'Sass', 'Webpack', 'Jest', 'Enzyme', 'React Testing Library', 'Jest Snapshot'],
  },
];

export default function Portfolio() {
  return (
    <Container>
      <section className="mt-3 title">
        <h1>Portfólio</h1>
      </section>

      <section>
        <Row>
          { projects.map(({ name, description, image, technologies, appLink, codeLink }, index) => (
            <Card key={ index } className="mb-3">
              <Card.Img variant="top" src={ image } />
              <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Text>{ description }</Card.Text>
                <Card.Text><b>{ 'Tecnologias utilizadas: ' }</b>{ `${technologies.join(', ')}.` }</Card.Text>
                <Row>
                  <Button variant="primary" href={ appLink } target="_blank" rel="noopener noreferrer">Visualizar o Projeto</Button>
                </Row>
                <Row>
                  <Button variant="secondary" href={ codeLink } target="_blank" rel="noopener noreferrer">Acessar o Código-fonte</Button>
                </Row>
              </Card.Body>
            </Card>
          )) }
        </Row>
      </section>
    </Container>
  );
}
