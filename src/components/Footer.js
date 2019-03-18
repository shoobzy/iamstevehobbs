import React, { useState } from "react";
import posed from "react-pose";

const ReactIcon = posed.i({
  hoverable: true,
  init: {
    rotate: "359deg",
  },
  hover: {
    rotate: "360deg",
  },
  transition: {
    type: "spring",
    stiffness: 800,
    duration: 30000
  }
});

function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const hover = () => setIsHovered(true);
  const iconStyle = {color: "#61dafb"};

  return (
    <div className="o-Footer o-Container">
      <p className="c-Title--Charlie">
        <a
          href="https://reactjs.org/"
          target="_blank"
          style={iconStyle}
        >
          <ReactIcon className="fab fa-react"></ReactIcon>
        </a>
      </p>
      <p>Steve Hobbs &copy; {(new Date().getFullYear())}</p>
    </div>
  )
}

export default Footer;
