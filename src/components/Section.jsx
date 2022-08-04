import React from "react";
import PropTypes from 'prop-types';
import SectionList from "./SectionList";

export default function Section({ section }) {
  const { id, sectionTitle, threeKeyObjectList } = section;

  return (
      <section className="bg-main padding-top border margin-bottom">
        <span id={ id } className="header-spacer">&nbsp;</span>
        <h4>{sectionTitle}</h4>
        <SectionList threeKeyObjectList={ threeKeyObjectList } />
      </section>
  );
};

Section.propTypes = {
  threeKeyObjectList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}.isRequired;