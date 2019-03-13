import React from "react";
import ProjectItem from "../ProjectTpl";
import BethanyPoster from "../../images/projects/bethany/bethany-poster.webp"
import BethanyPosterFallback from "../../images/projects/bethany/bethany-poster.jpg"
import BethanyPosterFull from "../../images/projects/bethany/bethany-poster-full.png"

const BethanyProject = () => {
  return (
    <ProjectItem
      category="Digital, Print"
      image_webp={BethanyPoster}
      image_non_webp={BethanyPosterFallback}
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal={BethanyPosterFull}
    />
  )
}

export default BethanyProject;
