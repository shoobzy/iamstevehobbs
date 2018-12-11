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

// Figure this out
import LaBergerieProject from "./Projects/LaBergerie";
import ThreeStreamsProject from "./Projects/ThreeStreams";

const project_routes = [
  { id: 0, path: "/la-bergerie", component: LaBergerieProject },
  { id: 1, path: "/three-streams", component: ThreeStreamsProject }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="o-Page fadeInUp">
          <div className="o-Container">
            <Header />

            <Route render={({location}) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={500}
                  classNames="fadeInUp"
                >
                  <Switch location={location}>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/contact" component={Contact} />
                    {project_routes.map(i => (
                      <Route key={i.id} path={i.path} component={i.component} />
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
