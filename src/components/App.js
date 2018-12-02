import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";

import "../style.css";

import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";

import LaBergerieProject from "./Projects/LaBergerie";

const project_routes = [
  { id: 0, path: "/la-bergerie", component: LaBergerieProject },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="o-Page">
          <div className="o-Container">
            <Header />

            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fadeInUp"
                >
                  <Switch location={location}>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/la-bergerie" component={LaBergerieProject} />
                    {project_routes.map(i => (
                      <div key={i.id}>
                        <Route path={i.path} component={i.component} />
                      </div>
                    ))}
                    <Route render={() => <div>Not Found</div>} />
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
