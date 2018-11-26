import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";

import Portfolio from "./Portfolio";
import Contact from "./Contact";

class Header extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="o-Grid c-Nav">
            <div>
                <NavLink to="/">Steve Hobbs</NavLink>
            </div>
            <div>
                <NavLink exact to="/">Portfolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>

          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames="fade"
            >
              <Switch>
                <Route exact path="/" component={null} />
                <Route path="/#portfolio" component={null} />
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
