import React from "react";
import textContent from "./textContent";
import { Container } from 'react-bootstrap';
const { experiences, navigation, aboutMe, languages, academicBackground } = textContent.pt;

export default function About() {

  const sectionsContent = [
    <div>
      <h5 className="mb-4">{ aboutMe.subtitle }</h5>
      <p>{ aboutMe.description }</p>
    </div>,

    <ul>
      <li>
        <h5>{ academicBackground.school }</h5>
        <p>
          <b>{ academicBackground.course }</b>
          { academicBackground.specializations }
        </p>
      </li>
    </ul>,

    <ul>
      { languages.map(({ language, level }, index) => (
        <li key={ index }>
          <h5>{ language }</h5>
          <p>{ level }</p>
        </li>
      ))}
    </ul>,

    <ul>
      { experiences.map(({ company, role, description }, index) => (
        <li key={ index } className="p-3 mt-4">
          <h5>{ company }</h5>
          <p className="mb-0">
            <b>{ role }</b>
            { description }
          </p>
        </li>
      ))}
    </ul>,
  ];

  return (
    <Container>
      <section className="mt-3 title">
        <h1>Sobre</h1>
      </section>

      <nav className="mb-3 mt-3">
        <h2 className="mb-4">Lista de conteúdos</h2>
        <ul>
          { navigation.map(({ id, title }, index) => (
            <li key={ index }>
              <a href={ `#${id}` }>{ title }</a>
            </li>
          ))}
        </ul>
      </nav>

      { navigation.map(({ id, title }, index) => (
        <section key={ index } id={ id }>
          <h2 className="mb-4 text">{ title }</h2>
          { sectionsContent[index] }
        </section>
      ))}

    </Container>
  );
}
