import React from "react";
import BethanyPoster from "../../images/projects/bethany/bethany-poster.jpg"
import BethanyPosterFull from "../../images/projects/bethany/bethany-poster-full.png"

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function BethanyProject() {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_primary={BethanyPoster}
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal={BethanyPosterFull}
      modal_image_ratio="0.716242661448141"
    />
  )
}

export default BethanyProject;
