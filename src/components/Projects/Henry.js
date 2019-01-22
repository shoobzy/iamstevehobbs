import React from "react";
import PortfolioItem from "../Portfolio/ProjectTpl";
import HenryPoster from "../../images/projects/henry/henry-poster.webp"
import HenryPosterFull from "../../images/projects/henry/henry-poster-full.png"

const HenryProject = () => {
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
