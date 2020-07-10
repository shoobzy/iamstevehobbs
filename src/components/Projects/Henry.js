import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function HenryProject() {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_primary="henry/henry-poster-webp"
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal="henry/henry-poster-full"
      modal_height={1553}
    />
  )
}

export default HenryProject;
