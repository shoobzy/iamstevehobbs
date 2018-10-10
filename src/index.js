import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from 'react-router-dom';
import { animateScroll as scroll, } from 'react-scroll';

import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import Graphic from './images/steve__hobbs_inverted.svg';
// import Plx from 'react-plx';

import './style.css';

(function () {
  window.addEventListener('scroll', function () {
    var intro = document.querySelector('.intro'),
        hero = document.querySelector('.hero');

    if (document.body.scrollTop || document.documentElement.scrollTop >= hero.scrollHeight) {
      intro.classList.add('detached');
    } else {
      intro.classList.remove('detached');
    }
  });

  var scroll = 1;
  var currentScale = 1;
  var lastUpdateTime = new Date();
  var targetScale;
  var zoomTime = .2; // ~ number of seconds to reach the expected zoom for the current scroll position
  var endScrollHeight = window.innerHeight / 200; // in px

  // user input
  window.addEventListener('scroll', function (event) {
      scroll = window.scrollY;
      var rate = scroll / endScrollHeight;
      targetScale = 1 + (scrollY / 1000) * rate;
  });

  // update once per frame
  setInterval(onTimerTick, 16.66667); // 16.5 milliseconds = ~ 60 frames per sec

  function onTimerTick() {
      // make sure we're tracking how much time's elapsed
      var currentTime = new Date();
      var timeDelta = currentTime - lastUpdateTime;
      lastUpdateTime = currentTime;

      var newScale = lerp(currentScale, targetScale, ((timeDelta / 1000) / zoomTime));
      currentScale = newScale;

      console.log(newScale);

      //expand / contract
      var expander = document.querySelector(".hero");
      expander.setAttribute("style", "transform: scale(" + newScale + ") translateZ(0);");
  }

  function lerp(current, target, fraction) {
      var result = current + fraction * (target - current);

      if (result < 1 || isNaN(result)) {
          return 1;
      } else {
          return result;
      }
  }
})();

class Scroller extends React.Component {
  render() {
    return (
      <span onClick={() => scroll.scrollTo(
        window.innerHeight, {
          duration: 1200,
          delay: 50,
          smooth: 'easeInExpo',
        }
      )}
      >Take a look</span>
    )
  }
}

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <div className="intro__inner">
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
          <p>kdfhgkfdhsgjkdfh kjdfhkjghdjk fg</p>
        </div>
      </div>
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
        <div className="hero" style={ spanHeight }>
          <div className="hero__inner" style={ spanHeight }>
            <div className="hero__intro_fill"></div>
            <div className="hero__intro_graphic">
              <div className="hero__intro_fill"><h1>Hi there, I am</h1></div>
                <ReactSVG
                  src={ Graphic }
                />
              <div className="hero__arrow hero__intro_fill">
                <Scroller />
              </div>
            </div>
            <div className="hero__intro_fill"></div>
          </div>
        </div>
        <Intro />
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

// class Intro extends React.Component {
//   render() {
//     const style = {
//       textAlign: 'center',
//     }

//     return (
//       <div style={style}>
//         {/* <h1>{this.state.message}</h1> */}
//         {/* <h2>{process.env.NODE_ENV}</h2> */}
//         <ReactSVG src={Graphic} />
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
