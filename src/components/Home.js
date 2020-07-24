import React, { Suspense } from "react";
import posed from "react-pose";
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import Loader from "./Loader";

const Portfolio = React.lazy(() => import("./Portfolio"));

const HomeContainer = posed.div({
  enter: { y: 0, opacity: 1, delay: 150 },
  exit: {y: 75, opacity: 0 }
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
      <HomeContainer
        className="c-Page"
        initialPose="exit"
        pose="enter"
      >
        <ScrollToTopOnMount />
        <div className="o-Container">
          <div className="c-Intro o-Grid">
            <h1 className="c-Intro--Title o-Grid--Item 1/2-TabletPortraitUp-WithGutter">
              Digital<br></br>
              Designer<br></br>
              Front-End<br></br>
              Developer
            </h1>
            <p className="c-Title--Delta o-Grid--Item 1/2-TabletPortraitUp-WithGutter">With more than 8 years’ industry experience at combining web development and design.</p>
          </div>
        </div>
        <Suspense fallback={<Loader/>}>
          <Portfolio />
        </Suspense>
      </HomeContainer>
    )
  }
}

export default Home;
