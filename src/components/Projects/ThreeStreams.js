import React from "react";
import PortfolioItem from "../ProjectTpl";
import Logo from "../../images/projects/three-streams/logo-main.webp";

const ThreeStreamsProject = () => {
  return (
    <PortfolioItem
      title="Three Streams"
      category="Branding"
      image_primary={Logo}
      overview="Logo concept for Three Streams - a neuropsychology, psychotherapy, and spiritual practice."
    />
  )
}

export default ThreeStreamsProject;
