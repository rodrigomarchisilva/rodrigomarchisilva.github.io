import React, { useEffect } from "react";
import { useCustomization } from "../../context/Customization";
import languageContentPt from "./languageContentPt";
import languageContentEn from "./languageContentEn";
import { Container } from 'react-bootstrap';
import BackToTopButton from '../../components/BackToTopButton';
import rodrigoMarchiSilva from '../../images/photos/rodrigo-marchi-silva.png';

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { customization: { theme, language } } = useCustomization();
  const languageContent = language === "pt" ? languageContentPt : languageContentEn;
  const { mainTitle, description } = languageContent;

  return (
    <Container className={`theme-${theme}`}>
      <section className="bg-main padding-top border margin-bottom">
        <h4 className="margin-bottom">{ mainTitle }</h4>
        <div className="text-center p-4 pt-0">
          <img alt="Rodrigo Marchi" src={rodrigoMarchiSilva} className="img-fluid border" />
        </div>
        <p className="p-3 bg-gradient">{ description }</p>
      </section>

      <BackToTopButton />
    </Container>
  );
}