import React from "react";

import Intro from "./Intro";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div className="c-Page fadeInUp">
      <div className="o-Container">
        <Intro />
        <Portfolio />
      </div>
    </div>
  )
}

export default Home;
