import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function DinerProject() {
  return (
    <PortfolioItem
      title="Diner"
      category="Digital, Print"
      image_primary="/diner/diner-webp"
      overview="Large scale, vinyl wrap - designed to mask out glass partition."
      modal="/diner/diner-full"
      modal_height={732}
    />
  )
}

export default DinerProject;
