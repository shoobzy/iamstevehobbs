import React from "react";

class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <span className="loader__ball loader__ball--1" />
        <span className="loader__ball loader__ball--2" />
        <span className="loader__ball loader__ball--3" />
      </div>
    )
  }
}

export default Loader;
