import React from "react";
import { Link, NavLink } from "react-router-dom";

export default () => (
  <nav className="p-Nav">
    <div className="p-Nav--Inner o-Container">
      <div className="o-Grid">
        <div className="p-Nav--Item">
          <Link to="/" replace={false}>Steve Hobbs</Link>
        </div>
        <div className="p-Nav--Item">
          <NavLink to="/" exact={true} activeClassName="active">Portfolio</NavLink>
          <a href="mailto:hi@iamstevehobbs.com">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);
