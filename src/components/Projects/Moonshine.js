import React from "react";
import Moonshine from "../../images/projects/moonshine/moonshine.jpg";
import MoonshineFull from "../../images/projects/moonshine/moonshine-full.png";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function MoonshineProject() {
  return (
    <PortfolioItem
      title="Moonshine"
      category="Digital, Print"
      image_primary={Moonshine}
      overview="Inspired by the 1930's art style of Max Fleischer, this 'battle flag' was designed for a boat representing the name 'Moonshine'."
      modal={MoonshineFull}
      modal_image_ratio="1.352216748768473"
    />
  )
}

export default MoonshineProject;
