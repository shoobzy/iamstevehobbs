import React from "react";
import MilkyWay from "../../images/projects/milkyway/milkyway.jpg";
import MilkyWayFull from "../../images/projects/milkyway/milkyway-full.jpg";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function MilkyWayProject() {
  return (
    <PortfolioItem
      category="Photography"
      image_primary={MilkyWay}
      modal={MilkyWayFull}
      modal_image_ratio="1.400510204081633"
    />
  )
}

export default MilkyWayProject;
