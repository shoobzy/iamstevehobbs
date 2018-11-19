import React from 'react';

import Header from '../Header';
import Intro from '../Intro';
import Portfolio from '../Portfolio';

import '../../style.css';

class App extends React.Component {
  render() {
    return (
      <div class="o-Page">
        <div class="o-Container">
          <Header />
          <main>
            <Intro />
            <Portfolio />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
