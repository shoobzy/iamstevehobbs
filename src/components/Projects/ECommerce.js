import React from "react";
import PortfolioItem from "../ProjectTpl";
import Lander from "../../images/projects/ecommerce/ecommerce-concept.webp";
import LanderFallback from "../../images/projects/ecommerce/ecommerce-concept.jpg";
import LanderFull from "../../images/projects/ecommerce/ecommerce-concept-full.png";

const ECommerceProject = () => {
  return (
    <PortfolioItem
      title="ECommerce Lander Concept"
      category="Web, Digital"
      image_webp={Lander}
      image_non_webp={LanderFallback}
      overview="Web landing page concept for an ECommerce company. Designed in Sketch."
      modal={LanderFull}
    />
  )
}

export default ECommerceProject;
