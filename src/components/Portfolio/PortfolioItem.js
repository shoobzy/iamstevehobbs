import React from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

class PortfolioItem extends React.Component {
  render() {
    const {
      title,
      image_primary,
      overview,
      image_secondary,
      details,
      ext_url
    } = this.props

 return (
      <div className="c-Page fadeInUp">
        <ScrollToTopOnMount />
        <h1>
          {title}
        </h1>
        <img
          className="c-Portfolio--ItemImg h-MarginTrailer--x2"
          src={image_primary}
        />
        <div className="o-Grid">
          <div className="o-Grid--Item 2/3-TabletPortraitUp-WithGutter">
            <h5>Overview</h5>
            <p className="c-Intro--Overview h-MarginTrailer--x2">
              {overview}
            </p>
            <img
              className="c-Portfolio--ItemImg h-MarginTrailer--x2"
              src={image_secondary}
            />
          </div>
          <div className="o-Grid--Item 1/3-TabletPortraitUp-WithGutter">
            <h5>Details</h5>
            {details}
            {ext_url && (
              <a className="c-Btn" href={ext_url} target="_blank">Visit</a>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioItem;
