import React from "react";

import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Intro from "./Intro";
import Portfolio from "./Portfolio";

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.remove("u-DarkMode");
  }

  render() {
    return (
      <div className="c-Page">
        <ScrollToTopOnMount />
        <Intro />
        <Portfolio />
      </div>
    )
  }
}

export default Home;
