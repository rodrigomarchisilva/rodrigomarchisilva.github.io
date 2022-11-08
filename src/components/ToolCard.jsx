import React from "react";
import { Card, Col } from 'react-bootstrap';
import PropTypes from "prop-types";

export default function ToolCard({ toolCard }) {
  const { name, icon, link } = toolCard;

  return (
    <Col key={ name } xs={ 6 } sm={ 4 } md={ 3 } lg={ 2 } className="p-0">
      <Card className="text-center m-2 bg-gradient border">
        <Card.Body>
          { icon }
          <Card.Title>
            <a className="stretched-link" href={ link } target="_blank" rel="noreferrer">{ name }</a>
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

ToolCard.propTypes = {
  toolCard: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string,
  }),
}.isRequired;