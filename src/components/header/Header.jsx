import React, { useEffect } from "react";
import { useCustomization } from "../../context/Customization";
import { Navbar, Container } from 'react-bootstrap';
import themeContentDark from "./themeContentDark";
import themeContentLight from "./themeContentLight";
import languageContentEn from "./languageContentEn";
import languageContentPt from "./languageContentPt";
import HomeLink from "../HomeLink";
import CollapsibleContent from "../CollapsibleContent";

export default function Header() {
  useEffect(() => {
    // Trecho de código responsável por armazenar o scroll da página (linhas 16-30), adaptado de:
    // https://pqina.nl/blog/applying-styles-based-on-the-user-scroll-position-with-smart-css/

    const debounce = (fn) => {
      let frame;
      return (...params) => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => { fn(...params) });
      }
    };
    
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    }
    
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });
    
    storeScroll();
    
    const navbarToggle = document.querySelector('.navbar-toggler');
    
    navbarToggle.addEventListener('click', () => {
      if (navbarToggle.classList.contains('collapsed')) {
        document.querySelector('.navbar').classList.add('shadow-bottom');
      } else {
        document.querySelector('.navbar').classList.remove('shadow-bottom');
      }
    }
    , { passive: true });
  }
  , []);

  const { customization: { theme, language }, customization, setCustomization } = useCustomization();
  const themeContent = theme === "light" ? themeContentLight[language] : themeContentDark[language] ;
  const { themeButton, ironicPhrase, mainBackground} = themeContent;
  const alternativeTheme = theme === "light" ? "dark" : "light";
  const alternativeLanguage = language === "pt" ? "en" : "pt";
  const languageContent = language === "pt" ? languageContentPt : languageContentEn;
  const { languageButton, saveButton, externalLinks, internalLinks, logoAlt, professionalSkill } = languageContent;
  document.body.style.backgroundImage = `url(${mainBackground})`;

  const changeTheme = () => {;
    setCustomization({ ...customization, theme: alternativeTheme });
  };

  const changeLanguage = () => {
    setCustomization({ ...customization, language: alternativeLanguage });
  };

  const saveChanges = () => {
    localStorage.setItem('theme', customization.theme);
    localStorage.setItem('language', customization.language);
  };

  const customizationButtons = [
    { ...themeButton, onClick: changeTheme },
    { ...languageButton, onClick: changeLanguage },
    { ...saveButton, onClick: saveChanges },
  ];

  return (
    <header className={ `theme-${theme}` }>
      <Navbar fixed="top" expand="lg" className="bg-main">
        <Container fluid>
          <HomeLink homeLink={ { logoAlt, professionalSkill } }/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <CollapsibleContent
            internalLinks={ internalLinks }
            externalLinks={ externalLinks }
            customizationButtons={ customizationButtons } 
          />
        </Container>
      </Navbar>

      <Container fluid className="justify-content-center bg-extra margin-top margin-bottom">
        <p className="text-center fw-bold">{ ironicPhrase }</p>
      </Container>
    </header>
  );
}