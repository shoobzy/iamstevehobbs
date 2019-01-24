import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="o-Footer o-Container">
        <p className="c-Overview">Built with <a href="https://reactjs.org/" target="_blank"><i className="fab fa-react"></i></a></p>
        <p>Steve Hobbs &copy; {(new Date().getFullYear())}</p>
      </div>
    )
  }
}

export default Footer;
