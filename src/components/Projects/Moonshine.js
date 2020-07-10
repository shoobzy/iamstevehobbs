import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function MoonshineProject() {
  return (
    <PortfolioItem
      title="Moonshine"
      category="Digital, Print"
      image_primary="moonshine/moonshine"
      overview="Inspired by the 1930's art style of Max Fleischer, this 'battle flag' was designed for a boat representing the name 'Moonshine'."
      modal="moonshine/moonshine-full"
      modal_height={812}
    />
  )
}

export default MoonshineProject;
