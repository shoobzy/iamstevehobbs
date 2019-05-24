import React from "react";
import BethanyPoster from "../../images/projects/bethany/bethany-poster.webp"
import BethanyPosterFallback from "../../images/projects/bethany/bethany-poster.jpg"
import BethanyPosterFull from "../../images/projects/bethany/bethany-poster-full.png"

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function BethanyProject() {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_webp={BethanyPoster}
      image_non_webp={BethanyPosterFallback}
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal={BethanyPosterFull}
    />
  )
}

export default BethanyProject;
