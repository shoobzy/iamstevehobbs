import React from "react";
import HenryPoster from "../../images/projects/henry/henry-poster.jpg"
import HenryPosterFull from "../../images/projects/henry/henry-poster-full.png"

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function HenryProject() {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_primary={HenryPoster}
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal={HenryPosterFull}
      modal_image_size="1098x1553"
    />
  )
}

export default HenryProject;
