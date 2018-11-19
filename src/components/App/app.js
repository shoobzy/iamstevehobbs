import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from 'react-router-dom';

import Portfolio from './components/Portfolio';

import './style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Portfolio />
      </div>
    )
  }
}

export default App;
