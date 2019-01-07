import React from "react";
import PortfolioItem from "../Portfolio/ProjectTpl";
import Logo from "../../images/projects/three-streams/logo-main.webp";

const ThreeStreamsProject = () => {
  return (
    <PortfolioItem
      title="Three Streams"
      image_primary={Logo}
      overview="Logo concept for Three Streams - a neuropsychology, psychotherapy, and spiritual practice."
      details={
        <ul>
          <li>Branding</li>
        </ul>
      }
    />
  )
}

export default ThreeStreamsProject;
