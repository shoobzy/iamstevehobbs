import React from "react";
import { Link, NavLink } from "react-router-dom";

export default () => (
  <nav className="p-Nav">
    <div className="p-Nav--Inner">
      <div className="o-Grid">
        <div>
          <Link
            className="p-Nav--Logo"
            to="/"
            replace={false}
          >
          </Link>
        </div>
        <div className="p-Nav--Item">
          <NavLink to="/" exact={true} activeClassName="active">Portfolio</NavLink>
          <a href="mailto:hi@iamstevehobbs.com">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);
