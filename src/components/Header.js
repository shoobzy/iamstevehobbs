import React from "react";
import {
  NavLink
} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="o-Grid c-Nav">
        <div>
          <NavLink to="/">Steve Hobbs</NavLink>
        </div>
        <div>
          <NavLink to="/" activeClassName="active">Portfolio</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </div>
      </nav>
    )
  }
};

export default Header;
