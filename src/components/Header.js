import React from "react";
import {
  Link,
  NavLink
} from "react-router-dom";

import ScrollToTopOnMount from "./ScrollToTopOnMount";

class Header extends React.Component {
  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <nav className="o-Grid c-Nav">
          <div>
            <Link to="/" replace={false}>Steve Hobbs</Link>
          </div>
          <div>
            <NavLink to="/" exact={true} activeClassName="active">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </div>
        </nav>
      </div>
    )
  }
};

export default Header;
