import React, { useEffect } from "react";
import posed from "react-pose";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Intro from "./Intro";
import Portfolio from "./Portfolio";

const HomeContainer = posed.div({
  enter: { staggerChildren: 60, delay: 300 },
  exit: { staggerChildren: 10, staggerDirection: -1 }
});

function Home () {
  useEffect(() => {
    document.body.classList.remove("u-DarkMode");

    // Turn this into a little function
    const textElems = document.querySelectorAll("h1, h2, h3, h4, h5, p, a");
    textElems.forEach(function(textElem) {
      textElem.classList.remove("u-Foreground");
    });
  });

  return (
    <HomeContainer className="c-Page">
      <ScrollToTopOnMount />
      <Intro />
      <Portfolio />
    </HomeContainer>
  );
}

export default Home;
