import React from "react";
import { Link } from "react-router-dom";
import { Row, Navbar, Container } from 'react-bootstrap';
import logotype from "../images/icons/logotype.png";
import PropTypes from "prop-types";

export default function HomeLink({ homeLink }) {
  const { logoAlt, professionalSkill } = homeLink;

  return (
    <Navbar.Brand>
      <Link to="/" className="d-flex align-items-center">
        <img
          alt={ logoAlt }
          src={ logotype }
          id="header-logo"
        />
        <Container className="margin-left">
          <Row className="fs-5 txt">Rodrigo Marchi Silva</Row>
          <Row className="fs-6 justify-content-center" id="header-subtitle">{ professionalSkill }</Row>
        </Container>
      </Link>
    </Navbar.Brand>
  );
};

HomeLink.propTypes = {
  homeLink: PropTypes.shape({
    logoAlt: PropTypes.string,
    professionalSkill: PropTypes.string,
  }).isRequired,
};