import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from 'react-router-dom';
import { animateScroll as scroll, } from 'react-scroll';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import Plx from 'react-plx';

import Graphic from './images/steve-hobbs-alt.svg';

import './style.css';

(function () {
  window.addEventListener("scroll", function () {
    // var portfolio = document.querySelector(".Portfolio"),
    var portfolioInner = document.querySelector(".Portfolio--Inner"),
        hero = document.querySelector(".Hero");

    if (document.body.scrollTop || document.documentElement.scrollTop >= hero.scrollHeight) {
      portfolioInner.classList.add("h-Detached");
    } else {
      portfolioInner.classList.remove("h-Detached");
    }

    // if (window.scrollY > (hero.scrollHeight / 2)) {
    //   portfolioInner.classList.add("h-Detached");
    // } else {
    //   portfolioInner.classList.remove("h-Detached");
    // }
  });
})();

const parallaxData = [
  {
    start: 0,
    end: "99vh",
    properties: [
      {
        startValue: 1,
        endValue: 450,
        property: "scale",
      },
      {
        startValue: 0,
        endValue: 200,
        property: "translateZ",
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity"
      }
    ],
  },
];


class Scroller extends React.Component {
  render() {
    return (
        <div onClick={() => scroll.scrollTo(
          window.innerHeight, {
            duration: 1200,
            delay: 50,
            smooth: 'easeInExpo',
          }
        )}
        >
          <span className="Hero--Intro-Arrow"><i className="fas fa-chevron-down"></i></span>
        </div>
    )
  }
}

// class Intro extends React.Component {
//   render() {
//     return (
//       <div className="Intro">
//         <div className="Intro--inner o-container">
//           <h3>
//             Digital Designer &amp; Frontend Developer from Portsmouth, Hampshire
//           </h3>
//         </div>
//       </div>
//     );
//   }
// }

class Portfolio extends React.Component {
  render() {
    return (
      <main className="o-Container Portfolio">
        <div className="o-Grid Portfolio--Inner">
            <div className="o-Grid--Item"></div>
            <div className="o-Grid--Item"></div>
            <div className="o-Grid--Item"></div>
            <div className="o-Grid--Item"></div>
            <div className="o-Grid--Item"></div>
            <div className="o-Grid--Item"></div>
            <div className="o-Grid--Item"></div>
            <div className="o-Grid--Item"></div>
        </div>
      </main>
    );
  }
}



class Hero extends React.Component {
  render() {
    const spanHeight = {
      height: '100%',
    }

    return (
      <div>
        <Plx
          parallaxData={ parallaxData }
          style={ spanHeight }
        >
          <div className="Hero">
            <div className="Hero--Intro" style={ spanHeight }>
              <div className="Hero--Filler h-Translate--X-Positive"></div>
              <div className="Hero--Graphic">
                <div className="Hero--Filler"><h1 className="Hero--Salutation">Hi there, I'm</h1></div>
                  <ReactSVG
                    src={ Graphic }
                  />
                <div className="Hero--Filler Hero--Intro-Scroll">
                  <Scroller />
                </div>
              </div>
              <div className="Hero--Filler h-Translate--X-Negative"></div>
            </div>
          </div>
        </Plx>
        <Portfolio />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
        <Hero />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
