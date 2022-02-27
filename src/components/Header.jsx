import { React } from "react";
import { Link } from "react-router-dom";
import { useCustomization } from "../context/Customization";
import logotype from "../images/logotype.png";
import flagBR from "../images/flag-br.png";
import flagUS from "../images/flag-us.png";
import sun from "../images/sun.png";
import moon from "../images/moon.png";
import floppyDisk from "../images/floppy-disk.png";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

export default function Header() {
  const { customization: { theme, language }, customization, setCustomization } = useCustomization();

  const changeTheme = () => {
    if (theme === 'light') {
      setCustomization({ ...customization, theme: 'dark' });
    } else {
      setCustomization({ ...customization, theme: 'light' });
    }
  };

  const changeLanguage = () => {
    if (language === 'pt-BR') {
      setCustomization({ ...customization, language: 'en' });
    } else {
      setCustomization({ ...customization, language: 'pt-BR' });
    }
  };

  const saveChanges = () => {
    localStorage.setItem('theme', customization.theme);
    localStorage.setItem('language', customization.language);
  };

  const customizationButtons = [
    {
      src: theme === 'light' ? sun : moon,
      alt: theme === 'light' ? 'Sol' : 'Lua',
      title: 'Alterar tema',
      onClick: changeTheme,
    },
    {
      src: language === 'pt-BR' ? flagBR : flagUS,
      alt: language === 'pt-BR' ? 'Bandeira do Brasil' : 'Bandeira dos EUA',
      title: 'Alterar idioma',
      onClick: changeLanguage,
    },
    {
      src: floppyDisk,
      alt: 'Disquete',
      title: 'Salvar preferências',
      onClick: saveChanges,
    },
  ];

  const customizationButton = ({ src, alt, title, onClick }, i) => {
    return (
      <Col
        xs={4}
        key={ i }
        role="button"
        className="customization-button d-flex align-items-center justify-content-center"
        title={ title }
        onClick={ onClick }
      >
        <img
          src={ src }
          alt={ alt }
        />
      </Col>
    );
  };

  const internalLinks = [ 'Sobre', 'Ferramentas', 'Portfólio' ];
  const icons = [ 'file-earmark-person-fill', 'tools', 'folder-fill' ];
  const links = [ 'about', 'tools', 'portfolio' ];

  const createIcon = (icon) => {
    return <i className={ `bi bi-${icon}` } />;
  };

  const createLink = (link, i) => {
    return (
    <Col xs={3} key={i} className="d-flex align-items-center justify-content-center">
      <Link to={ `/${ link }` } className="link">
        { createIcon(icons[i]) }
        <h6>{ internalLinks[i] }</h6>
      </Link>
    </Col>);
  };

  return (
    <header>
      <div id="background-upper-container">
        {/* <Container id="background-upper-container"> */}
          <Row>

            <Col xs={1} />

            <Col xs={1} className="d-flex align-items-center justify-content-start">
              <Link to="/">
                <img src={ logotype } alt="Rodrigo's logotype" id="logo"/>
              </Link>
            </Col>

            <Col xs={2}>
              <Row className="h-50 align-items-end">
                <h4 className="m-0">Rodrigo Marchi Silva</h4>
              </Row>
              <Row className="h-50 align-items-start header-subtitle">
                <h5 className="m-0">Desenvolvedor Web</h5>
              </Row>
            </Col>

            <Col xs={6}>
              <Row>
                { links.map(createLink) }
                <Col xs={3} className="d-flex align-items-center justify-content-center">
                  <a href="https://www.linkedin.com/in/rodrigo-marchi-silva/" target="_blank" rel="noreferrer" className="link">
                    { createIcon('linkedin') }
                    <h6>LinkedIn</h6>
                  </a>
                </Col>
              </Row>
            </Col>

            <Col xs={1}>
              <Row style={{ height: '40%' }} className="align-items-end">
                <h5>Preferências</h5>
              </Row>
              <Row style={{ height: '60%' }}>
                { customizationButtons.map(customizationButton) }
              </Row>
            </Col>

            <Col xs={1} />

          </Row>
        {/* </Container> */}
      </div>
      <div id="background-lower-container">
        <Container className="d-flex align-items-center justify-content-center">
          <h6 className="cont">
            { theme === 'dark' ? 'Pesquisas comprovam que usuários de tema escuro possuem mau gosto.' : 'Vejo que possui um gosto requintado para temas. Continue assim!'}
          </h6>
        </Container>
      </div>
    </header>
  );
}