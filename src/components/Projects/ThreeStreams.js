import React from "react";
import Logo from "../../images/projects/three-streams/logo-main.jpg";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function ThreeStreamsProject() {
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
