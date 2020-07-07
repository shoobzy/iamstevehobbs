import React from "react";

function ColourPalette(props) {
  return (
    <div className="c-Project--Palette">
        <div className={"c-Project--Palette-Swatch " + props.swatchName}></div>
        <div className="c-Project--Palette-Values">
          <h5>{props.pantone}</h5>
          <p>
            <span>RGB:<span>{props.rgb}</span></span>
            <span>HEX:<span>{props.hex}</span></span>
            <span>CMYK:<span>{props.cmyk}</span></span>
          </p>
        </div>
    </div>
  );
};

export default ColourPalette;
