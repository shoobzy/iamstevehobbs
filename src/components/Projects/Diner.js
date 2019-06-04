import React from "react";
import Diner from "../../images/projects/diner/diner.jpg";
import DinerWrap from "../../images/projects/diner/diner-full.jpg";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function DinerProject() {
  return (
    <PortfolioItem
      title="Diner"
      category="Digital, Print"
      image_primary={Diner}
      overview="Large scale, vinyl wrap - designed to mask out glass partition."
      modal={DinerWrap}
    />
  )
}

export default DinerProject;
