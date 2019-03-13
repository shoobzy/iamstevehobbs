import React from "react";
import ProjectItem from "../ProjectTpl";
import StwSplash from "../../images/projects/stw/stw-splash.jpg";

const StwProject = () => {
  return (
    <ProjectItem
      title="SeeTheWorld"
      category="Web"
      image_non_webp={StwSplash}
      overview="Local Insights, Global Destinations. SeeTheWorld tells you all you need to know about some of the world's best travel destinations and where to get the best booking offers."
      ext_url="https://www.seetheworld.com/"
    />
  )
}

export default StwProject;
