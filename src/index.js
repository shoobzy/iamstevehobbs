import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from 'react-router-dom';
import { animateScroll as scroll, } from 'react-scroll';

import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import Graphic from './images/steve__hobbs_inverted.svg';
import Plx from 'react-plx';

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
})();

const parallaxScale = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 200,
        property: 'scale',
      },
    ],
  },
];

const parallaxFade = [
  {
    start: 0,
    end: 250,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];

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
        <div className="hero">
          <Plx
            parallaxData={ parallaxScale }
            style= { spanHeight}
          >
            <Plx
              parallaxData={ parallaxFade }
              className="hero__inner"
              style= { spanHeight}
            >
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
            </Plx>
          </Plx>
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
