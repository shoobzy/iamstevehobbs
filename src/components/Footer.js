import React from "react";
// import posed from "react-pose";

// const ReactIcon = posed.i({
//   hoverable: true,
//   init: {
//     rotate: "180deg",
//   },
//   hover: {
//     rotate: "360deg",
//   },
//   transition: {
//     type: "spring",
//     stiffness: 800,
//     duration: 30000
//   }
// });

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
