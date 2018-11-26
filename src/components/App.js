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
import LaBergerieProject from "./Projects/LaBergerie";

class App extends React.Component {
  state = {
    height: null,
  }

  saveRef = (ref) => this.containerNode = ref

  measure() {
    const {clientHeight} = this.containerNode

    this.setState({
      height: clientHeight,
    })
  }

  componentDidMount() {
    this.measure()
  }

  componentDidUpdate() {
    this.measure()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.height !== nextState.height
    )
  }

  render() {
    const {height} = this.state

    const styles = {
      position: 'relative',
      height: {height} + 'px'
    }

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
              <TransitionGroup style={styles}>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="fadeInUp"
                  ref={this.saveRef}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/la-begerie" component={LaBergerieProject} />
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
