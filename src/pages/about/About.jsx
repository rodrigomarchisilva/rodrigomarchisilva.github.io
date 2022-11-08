import React, { useEffect } from "react";
import { useCustomization } from "../../context/Customization";
import languageContentPt from "./languageContentPt";
import languageContentEn from "./languageContentEn";
import { ButtonGroup, Container } from 'react-bootstrap';
import Section from "../../components/Section";
import NavigationButton from "../../components/NavigationButton";

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { customization: { theme, language } } = useCustomization();
  const languageContent = language === "pt" ? languageContentPt : languageContentEn;
  const { pageTitle, sections } = languageContent;

  return (
    <Container className={ `theme-${theme}` }>
      <nav className="bg-main padding-tb border margin-bottom">
        <h4>{ pageTitle }</h4>
        <Container className="d-flex justify-content-center">
          <ButtonGroup vertical>
            { sections.map(({ id, sectionTitle }) => (
              <NavigationButton key={ id } navigationButton={ { id, sectionTitle } } />
            ))}
          </ButtonGroup>
        </Container>
      </nav>

      { sections.map(({ id, sectionTitle, threeKeyObjectList }) => (
        <Section key={ id } section={ { id, sectionTitle, threeKeyObjectList } } />
      ))}
    </Container>
  );
};