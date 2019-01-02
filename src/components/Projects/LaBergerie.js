import React from "react";
import PortfolioItem from "../Portfolio/ProjectTpl";
import Exterior from "../../images/projects/la-bergerie/exterior-large.webp";
import Cards from "../../images/projects/la-bergerie/business-cards.webp";

const LaBergerieProject = () => {
  return (
    <PortfolioItem
      title="La Bergerie"
      image_primary={Exterior}
      overview="La Bergerie is widely regarded as one of the finest privately-owned villas in Europe, available to rent for an unforgettable luxury holiday."
      details={
        <ul>
          <li>Web,</li>
          <li>Branding</li>
        </ul>
      }
      ext_url="http://www.bergerieterreblanche.com/"
      image_secondary={Cards}
    />
  )
}

export default LaBergerieProject;
