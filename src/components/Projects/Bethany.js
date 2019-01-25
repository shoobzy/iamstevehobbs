import React from "react";
import PortfolioItem from "../ProjectTpl";
import BethanyPoster from "../../images/projects/bethany/bethany-poster.webp"
import BethanyPosterFull from "../../images/projects/bethany/bethany-poster-full.png"

const BethanyProject = () => {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_primary={BethanyPoster}
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal={BethanyPosterFull}
    />
  )
}

export default BethanyProject;
