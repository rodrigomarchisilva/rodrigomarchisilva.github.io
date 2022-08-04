import React from "react";
import { Container, Row } from 'react-bootstrap';
import languageContentEn from "./languageContentEn";
import languageContentPt from "./languageContentPt";
import { useCustomization } from "../../context/Customization";
import ProjectCard from "../../components/ProjectCard";

export default function Portfolio() {
  const { customization: { theme, language } } = useCustomization();
  const languageContent = language === "pt" ? languageContentPt : languageContentEn;
  const { mainTitle, projects } = languageContent;

  return (
    <Container className={ `theme-${theme}` }>
      <section className="bg-main border padding">
        <h4>{ mainTitle }</h4>
        <Container>
          <Row>
            { projects.map((project => (
              <ProjectCard key={ project.name } projectCard={ project } />
            )))}
          </Row>
        </Container>
      </section>
    </Container>
  );
};