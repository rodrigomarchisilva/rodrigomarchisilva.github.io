import React from "react";
import { Navbar, Nav, ButtonGroup } from 'react-bootstrap';
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";
import CustomizationButton from "./CustomizationButton";
import PropTypes from "prop-types";

export default function CollapsibleContent(props) {
  const { internalLinks, externalLinks, customizationButtons, handleCollapse } = props;

  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        { internalLinks.map(({ path, icon, name }) => (
          <InternalLink key={ name } internalLink={ { path, icon, name, handleCollapse } } />
        ))}
        { externalLinks.map(({ path, icon, name }) => (
          <ExternalLink key={ name } externalLink={ { path, icon, name, handleCollapse } } />
        ))}
      </Nav>
      <Nav>
        <ButtonGroup>
          { customizationButtons.map(({ src, alt, title, onClick }) => (
              <CustomizationButton key={ alt } customizationButton={ { src, alt, title, onClick } } />
          ))}
        </ButtonGroup>
      </Nav>
    </Navbar.Collapse>
  );
};

CollapsibleContent.propTypes = {
  internalLinks: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
  })),
  externalLinks: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
  })),
  customizationButtons: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
  })),
}.isRequired;