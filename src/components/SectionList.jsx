import React from "react";
import PropTypes from 'prop-types';
import SectionListItem from "./SectionListItem";

export default function SectionList({ threeKeyObjectList }) {
  return (
    <ul>
      { threeKeyObjectList.map(({ title, subtitle, description }) => (
        <SectionListItem key={ title } threeKeyObject={ { title, subtitle, description } } />
      ))}
    </ul>
  );
};

SectionList.propTypes = {
  threeKeyObjectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}.isRequired;