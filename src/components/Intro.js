import React from "react";
import posed from "react-pose";

const IntroContainer = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

function Intro() {
  return (
    <IntroContainer className="c-Intro o-Grid">
      <h1 className="c-Intro--Title o-Grid--Item 1/2-TabletPortraitUp-WithGutter">
        Digital<br></br>
        Designer<br></br>
        Front-End<br></br>
        Developer
      </h1>
      <p className="c-Title--Delta o-Grid--Item 1/2-TabletPortraitUp-WithGutter">With more than 8 years’ industry experience at combining web development and design.</p>
    </IntroContainer>
  )
}

export default Intro;
