import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function BethanyProject() {
  return (
    <PortfolioItem
      category="Digital, Print"
      image_primary="bethany/bethany-poster-webp"
      overview="A2 print on Giclée Hahnemühle Pearl 285gsm. Designed in Adobe Illustrator"
      modal="bethany/bethany-poster-full"
      modal_height={1553}
    />
  )
}

export default BethanyProject;
