import React from "react";

function ColourPalette(props) {
  return (
    <div className="c-Project--Palette">
        <div className={"c-Project--Palette-Swatch " + props.swatchName}></div>
        <p className="c-Project--Palette-Values o-Grid flex-normal column">
          <strong className="u-TextCenter">{props.pantone}</strong><br></br>
          <span className="o-Grid row">RGB:<span>{props.rgb}</span></span>
          <span className="o-Grid row">HEX:<span>{props.hex}</span></span>
          <span className="o-Grid row">CMYK:<span>{props.cmyk}</span></span>
        </p>
    </div>
  );
};

export default ColourPalette;
