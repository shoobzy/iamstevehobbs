import React from "react";
import PortfolioItem from "../ProjectTpl";
import Exterior from "../../images/projects/la-bergerie/exterior-large.webp";
import Cards from "../../images/projects/la-bergerie/business-cards.webp";

const LaBergerieProject = () => {
  return (
    <PortfolioItem
      title="La Bergerie"
      category="Web, Branding"
      image_primary={Exterior}
      overview="La Bergerie is widely regarded as one of the finest privately-owned villas in Europe, available to rent for an unforgettable luxury holiday."
      ext_url="http://www.bergerieterreblanche.com/"
      image_secondary={Cards}
    />
  )
}

export default LaBergerieProject;
