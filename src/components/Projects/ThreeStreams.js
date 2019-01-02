import React from "react";
import PortfolioItem from "../Portfolio/ProjectTpl";
import Logo from "../../images/projects/three-streams/logo-main.webp";

const ThreeStreamsProject = () => {
  return (
    <PortfolioItem
      title="Three Streams"
      image_primary={Logo}
      overview=""
      details={
        <ul>
          <li>Branding</li>
        </ul>
      }
    />
  )
}

export default ThreeStreamsProject;
