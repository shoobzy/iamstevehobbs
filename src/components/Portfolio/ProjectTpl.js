import React from "react";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

class PortfolioItem extends React.Component {
  componentDidMount() {
    document.body.classList.add("u-DarkMode");
  }

  componentWillUnmount() {
    document.body.classList.remove("u-DarkMode");
  }

  render() {
    const {
      title,
      category,
      image_primary,
      overview,
      image_secondary,
      ext_url
    } = this.props

  return (
      <div className="c-Page fadeInUp c-Project">
        <ScrollToTopOnMount />
        <div class="c-Project--Header">
          <h1 className="c-Project--Title fadeInUp">
            {title}
          </h1>
          <p className="c-Intro--Overview o-Grid--Item 1/2-TabletPortraitUp-WithGutter fadeInUp">
            {category}
          </p>
          <img
            className="c-Project--ItemImg h-ResponsiveImg"
            src={image_primary}
          />
        </div>
        <div className="o-Grid c-Project--Copy 2/3-TabletPortraitUp">
          <h5>Overview</h5>
          <p className="c-Intro--Overview">
            {overview}
          </p>
          {ext_url && (
            <p><a className="c-Btn" href={ext_url} target="_blank">Visit</a></p>
          )}
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
