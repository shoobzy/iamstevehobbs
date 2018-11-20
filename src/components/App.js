import React from "react";
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";
// import { HashLink as HashLink } from 'react-router-hash-link';

import Portfolio from "./Portfolio";
import Contact from "./Contact";

import "../style.css";

class App extends React.Component {
  render() {
    return (
      <div className="o-Page">
        <div className="o-Container">
          <div>
            <nav className="o-Grid c-Nav">
              <div>
                  <NavLink to="/">Steve Hobbs</NavLink>
              </div>
              <div>
                  <NavLink to="/#portfolio">Portfolio</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
              </div>
            </nav>

            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  timeout={300}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Portfolio} />
                    <Route path="/" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
