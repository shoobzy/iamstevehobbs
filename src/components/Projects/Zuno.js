import React from "react";
import Logo from "../../images/projects/zuno/zuno-logo.jpg";
import Mockups from "../../images/projects/zuno/mockups.jpg";

const PortfolioItem = React.lazy(() => import("../ProjectTpl"));

class ZunoProject extends React.Component {
  render() {
    let swatches = [];

    return (
      <PortfolioItem
        title="Zuno Fruit teas"
        category="Branding"
        image_primary={Logo}
        overview="ZUNO Fruit Teas packaging design and branding."
        image_secondary={Mockups}
        colour_palette={swatches}
      />
    )
  }
}

export default ZunoProject;
