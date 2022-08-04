import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useCustomization } from "../../context/Customization";
import languageContentPt from "./languageContentPt";
import languageContentEn from "./languageContentEn";
import tools from "./tools";
import ToolCard from '../../components/ToolCard';

export default function Tools() {
  const { customization: { theme, language } } = useCustomization();
  const languageContent = language === "pt" ? languageContentPt : languageContentEn;
  const { mainTitle } = languageContent;

  return (
    <Container className={`theme-${theme}`}>
      <svg width="0" height="0" display="block">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#00ffff" offset="0%" />
          <stop stopColor="#00b0ff" offset="100%" />
        </linearGradient>
      </svg>

      <section className="bg-main border padding margin-bottom">
        <h4 className='margin-bottom'>{ mainTitle }</h4>
        <Container>
          <Row>
            { tools.map(({ name, icon }) => (
              <ToolCard key={ name } toolCard={{ name, icon }} />
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
}