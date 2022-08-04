import React from "react";
import { Nav } from 'react-bootstrap';
import PropTypes from "prop-types";

export default function ExternalLink({ externalLink }) {
  const { path, icon, name } = externalLink;

  return (
    <Nav.Link
      href={ path }
      target="_blank"
      rel="noreferrer"
      className="txt"
    >
      <i className={ `bi bi-${icon}` } />
      {' '}
      { name }
    </Nav.Link>
  );
};

ExternalLink.propTypes = {
  externalLink: PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};