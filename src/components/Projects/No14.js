import React from "react";
import PortfolioItem from "../Portfolio/ProjectTpl";
import HotTub from "../../images/projects/no-14/no-14.webp";

const No14Project = () => {
  return (
    <PortfolioItem
      title="No.14 Verbier"
      category="Web"
      image_primary={HotTub}
      overview="No.14 is arguably the largest and most unique top luxury chalet available to rent in Verbier, Switzerland."
      ext_url="https://www.no14verbier.com/"
    />
  )
}

export default No14Project;
