import React from "react";
import DeailPage from "../../images/projects/product-detail/product-detail.jpg";
import DeailPageFull from "../../images/projects/product-detail/product-detail-full.png";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function DetailPageProject() {
  return (
    <PortfolioItem
      title="Product Page Concept"
      category="Web, Digital"
      image_primary={DeailPage}
      overview="Product detail view concept. Designed in Sketch."
      modal={DeailPageFull}
      modal_image_size="1098x1570"
    />
  )
}

export default DetailPageProject;
