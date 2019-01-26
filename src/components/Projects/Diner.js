import React from "react";
import PortfolioItem from "../ProjectTpl";
import Diner from "../../images/projects/diner/diner.webp";
import DinerFallback from "../../images/projects/diner/diner.jpg";
import DinerWrap from "../../images/projects/diner/diner-full.jpg";

const DinerProject = () => {
  return (
    <PortfolioItem
      title="Diner"
      category="Digital, Print"
      image_webp={Diner}
      image_non_webp={DinerFallback}
      overview="Large scale, vinyl wrap - designed to mask out glass partition."
      modal={DinerWrap}
    />
  )
}

export default DinerProject;
