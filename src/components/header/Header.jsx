import React from "react";
import { useCustomization } from "../../context/Customization";
import { Navbar, Container } from 'react-bootstrap';
import themeContentDark from "./themeContentDark";
import themeContentLight from "./themeContentLight";
import languageContentEn from "./languageContentEn";
import languageContentPt from "./languageContentPt";
import HomeLink from "../HomeLink";
import CollapsibleContent from "../CollapsibleContent";

export default function Header() {
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