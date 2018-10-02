import React from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import Graphic from './images/steve-hobbs.svg';

import 'font-awesome/css/font-awesome.css';
import './style.css';

class Intro extends React.Component {
  render() {
    const style = {
      margin: 20,
      padding: 20,
      color: 'black',
      backgroundColor: this.props.color,
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
    document.getElementById('steve-hobbs')
);
