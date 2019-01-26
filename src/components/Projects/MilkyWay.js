import React from "react";
import PortfolioItem from "../ProjectTpl";
import MilkyWay from "../../images/projects/milkyway/milkyway.jpg";
import MilkyWayFull from "../../images/projects/milkyway/milkyway-full.jpg";

const MilkyWayProject = () => {
  return (
    <PortfolioItem
      category="Photography"
      image_non_webp={MilkyWay}
      modal={MilkyWayFull}
    />
  )
}

export default MilkyWayProject;
