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
      <div className="c-Page fadeInUp c-Project">
        <ScrollToTopOnMount />
        <h1 className="fadeInUp">
          {title}
        </h1>
        <img
          className="c-Project--ItemImg h-ResponsiveImg"
          src={image_primary}
        />
        <div className="o-Grid c-Project--Copy 2/3-TabletPortraitUp">
          <div className="o-Grid--Item 2/3-TabletPortraitUp-WithGutter">
            <h5>Overview</h5>
            <p className="c-Intro--Overview">
              {overview}
            </p>
          </div>
          <div className="o-Grid--Item 1/3-TabletPortraitUp-WithGutter">
            <h5>Details</h5>
            {details}
            {ext_url && (
              <a className="c-Btn" href={ext_url} target="_blank">Visit</a>
            )}
          </div>
        </div>
        {image_secondary && (
          <img
            className="c-Project--ItemImg h-ResponsiveImg"
            src={image_secondary}
          />
        )}
      </div>
    )
  }
}

export default PortfolioItem;
