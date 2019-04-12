import React from "react";
import posed from "react-pose";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Intro from "./Intro";
import Portfolio from "./Portfolio";

const HomeContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 150 },
  exit: { y: 50, opacity: 0 }
});

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
      <HomeContainer className="c-Page">
        <ScrollToTopOnMount />
        <Intro />
        <Portfolio />
      </HomeContainer>
    )
  }
}

export default Home;
