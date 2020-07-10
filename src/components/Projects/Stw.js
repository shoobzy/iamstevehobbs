import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

function StwProject() {
  return (
    <PortfolioItem
      title="SeeTheWorld"
      category="Web"
      image_primary="stw/stw-splash"
      overview="Local Insights, Global Destinations. SeeTheWorld tells you all you need to know about some of the world's best travel destinations and where to get the best booking offers."
      ext_url="https://www.seetheworld.com/"
    />
  )
}

export default StwProject;
