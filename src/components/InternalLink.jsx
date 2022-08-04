import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function InternalLink({ internalLink }) {
  const { path, icon, name, handleCollapse } = internalLink;

  return (
    <div className="nav-link">
      <Link to={ `/${ path }` } className="txt" onClick={ handleCollapse } >
        <i className={ `bi bi-${icon}` } />
        {' '}
        { name }
      </Link>
    </div>
  );
};

InternalLink.propTypes = {
  internalLink: PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};