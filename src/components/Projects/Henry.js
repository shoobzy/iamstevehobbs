import React from "react";
import HenryPoster from "../../images/projects/henry/henry-poster.webp"
import HenryPosterFallback from "../../images/projects/henry/henry-poster.jpg"
import HenryPosterFull from "../../images/projects/henry/henry-poster-full.png"

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function HenryProject() {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_primary={HenryPoster}
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal={HenryPosterFull}
    />
  )
}

export default HenryProject;
