import React from 'react';
import { render } from 'react-dom';

import 'font-awesome/css/font-awesome.css';
import './style.css';

class Card extends React.Component {
  render() {
    const style = {
      margin: 20,
      padding: 20,
      color: 'white',
      backgroundColor: this.props.color,
    }

    return (
      <div style={style}>
        <h1><i className="fa fa-star"></i> {this.props.children}</h1>
        <h2>{process.env.NODE_ENV}</h2>
      </div>
    )
  }
}

const element = (
  <div>
    <Card color={'skyblue'}>Card 1</Card>
    <Card color={'steelblue'}>Card 2</Card>
  </div>
)

// const node = document.querySelector('#root');
// ReactDOM.render(<Container />, node);
