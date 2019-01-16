import React from "react";
import PortfolioItem from "../Portfolio/ProjectTpl";
import Lander from "../../images/projects/ecommerce/ecommerce-concept.webp";
import LanderFull from "../../images/projects/ecommerce/ecommerce-concept-full.png";

const ECommerceProject = () => {
  return (
    <PortfolioItem
      title="ECommerce Lander Concept"
      category="Web, Digital"
      image_primary={Lander}
      overview="Web landing page concept for an ECommerce company. Designed in Sketch."
      modal={LanderFull}
    />
  )
}

export default ECommerceProject;
