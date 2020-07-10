import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function ECommerceProject() {
  return (
    <PortfolioItem
      title="ECommerce Lander Concept"
      category="Web, Digital"
      image_primary="/ecommerce/ecommerce-concept-webp"
      overview="Web landing page concept for an ECommerce company. Designed in Sketch."
      modal="/ecommerce/ecommerce-concept-full"
      modal_height={3155}
    />
  )
}

export default ECommerceProject;
