import React from "react";
import ProjectItem from "../ProjectTpl";
import MilkyWay from "../../images/projects/milkyway/milkyway.jpg";
import MilkyWayFull from "../../images/projects/milkyway/milkyway-full.jpg";

const MilkyWayProject = () => {
  return (
    <ProjectItem
      category="Photography"
      image_non_webp={MilkyWay}
      modal={MilkyWayFull}
    />
  )
}

export default MilkyWayProject;
