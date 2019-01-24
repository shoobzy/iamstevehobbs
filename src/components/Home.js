import React from "react";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Intro from "./Intro";
import Portfolio from "./Portfolio";

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.remove("u-DarkMode");

    // Turn this into a little function
    const textElems = document.querySelectorAll("h1, h2, h3, h4, h5, p, a");
    textElems.forEach(function(textElem) {
      textElem.classList.remove("u-Foreground");
    });
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
