import React, { useEffect } from 'react';
import { Container, Row, ButtonGroup } from 'react-bootstrap';
import { useCustomization } from "../../context/Customization";
import languageContentPt from "./languageContentPt";
import languageContentEn from "./languageContentEn";
import iconCards from "./iconCards";
import ToolCard from '../../components/ToolCard';
import NavigationButton from '../../components/NavigationButton';
import BackToTopButton from '../../components/BackToTopButton';

export default function Tools() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { customization: { theme, language } } = useCustomization();
  const languageContent = language === "pt" ? languageContentPt : languageContentEn;
  const { sections, mainTitle } = languageContent;

  return (
    <Container className={`theme-${theme}`}>
      <svg width="0" height="0" display="block">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#00ffff" offset="0%" />
          <stop stopColor="#00b0ff" offset="100%" />
        </linearGradient>
      </svg>

      <nav className="bg-main padding-tb border margin-bottom">
        <h4>{ mainTitle }</h4>
        <Container className="d-flex justify-content-center">
          <ButtonGroup vertical>
            { sections.map(({ sectionKey, sectionTitle }) => (
              <NavigationButton key={sectionKey} navigationButton={ { id: sectionKey, sectionTitle } } />
            ))}
          </ButtonGroup>
        </Container>
      </nav>

      { sections.map(({ sectionKey, sectionTitle }) => (
        <section className="bg-main border p-2 margin-bottom" key={ sectionKey }>
          <h5 className='m-2 header-spacer' id={ sectionKey }>{ sectionTitle }</h5>
          <Container>
            <Row>
              { iconCards[sectionKey].map(({ name, icon, link }) => (
                <ToolCard key={ name } toolCard={{ name, icon, link }} />
              ))}
            </Row>
          </Container>
        </section>
      ))}

      <BackToTopButton />
    </Container>

  );
}