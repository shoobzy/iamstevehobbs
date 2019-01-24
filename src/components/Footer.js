import React from "react";
import classnames from "classnames";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }

  render() {
    const iconStyle = {
      color: "#61dafb",
    };

    const iconClass = this.state.isHovered ? "spin" : "";

    return (
      <div className="o-Footer o-Container">
        <p className="c-Title--Charlie">
          <a
            href="https://reactjs.org/"
            target="_blank"
            style={iconStyle}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <i className={classnames("fab fa-react", iconClass)}></i>
          </a>
        </p>
        <p>Steve Hobbs &copy; {(new Date().getFullYear())}</p>
      </div>
    )
  }
}

export default Footer;
