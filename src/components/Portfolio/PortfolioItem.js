import React from "react";

import ScrollToTopOnMount from "../ScrollToTopOnMount";

class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="c-Page fadeInUp">
        <ScrollToTopOnMount />
        {this.props.children}
      </div>
    )
  }
}

export default PortfolioItem;
