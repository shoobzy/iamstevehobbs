import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function DetailPageProject() {
  return (
    <PortfolioItem
      title="Product Page Concept"
      category="Web, Digital"
      image_primary="product-detail/product-detail"
      overview="Product detail view concept. Designed in Sketch."
      modal="product-detail/product-detail-full"
      modal_height={1570}
    />
  )
}

export default DetailPageProject;
