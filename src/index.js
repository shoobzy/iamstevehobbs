import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import Graphic from './images/steve__hobbs_inverted.svg';
import Plx from 'react-plx';

import './style.css';

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 15,
        property: 'scale',
      },
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];

class Intro extends React.Component {
  render() {
    return (
      <Plx
        className="hero__intro_graphic"
        parallaxData={ parallaxData }
      >
      <ReactSVG
        src={ Graphic }
        className="wrapper-class-name"
      />
      </Plx>
    )
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
    <Intro />,
    document.getElementById('hero__intro_graphic')
);
