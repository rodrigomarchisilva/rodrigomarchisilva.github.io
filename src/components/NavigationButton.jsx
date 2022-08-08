import React from "react";
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';

export default function NavigationButton({ navigationButton }) {
  const { id, sectionTitle } = navigationButton;

  return (
    <Button key={ id } className="bg-blue border radius">
      <Link to={ `#${id}` } className="txt-shadow text-white">{ sectionTitle }</Link>
    </Button>
  );
};

NavigationButton.propTypes = {
  threeKeyObjectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}.isRequired;