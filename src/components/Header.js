import React from "react";
import {
  Link,
  NavLink
} from "react-router-dom";

function MailTo(props) {
  return <a href={`mailto:${props.email}`}>{props.content}</a>;
}

class Header extends React.Component {
  render() {
    return (
      <nav className="c-Nav">
        <div className="c-Nav--Inner o-Container">
          <div className="o-Grid">
            <div className="c-Nav--Item">
              <Link to="/" replace={false}>Steve Hobbs</Link>
            </div>
            <div className="c-Nav--Item">
              <NavLink to="/" exact={true} activeClassName="active">Portfolio</NavLink>
              <MailTo email="hi@iamstevehobbs.com" content="Contact" />
            </div>
          </div>
        </div>
      </nav>
    )
  }
};

export default Header;
