import React from "react";
import { useCustomization } from "../../context/Customization";
import languageContentPt from "./languageContentPt";
import languageContentEn from "./languageContentEn";
import { Container } from 'react-bootstrap';

export default function NotFound() {
  const { customization: { theme, language } } = useCustomization();
  const languageContent = language === "pt" ? languageContentPt : languageContentEn;
  const { mainTitle } = languageContent;

  return (
    <Container className={ `theme-${theme}` }>
      <section className="mt-3">
        <h2 className="mb-5">{ mainTitle }</h2>
      </section>
    </Container>
  );
}