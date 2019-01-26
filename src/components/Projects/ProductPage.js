import React from "react";
import PortfolioItem from "../ProjectTpl";
import DeailPage from "../../images/projects/product-detail/product-detail.jpg";
import DeailPageFull from "../../images/projects/product-detail/product-detail-full.png";

const DetailPageProject = () => {
  return (
    <PortfolioItem
      title="Product Page Concept"
      category="Web, Digital"
      image_non_webp={DeailPage}
      overview="Product detail view concept. Designed in Sketch."
      modal={DeailPageFull}
    />
  )
}

export default DetailPageProject;
