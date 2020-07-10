import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function LaBergerieProject() {
  return (
    <PortfolioItem
      title="La Bergerie"
      category="Web, Branding"
      image_primary="la-bergerie/exterior-webp"
      overview="La Bergerie is widely regarded as one of the finest privately-owned villas in Europe, available to rent for an unforgettable luxury holiday."
      ext_url="http://www.bergerieterreblanche.com/"
      image_secondary="la-bergerie/business-cards"
    />
  )
}

export default LaBergerieProject;
