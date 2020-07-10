import React from "react";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

class ZunoProject extends React.Component {
  render() {
    let swatches = [];

    return (
      <PortfolioItem
        title="Zuno Fruit teas"
        category="Branding"
        image_primary="zuno/zuno-logo"
        overview="ZUNO Fruit Teas packaging design and branding."
        image_secondary="zuno/mockups"
        colour_palette={swatches}
      />
    )
  }
}

export default ZunoProject;
