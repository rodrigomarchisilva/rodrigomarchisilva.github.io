import React from "react";
import PropTypes from 'prop-types';

export default function SectionListItem({ threeKeyObject }) {
  const { title, subtitle, description } = threeKeyObject;

  return (
    <li className="p-3 bg-gradient">
      <h5>{ title }</h5>
      <p className="mb-2"><b>{ subtitle }</b></p>
      <p>{ description }</p>
    </li>
  );
};

SectionListItem.propTypes = {
  threeKeyObject: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}.isRequired;