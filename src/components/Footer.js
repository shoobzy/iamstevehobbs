import React from "react";

function Footer() {
  const iconStyle = {color: "#61dafb"};

  return (
    <div className="o-Footer o-Container">
      <p className="c-Title--Charlie">
        <a
          href="https://reactjs.org/"
          target="_blank"
          style={iconStyle}
        >
          <i className="fab fa-react"></i>
        </a>
      </p>
      <p>Steve Hobbs &copy; {(new Date().getFullYear())}</p>
    </div>
  )
}

export default Footer;
