import React from "react";

import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Intro from "./Intro";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div className="c-Page">
      <ScrollToTopOnMount />
      <Intro />
      <Portfolio />
    </div>
  )
}

export default Home;
