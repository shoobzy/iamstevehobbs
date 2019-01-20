import React from "react";
import PortfolioItem from "../Portfolio/ProjectTpl";
import BethanyPoster from "../../images/projects/bethany/bethany-poster.webp"
import BethanyPosterFull from "../../images/projects/bethany/bethany-poster-full.png"

const BethanyProject = () => {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_primary={BethanyPoster}
      overview="A2 poster printed on Hahnemuhle Pearl 285g.s.m. semi-gloss paper. Designed in Adobe Illustrator"
      modal={BethanyPosterFull}
    />
  )
}

export default BethanyProject;
