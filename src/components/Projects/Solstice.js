import React from "react";
import PortfolioItem from "../ProjectTpl";
import Solstice from "../../images/projects/solstice/solstice.jpg";
import SolsticeFull from "../../images/projects/solstice/solstice-full.jpg";

const SolsticeProject = () => {
  return (
    <PortfolioItem
      category="Photography"
      image_non_webp={Solstice}
      modal={SolsticeFull}
    />
  )
}

export default SolsticeProject;
