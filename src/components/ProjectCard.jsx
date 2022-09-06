import React from "react";
import { Card, Col, Button, ButtonGroup, Badge } from 'react-bootstrap';
import PropTypes from "prop-types";

export default function ProjectCard({ projectCard }) {
  const { name, image, description, technologies, appLink, appLinkTitle, codeLink, codeLinkTitle } = projectCard;

  const disableAppLink = appLink === "" ? " disabled-link" : "";
  const disableCodeLink = codeLink === "" ? " disabled-link" : "";

  return (
    <Col key={ name } md={ 6 } lg={ 4 } xxl={ 3 } className="p-1">
      <Card className="border bg-gradient h-100">
        <Card.Img variant="top" src={ image } />
        <Card.Body className="p-2">
          <Card.Title className="card-main-title">{ name }</Card.Title>
          <Card.Text className="mb-2 justified">{ description }</Card.Text>
          <Card.Text className="mb-2">
            { technologies.map((technology) => (<Badge key={technology} className="me-2">{technology}</Badge>)) }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="p-2">
          <ButtonGroup vertical className="full-width">
            <Button className="mb-1 bg-blue border">
              <a
                className={`txt-shadow text-white fw-bolder${disableAppLink}`}
                href={ appLink }
                target="_blank"
                rel="noopener noreferrer"
              >
                { appLinkTitle }
              </a>
            </Button>
            <Button className="m-0 bg-blue border">
              <a
                className={`txt-shadow text-white fw-bolder${disableCodeLink}`}
                href={ codeLink }
                target="_blank"
                rel="noopener noreferrer"
              >
                { codeLinkTitle }
              </a>
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </Col>
  );
};

ProjectCard.propTypes = {
  projectCard: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    technologiesTitle: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    appLink: PropTypes.string,
    appLinkTitle: PropTypes.string,
    codeLink: PropTypes.string,
    codeLinkTitle: PropTypes.string,
  }),
}.isRequired;