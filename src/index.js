import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link
// } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './style.css';

class Portfolio extends React.Component {
  render() {
    return (
      <main className="o-Container Portfolio">
        <div className="o-Grid">
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
        <h1 className="Hero--Salutation">Hi there, I'm</h1>
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
