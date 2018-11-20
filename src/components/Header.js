import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";
import { HashLink as HashLink } from 'react-router-hash-link';

import Portfolio from "./Portfolio";
import Contact from "./Contact";

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="o-Grid c-Nav">
            <div>
                <Link to="/">Steve Hobbs</Link>
            </div>
            <div>
                <HashLink to="/#portfolio">Portfolio</HashLink>
                <Link to="/contact">Contact</Link>
            </div>
          </nav>

          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames="fade"
            >
              <Switch>
                <Route exact path="/" component={null} />
                <Route path="/#portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Router>
    )
  }
};

export default Header;
