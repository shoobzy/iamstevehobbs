import React from "react";
import Solstice from "../../images/projects/solstice/solstice.jpg";
import SolsticeFull from "../../images/projects/solstice/solstice-full.jpg";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function SolsticeProject() {
  return (
    <PortfolioItem
      category="Photography"
      image_primary={Solstice}
      modal={SolsticeFull}
    />
  )
}

export default SolsticeProject;
