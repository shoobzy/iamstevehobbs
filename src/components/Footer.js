import React from "react";

const iconStyle = {
  color: "#61dafb",
};

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovered: false
    };
    this.handleHover = this.handleHover.bond(this);
  }

  handleHover() {
    this.setState(prevState, () => {
      isHovered: !prevState.isHovered
    });
  }
  render() {
    const iconClass = this.state.isHovered ? "spin" : "";

    return (
      <div className="o-Footer o-Container">
        <p className="c-Title--Charlie">
          <a
            href="https://reactjs.org/"
            target="_blank"
            className={iconClass}
            style={iconStyle}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <i className="fab fa-react"></i>
          </a>
        </p>
        <p>Steve Hobbs &copy; {(new Date().getFullYear())}</p>
      </div>
    )
  }
}

export default Footer;
