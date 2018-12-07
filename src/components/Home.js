import React from "react";

import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Intro from "./Intro";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div className="c-Page">
      <ScrollToTopOnMount />
      <div className="o-Container">
        <Intro />
        <Portfolio />
      </div>
    </div>
  )
}

export default Home;
