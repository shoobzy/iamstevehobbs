import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function ThreeStreamsProject() {
  return (
    <PortfolioItem
      title="Three Streams"
      category="Branding"
      image_primary="three-streams/logo-main"
      overview="Logo concept for Three Streams - a neuropsychology, psychotherapy, and spiritual practice."
    />
  )
}

export default ThreeStreamsProject;
