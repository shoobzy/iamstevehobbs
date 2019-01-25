import React from "react";
import PortfolioItem from "../ProjectTpl";
import MilkyWay from "../../images/projects/milkyway/milkyway.jpg";
import milkywayFull from "../../images/projects/milkyway/milkyway-full.jpg";

const MilkyWayProject = () => {
  return (
    <PortfolioItem
      category="Photography"
      image_primary={MilkyWay}
      modal={milkywayFull}
    />
  )
}

export default MilkyWayProject;
