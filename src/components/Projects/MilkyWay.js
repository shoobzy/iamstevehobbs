import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function MilkyWayProject() {
  return (
    <PortfolioItem
      category="Photography"
      image_primary="milkyway/milkyway"
      modal="milkyway/milkyway-full"
      modal_height={784}
    />
  )
}

export default MilkyWayProject;
