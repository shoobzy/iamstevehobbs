import React from "react";
import PortfolioItem from "../ProjectTpl";
import HenryPoster from "../../images/projects/henry/henry-poster.webp"
import HenryPosterFallback from "../../images/projects/henry/henry-poster.jpg"
import HenryPosterFull from "../../images/projects/henry/henry-poster-full.png"

const HenryProject = () => {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_webp={HenryPoster}
      image_non_webp={HenryPosterFallback}
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal={HenryPosterFull}
    />
  )
}

export default HenryProject;
