import React from "react";
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";

export default function CustomizationButton({ customizationButton }) {
  const { title, onClick, src, alt } = customizationButton;

  return (
    <Button
      className="border radius bg-blue"
      title={ title }
      onClick={ onClick }
    >
      <img
        src={ src }
        alt={ alt }
        className="btn-img"
      />
    </Button>
  );
};

CustomizationButton.propTypes = {
  customizationButton: PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func,
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};