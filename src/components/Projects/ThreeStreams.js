import React from "react";
import Logo from "../../images/projects/three-streams/logo-main.webp";
import LogoFallback from "../../images/projects/three-streams/logo-main.png";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function ThreeStreamsProject() {
  return (
    <PortfolioItem
      title="Three Streams"
      category="Branding"
      image_webp={Logo}
      image_non_webp={LogoFallback}
      overview="Logo concept for Three Streams - a neuropsychology, psychotherapy, and spiritual practice."
    />
  )
}

export default ThreeStreamsProject;
