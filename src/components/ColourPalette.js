import React from "react";

export default ({swatchName, pantone, rgb, hex, cmyk}) => (
  <div className="c-Project--Palette">
      <div className={"c-Project--Palette-Swatch " + swatchName}></div>
      <p className="c-Project--Palette-Values o-Grid flex-normal column">
        <strong className="u-TextCenter">{pantone}</strong><br></br>
        <span className="o-Grid row">RGB:<span>{rgb}</span></span>
        <span className="o-Grid row">HEX:<span>{hex}</span></span>
        <span className="o-Grid row">CMYK:<span>{cmyk}</span></span>
      </p>
  </div>
)
