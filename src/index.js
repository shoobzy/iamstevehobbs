import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import Graphic from './images/steve-hobbs.svg';

import 'font-awesome/css/font-awesome.css';
import './style.css';

class Intro extends React.Component {
  render() {
    const style = {
      textAlign: 'center',
    }

    return (
      <div style={style}>
        <h1>Hi there, I am</h1>
        {/* <h2>{process.env.NODE_ENV}</h2> */}
        <ReactSVG src={Graphic} />
      </div>
    )
  }
}

ReactDOM.render(
    <Intro />,
    document.getElementById('root')
);
