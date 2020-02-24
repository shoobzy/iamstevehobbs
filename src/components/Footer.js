import React from "react";

const iconStyle = {color: "#61dafb"};

export default () => (
  <div className="o-Footer o-Container">
    <p className="c-Title--Charlie">
      <a
        href="https://reactjs.org/"
        target="_blank"
        style={iconStyle}
        rel="noreferrer"
        aria-label="React - A JavaScript library for building user interfaces"
      >
        <i className="fab fa-react"></i>
      </a>
    </p>
    <p>Steve Hobbs &copy; {(new Date().getFullYear())}</p>
  </div>
);
