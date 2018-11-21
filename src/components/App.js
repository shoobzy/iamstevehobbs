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

import Home from "./Home";
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
                <NavLink exact to="/">Steve Hobbs</NavLink>
              </div>
              <div>
                <NavLink exact to="/" activeClassName="active">Portfolio</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </div>
            </nav>

            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fadeInUp"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/" component={Home} />
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
